### GeddyJS Based API

Starting with a default `geddy gen app geddy-api` command, I will update project
with documentation, releases and code to solve common problems.

### Goals

* Provide a skeleton to build APIs with Geddy.
* Solve common problems like: pagination, CRUD, json responses, sockets.
* Well documetation
* Keep project up to date with Geddy releases

#### Contributors

* @lesterzone


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
├── [ 153]  Jakefile
├── [ 235]  package.json
└── [1.6K]  README.md

9 directories, 19 files

```
