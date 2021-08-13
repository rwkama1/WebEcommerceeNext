webpackHotUpdate_N_E("pages/index",{

/***/ "./model/api/home/home.js":
/*!********************************!*\
  !*** ./model/api/home/home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return APIHome; });
/* harmony import */ var D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);







var APIHome = /*#__PURE__*/function () {
  function APIHome() {
    var _this = this;

    Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, APIHome);

    Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "url", "https://api-next-ecommercee.vercel.app/api/");

    Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "getArticles", /*#__PURE__*/Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var url2, config, response, result;
      return D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url2 = _this.url + "article/getarticles";
              config = {
                method: 'get',
                url: url2,
                headers: {}
              };
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_5___default()(config);

            case 4:
              response = _context.sent;
              _context.next = 7;
              return response.data;

            case 7:
              result = _context.sent;
              return _context.abrupt("return", result);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "getCategories", /*#__PURE__*/Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var url2, config, response, result;
      return D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              url2 = _this.url + "category/getcategories";
              config = {
                method: 'get',
                url: url2,
                headers: {}
              };
              _context2.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_5___default()(config);

            case 4:
              response = _context2.sent;
              _context2.next = 7;
              return response.data;

            case 7:
              result = _context2.sent;
              return _context2.abrupt("return", result);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "getArticlesExpression", /*#__PURE__*/function () {
      var _ref3 = Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(lettername) {
        var url2, config, response, result;
        return D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url2 = _this.url + "getarticlesbyname?pname=" + lettername;
                config = {
                  method: 'get',
                  url: url2,
                  headers: {}
                };
                _context3.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_5___default()(config);

              case 4:
                response = _context3.sent;
                _context3.next = 7;
                return response.data;

              case 7:
                result = _context3.sent;
                return _context3.abrupt("return", result);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());

    Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "getArticle", /*#__PURE__*/function () {
      var _ref4 = Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(barcode) {
        var url2, requestOptions, response, result;
        return D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                url2 = _this.url + "article?pbarcode=" + barcode;
                requestOptions = {
                  method: 'GET',
                  redirect: 'follow'
                };
                _context4.next = 5;
                return fetch(url2, requestOptions);

              case 5:
                response = _context4.sent;
                _context4.next = 8;
                return response.json();

              case 8:
                result = _context4.sent;
                return _context4.abrupt("return", result);

              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4["catch"](0);
                console.log(_context4.t0.message);

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 12]]);
      }));

      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }());

    Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "filterArticlebyCategory", /*#__PURE__*/function () {
      var _ref5 = Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(name) {
        var url2, config, response, result;
        return D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                url2 = _this.url + "article/filterarticlesbycategory?pname=" + name;
                config = {
                  method: 'get',
                  url: url2,
                  headers: {}
                };
                _context5.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_5___default()(config);

              case 4:
                response = _context5.sent;
                _context5.next = 7;
                return response.data;

              case 7:
                result = _context5.sent;
                return _context5.abrupt("return", result);

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x3) {
        return _ref5.apply(this, arguments);
      };
    }());

    Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "orderArticlebyPrice", /*#__PURE__*/Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
      var url2, config, response, result;
      return D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              url2 = _this.url + "article/orderarticlesbyprice";
              config = {
                method: 'get',
                url: url2,
                headers: {}
              };
              _context6.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_5___default()(config);

            case 4:
              response = _context6.sent;
              _context6.next = 7;
              return response.data;

            case 7:
              result = _context6.sent;
              return _context6.abrupt("return", result);

            case 9:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    })));

    Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "orderArticlebyCategory", /*#__PURE__*/Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
      var url2, config, response, result;
      return D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              url2 = _this.url + "article/orderarticlesbycategory";
              config = {
                method: 'get',
                url: url2,
                headers: {}
              };
              _context7.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_5___default()(config);

            case 4:
              response = _context7.sent;
              _context7.next = 7;
              return response.data;

            case 7:
              result = _context7.sent;
              return _context7.abrupt("return", result);

            case 9:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    })));
  }

  Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(APIHome, null, [{
    key: "getInstance",
    value: function getInstance() {
      if (!APIHome.instancia) {
        APIHome.instancia = new APIHome();
      }

      return APIHome.instancia;
    }
  }]);

  return APIHome;
}();

Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(APIHome, "instancia", void 0);



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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kZWwvYXBpL2hvbWUvaG9tZS5qcyJdLCJuYW1lcyI6WyJBUElIb21lIiwidXJsMiIsInVybCIsImNvbmZpZyIsIm1ldGhvZCIsImhlYWRlcnMiLCJheGlvcyIsInJlc3BvbnNlIiwiZGF0YSIsInJlc3VsdCIsImxldHRlcm5hbWUiLCJiYXJjb2RlIiwicmVxdWVzdE9wdGlvbnMiLCJyZWRpcmVjdCIsImZldGNoIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwibmFtZSIsImluc3RhbmNpYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUNxQkEsTztBQUlqQixxQkFBYztBQUFBOztBQUFBOztBQUFBLDZMQURSLDZDQUNROztBQUFBLHVpQkFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFSkMsa0JBRkksR0FFQyxLQUFJLENBQUNDLEdBQUwsR0FBUyxxQkFGVjtBQUdKQyxvQkFISSxHQUdLO0FBQ1hDLHNCQUFNLEVBQUUsS0FERztBQUVYRixtQkFBRyxFQUFFRCxJQUZNO0FBR1hJLHVCQUFPLEVBQUU7QUFIRSxlQUhMO0FBQUE7QUFBQSxxQkFTY0MsNENBQUssQ0FBQ0gsTUFBRCxDQVRuQjs7QUFBQTtBQVNGSSxzQkFURTtBQUFBO0FBQUEscUJBVVdBLFFBQVEsQ0FBQ0MsSUFWcEI7O0FBQUE7QUFVRkMsb0JBVkU7QUFBQSwrQ0FXREEsTUFYQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVJBOztBQUFBLHlpQkFzQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU5SLGtCQUZNLEdBRUQsS0FBSSxDQUFDQyxHQUFMLEdBQVMsd0JBRlI7QUFHTkMsb0JBSE0sR0FHRztBQUNYQyxzQkFBTSxFQUFFLEtBREc7QUFFWEYsbUJBQUcsRUFBRUQsSUFGTTtBQUdYSSx1QkFBTyxFQUFFO0FBSEUsZUFISDtBQUFBO0FBQUEscUJBU1lDLDRDQUFL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Q0FGQztBQUdmQyxvQkFIZSxHQUdOO0FBQ1hDLHNCQUFNLEVBQUUsS0FERztBQUVYRixtQkFBRyxFQUFFRCxJQUZNO0FBR1hJLHVCQUFPLEVBQUU7QUFIRSxlQUhNO0FBQUE7QUFBQSxxQkFTR0MsNENBQUssQ0FBQ0gsTUFBRCxDQVRSOztBQUFBO0FBU2JJLHNCQVRhO0FBQUE7QUFBQSxxQkFVQUEsUUFBUSxDQUFDQyxJQVZUOztBQUFBO0FBVWJDLG9CQVZhO0FBQUEsZ0RBV1pBLE1BWFk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0EvRlg7QUFBRzs7OztrQ0FDSTtBQUNkLFVBQUksQ0FBQ1QsT0FBTyxDQUFDb0IsU0FBYixFQUF3QjtBQUN2QnBCLGVBQU8sQ0FBQ29CLFNBQVIsR0FBb0IsSUFBSXBCLE9BQUosRUFBcEI7QUFDQTs7QUFFRCxhQUFPQSxPQUFPLENBQUNvQixTQUFmO0FBQ0g7Ozs7Ozs0S0FYYXBCLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2JhNThhOTBhNWVhYzMxYWNkNDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBJSG9tZVxyXG57XHJcbiAgICBzdGF0aWMgaW5zdGFuY2lhO1xyXG4gICAgIHVybCA9XCJodHRwczovL2FwaS1uZXh0LWVjb21tZXJjZWUudmVyY2VsLmFwcC9hcGkvXCI7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xyXG4gICAgICAgICAgIGlmICghQVBJSG9tZS5pbnN0YW5jaWEpIHtcclxuICAgICAgICAgICAgQVBJSG9tZS5pbnN0YW5jaWEgPSBuZXcgQVBJSG9tZSgpO1xyXG4gICAgICAgICAgIH1cclxuICAgXHJcbiAgICAgICAgICAgcmV0dXJuIEFQSUhvbWUuaW5zdGFuY2lhO1xyXG4gICAgICAgfVxyXG4gICAgICBnZXRBcnRpY2xlcz1hc3luYygpPT5cclxuICAgICAge1xyXG4gICAgICAgIGNvbnN0IHVybDI9dGhpcy51cmwrXCJhcnRpY2xlL2dldGFydGljbGVzXCI7XHJcbiAgICAgICAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgICAgICB1cmw6IHVybDIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgfVxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9YXdhaXQgYXhpb3MoY29uZmlnKTtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdD1hd2FpdCByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICBcclxuICAgICAgfSBcclxuICAgICAgZ2V0Q2F0ZWdvcmllcz1hc3luYygpPT5cclxuICAgICAge1xyXG4gICAgICAgIGNvbnN0IHVybDI9dGhpcy51cmwrXCJjYXRlZ29yeS9nZXRjYXRlZ29yaWVzXCI7XHJcbiAgICAgICAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgICAgICB1cmw6IHVybDIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgfVxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9YXdhaXQgYXhpb3MoY29uZmlnKTtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdD1hd2FpdCByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICBcclxuICAgICAgfSAgXHJcbiAgICAgIGdldEFydGljbGVzRXhwcmVzc2lvbj1hc3luYyhsZXR0ZXJuYW1lKT0+XHJcbiAgICAgIHtcclxuICAgICAgICBjb25zdCB1cmwyPXRoaXMudXJsK1wiZ2V0YXJ0aWNsZXNieW5hbWU/cG5hbWU9XCIrbGV0dGVybmFtZTtcclxuICAgICAgICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgICAgIHVybDogdXJsMixcclxuICAgICAgICAgICAgaGVhZGVyczogeyB9XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID1hd2FpdCBheGlvcyhjb25maWcpO1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0PWF3YWl0IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIFxyXG4gICAgICB9ICAgICBcclxuICAgICAgZ2V0QXJ0aWNsZT1hc3luYyhiYXJjb2RlKT0+XHJcbiAgICAgIHtcclxuICAgICAgICB0cnlcclxuICAgICAgICB7XHJcbiAgICAgICAgY29uc3QgdXJsMj10aGlzLnVybCtcImFydGljbGU/cGJhcmNvZGU9XCIrYmFyY29kZTtcclxuICAgICAgICAgdmFyIHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICByZWRpcmVjdDogJ2ZvbGxvdydcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgIGNvbnN0IHJlc3BvbnNlID1hd2FpdCBmZXRjaCh1cmwyLCByZXF1ZXN0T3B0aW9ucyk7XHJcbiAgICAgICAgIGNvbnN0IHJlc3VsdD1hd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICBjYXRjaChlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGZpbHRlckFydGljbGVieUNhdGVnb3J5PWFzeW5jKG5hbWUpPT5cclxuICAgICAge1xyXG4gICAgICAgXHJcbiAgICAgICAgY29uc3QgdXJsMj10aGlzLnVybCtcImFydGljbGUvZmlsdGVyYXJ0aWNsZXNieWNhdGVnb3J5P3BuYW1lPVwiK25hbWU7XHJcbiAgICAgICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgICB1cmw6IHVybDIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7IH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID1hd2FpdCBheGlvcyhjb25maWcpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdD1hd2FpdCByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgICAgb3JkZXJBcnRpY2xlYnlQcmljZT1hc3luYygpPT5cclxuICAgICAge1xyXG4gICAgICAgIGNvbnN0IHVybDI9dGhpcy51cmwrXCJhcnRpY2xlL29yZGVyYXJ0aWNsZXNieXByaWNlXCI7XHJcbiAgICAgICAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgICAgICB1cmw6IHVybDIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgfVxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9YXdhaXQgYXhpb3MoY29uZmlnKTtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdD1hd2FpdCByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICBcclxuICAgICAgfSBcclxuICAgICAgb3JkZXJBcnRpY2xlYnlDYXRlZ29yeT1hc3luYygpPT5cclxuICAgICAge1xyXG4gICAgICAgIGNvbnN0IHVybDI9dGhpcy51cmwrXCJhcnRpY2xlL29yZGVyYXJ0aWNsZXNieWNhdGVnb3J5XCI7XHJcbiAgICAgICAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgICAgICB1cmw6IHVybDIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgfVxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9YXdhaXQgYXhpb3MoY29uZmlnKTtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdD1hd2FpdCByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICBcclxuICAgICAgfSBcclxuICAgICBcclxufSJdLCJzb3VyY2VSb290IjoiIn0=