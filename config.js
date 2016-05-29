System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "superhero-turnip/": "src/",
    "icon/": "src/components/icon/",
    "select/": "src/components/selectBox/"
  },

  packages: {
    "superhero-turnip": {
      "main": "index.js"
    },
    "icon": {
      "main": "icon.component.js"
    },
    "select": {
      "main": "selectBox.component.js"
    }
  },

  map: {
    "angular": "github:angular/bower-angular@1.5.5",
    "angular-mocks": "github:angular/bower-angular-mocks@1.5.5",
    "angular-ui-router": "github:angular-ui/angular-ui-router-bower@0.2.18",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@1.2.6",
    "css": "github:systemjs/plugin-css@0.1.21",
    "jasmine-expect": "npm:jasmine-expect@2.0.2",
    "text": "github:systemjs/plugin-text@0.0.8",
    "github:angular/bower-angular-mocks@1.5.5": {
      "angular": "github:angular/bower-angular@1.5.5"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jasmine-expect@2.0.2": {
      "jasmine-matchers-loader": "npm:jasmine-matchers-loader@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
