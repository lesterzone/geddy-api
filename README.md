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
├── app
│   ├── controllers
│   │   ├── application.js
│   │   └── main.js
│   ├── helpers
│   ├── models
│   └── views
│       ├── errors
│       │   ├── default.html.ejs
│       │   └── not_found.html.ejs
│       ├── layouts
│       │   ├── application.html.ejs
│       │   ├── errors.html.ejs
│       │   ├── layout_footer.html.ejs
│       │   └── layout_header.html.ejs
│       └── main
│           └── index.html.ejs
├── config
│   ├── development.js
│   ├── environment.js
│   ├── init.js
│   ├── production.js
│   ├── router.js
│   └── secrets.json
├── Jakefile
├── lib
├── log
├── node_modules
├── package.json
├── public
│   ├── css
│   │   ├── bootstrap.css
│   │   ├── bootstrap.min.css
│   │   ├── bootstrap.responsive.css
│   │   ├── bootstrap.responsive.min.css
│   │   └── style.css
│   ├── favicon.ico
│   ├── img
│   │   ├── glyphicons-halflings.png
│   │   ├── glyphicons-halflings-white.png
│   │   └── whitey.png
│   └── js
│       ├── bootstrap.js
│       ├── bootstrap.min.js
│       ├── config
│       │   └── init.js
│       ├── core
│       │   └── core.js
│       └── jquery.min.js
├── README.md
└── test
    ├── controllers
    └── models

21 directories, 32 files

```