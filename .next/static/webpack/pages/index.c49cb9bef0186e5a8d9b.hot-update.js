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

    Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "getArticles", /*#__PURE__*/Object(D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
      var url2, config, response, result;
      return D_TODO_Desarrollo_Software_Tutoriales_y_demas_cosas_WebNextEcommercee_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              url2 = _this.url + "article/getarticles";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kZWwvYXBpL2hvbWUvaG9tZS5qcyJdLCJuYW1lcyI6WyJBUElIb21lIiwidXJsMiIsInVybCIsImNvbmZpZyIsIm1ldGhvZCIsImhlYWRlcnMiLCJheGlvcyIsInJlc3BvbnNlIiwiZGF0YSIsInJlc3VsdCIsImxldHRlcm5hbWUiLCJiYXJjb2RlIiwicmVxdWVzdE9wdGlvbnMiLCJyZWRpcmVjdCIsImZldGNoIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwibmFtZSIsImluc3RhbmNpYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUNxQkEsTztBQUlqQixxQkFBYztBQUFBOztBQUFBOztBQUFBLDZMQURSLDZDQUNROztBQUFBLHVpQkFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFSkMsa0JBRkksR0FFQyxLQUFJLENBQUNDLEdBQUwsR0FBUyxxQkFGVjtBQUdKQyxvQkFISSxHQUdLO0FBQ1hDLHNCQUFNLEVBQUUsS0FERztBQUVYRixtQkFBRyxFQUFFRCxJQUZNO0FBR1hJLHVCQUFPLEVBQUU7QUFIRSxlQUhMO0FBQUE7QUFBQSxxQkFTY0MsNENBQUssQ0FBQ0gsTUFBRCxDQVRuQjs7QUFBQTtBQVNGSSxzQkFURTtBQUFBO0FBQUEscUJBVVdBLFFBQVEsQ0FBQ0MsSUFWcEI7O0FBQUE7QUFVRkMsb0JBVkU7QUFBQSwrQ0FXREEsTUFYQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVJBOztBQUFBLHlpQkFzQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU5SLGtCQUZNLEdBRUQsS0FBSSxDQUFDQyxHQUFMLEdBQVMsd0JBRlI7QUFHTkMsb0JBSE0sR0FHRztBQUNYQyxzQkFBTSxFQUFFLEtBREc7QUFFWEYsbUJBQUcsRUFBRUQsSUFGTTtBQUdYSSx1QkFBTyxFQUFFO0FBSEUsZUFISDtBQUFBO0FBQUEscUJBU1lDLDRDQUFL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UixHQUFvQixJQUFJcEIsT0FBSixFQUFwQjtBQUNBOztBQUVELGFBQU9BLE9BQU8sQ0FBQ29CLFNBQWY7QUFDSDs7Ozs7OzRLQVhhcEIsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jNDljYjliZWYwMTg2ZTVhOGQ5Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBUElIb21lXHJcbntcclxuICAgIHN0YXRpYyBpbnN0YW5jaWE7XHJcbiAgICAgdXJsID1cImh0dHBzOi8vYXBpLW5leHQtZWNvbW1lcmNlZS52ZXJjZWwuYXBwL2FwaS9cIjtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgaWYgKCFBUElIb21lLmluc3RhbmNpYSkge1xyXG4gICAgICAgICAgICBBUElIb21lLmluc3RhbmNpYSA9IG5ldyBBUElIb21lKCk7XHJcbiAgICAgICAgICAgfVxyXG4gICBcclxuICAgICAgICAgICByZXR1cm4gQVBJSG9tZS5pbnN0YW5jaWE7XHJcbiAgICAgICB9XHJcbiAgICAgIGdldEFydGljbGVzPWFzeW5jKCk9PlxyXG4gICAgICB7XHJcbiAgICAgICAgY29uc3QgdXJsMj10aGlzLnVybCtcImFydGljbGUvZ2V0YXJ0aWNsZXNcIjtcclxuICAgICAgICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgICAgIHVybDogdXJsMixcclxuICAgICAgICAgICAgaGVhZGVyczogeyB9XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID1hd2FpdCBheGlvcyhjb25maWcpO1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0PWF3YWl0IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIFxyXG4gICAgICB9IFxyXG4gICAgICBnZXRDYXRlZ29yaWVzPWFzeW5jKCk9PlxyXG4gICAgICB7XHJcbiAgICAgICAgY29uc3QgdXJsMj10aGlzLnVybCtcImNhdGVnb3J5L2dldGNhdGVnb3JpZXNcIjtcclxuICAgICAgICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgICAgIHVybDogdXJsMixcclxuICAgICAgICAgICAgaGVhZGVyczogeyB9XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID1hd2FpdCBheGlvcyhjb25maWcpO1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0PWF3YWl0IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIFxyXG4gICAgICB9ICBcclxuICAgICAgZ2V0QXJ0aWNsZXNFeHByZXNzaW9uPWFzeW5jKGxldHRlcm5hbWUpPT5cclxuICAgICAge1xyXG4gICAgICAgIGNvbnN0IHVybDI9dGhpcy51cmwrXCJnZXRhcnRpY2xlc2J5bmFtZT9wbmFtZT1cIitsZXR0ZXJuYW1lO1xyXG4gICAgICAgICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICAgICAgdXJsOiB1cmwyLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7IH1cclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPWF3YWl0IGF4aW9zKGNvbmZpZyk7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHQ9YXdhaXQgcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgXHJcbiAgICAgIH0gICAgIFxyXG4gICAgICBnZXRBcnRpY2xlPWFzeW5jKGJhcmNvZGUpPT5cclxuICAgICAge1xyXG4gICAgICAgIHRyeVxyXG4gICAgICAgIHtcclxuICAgICAgICBjb25zdCB1cmwyPXRoaXMudXJsK1wiYXJ0aWNsZT9wYmFyY29kZT1cIitiYXJjb2RlO1xyXG4gICAgICAgICB2YXIgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHJlZGlyZWN0OiAnZm9sbG93J1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgY29uc3QgcmVzcG9uc2UgPWF3YWl0IGZldGNoKHVybDIsIHJlcXVlc3RPcHRpb25zKTtcclxuICAgICAgICAgY29uc3QgcmVzdWx0PWF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgIGNhdGNoKGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZmlsdGVyQXJ0aWNsZWJ5Q2F0ZWdvcnk9YXN5bmMobmFtZSk9PlxyXG4gICAgICB7XHJcbiAgICAgICBcclxuICAgICAgICBjb25zdCB1cmwyPXRoaXMudXJsK1wiYXJ0aWNsZS9maWx0ZXJhcnRpY2xlc2J5Y2F0ZWdvcnk/cG5hbWU9XCIrbmFtZTtcclxuICAgICAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICAgIHVybDogdXJsMixcclxuICAgICAgICAgIGhlYWRlcnM6IHsgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPWF3YWl0IGF4aW9zKGNvbmZpZyk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0PWF3YWl0IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgICBnZXRBcnRpY2xlcz1hc3luYygpPT5cclxuICAgICAge1xyXG4gICAgICAgIGNvbnN0IHVybDI9dGhpcy51cmwrXCJhcnRpY2xlL2dldGFydGljbGVzXCI7XHJcbiAgICAgICAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgICAgICB1cmw6IHVybDIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgfVxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9YXdhaXQgYXhpb3MoY29uZmlnKTtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdD1hd2FpdCByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICBcclxuICAgICAgfSBcclxuICAgICBcclxufSJdLCJzb3VyY2VSb290IjoiIn0=