Setup:
1. Gemfile.lock
2. Create DB

Goals model:
1. true and false are symbols and need to be just true and false 

User model:
1. is_password? needs BCrypt::Password.new(self.password_digest).is_password?(password)
2. password= needs BCrypt::Password.create(password)
3. validates password, allow_nil not nill
4. after_initialize => ensure_session_token
5. need attr_reader for password
6. find_by_creds => needs to return user not self

Users controller
1. create => save, not save!
2. user_params => :user, not :users
3. need to sign in user upon success
4. IN APP CONTROLLER, in require sign in, new_session_url

Goals controller
1. create => @goal.owner_id = params[:user_id]
2. create => needs redirect in else clause

Sessions controller
1. in routes.db => resources needs to be resource
2. create => in User.find_by_creds, the args are swapped
3. app controller => add if signed_in? to reset session token

Views
1. need returning erb tags

Auth views spec
1. needs helper methods in app controller for signed_in? and current_user
2. in application.html, flash [:errors] needs to be flash[:errors]
3. users/new => Sign Up
4. users/new => no space in the action
5. application.hmtl => Sign Out button
6. sessions/new => extra percent sign in action
7. sessions/new => name ="user[username]"
8. sessions/new => name ="user[password]"

Goals views spec
1. add a new goal => spaces in action
2. delete goal => change method to post
3. delete goal => put quotes around action
4. delete goal => goal_url(goal)