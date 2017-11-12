
# Node React Fullstack
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This is a sample project that send surveys via email.
This project has been developed using [React](https://reactjs.org/docs/hello-world.html) and
[Redux](https://redux.js.org/docs/introduction/) to manage the app state, and express and mongoDB in the server side.


## How to run this template

```bash
$ npm install
```

### a) Run app in development mode:

#### Init server with NPM:

```bash
$ cd server
$ npm start
```

Open `http://localhost:5000` in your browser (preferrably latest Chrome version)

### b) Run app on a real enviroment:

`
Go to  https://yourHerokuAppName.herokuapp.com/
`

## Code Styleguide
* I am use [Standard JS](https://standardjs.com/) so all developer's code is formatted the same way. Please check [here](https://standardjs.com/#are-there-text-editor-plugins) how to enable it for your IDE

### How to deploy to environments

* Dev: At every commit.
* Preproduction: `git push heroku origin`
