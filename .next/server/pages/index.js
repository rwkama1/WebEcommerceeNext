module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./model/api/home/home.js":
/*!********************************!*\
  !*** ./model/api/home/home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return APIHome; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class APIHome {
  constructor() {
    _defineProperty(this, "url", "https://api-next-ecommercee.vercel.app/api/");

    _defineProperty(this, "getArticles", async () => {
      const url2 = this.url + "article/getarticles";
      var config = {
        method: 'get',
        url: url2,
        headers: {}
      };
      const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()(config);
      const result = await response.data;
      return result;
    });

    _defineProperty(this, "getCategories", async () => {
      const url2 = this.url + "category/getcategories";
      var config = {
        method: 'get',
        url: url2,
        headers: {}
      };
      const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()(config);
      const result = await response.data;
      return result;
    });

    _defineProperty(this, "getArticlesExpression", async (lettername) => {
      const url2 = this.url + "getarticlesbyname?pname=" + lettername;
      var config = {
        method: 'get',
        url: url2,
        headers: {}
      };
      const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()(config);
      const result = await response.data;
      return result;
    });

    _defineProperty(this, "getArticle", async (barcode) => {
      try {
        const url2 = this.url + "article?pbarcode=" + barcode;
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        const response = await fetch(url2, requestOptions);
        const result = await response.json();
        return result;
      } catch (e) {
        console.log(e.message);
      }
    });

    _defineProperty(this, "filterArticlebyCategory", async (name) => {
      const url2 = this.url + "article/filterarticlesbycategory?pname=" + name;
      var config = {
        method: 'get',
        url: url2,
        headers: {}
      };
      const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()(config);
      const result = await response.data;
      return result;
    });

    _defineProperty(this, "orderArticlebyPrice", async () => {
      const url2 = this.url + "article/orderarticlesbyprice";
      var config = {
        method: 'get',
        url: url2,
        headers: {}
      };
      const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()(config);
      const result = await response.data;
      return result;
    });

    _defineProperty(this, "orderArticlebyCategory", async () => {
      const url2 = this.url + "article/orderarticlesbycategory";
      var config = {
        method: 'get',
        url: url2,
        headers: {}
      };
      const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()(config);
      const result = await response.data;
      return result;
    });
  }

  static getInstance() {
    if (!APIHome.instancia) {
      APIHome.instancia = new APIHome();
    }

    return APIHome.instancia;
  }

}

_defineProperty(APIHome, "instancia", void 0);

/***/ }),

/***/ "./pages/home/home.js":
/*!****************************!*\
  !*** ./pages/home/home.js ***!
  \****************************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _model_api_home_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/api/home/home */ "./model/api/home/home.js");


var _jsxFileName = "D:\\TODO (Desarrollo Software)\\Tutoriales y demas cosas\\WebNextEcommercee\\pages\\home\\home.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Home extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "FilterArticlesbyCategory", e => {
      const valueselect = String(e.target.value);

      if (valueselect != "All") {
        _model_api_home_home__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().filterArticlebyCategory(valueselect).then(getarticles => {
          this.setState({
            listarticles: getarticles
          });
        });
      } else {
        this.listArticles();
      }
    });

    _defineProperty(this, "Navbar", () => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: "header-main border-bottom",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "container",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row align-items-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-lg-2 col-4",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: "brand-wrap",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    className: "logo",
                    src: "images/logo.jpg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 64,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 17
                }, this), " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-lg-6 col-sm-12",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
                  action: "#",
                  className: "search",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "input-group w-100",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      type: "text",
                      className: "form-control",
                      placeholder: "Search Article by Name"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 70,
                      columnNumber: 21
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 69,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 17
                }, this), " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 15
              }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-lg-4 col-sm-6 col-12",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "widgets-wrap float-md-right",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "widget-header  mr-3",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#",
                      className: "icon icon-sm rounded-circle border",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                        className: "fa fa-shopping-cart"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 78,
                        columnNumber: 80
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 78,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "badge badge-pill badge-danger notify",
                      children: "0"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 79,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "widget-header icontext",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#",
                      className: "icon icon-sm rounded-circle border",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                        className: "fa fa-user"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 82,
                        columnNumber: 80
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 82,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "text",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "text-muted",
                        children: "Welcome!"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 84,
                        columnNumber: 23
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          href: "#",
                          children: "Sign in"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 86,
                          columnNumber: 25
                        }, this), " |", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          href: "#",
                          children: " Register"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 87,
                          columnNumber: 25
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 85,
                        columnNumber: 23
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 83,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 17
                }, this), " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 15
              }, this), " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 13
            }, this), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 11
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 9
        }, this), " "]
      }, void 0, true);
    });

    _defineProperty(this, "HeaderCardArticles", () => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 8
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-inline",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
            onChange: this.FilterArticlesbyCategory,
            className: "mr-2 form-control",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "All",
              children: "All Categories"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 11
            }, this), this.state.listcategories.map(c => {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: c._name,
                children: c._name
              }, c._name, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 19
              }, this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "button",
            onClick: this.orderArticlebyPrice,
            className: "btn btn-light",
            children: "Sort items by price"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "button",
            onClick: this.orderArticlebyCategory,
            className: "btn btn-light",
            children: "Sort items by category"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 9
        }, this)]
      }, void 0, true);
    });

    _defineProperty(this, "CardArticles", () => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: this.state.listarticles.map(art => {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-md-4",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("figure", {
                className: "card card-product-grid",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "img-wrap",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: art._img
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 147,
                    columnNumber: 15
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 13
                }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("figcaption", {
                  className: "info-wrap",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "fix-height",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "title",
                      children: art._name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 152,
                      columnNumber: 17
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "price-wrap mt-2",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "price",
                        children: ["USD ", art._price]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 154,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 153,
                      columnNumber: 17
                    }, this), " "]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 151,
                    columnNumber: 15
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#",
                    className: "btn btn-block btn-primary",
                    children: "See Article "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 157,
                    columnNumber: 15
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 13
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 11
              }, this)
            }, art._barcode, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 9
            }, this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 9
        }, this)
      }, void 0, false);
    });

    _defineProperty(this, "listArticles", () => {
      _model_api_home_home__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().getArticles().then(getarticles => {
        this.setState({
          listarticles: getarticles
        });
      });
    });

    _defineProperty(this, "listCategories", () => {
      _model_api_home_home__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().getCategories().then(getcategories => {
        this.setState({
          listcategories: getcategories
        });
      });
    });

    _defineProperty(this, "orderArticlebyPrice", () => {
      _model_api_home_home__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().orderArticlebyPrice().then(getarticles => {
        this.setState({
          listarticles: getarticles
        });
      });
    });

    _defineProperty(this, "orderArticlebyCategory", () => {
      _model_api_home_home__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().orderArticlebyCategory().then(getarticles => {
        this.setState({
          listarticles: getarticles
        });
      });
    });

    this.state = {
      listarticles: [],
      listcategories: []
    };
  }

  componentDidMount() {
    this.listArticles();
    this.listCategories();
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
        className: "section-header",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(this.Navbar, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
        className: "border-bottom mb-4 pb-3",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(this.HeaderCardArticles, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 8
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 8
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(this.CardArticles, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 8
      }, this)]
    }, void 0, true);
  }

}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home */ "./pages/home/home.js");


