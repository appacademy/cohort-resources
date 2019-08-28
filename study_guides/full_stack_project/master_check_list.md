# Here's a Rails/React/Redux setup checklist. It should only serve as a reminder. Ask a TA if you don't understand why you're configuring something on this list.

1. rails new

* Add --database=postgresql if using Postgres.
* Add --skip-turbolinks to skip the turbolinks gem.
2. Update your Gemfile.

* better_errors
* binding_of_caller
* pry-rails
* annotate
* bcrypt
* jquery-rails (When using rails 5.1+)
3. bundle install

4. When using Rails 5.1+, update your application.js manifest to include:

* //= require jquery
* //= require jquery_ujs

5. git init

* Update your .gitignore.
* node_modules/
* bundle.js
* bundle.js.map
6. git remote add the proper remote.

* git push -u the remote.

7. npm init --yes to create a package.json file with the default setup.

8. Create a frontend folder at the root of your project with an entry file inside of it.

9. npm install --save

* webpack
* webpack-cli
* react
* react-dom
* react-router-dom
* redux
* react-redux
* @babel/core
* @babel/preset-react
* @babel/preset-env
* babel-loader

10. Create a webpack.config.js file.

```javascript
module.exports = {
    context: __dirname,
    entry: './frontend/half_time.jsx', //half_time is just an example
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '*']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            }
        ]
    },
    devtool: 'source-map'
};
```

* The entry point should be in frontend, e.g. entry: 'frontend/index.jsx'.
* The output path should be 'app/assets/javascripts'.
* Configure your module.rules to use Babel transpilation for:
* JSX

* ES6
* Include devtool: 'source-map'.
11. git commit again (Verify that your .gitignore works).

git push your skeleton.