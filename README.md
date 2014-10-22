### GeddyJS Based API

Starting with a default `geddy gen app geddy-api` command, I will update project
with documentation, releases and code to solve common problems.

### Goals

* Provide a skeleton to build APIs with Geddy.
* Solve common problems like: pagination, CRUD, json responses, sockets.
* Well documentation
* Keep project up to date with Geddy releases

#### Done

* API skeleton
* Unit Test with Mocha.js

#### Setup development Environment

* Install Nodejs
* Install MongoDB
* Install geddy globally `[sudo] npm install geddy -g`
* Clone the repository
* Install dependencies `npm install`
* Run development server `geddy`

#### Contributors

* @lesterzone

#### Run Tests

* Run Unit tests for model(s)

```
~$ geddy jake tests:unit # all models and controllers unit tests
~$ geddy jake tests:models[user] # unit test for User model
~$ geddy jake tests:integration # all controllers integration tests
```

#### Format Style

* Most of the style guide comes from
[this](http://sideeffect.kr/popularconvention#javascript)

#### Structure

Will be updated on each release.

```
.
├── [4.0K]  app
│   ├── [4.0K]  controllers
│   │   ├── [6.7K]  application.js
│   │   ├── [ 299]  main.js
│   │   └── [ 584]  users.js
│   ├── [4.0K]  models
│   │   └── [ 263]  user.js
│   └── [4.0K]  views
│       ├── [4.0K]  errors
│       │   ├── [ 184]  default.html.ejs
│       │   └── [ 109]  not_found.html.ejs
│       └── [4.0K]  layouts
│           ├── [ 936]  application.html.ejs
│           ├── [ 148]  errors.html.ejs
│           ├── [   9]  layout_footer.html.ejs
│           └── [ 868]  layout_header.html.ejs
├── [4.0K]  config
│   ├── [2.0K]  development.js
│   ├── [ 276]  environment.js
│   ├── [ 603]  init.js
│   ├── [1.3K]  production.example.js
│   └── [ 223]  router.js
├── [4.0K]  db
│   └── [4.0K]  migrations
│       └── [ 644]  20141017215438_create_users.js
├── [2.6K]  Jakefile
├── [ 341]  package.json
├── [1.7K]  README.md
└── [4.0K]  test
    ├── [2.1K]  config.js
    ├── [4.0K]  integration
    │   └── [4.0K]  controllers
    └── [4.0K]  unit
        ├── [4.0K]  controllers
        └── [4.0K]  models
            └── [ 589]  user.js

15 directories, 21 files
```