var _jsxFileName = "D:\\TODO (Desarrollo Software)\\Tutoriales y demas cosas\\WebNextEcommercee\\pages\\index.js";



class Index extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          charset: "utf-8"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1, shrink-to-fit=no"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 1
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Website title - bootstrap html template"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 1
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          href: "icon/commerceicon.ico",
          rel: "shortcut icon",
          type: "image/x-icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 1
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
          src: "js/jquery-2.0.0.min.js",
          type: "text/javascript"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 1
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
          src: "js/bootstrap.bundle.min.js",
          type: "text/javascript"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 1
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          href: "css/bootstrap.css",
          rel: "stylesheet",
          type: "text/css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 1
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          href: "//netdna.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.css",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 1
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
          src: "plugins/fancybox/fancybox.min.js",
          type: "text/javascript"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 1
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          href: "plugins/fancybox/fancybox.min.css",
          type: "text/css",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 1
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          href: "css/ui.css",
          rel: "stylesheet",
          type: "text/css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 1
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          href: "css/responsive.css",
          rel: "stylesheet",
          media: "only screen and (max-width: 1200px)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 1
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
          src: "js/script.js",
          type: "text/javascript"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 1
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
          type: "text/javascript"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 1
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 3
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_home_home__WEBPACK_IMPORTED_MODULE_3__["Home"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 2
      }, this)]
    }, void 0, true);
  }

}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kZWwvYXBpL2hvbWUvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkFQSUhvbWUiLCJjb25zdHJ1Y3RvciIsInVybDIiLCJ1cmwiLCJjb25maWciLCJtZXRob2QiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJheGlvcyIsInJlc3VsdCIsImRhdGEiLCJsZXR0ZXJuYW1lIiwiYmFyY29kZSIsInJlcXVlc3RPcHRpb25zIiwicmVkaXJlY3QiLCJmZXRjaCIsImpzb24iLCJlIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJuYW1lIiwiZ2V0SW5zdGFuY2UiLCJpbnN0YW5jaWEiLCJIb21lIiwiQ29tcG9uZW50IiwidmFsdWVzZWxlY3QiLCJTdHJpbmciLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpbHRlckFydGljbGVieUNhdGVnb3J5IiwidGhlbiIsImdldGFydGljbGVzIiwic2V0U3RhdGUiLCJsaXN0YXJ0aWNsZXMiLCJsaXN0QXJ0aWNsZXMiLCJGaWx0ZXJBcnRpY2xlc2J5Q2F0ZWdvcnkiLCJzdGF0ZSIsImxpc3RjYXRlZ29yaWVzIiwibWFwIiwiYyIsIl9uYW1lIiwib3JkZXJBcnRpY2xlYnlQcmljZSIsIm9yZGVyQXJ0aWNsZWJ5Q2F0ZWdvcnkiLCJhcnQiLCJfaW1nIiwiX3ByaWNlIiwiX2JhcmNvZGUiLCJnZXRBcnRpY2xlcyIsImdldENhdGVnb3JpZXMiLCJnZXRjYXRlZ29yaWVzIiwiY29tcG9uZW50RGlkTW91bnQiLCJsaXN0Q2F0ZWdvcmllcyIsInJlbmRlciIsIkluZGV4Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ2UsTUFBTUEsT0FBTixDQUNmO0FBR0lDLGFBQVcsR0FBRztBQUFBLGlDQURSLDZDQUNROztBQUFBLHlDQVFBLFlBQ1o7QUFDRSxZQUFNQyxJQUFJLEdBQUMsS0FBS0MsR0FBTCxHQUFTLHFCQUFwQjtBQUNFLFVBQUlDLE1BQU0sR0FBRztBQUNYQyxjQUFNLEVBQUUsS0FERztBQUVYRixXQUFHLEVBQUVELElBRk07QUFHWEksZUFBTyxFQUFFO0FBSEUsT0FBYjtBQU1BLFlBQU1DLFFBQVEsR0FBRSxNQUFNQyw0Q0FBSyxDQUFDSixNQUFELENBQTNCO0FBQ0EsWUFBTUssTUFBTSxHQUFDLE1BQU1GLFFBQVEsQ0FBQ0csSUFBNUI7QUFDQSxhQUFPRCxNQUFQO0FBRUgsS0FyQlc7O0FBQUEsMkNBc0JFLFlBQ2Q7QUFDRSxZQUFNUCxJQUFJLEdBQUMsS0FBS0MsR0FBTCxHQUFTLHdCQUFwQjtBQUNFLFVBQUlDLE1BQU0sR0FBRztBQUNYQyxjQUFNLEVBQUUsS0FERztBQUVYRixXQUFHLEVBQUVELElBRk07QUFHWEksZUFBTyxFQUFFO0FBSEUsT0FBYjtBQU1BLFlBQU1DLFFBQVEsR0FBRSxNQUFNQyw0Q0FBSyxDQUFDSixNQUFELENBQTNCO0FBQ0EsWUFBTUssTUFBTSxHQUFDLE1BQU1GLFFBQVEsQ0FBQ0csSUFBNUI7QUFDQSxhQUFPRCxNQUFQO0FBRUgsS0FuQ1c7O0FBQUEsbURBb0NVLE9BQU1FLFVBQU4sS0FDdEI7QUFDRSxZQUFNVCxJQUFJLEdBQUMsS0FBS0MsR0FBTCxHQUFTLDBCQUFULEdBQW9DUSxVQUEvQztBQUNFLFVBQUlQLE1BQU0sR0FBRztBQUNYQyxjQUFNLEVBQUUsS0FERztBQUVYRixXQUFHLEVBQUVELElBRk07QUFHWEksZUFBTyxFQUFFO0FBSEUsT0FBYjtBQU1BLFlBQU1DLFFBQVEsR0FBRSxNQUFNQyw0Q0FBSyxDQUFDSixNQUFELENBQTNCO0FBQ0EsWUFBTUssTUFBTSxHQUFDLE1BQU1GLFFBQVEsQ0FBQ0csSUFBNUI7QUFDQSxhQUFPRCxNQUFQO0FBRUgsS0FqRFc7O0FBQUEsd0NBa0RELE9BQU1HLE9BQU4sS0FDWDtBQUNFLFVBQ0E7QUFDQSxjQUFNVixJQUFJLEdBQUMsS0FBS0MsR0FBTCxHQUFTLG1CQUFULEdBQTZCUyxPQUF4QztBQUNDLFlBQUlDLGNBQWMsR0FBRztBQUNsQlIsZ0JBQU0sRUFBRSxLQURVO0FBRWxCUyxrQkFBUSxFQUFFO0FBRlEsU0FBckI7QUFJQSxjQUFNUCxRQUFRLEdBQUUsTUFBTVEsS0FBSyxDQUFDYixJQUFELEVBQU9XLGNBQVAsQ0FBM0I7QUFDQSxjQUFNSixNQUFNLEdBQUMsTUFBTUYsUUFBUSxDQUFDUyxJQUFULEVBQW5CO0FBQ0EsZUFBT1AsTUFBUDtBQUNBLE9BVkQsQ0FXQyxPQUFNUSxDQUFOLEVBQ0Q7QUFDRUMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLENBQUMsQ0FBQ0csT0FBZDtBQUNEO0FBQ0YsS0FuRVc7O0FBQUEscURBb0VZLE9BQU1DLElBQU4sS0FDeEI7QUFFRSxZQUFNbkIsSUFBSSxHQUFDLEtBQUtDLEdBQUwsR0FBUyx5Q0FBVCxHQUFtRGtCLElBQTlEO0FBQ0EsVUFBSWpCLE1BQU0sR0FBRztBQUNYQyxjQUFNLEVBQUUsS0FERztBQUVYRixXQUFHLEVBQUVELElBRk07QUFHWEksZUFBTyxFQUFFO0FBSEUsT0FBYjtBQUtBLFlBQU1DLFFBQVEsR0FBRSxNQUFNQyw0Q0FBSyxDQUFDSixNQUFELENBQTNCO0FBQ0EsWUFBTUssTUFBTSxHQUFDLE1BQU1GLFFBQVEsQ0FBQ0csSUFBNUI7QUFDQSxhQUFPRCxNQUFQO0FBQ0QsS0FoRlc7O0FBQUEsaURBaUZRLFlBQ3BCO0FBQ0UsWUFBTVAsSUFBSSxHQUFDLEtBQUtDLEdBQUwsR0FBUyw4QkFBcEI7QUFDRSxVQUFJQyxNQUFNLEdBQUc7QUFDWEMsY0FBTSxFQUFFLEtBREc7QUFFWEYsV0FBRyxFQUFFRCxJQUZNO0FBR1hJLGVBQU8sRUFBRTtBQUhFLE9BQWI7QUFNQSxZQUFNQyxRQUFRLEdBQUUsTUFBTUMsNENBQUssQ0FBQ0osTUFBRCxDQUEzQjtBQUNBLFlBQU1LLE1BQU0sR0FBQyxNQUFNRixRQUFRLENBQUNHLElBQTVCO0FBQ0EsYUFBT0QsTUFBUDtBQUVILEtBOUZXOztBQUFBLG9EQStGVyxZQUN2QjtBQUNFLFlBQU1QLElBQUksR0FBQyxLQUFLQyxHQUFMLEdBQVMsaUNBQXBCO0FBQ0UsVUFBSUMsTUFBTSxHQUFHO0FBQ1hDLGNBQU0sRUFBRSxLQURHO0FBRVhGLFdBQUcsRUFBRUQsSUFGTTtBQUdYSSxlQUFPLEVBQUU7QUFIRSxPQUFiO0FBTUEsWUFBTUMsUUFBUSxHQUFFLE1BQU1DLDRDQUFLLENBQUNKLE1BQUQsQ0FBM0I7QUFDQSxZQUFNSyxNQUFNLEdBQUMsTUFBTUYsUUFBUSxDQUFDRyxJQUE1QjtBQUNBLGFBQU9ELE1BQVA7QUFFSCxLQTVHVztBQUFHOztBQUNqQixTQUFPYSxXQUFQLEdBQXFCO0FBQ2QsUUFBSSxDQUFDdEIsT0FBTyxDQUFDdUIsU0FBYixFQUF3QjtBQUN2QnZCLGFBQU8sQ0FBQ3VCLFNBQVIsR0FBb0IsSUFBSXZCLE9BQUosRUFBcEI7QUFDQTs7QUFFRCxXQUFPQSxPQUFPLENBQUN1QixTQUFmO0FBQ0g7O0FBVlI7O2dCQURxQnZCLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEckI7QUFDQTtBQUdPLE1BQU13QixJQUFOLFNBQW1CQywrQ0FBbkIsQ0FDUDtBQUNFeEIsYUFBVyxHQUFHO0FBQ1o7O0FBRFksc0RBMkJZZ0IsQ0FBRCxJQUN6QjtBQUNBLFlBQU1TLFdBQVcsR0FBQ0MsTUFBTSxDQUFDVixDQUFDLENBQUNXLE1BQUYsQ0FBU0MsS0FBVixDQUF4Qjs7QUFDRSxVQUFHSCxXQUFXLElBQUUsS0FBaEIsRUFDQTtBQUNBMUIsb0VBQU8sQ0FBQ3NCLFdBQVIsR0FBc0JRLHVCQUF0QixDQUE4Q0osV0FBOUMsRUFBMkRLLElBQTNELENBQWdFQyxXQUFXLElBQ3pFO0FBQUUsZUFBS0MsUUFBTCxDQUNBO0FBQ0NDLHdCQUFZLEVBQUNGO0FBRGQsV0FEQTtBQUtHLFNBTlA7QUFRQyxPQVZELE1BV0k7QUFDRixhQUFLRyxZQUFMO0FBQ0Q7QUFFRixLQTdDYTs7QUFBQSxvQ0E4Q1AsTUFDUDtBQUNELDBCQUNBO0FBQUEsZ0NBR087QUFBUyxtQkFBUyxFQUFDLDJCQUFuQjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyxXQUFmO0FBQUEsb0NBQ0U7QUFBSyx1QkFBUyxFQUFDLHdCQUFmO0FBQUEsc0NBQ0U7QUFBSyx5QkFBUyxFQUFDLGdCQUFmO0FBQUEsd0NBQ0U7QUFBRywyQkFBUyxFQUFDLFlBQWI7QUFBQSx5Q0FDRTtBQUFLLDZCQUFTLEVBQUMsTUFBZjtBQUFzQix1QkFBRyxFQUFDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQU1FO0FBQUsseUJBQVMsRUFBQyxvQkFBZjtBQUFBLHdDQUNFO0FBQU0sd0JBQU0sRUFBQyxHQUFiO0FBQWlCLDJCQUFTLEVBQUMsUUFBM0I7QUFBQSx5Q0FDRTtBQUFLLDZCQUFTLEVBQUMsbUJBQWY7QUFBQSwyQ0FDRTtBQUFPLDBCQUFJLEVBQUMsTUFBWjtBQUFtQiwrQkFBUyxFQUFDLGNBQTdCO0FBQTRDLGlDQUFXLEVBQUM7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFORixvQkFjRTtBQUFLLHlCQUFTLEVBQUMsMEJBQWY7QUFBQSx3Q0FDRTtBQUFLLDJCQUFTLEVBQUMsNkJBQWY7QUFBQSwwQ0FDRTtBQUFLLDZCQUFTLEVBQUMscUJBQWY7QUFBQSw0Q0FDRTtBQUFHLDBCQUFJLEVBQUMsR0FBUjtBQUFZLCtCQUFTLEVBQUMsb0NBQXRCO0FBQUEsNkNBQTJEO0FBQUcsaUNBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixlQUVFO0FBQU0sK0JBQVMsRUFBQyxzQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLGVBS0U7QUFBSyw2QkFBUyxFQUFDLHdCQUFmO0FBQUEsNENBQ0U7QUFBRywwQkFBSSxFQUFDLEdBQVI7QUFBWSwrQkFBUyxFQUFDLG9DQUF0QjtBQUFBLDZDQUEyRDtBQUFHLGlDQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsZUFFRTtBQUFLLCtCQUFTLEVBQUMsTUFBZjtBQUFBLDhDQUNFO0FBQU0saUNBQVMsRUFBQyxZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFERixlQUVFO0FBQUEsZ0RBQ0U7QUFBRyw4QkFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBREYscUJBRUU7QUFBRyw4QkFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIUDtBQUFBLHNCQURBO0FBNENFLEtBNUZhOztBQUFBLGdEQTZGSyxNQUNuQjtBQUNFLDBCQUNFO0FBQUEsZ0NBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQUVFO0FBQUssbUJBQVMsRUFBQyxhQUFmO0FBQUEsa0NBRUE7QUFDRCxvQkFBUSxFQUFFLEtBQUtDLHdCQURkO0FBRUEscUJBQVMsRUFBQyxtQkFGVjtBQUFBLG9DQUtFO0FBQVEsbUJBQUssRUFBQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxGLEVBT0ksS0FBS0MsS0FBTCxDQUFXQyxjQUFYLENBQTBCQyxHQUExQixDQUNFQyxDQUFDLElBQ0Q7QUFDRSxrQ0FDRTtBQUFzQixxQkFBSyxFQUFFQSxDQUFDLENBQUNDLEtBQS9CO0FBQUEsMEJBQXVDRCxDQUFDLENBQUNDO0FBQXpDLGlCQUFhRCxDQUFDLENBQUNDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERjtBQUlELGFBUEgsQ0FQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkEsZUFxQkE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFyQkEsZUFzQkE7QUFBUSxnQkFBSSxFQUFDLFFBQWI7QUFBc0IsbUJBQU8sRUFBRSxLQUFLQyxtQkFBcEM7QUFBeUQscUJBQVMsRUFBQyxlQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF0QkEsZUF1QkE7QUFBUSxnQkFBSSxFQUFDLFFBQWI7QUFBc0IsbUJBQU8sRUFBRSxLQUFLQyxzQkFBcEM7QUFBNEQscUJBQVMsRUFBQyxlQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF2QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUEsc0JBREY7QUE4QkQsS0E3SGE7O0FBQUEsMENBOEhELE1BQ2I7QUFFRSwwQkFDRTtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQUEsb0JBRUYsS0FBS04sS0FBTCxDQUFXSCxZQUFYLENBQXdCSyxHQUF4QixDQUNFSyxHQUFHLElBQ0g7QUFDRSxnQ0FDRjtBQUFLLHVCQUFTLEVBQUMsVUFBZjtBQUFBLHFDQUNFO0FBQVEseUJBQVMsRUFBQyx3QkFBbEI7QUFBQSx3Q0FDRTtBQUFLLDJCQUFTLEVBQUMsVUFBZjtBQUFBLHlDQUNFO0FBQUssdUJBQUcsRUFBRUEsR0FBRyxDQUFDQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLG9CQUtFO0FBQVksMkJBQVMsRUFBQyxXQUF0QjtBQUFBLDBDQUNFO0FBQUssNkJBQVMsRUFBQyxZQUFmO0FBQUEsNENBQ0U7QUFBRywrQkFBUyxFQUFDLE9BQWI7QUFBQSxnQ0FBc0JELEdBQUcsQ0FBQ0g7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixlQUVFO0FBQUssK0JBQVMsRUFBQyxpQkFBZjtBQUFBLDZDQUNFO0FBQU0saUNBQVMsRUFBQyxPQUFoQjtBQUFBLDJDQUE2QkcsR0FBRyxDQUFDRSxNQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixlQU9FO0FBQUcsd0JBQUksRUFBQyxHQUFSO0FBQVksNkJBQVMsRUFBQywyQkFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGVBQStCRixHQUFHLENBQUNHLFFBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREU7QUFtQkEsV0F0Qko7QUFGRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsdUJBREY7QUFpQ0QsS0FsS2E7O0FBQUEsMENBbUtELE1BQ2I7QUFDQy9DLGtFQUFPLENBQUNzQixXQUFSLEdBQXNCMEIsV0FBdEIsR0FBb0NqQixJQUFwQyxDQUF5Q0MsV0FBVyxJQUNsRDtBQUFFLGFBQUtDLFFBQUwsQ0FDQTtBQUNDQyxzQkFBWSxFQUFDRjtBQURkLFNBREE7QUFLRyxPQU5QO0FBUUEsS0E3S2E7O0FBQUEsNENBOEtDLE1BQ2Y7QUFDRWhDLGtFQUFPLENBQUNzQixXQUFSLEdBQXNCMkIsYUFBdEIsR0FBc0NsQixJQUF0QyxDQUEyQ21CLGFBQWEsSUFDdkQ7QUFBRSxhQUFLakIsUUFBTCxDQUNBO0FBQ0NLLHdCQUFjLEVBQUNZO0FBRGhCLFNBREE7QUFJRyxPQUxOO0FBT0QsS0F2TGE7O0FBQUEsaURBd0xNLE1BQ3BCO0FBQ0VsRCxrRUFBTyxDQUFDc0IsV0FBUixHQUFzQm9CLG1CQUF0QixHQUE0Q1gsSUFBNUMsQ0FBaURDLFdBQVcsSUFDM0Q7QUFBRSxhQUFLQyxRQUFMLENBQ0E7QUFDQ0Msc0JBQVksRUFBQ0Y7QUFEZCxTQURBO0FBSUcsT0FMTjtBQU9ELEtBak1hOztBQUFBLG9EQWtNUyxNQUN2QjtBQUNFaEMsa0VBQU8sQ0FBQ3NCLFdBQVIsR0FBc0JxQixzQkFBdEIsR0FBK0NaLElBQS9DLENBQW9EQyxXQUFXLElBQzlEO0FBQUUsYUFBS0MsUUFBTCxDQUNBO0FBQ0NDLHNCQUFZLEVBQUNGO0FBRGQsU0FEQTtBQUlHLE9BTE47QUFPRCxLQTNNYTs7QUFFWixTQUFLSyxLQUFMLEdBQWE7QUFDWEgsa0JBQVksRUFBQyxFQURGO0FBRVhJLG9CQUFjLEVBQUM7QUFGSixLQUFiO0FBSUU7O0FBQ0hhLG1CQUFpQixHQUNoQjtBQUNDLFNBQUtoQixZQUFMO0FBQ0EsU0FBS2lCLGNBQUw7QUFDQTs7QUFDSEMsUUFBTSxHQUNOO0FBQ0Usd0JBQ0U7QUFBQSw4QkFDQTtBQUFRLGlCQUFTLEVBQUMsZ0JBQWxCO0FBQUEsK0JBQ0EsMEVBQU0sTUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBSUM7QUFBUSxpQkFBUyxFQUFDLHlCQUFsQjtBQUFBLCtCQUNBLDBFQUFNLGtCQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkQsZUFPQywwRUFBTSxZQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRDtBQUFBLG9CQURGO0FBWUQ7O0FBM0JILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBRUE7QUFDQTtBQUVlLE1BQU1DLEtBQU4sU0FBb0I3QiwrQ0FBcEIsQ0FDZjtBQUNFNEIsUUFBTSxHQUNOO0FBQ0Usd0JBQ0U7QUFBQSw4QkFDSixxRUFBQyxnREFBRDtBQUFBLGdDQUNBO0FBQU0saUJBQU8sRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsZUFHRjtBQUFNLGNBQUksRUFBQyxVQUFYO0FBQXNCLGlCQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRSxlQUtGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxFLGVBT0Y7QUFBTSxjQUFJLEVBQUMsdUJBQVg7QUFBbUMsYUFBRyxFQUFDLGVBQXZDO0FBQXVELGNBQUksRUFBQztBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBFLGVBVUY7QUFBUSxhQUFHLEVBQUMsd0JBQVo7QUFBcUMsY0FBSSxFQUFDO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkUsZUFhRjtBQUFRLGFBQUcsRUFBQyw0QkFBWjtBQUF5QyxjQUFJLEVBQUM7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFiRSxlQWNGO0FBQU0sY0FBSSxFQUFDLG1CQUFYO0FBQStCLGFBQUcsRUFBQyxZQUFuQztBQUFnRCxjQUFJLEVBQUM7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkRSxlQWtCRjtBQUFNLGNBQUksRUFBQyxtRUFBWDtBQUErRSxhQUFHLEVBQUM7QUFBbkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsQkUsZUFxQkY7QUFBUSxhQUFHLEVBQUMsa0NBQVo7QUFBK0MsY0FBSSxFQUFDO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckJFLGVBc0JGO0FBQU0sY0FBSSxFQUFDLG1DQUFYO0FBQStDLGNBQUksRUFBQyxVQUFwRDtBQUErRCxhQUFHLEVBQUM7QUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF0QkUsZUF5QkY7QUFBTSxjQUFJLEVBQUMsWUFBWDtBQUF3QixhQUFHLEVBQUMsWUFBNUI7QUFBeUMsY0FBSSxFQUFDO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBekJFLGVBMEJGO0FBQU0sY0FBSSxFQUFDLG9CQUFYO0FBQWdDLGFBQUcsRUFBQyxZQUFwQztBQUFpRCxlQUFLLEVBQUM7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkExQkUsZUE2QkY7QUFBUSxhQUFHLEVBQUMsY0FBWjtBQUEyQixjQUFJLEVBQUM7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE3QkUsZUErQkY7QUFBUSxjQUFJLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQS9CRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESSxlQXFDTCxxRUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckNLO0FBQUEsb0JBREY7QUF5Q0Q7O0FBNUNILEM7Ozs7Ozs7Ozs7O0FDTkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBUElIb21lXHJcbntcclxuICAgIHN0YXRpYyBpbnN0YW5jaWE7XHJcbiAgICAgdXJsID1cImh0dHBzOi8vYXBpLW5leHQtZWNvbW1lcmNlZS52ZXJjZWwuYXBwL2FwaS9cIjtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgaWYgKCFBUElIb21lLmluc3RhbmNpYSkge1xyXG4gICAgICAgICAgICBBUElIb21lLmluc3RhbmNpYSA9IG5ldyBBUElIb21lKCk7XHJcbiAgICAgICAgICAgfVxyXG4gICBcclxuICAgICAgICAgICByZXR1cm4gQVBJSG9tZS5pbnN0YW5jaWE7XHJcbiAgICAgICB9XHJcbiAgICAgIGdldEFydGljbGVzPWFzeW5jKCk9PlxyXG4gICAgICB7XHJcbiAgICAgICAgY29uc3QgdXJsMj10aGlzLnVybCtcImFydGljbGUvZ2V0YXJ0aWNsZXNcIjtcclxuICAgICAgICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgICAgIHVybDogdXJsMixcclxuICAgICAgICAgICAgaGVhZGVyczogeyB9XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID1hd2FpdCBheGlvcyhjb25maWcpO1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0PWF3YWl0IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIFxyXG4gICAgICB9IFxyXG4gICAgICBnZXRDYXRlZ29yaWVzPWFzeW5jKCk9PlxyXG4gICAgICB7XHJcbiAgICAgICAgY29uc3QgdXJsMj10aGlzLnVybCtcImNhdGVnb3J5L2dldGNhdGVnb3JpZXNcIjtcclxuICAgICAgICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgICAgIHVybDogdXJsMixcclxuICAgICAgICAgICAgaGVhZGVyczogeyB9XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID1hd2FpdCBheGlvcyhjb25maWcpO1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0PWF3YWl0IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIFxyXG4gICAgICB9ICBcclxuICAgICAgZ2V0QXJ0aWNsZXNFeHByZXNzaW9uPWFzeW5jKGxldHRlcm5hbWUpPT5cclxuICAgICAge1xyXG4gICAgICAgIGNvbnN0IHVybDI9dGhpcy51cmwrXCJnZXRhcnRpY2xlc2J5bmFtZT9wbmFtZT1cIitsZXR0ZXJuYW1lO1xyXG4gICAgICAgICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICAgICAgdXJsOiB1cmwyLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7IH1cclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPWF3YWl0IGF4aW9zKGNvbmZpZyk7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHQ9YXdhaXQgcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgXHJcbiAgICAgIH0gICAgIFxyXG4gICAgICBnZXRBcnRpY2xlPWFzeW5jKGJhcmNvZGUpPT5cclxuICAgICAge1xyXG4gICAgICAgIHRyeVxyXG4gICAgICAgIHtcclxuICAgICAgICBjb25zdCB1cmwyPXRoaXMudXJsK1wiYXJ0aWNsZT9wYmFyY29kZT1cIitiYXJjb2RlO1xyXG4gICAgICAgICB2YXIgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHJlZGlyZWN0OiAnZm9sbG93J1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgY29uc3QgcmVzcG9uc2UgPWF3YWl0IGZldGNoKHVybDIsIHJlcXVlc3RPcHRpb25zKTtcclxuICAgICAgICAgY29uc3QgcmVzdWx0PWF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgIGNhdGNoKGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZmlsdGVyQXJ0aWNsZWJ5Q2F0ZWdvcnk9YXN5bmMobmFtZSk9PlxyXG4gICAgICB7XHJcbiAgICAgICBcclxuICAgICAgICBjb25zdCB1cmwyPXRoaXMudXJsK1wiYXJ0aWNsZS9maWx0ZXJhcnRpY2xlc2J5Y2F0ZWdvcnk/cG5hbWU9XCIrbmFtZTtcclxuICAgICAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICAgIHVybDogdXJsMixcclxuICAgICAgICAgIGhlYWRlcnM6IHsgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPWF3YWl0IGF4aW9zKGNvbmZpZyk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0PWF3YWl0IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgICBvcmRlckFydGljbGVieVByaWNlPWFzeW5jKCk9PlxyXG4gICAgICB7XHJcbiAgICAgICAgY29uc3QgdXJsMj10aGlzLnVybCtcImFydGljbGUvb3JkZXJhcnRpY2xlc2J5cHJpY2VcIjtcclxuICAgICAgICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgICAgIHVybDogdXJsMixcclxuICAgICAgICAgICAgaGVhZGVyczogeyB9XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID1hd2FpdCBheGlvcyhjb25maWcpO1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0PWF3YWl0IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIFxyXG4gICAgICB9IFxyXG4gICAgICBvcmRlckFydGljbGVieUNhdGVnb3J5PWFzeW5jKCk9PlxyXG4gICAgICB7XHJcbiAgICAgICAgY29uc3QgdXJsMj10aGlzLnVybCtcImFydGljbGUvb3JkZXJhcnRpY2xlc2J5Y2F0ZWdvcnlcIjtcclxuICAgICAgICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgICAgIHVybDogdXJsMixcclxuICAgICAgICAgICAgaGVhZGVyczogeyB9XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID1hd2FpdCBheGlvcyhjb25maWcpO1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0PWF3YWl0IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIFxyXG4gICAgICB9IFxyXG4gICAgIFxyXG59IiwiaW1wb3J0IFJlYWN0LHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBUElIb21lIGZyb20gXCIuLi8uLi9tb2RlbC9hcGkvaG9tZS9ob21lXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnRcclxue1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGxpc3RhcnRpY2xlczpbXSxcclxuICAgICAgbGlzdGNhdGVnb3JpZXM6W11cclxuICAgICAgfTtcclxuICAgICB9ICBcclxuICAgY29tcG9uZW50RGlkTW91bnQoKVxyXG4gICAge1xyXG4gICAgIHRoaXMubGlzdEFydGljbGVzKCk7XHJcbiAgICAgdGhpcy5saXN0Q2F0ZWdvcmllcygpO1xyXG4gICAgfSAgXHJcbiAgcmVuZGVyKClcclxuICB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDw+ICAgICAgXHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5cclxuICAgICAgPHRoaXMuTmF2YmFyLz5cclxuICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJib3JkZXItYm90dG9tIG1iLTQgcGItM1wiPlxyXG4gICAgICAgPHRoaXMuSGVhZGVyQ2FyZEFydGljbGVzLz5cclxuICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgPHRoaXMuQ2FyZEFydGljbGVzLz5cclxuICAgIFxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9XHJcbiAgRmlsdGVyQXJ0aWNsZXNieUNhdGVnb3J5PShlKT0+XHJcbiAge1xyXG4gIGNvbnN0IHZhbHVlc2VsZWN0PVN0cmluZyhlLnRhcmdldC52YWx1ZSk7IFxyXG4gICAgaWYodmFsdWVzZWxlY3QhPVwiQWxsXCIpXHJcbiAgICB7XHJcbiAgICBBUElIb21lLmdldEluc3RhbmNlKCkuZmlsdGVyQXJ0aWNsZWJ5Q2F0ZWdvcnkodmFsdWVzZWxlY3QpLnRoZW4oZ2V0YXJ0aWNsZXMgPT5cclxuICAgICAgeyB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgbGlzdGFydGljbGVzOmdldGFydGljbGVzLFxyXG4gICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgKTt9XHJcbiAgICAgICkgXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICB0aGlzLmxpc3RBcnRpY2xlcygpO1xyXG4gICAgfVxyXG4gICBcclxuICB9XHJcbiAgTmF2YmFyPSgpPT5cclxuICB7XHJcblx0cmV0dXJuKFxyXG5cdDw+IFxyXG4gIFxyXG5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoZWFkZXItbWFpbiBib3JkZXItYm90dG9tXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yIGNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJicmFuZC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nb1wiIHNyYz1cImltYWdlcy9sb2dvLmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+IHsvKiBicmFuZC13cmFwLi8vICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgY2xhc3NOYW1lPVwic2VhcmNoXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBBcnRpY2xlIGJ5IE5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPiB7Lyogc2VhcmNoLXdyYXAgLmVuZC8vICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PiB7LyogY29sLi8vICovfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLXNtLTYgY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldHMtd3JhcCBmbG9hdC1tZC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1oZWFkZXIgIG1yLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi1zbSByb3VuZGVkLWNpcmNsZSBib3JkZXJcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1zaG9wcGluZy1jYXJ0XCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1waWxsIGJhZGdlLWRhbmdlciBub3RpZnlcIj4wPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIGljb250ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJpY29uIGljb24tc20gcm91bmRlZC1jaXJjbGUgYm9yZGVyXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtdXNlclwiIC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPldlbGNvbWUhPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+U2lnbiBpbjwvYT4gfCAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+IFJlZ2lzdGVyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IHsvKiB3aWRnZXRzLXdyYXAuLy8gKi99XHJcbiAgICAgICAgICAgICAgPC9kaXY+IHsvKiBjb2wuLy8gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PiB7Lyogcm93Li8vICovfVxyXG4gICAgICAgICAgPC9kaXY+IHsvKiBjb250YWluZXIuLy8gKi99XHJcbiAgICAgICAgPC9zZWN0aW9uPiB7LyogaGVhZGVyLW1haW4gLi8vICovfVxyXG4gICAgXHJcblx0IDwvPlxyXG5cdClcclxuICB9XHJcbiAgSGVhZGVyQ2FyZEFydGljbGVzPSgpPT5cclxuICB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDw+IFxyXG4gICAgICAgPGJyLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCI+XHJcbiAgICBcclxuICAgICAgICA8c2VsZWN0IFxyXG4gICAgICAgb25DaGFuZ2U9e3RoaXMuRmlsdGVyQXJ0aWNsZXNieUNhdGVnb3J5fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1yLTIgZm9ybS1jb250cm9sXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBbGxcIj5BbGwgQ2F0ZWdvcmllczwvb3B0aW9uPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmxpc3RjYXRlZ29yaWVzLm1hcChcclxuICAgICAgICAgICAgICBjPT5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtjLl9uYW1lfSB2YWx1ZT17Yy5fbmFtZX0+e2MuX25hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMub3JkZXJBcnRpY2xlYnlQcmljZX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saWdodFwiPlNvcnQgaXRlbXMgYnkgcHJpY2U8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLm9yZGVyQXJ0aWNsZWJ5Q2F0ZWdvcnl9IGNsYXNzTmFtZT1cImJ0biBidG4tbGlnaHRcIj5Tb3J0IGl0ZW1zIGJ5IGNhdGVnb3J5PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgICAgKVxyXG4gIH1cclxuICBDYXJkQXJ0aWNsZXM9KCk9PlxyXG4gIHtcclxuICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDw+IFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgeyAgICAgICAgICAgICAgXHJcbiAgICAgIHRoaXMuc3RhdGUubGlzdGFydGljbGVzLm1hcChcclxuICAgICAgICBhcnQ9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCIga2V5PXthcnQuX2JhcmNvZGV9PlxyXG4gICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJjYXJkIGNhcmQtcHJvZHVjdC1ncmlkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLXdyYXBcIj4gXHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2FydC5faW1nfSAvPlxyXG4gICAgICBcclxuICAgICAgICAgICAgPC9kaXY+IHsvKiBpbWctd3JhcC4vLyAqL31cclxuICAgICAgICAgICAgPGZpZ2NhcHRpb24gY2xhc3NOYW1lPVwiaW5mby13cmFwXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXgtaGVpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPnthcnQuX25hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZS13cmFwIG10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2VcIj5VU0Qge2FydC5fcHJpY2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IHsvKiBwcmljZS13cmFwLi8vICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibG9jayBidG4tcHJpbWFyeVwiPlNlZSBBcnRpY2xlIDwvYT5cdFxyXG4gICAgICAgICAgICA8L2ZpZ2NhcHRpb24+XHJcbiAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgIH0gXHJcbiAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PiBcclxuICAgICBcclxuICAgICAgPC8+ICAgIFx0XHJcbiAgICApXHJcbiAgfVxyXG4gIGxpc3RBcnRpY2xlcz0oKT0+XHJcbiAge1xyXG4gICBBUElIb21lLmdldEluc3RhbmNlKCkuZ2V0QXJ0aWNsZXMoKS50aGVuKGdldGFydGljbGVzID0+XHJcbiAgICAgeyB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAge1xyXG4gICAgICAgIGxpc3RhcnRpY2xlczpnZXRhcnRpY2xlcyxcclxuICAgICAgICBcclxuICAgICAgIH1cclxuICAgICAgICk7fVxyXG4gICAgICkgXHJcbiAgfVxyXG4gIGxpc3RDYXRlZ29yaWVzPSgpPT5cclxuICB7XHJcbiAgICBBUElIb21lLmdldEluc3RhbmNlKCkuZ2V0Q2F0ZWdvcmllcygpLnRoZW4oZ2V0Y2F0ZWdvcmllcyA9PlxyXG4gICAgIHsgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgIHtcclxuICAgICAgICBsaXN0Y2F0ZWdvcmllczpnZXRjYXRlZ29yaWVzLCAgXHJcbiAgICAgICB9XHJcbiAgICAgICApO31cclxuICAgICApIFxyXG4gIH1cclxuICBvcmRlckFydGljbGVieVByaWNlPSgpPT5cclxuICB7XHJcbiAgICBBUElIb21lLmdldEluc3RhbmNlKCkub3JkZXJBcnRpY2xlYnlQcmljZSgpLnRoZW4oZ2V0YXJ0aWNsZXMgPT5cclxuICAgICB7IHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICB7XHJcbiAgICAgICAgbGlzdGFydGljbGVzOmdldGFydGljbGVzLCAgXHJcbiAgICAgICB9XHJcbiAgICAgICApO31cclxuICAgICApIFxyXG4gIH1cclxuICBvcmRlckFydGljbGVieUNhdGVnb3J5PSgpPT5cclxuICB7XHJcbiAgICBBUElIb21lLmdldEluc3RhbmNlKCkub3JkZXJBcnRpY2xlYnlDYXRlZ29yeSgpLnRoZW4oZ2V0YXJ0aWNsZXMgPT5cclxuICAgICB7IHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICB7XHJcbiAgICAgICAgbGlzdGFydGljbGVzOmdldGFydGljbGVzLCAgXHJcbiAgICAgICB9XHJcbiAgICAgICApO31cclxuICAgICApIFxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBIb21lIH0gZnJvbSBcIi4vaG9tZS9ob21lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50XG57XG4gIHJlbmRlcigpXG4gIHtcbiAgICByZXR1cm4oXG4gICAgICA8PiBcbiAgPEhlYWQ+XG4gIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiLz5cblxuPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBzaHJpbmstdG8tZml0PW5vXCIvPlxuXG48dGl0bGU+V2Vic2l0ZSB0aXRsZSAtIGJvb3RzdHJhcCBodG1sIHRlbXBsYXRlPC90aXRsZT5cblxuPGxpbmsgaHJlZj1cImljb24vY29tbWVyY2VpY29uLmljb1wiIHJlbD1cInNob3J0Y3V0IGljb25cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIvPlxuXG57LyogPCEtLSBqUXVlcnkgLS0+ICovfVxuPHNjcmlwdCBzcmM9XCJqcy9qcXVlcnktMi4wLjAubWluLmpzXCIgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiPjwvc2NyaXB0PlxuXG57LyogPCEtLSBCb290c3RyYXA0IGZpbGVzLS0+ICovfVxuPHNjcmlwdCBzcmM9XCJqcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qc1wiIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIj48L3NjcmlwdD5cbjxsaW5rIGhyZWY9XCJjc3MvYm9vdHN0cmFwLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIi8+XG5cbnsvKiA8IS0tIEZvbnQgYXdlc29tZSA1IC0tPiAqL31cblxuPGxpbmsgaHJlZj1cIi8vbmV0ZG5hLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNi4zL2Nzcy9mb250LWF3ZXNvbWUuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cblxuey8qIDwhLS0gcGx1Z2luOiBmYW5jeWJveCAgLS0+ICovfVxuPHNjcmlwdCBzcmM9XCJwbHVnaW5zL2ZhbmN5Ym94L2ZhbmN5Ym94Lm1pbi5qc1wiIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIj48L3NjcmlwdD5cbjxsaW5rIGhyZWY9XCJwbHVnaW5zL2ZhbmN5Ym94L2ZhbmN5Ym94Lm1pbi5jc3NcIiB0eXBlPVwidGV4dC9jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuXG57LyogPCEtLSBjdXN0b20gc3R5bGUgLS0+ICovfVxuPGxpbmsgaHJlZj1cImNzcy91aS5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIvPlxuPGxpbmsgaHJlZj1cImNzcy9yZXNwb25zaXZlLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBtZWRpYT1cIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpXCIgLz5cblxuey8qIDwhLS0gY3VzdG9tIGphdmFzY3JpcHQgLS0+ICovfVxuPHNjcmlwdCBzcmM9XCJqcy9zY3JpcHQuanNcIiB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI+PC9zY3JpcHQ+XG5cbjxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiPlxuXG5cbjwvc2NyaXB0PlxuIDwvSGVhZD5cbiA8SG9tZS8+XG4gICA8Lz5cbiAgICApXG4gIH1cbiAgXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=