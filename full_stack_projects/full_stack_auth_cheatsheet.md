# Full Stack Authentication Cheat Sheet
- As you go along make sure you take the time to understand each piece of the Auth puzzle` 
    - Try explaining each step of the process to someone else

## Backend Configuration

1. Update Gemfile to include BCrypt
    - Add `gem "bcrypt"`
    - Run `bundle install`
2. Add cookie middleware configurations to application.rb
    ```rb
        config.middleware.use ActionDispatch::Cookies
        config.middleware.use ActionDispatch::Session::CookieStore,
        key: '_[appname]_session',
        same_site: :lax, 
        secure: Rails.env.production?
    ```
3. Update environment.rb to format keys from backend to frontend (camelize)
    ```rb 
        Jbuilder.key_format camelize: :lower
        Jbuilder.deep_format_keys true
    ```
4. ApplicationController
    - Add the following methods, before_actions, forgery protections and key case configs
        ```rb
            include ActionController::RequestForgeryProtection

            protect_from_forgery with: :exception
            before_action :snake_case_params
            before_action :attach_authenticity_token

            private
            def snake_case_params
                params.deep_transform_keys!(&:underscore)
            end

            def attach_authenticity_token
                headers['X-CSRF-Token'] = masked_authenticity_token(session)
                # headers['X-CSRF-Token'] = form_authenticity_token
            end
        ```

## Backend Auth

1. Create/Update users table with `password_digest` and `session_token` columns
    - To create users table run `rails g migration CreateUsers` and add columns
        ```rb
            class CreateUsers < ActiveRecord::Migration[7.0]
                def change
                    create_table :users do |t|
                    t.string :username, null: false, index: { unique: true }
                    t.string :password_digest, null: false
                    t.string :session_token, null: false, index: { unique: true }  
                    # add any additional columns you plan to use
                    t.timestamps
                    end
                end
            end
        ```
    - To update run `rails g migration changeUsers` and add columns
        ```rb
            class ChangeUsers < ActiveRecord::Migration[7.0]
                def change
                    add_column :users, :password_digest, :string, null: false
                    add_column :users, :session_token, :string, null: false

                    add_index :users, :session_token, unique: true
                end
            end
        ```
    - Run `rails db:migrate`
        - NOTE: if you have existing entries in your database it may be necessary
        to reset your database. You may also need to update your seeds with any 
        new attributes as a result of the additional columns.

2. Update `user.rb` with SPIRE and validations
    - Add has_secure_password - this handles the `password=` and gives us `authenticate` which is the equivalent of `is_password?`
        ```rb
            has_secure_password
        ```
    - Add `generate_uique_session_token`, `reset_session_token!`, and `ensure_session_token` 
        ```rb
            def ensure_session_token
                self.session_token ||= generate_unique_session_token
            end

            def reset_session_token!
                self.session_token = generate_unique_session_token
                save!
                session_token
            end

            private

            def generate_unique_session_token
                while true
                    token = SecureRandom.urlsafe_base64
                    return token unless User.exists?(session_token: token)
                end
            end
        ```
    - Add before_validation to ensure a user has a session token
        ```rb
            before_validation :ensure_session_token
        ```
    - Add password length validations
        ```rb
            validates :password, length: { minimum: 6 }, allow_nil: true
        ```
    - Add `Self.find_by_credentials`
        ```rb
            def self.find_by_credentials(username, password)
                user = User.find_by(username: username)
                # has_secure_password gives us the authenticate method
                if user&.authenticate(password) 
                    return user
                else
                    nil 
                end
            end
        ```

3. Update `ApplicationController` with CRRLLL
    - Add `current_user`, `require_logged_in`, `require_logged_out`, `logged_in?`, `login(user)`, and `logout`
        ```rb
            def current_user 
                @current_user ||= User.find_by(session_token: session[:session_token])
            end

            def require_logged_in
                if !logged_in?
                    render json: { errors: ['Must be logged in'] }, status: :unauthorized
                end
            end

            def require_logged_out
                if logged_in?
                    render json: { errors: ['Must be logged out'] }, status: 403
                end
            end

            def logged_in?
                !!current_user
            end

            def login(user)
                session[:session_token] = user.reset_session_token!
            end

            def logout
                current_user.reset_session_token!
                session[:session_token] = nil
                @current_user = nil
            end
        ```

4. Update `routes.rb` with resources for users and resource for session
    ```rb
        namespace :api, defaults: {format: :json} do
            # ...
            resources :users, only: [:create]
            resource :session, only: [:create, :show, :destroy]
        end
    ```

5. Create `UsersController`
    - Run `rails g controller api/users`
    - Add `user_params`
        ```rb
            private

            def user_params
                params.require(:user).permit(:username, :password)
            end
        ```
    - Wrap params to have rails ensure parameters arrive nested
        ```rb
            wrap_parameters include: User.attribute_names + ['password']
        ```
    - Add `create` action and require a user to be logged out to invoke
        ```rb
            before_action :require_logged_out, only: [:create]
            
            def create
                @user = User.new(user_params)

                if @user.save
                    login(@user)
                    render :show
                else
                    render json: @user.errors.full_messages, status: 422
                end
            end
        ```
    - Create a user's `show.json.jbuilder` in `views/api/users`
        ```rb
            json.user do
                json.extract! @user, :id, :username, :created_at
            end
        ```

6. Create `SessionsController`
    - Run `rails g controller sessions`
    - Add `show`, `create` and `destroy` actions
        ```rb
            def show
                @user = current_user
                if @user
                    debugger
                    render 'api/users/show'
                else
                    render json: { user: nil }
                end
            end

            def create
                username = params[:username]
                password = params[:password]
                @user = User.find_by_credentials(username, password)
                if @user
                    login(@user)
                    render 'api/users/show'
                else
                    render json: { errors: ['Invalid credentials'] }, status: 422
                end
            end

            def destroy
                logout
                head :no_content # populate http response with no content => no body
            end
        ```
    - Add before actions
        ```rb
            before_action :require_logged_in, only: [:create]
            before_action :require_logged_in, only: [:destroy]
        ```

7. Test to verify backend User Authorization
- use `fetch` in the browser console to hit api routes
- use `rails console` to verify/test for user creation

## Frontend Auth

1. Create `csrf.js` in `frontend/src/store`
    - Add `restoreSession` method
        ```js
            export const restoreSession = async () => {
                let res = await fetch('/api/session');
                let token = res.headers.get('X-CSRF-Token');
                sessionStorage.setItem('X-CSRF-Token', token);
                let data = await res.json();
                sessionStorage.setItem('currentUser', JSON.stringify(data.user));
            }
        ```
2. Update entry `index.js` to initialize the app after restoring the session
    - Wrap `ReactDOM.render()` in an `initializeApp()` method
        ```js
            const initializeApp = () => {
                ReactDOM.render(
                    <React.StrictMode>
                    <Provider store={store}>
                        <App />
                    </Provider>
                    </React.StrictMode>,
                    document.getElementById('root')
                );
            }
        ```
    - Restore the session and then initialize the app
        ```js
            import { restoreSession } from './store/csrf';

            restoreSession().then(initializeApp)
        ```
3. Create a dynamic fetch that adds our CSRF token to our api request headers
    - Add the following to the `csrf.js` file
        ```js 
            export const csrfFetch = async (url, options = {}) => {
                options.method ||= 'GET';
                options.headers ||= {};

                // will need to modify this when using formData to attach resources like photos
                    // can't have a Content-Type header
                if (options.method.toUpperCase() !== 'GET') {
                    options.headers['Content-Type'] = 'application/json';
                    options.headers['X-CSRF-Token'] = sessionStorage.getItem('X-CSRF-Token');
                }

                const res = await fetch(url, options);
                return res
            }
        ```
4. Update any APIUtils that `fetch` to a route that requires that the `authenticity_token` be verified
    - Example:
        ```js
            export const postTea = (tea) => {
            return csrfFetch('api/teas', {
                method: 'POST',
                body: JSON.stringify(tea),
                // remove any set headers as the csrfFetch will add them
            })
        ```
5. Incorporate user data in Redux Store (usersReducer)
    - Create a `usersReducer.js` in the `store` folder
    - Set up `usersReducer` and add `actions types` and `action creators`
        ```js
            // ACTION TYPES
            const RECEIVE_USER = 'users/RECEIVE_USER';
            const REMOVE_USER = 'users/REMOVE_USER';

            // ACTION CREATORS
            export const receiveUser = user => ({
                type: RECEIVE_USER,
                payload: user
            });

            export const removeUser = userId => ({
                type: REMOVE_USER,
                userId // userId: userId
            });

            // REDUCER
            const userReducer = ( state = {}, action ) => {
                const nextState = { ...state };

                switch(action.type) {
                    case RECEIVE_USER:
                        debugger
                        nextState[action.payload.id] = action.payload;
                        return nextState;
                    case REMOVE_USER:
                        delete nextState[action.userId];
                        return nextState;
                    default:
                        return state;
                }
            };

            export default userReducer
        ```
    - Update `rootReducer` in the `/store/index.js`
        ```js
            const rootReducer = combineReducers({
                teas: teaReducer,
                transactions: transactionReducer,
                user: userReducer
            });
        ```
    - Update `initialState` in entry `index.js` with `currentUser` from `sessionStorage`
        ```js
            let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
            let initialState = {};

            if (currentUser) {
                initialState = {
                    users: {
                    [currentUser.id]: currentUser
                    }
                };
            };
        ```
    - Add `thunk action creators` for signup, login and logout to `usersReducer.js`
        ```js
            // THUNK ACTION CREATORS
            export const loginUser = user => async dispatch => {
                let res = await csrfFetch('/api/session', {
                    method: 'POST',
                    body: JSON.stringify(user)
                });
                let data = await res.json();
                sessionStorage.setItem('currentUser', JSON.stringify(data.user));
                debugger
                dispatch(receiveUser(data.user))
            };

            export const logoutUser = userId => async dispatch => {
                let res = await csrfFetch('/api/session', {
                    method: 'DELETE'
                });
                sessionStorage.setItem('currentUser', null)
                dispatch(removeUser(userId));
            }

            export const createUser = user => async dispatch => {
                let res = await csrfFetch('/api/users', {
                    method: 'POST',
                    body: JSON.stringify(user)
                });
                let data = await res.json();
                sessionStorage.setItem('currentUser', JSON.stringify(data.user));
                dispatch(receiveUser(data.user));
            }
        ```
6. Add `createUser`, `loginUser` and `logoutUser` to the window in the entry `index.js`
    ```js
        import { createUser, loginUser, logoutUser } from './store/userReducer'; 

        window.createUser = createUser
        window.loginUser = loginUser
        window.logoutUser = logoutUser
    ```
7. TEST TEST and TEST again!
