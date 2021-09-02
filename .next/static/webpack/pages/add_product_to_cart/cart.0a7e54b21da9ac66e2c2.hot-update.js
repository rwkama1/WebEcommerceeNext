webpackHotUpdate_N_E("pages/add_product_to_cart/cart",{

/***/ "./pages/add_product_to_cart/cart.js":
/*!*******************************************!*\
  !*** ./pages/add_product_to_cart/cart.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cart; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/head */ "./components/head.js");
/* harmony import */ var _model_api_product_to_cart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../model/api/product_to_cart */ "./model/api/product_to_cart.js");











var _jsxFileName = "D:\\TODO (Desarrollo Software)\\Tutoriales y demas cosas\\WebNextEcommercee\\pages\\add_product_to_cart\\cart.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Cart = /*#__PURE__*/function (_Component) {
  Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Cart, _Component);

  var _super = _createSuper(Cart);

  function Cart() {
    var _this;

    Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Cart);

    _this = _super.call(this);

    Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "removeitemonorder", /*#__PURE__*/function () {
      var _ref = Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(barcode) {
        var removeitemonor;
        return D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _model_api_product_to_cart__WEBPACK_IMPORTED_MODULE_13__["default"].getInstance().removeitemonorder(barcode);

              case 3:
                removeitemonor = _context.sent;
                console.log(removeitemonor);
                alert(removeitemonor);
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                alert(_context.t0.message);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "cart", function () {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "container my-5 py-3 z-depth-1 rounded",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
            className: "dark-grey-text",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "table-responsive",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
                className: "table product-table mb-0",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
                  className: "mdb-color lighten-5",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 96,
                      columnNumber: 19
                    }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                      className: "font-weight-bold",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                        children: "Product"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 98,
                        columnNumber: 21
                      }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this))
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 97,
                      columnNumber: 19
                    }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                      className: "font-weight-bold",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                        children: "Category"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 101,
                        columnNumber: 21
                      }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this))
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 100,
                      columnNumber: 19
                    }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 103,
                      columnNumber: 19
                    }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                      className: "font-weight-bold",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                        children: "Price"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 105,
                        columnNumber: 21
                      }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this))
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 104,
                      columnNumber: 19
                    }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                      className: "font-weight-bold",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                        children: "QTY"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 108,
                        columnNumber: 21
                      }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this))
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 107,
                      columnNumber: 19
                    }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                      className: "font-weight-bold",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                        children: "Amount"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 111,
                        columnNumber: 21
                      }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this))
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 110,
                      columnNumber: 19
                    }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 113,
                      columnNumber: 19
                    }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this))]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 95,
                    columnNumber: 17
                  }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this))
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 15
                }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                  children: [_this.state.listdetailorder.map(function (detailorder, i) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                            scope: "row",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                              src: detailorder._article._img,
                              className: "img-fluid z-depth-0"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 127,
                              columnNumber: 21
                            }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this))
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 126,
                            columnNumber: 19
                          }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                              className: "mt-3",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                                children: detailorder._article._name
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 131,
                                columnNumber: 23
                              }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this))
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 130,
                              columnNumber: 21
                            }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this))
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 129,
                            columnNumber: 19
                          }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            children: detailorder._article._category._name
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 135,
                            columnNumber: 19
                          }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 136,
                            columnNumber: 19
                          }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            children: ["$", detailorder._article._price]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 137,
                            columnNumber: 19
                          }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            children: detailorder._quantity
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 138,
                            columnNumber: 19
                          }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                              children: ["$", detailorder._article._price * detailorder._quantity]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 142,
                              columnNumber: 19
                            }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this))
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 141,
                            columnNumber: 19
                          }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                              type: "button",
                              onClick: _this.removeitemonorder(detailorder._article._barcode),
                              className: "btn btn-sm btn-primary",
                              "data-toggle": "tooltip",
                              "data-placement": "top",
                              title: "Remove item",
                              children: "X"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 145,
                              columnNumber: 21
                            }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this))
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 144,
                            columnNumber: 19
                          }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this))]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 125,
                          columnNumber: 17
                        }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this))
                      }, i, false, {
                        fileName: _jsxFileName,
                        lineNumber: 124,
                        columnNumber: 15
                      }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this))
                    }, void 0, false);
                  }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      colSpan: 3
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 156,
                      columnNumber: 19
                    }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      colSpan: 3
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 157,
                      columnNumber: 19
                    }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                        className: "mt-2",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                          children: "Total"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 160,
                          columnNumber: 23
                        }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this))
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 159,
                        columnNumber: 21
                      }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this))
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 158,
                      columnNumber: 19
                    }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: "text-right",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                        className: "mt-2",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                          children: "$2600"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 165,
                          columnNumber: 23
                        }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this))
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 164,
                        columnNumber: 21
                      }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this))
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 163,
                      columnNumber: 19
                    }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this))]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 155,
                    columnNumber: 17
                  }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this))]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 15
                }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this))]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 13
              }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 11
            }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 9
          }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 5
        }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-8"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 9
          }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                type: "button",
                className: "btn btn-light",
                children: "Close Order"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 13
              }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                type: "button",
                disabled: true,
                className: "btn btn-primary",
                children: "Send Order"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 15
              }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this))]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 11
            }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 9
          }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this))]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 7
        }, Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this))]
      }, void 0, true);
    });

    _this.state = {
      ordercart: {},
      listdetailorder: []
    };
    return _this;
  }

  Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Cart, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var orderdetail;
        return D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _model_api_product_to_cart__WEBPACK_IMPORTED_MODULE_13__["default"].getInstance().getorderinprogress();

              case 3:
                orderdetail = _context2.sent;
                this.setState({
                  ordercart: orderdetail,
                  listdetailorder: orderdetail._listOrderDetails
                });
                console.log(this.state.ordercart);
                _context2.next = 12;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push({
                  pathname: "/"
                });
                alert(_context2.t0.message);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_head__WEBPACK_IMPORTED_MODULE_12__["HeadComponent"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(this.cart, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 10
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 8
        }, this)
      }, void 0, false);
    }
  }]);

  return Cart;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRkX3Byb2R1Y3RfdG9fY2FydC9jYXJ0LmpzIl0sIm5hbWVzIjpbIkNhcnQiLCJiYXJjb2RlIiwiQVBJUHJvZHVjdENhcnQiLCJnZXRJbnN0YW5jZSIsInJlbW92ZWl0ZW1vbm9yZGVyIiwicmVtb3ZlaXRlbW9ub3IiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJtZXNzYWdlIiwic3RhdGUiLCJsaXN0ZGV0YWlsb3JkZXIiLCJtYXAiLCJkZXRhaWxvcmRlciIsImkiLCJfYXJ0aWNsZSIsIl9pbWciLCJfbmFtZSIsIl9jYXRlZ29yeSIsIl9wcmljZSIsIl9xdWFudGl0eSIsIl9iYXJjb2RlIiwib3JkZXJjYXJ0IiwiZ2V0b3JkZXJpbnByb2dyZXNzIiwib3JkZXJkZXRhaWwiLCJzZXRTdGF0ZSIsIl9saXN0T3JkZXJEZXRhaWxzIiwiUm91dGVyIiwicHVzaCIsInBhdGhuYW1lIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsSTs7Ozs7QUFFbkIsa0JBQWM7QUFBQTs7QUFBQTs7QUFDWjs7QUFEWTtBQUFBLHNXQStDRyxpQkFBTUMsT0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBS1VDLG1FQUFjLENBQUNDLFdBQWYsR0FBNkJDLGlCQUE3QixDQUErQ0gsT0FBL0MsQ0FMVjs7QUFBQTtBQUtYSSw4QkFMVztBQU1qQkMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixjQUFaO0FBQ0FHLHFCQUFLLENBQUNILGNBQUQsQ0FBTDtBQVBpQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVdkRyxxQkFBSyxDQUFDLFlBQUVDLE9BQUgsQ0FBTDs7QUFYYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQS9DSDs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFB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LGdEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkZF9wcm9kdWN0X3RvX2NhcnQvY2FydC4wYTdlNTRiMjFkYTlhYzY2ZTJjMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0LHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEhlYWRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9oZWFkXCI7XHJcbmltcG9ydCBBUElQcm9kdWN0Q2FydCBmcm9tIFwiLi4vLi4vbW9kZWwvYXBpL3Byb2R1Y3RfdG9fY2FydFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydCBleHRlbmRzIENvbXBvbmVudFxyXG57XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgb3JkZXJjYXJ0Ont9LFxyXG4gICAgICBsaXN0ZGV0YWlsb3JkZXI6W11cclxuICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG4gIFxyXG4gYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKVxyXG4gIHtcclxuICB0cnl7XHJcblxyXG4gIFxyXG4gICAgLy8gdmFyIGxvZ2ludXNlciA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2xvZ2ludXNlcicpO1xyXG4gICAgLy8gaWYoIWxvZ2ludXNlcilcclxuICAgIC8vIHtcclxuICAgIC8vICAgYWxlcnQoXCJQbGVhc2UgbG9nIGluIHRvIGFjY2VzcyB0aGlzIHBhZ2VcIik7XHJcbiAgICAgIFxyXG4gICAgLy8gICBSb3V0ZXIucHVzaChcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgcGF0aG5hbWU6XCIvY3VzdG9tZXIvc2lnbl9pblwiXHJcbiAgICAvLyAgIH1cclxuICAgIC8vICAgKVxyXG4gICAgLy8gICByZXR1cm47XHJcbiAgICAgXHJcbiAgICAvLyB9XHJcbiAgICBjb25zdCBvcmRlcmRldGFpbD1hd2FpdCBBUElQcm9kdWN0Q2FydC5nZXRJbnN0YW5jZSgpLmdldG9yZGVyaW5wcm9ncmVzcygpO1xyXG4gICBcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHtcclxuICAgICAgICBvcmRlcmNhcnQ6b3JkZXJkZXRhaWwsXHJcbiAgICAgICAgbGlzdGRldGFpbG9yZGVyOm9yZGVyZGV0YWlsLl9saXN0T3JkZXJEZXRhaWxzXHJcbiAgICAgIH1cclxuICAgIClcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUub3JkZXJjYXJ0KVxyXG4gIH1cclxuICBjYXRjaChlKVxyXG4gIHtcclxuICAgICAgIFJvdXRlci5wdXNoKFxyXG4gICAgICAgIHtcclxuICAgICAgICBwYXRobmFtZTpcIi9cIlxyXG4gICAgICB9XHJcbiAgICAgIClcclxuICAgIGFsZXJ0KGUubWVzc2FnZSlcclxuICB9XHJcbiAgfVxyXG4gcmVtb3ZlaXRlbW9ub3JkZXI9YXN5bmMoYmFyY29kZSk9PlxyXG4ge1xyXG4gIHRyeVxyXG4gIHtcclxuIFxyXG4gIGNvbnN0IHJlbW92ZWl0ZW1vbm9yPWF3YWl0IEFQSVByb2R1Y3RDYXJ0LmdldEluc3RhbmNlKCkucmVtb3ZlaXRlbW9ub3JkZXIoYmFyY29kZSk7XHJcbiAgY29uc29sZS5sb2cocmVtb3ZlaXRlbW9ub3IpO1xyXG4gIGFsZXJ0KHJlbW92ZWl0ZW1vbm9yKTtcclxuICAgfVxyXG4gICBjYXRjaChlKVxyXG4gICB7XHJcbiAgICAgYWxlcnQoZS5tZXNzYWdlKTtcclxuICAgfVxyXG4gfVxyXG4gIHJlbmRlcigpXHJcbiAgICAge1xyXG4gICAgICAgcmV0dXJuKFxyXG4gICAgXHQ8PiBcclxuICAgICAgIDxIZWFkQ29tcG9uZW50PlxyXG4gICAgICAgICA8dGhpcy5jYXJ0PjwvdGhpcy5jYXJ0PlxyXG4gICAgICAgICBcclxuICAgICAgIDwvSGVhZENvbXBvbmVudD5cclxuICAgICAgXHJcbiAgICAgICAgPC8+ICBcclxuICAgICAgIClcclxuICAgICB9XHJcbiAgICBcclxuICAgICBjYXJ0PSgpPT5cclxuICAgICB7XHJcbiAgICAgICByZXR1cm4oXHJcbiAgICAgICAgIDw+XHJcbiAgICBcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG15LTUgcHktMyB6LWRlcHRoLTEgcm91bmRlZFwiPlxyXG4gICAgICAgIHsvKlNlY3Rpb246IENvbnRlbnQqL31cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkYXJrLWdyZXktdGV4dFwiPlxyXG4gICAgICAgICAgey8qIFNob3BwaW5nIENhcnQgdGFibGUgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHByb2R1Y3QtdGFibGUgbWItMFwiPlxyXG4gICAgICAgICAgICAgIHsvKiBUYWJsZSBoZWFkICovfVxyXG4gICAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJtZGItY29sb3IgbGlnaHRlbi01XCI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCAvPlxyXG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+UHJvZHVjdDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Q2F0ZWdvcnk8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoIC8+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5QcmljZTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+UVRZPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5BbW91bnQ8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxpc3RkZXRhaWxvcmRlci5tYXAoXHJcbiAgICAgICAgICAgICAgICAoZGV0YWlsb3JkZXIsaSk9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkZXRhaWxvcmRlci5fYXJ0aWNsZS5faW1nfSAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIHotZGVwdGgtMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57ZGV0YWlsb3JkZXIuX2FydGljbGUuX25hbWV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPntkZXRhaWxvcmRlci5fYXJ0aWNsZS5fY2F0ZWdvcnkuX25hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIC8+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD4ke2RldGFpbG9yZGVyLl9hcnRpY2xlLl9wcmljZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgIHtkZXRhaWxvcmRlci5fcXVhbnRpdHl9XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+JHtkZXRhaWxvcmRlci5fYXJ0aWNsZS5fcHJpY2UgKiBkZXRhaWxvcmRlci5fcXVhbnRpdHl9PC9zdHJvbmc+ICBcclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMucmVtb3ZlaXRlbW9ub3JkZXIoZGV0YWlsb3JkZXIuX2FydGljbGUuX2JhcmNvZGUpfSBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgZGF0YS1wbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT1cIlJlbW92ZSBpdGVtXCI+WFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICkgICAgIFxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezN9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXszfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+VG90YWw8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPiQyNjAwPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBGb3VydGggcm93ICovfVxyXG4gICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgey8qIC8uVGFibGUgYm9keSAqL31cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB7LyogLy5TaG9wcGluZyBDYXJ0IHRhYmxlICovfVxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICB7LypTZWN0aW9uOiBDb250ZW50Ki99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICBDbG9zZSBPcmRlclxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRpc2FibGVkPXt0cnVlfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIFNlbmQgT3JkZXJcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgXHJcbiAgICAgICAgIDwvPlxyXG4gICAgICAgKVxyXG4gICAgIH1cclxuICBcclxuIFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==