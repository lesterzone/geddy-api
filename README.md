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
│   │   ├── [1.3K]  application.js
│   │   └── [ 299]  main.js
│   ├── [4.0K]  models
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
│   ├── [1.6K]  development.js
│   ├── [ 276]  environment.js
│   ├── [ 603]  init.js
│   ├── [1.3K]  production.example.js
│   └── [ 197]  router.js
├── [ 153]  Jakefile
├── [ 152]  package.json
├── [3.3K]  README.md
└── [4.0K]  test
    ├── [4.0K]  controllers
    └── [4.0K]  models

10 directories, 16 files
```
