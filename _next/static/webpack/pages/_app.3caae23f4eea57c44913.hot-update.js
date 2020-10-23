webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/dist/index.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var src_sections_MainHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/sections/MainHeader */ \"./src/sections/MainHeader.jsx\");\n/* harmony import */ var src_sections_PageHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/sections/PageHeader */ \"./src/sections/PageHeader.jsx\");\n/* harmony import */ var src_sections_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/sections/Nav */ \"./src/sections/Nav.jsx\");\n/* harmony import */ var src_sections_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/sections/Footer */ \"./src/sections/Footer.jsx\");\n/* harmony import */ var src_components_PageLoading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/PageLoading */ \"./src/components/PageLoading.jsx\");\n/* harmony import */ var src_components_MenuBtn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/components/MenuBtn */ \"./src/components/MenuBtn.jsx\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_10__);\n\n\nvar _jsxFileName = \"/Users/ilya_makov/projects/hera-next/src/pages/_app.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n/* eslint-disable react/jsx-filename-extension */\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isLoaded = _useState[0],\n      setLoaded = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      menuOpen = _useState2[0],\n      setMenuOpen = _useState2[1];\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])(),\n      route = _useRouter.route;\n\n  var handleMenuOpen = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    var animateClassName = menuOpen ? 'menu-rolling-out' : 'menu-rolling-in';\n    document.body.classList.add(animateClassName);\n    setTimeout(function () {\n      document.body.classList.remove(animateClassName);\n      setMenuOpen(function (prev) {\n        return !prev;\n      });\n    }, 250);\n  }, [menuOpen]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (route.includes('ar')) {\n      document.body.className = 'direction-rtl';\n      document.documentElement.lang = 'ar';\n      document.dir = 'rtl';\n    } else {\n      document.body.className = 'direction-ltr';\n      document.documentElement.lang = 'en';\n      document.dir = 'ltr';\n    }\n  }, [route]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (document.readyState !== 'complete') {\n      window.onload = function () {\n        setLoaded(true);\n      };\n    } else {\n      setLoaded(true);\n    }\n  }, []);\n  var isMainPage = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(function () {\n    return ['/', '/ar'].includes(route);\n  }, []);\n  return __jsx(recoil__WEBPACK_IMPORTED_MODULE_2__[\"RecoilRoot\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 5\n    }\n  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, !isLoaded && __jsx(src_components_PageLoading__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 23\n    }\n  }), __jsx(src_components_MenuBtn__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    onMenuOpen: handleMenuOpen,\n    menuOpen: menuOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }), __jsx(src_sections_Nav__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    onMenuOpen: handleMenuOpen,\n    menuOpen: menuOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: \"wrapper \".concat(isMainPage ? 'wrapper--main' : 'wrapper--page', \" \").concat(menuOpen ? 'wrapper--menu-open' : ''),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }, isMainPage ? __jsx(src_sections_MainHeader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onMenuOpen: handleMenuOpen,\n    menuOpen: menuOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }\n  }) : __jsx(src_sections_PageHeader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onMenuOpen: handleMenuOpen,\n    menuOpen: menuOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }\n  }), __jsx(\"main\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 11\n    }\n  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  }))), __jsx(src_sections_Footer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 11\n    }\n  }))));\n}\n\n_s(MyApp, \"JYQmmYoFsJ7lSIJGgcv/vA/VMG0=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAuanM/MjI1NCJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZVN0YXRlIiwiaXNMb2FkZWQiLCJzZXRMb2FkZWQiLCJtZW51T3BlbiIsInNldE1lbnVPcGVuIiwidXNlUm91dGVyIiwicm91dGUiLCJoYW5kbGVNZW51T3BlbiIsInVzZUNhbGxiYWNrIiwiYW5pbWF0ZUNsYXNzTmFtZSIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJwcmV2IiwidXNlRWZmZWN0IiwiaW5jbHVkZXMiLCJjbGFzc05hbWUiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwiZGlyIiwicmVhZHlTdGF0ZSIsIndpbmRvdyIsIm9ubG9hZCIsImlzTWFpblBhZ2UiLCJSZWFjdCIsInVzZU1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxLQUFULE9BQXlDO0FBQUE7O0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTs7QUFBQSxrQkFDVEMsc0RBQVEsQ0FBQyxLQUFELENBREM7QUFBQSxNQUNoQ0MsUUFEZ0M7QUFBQSxNQUN0QkMsU0FEc0I7O0FBQUEsbUJBRVBGLHNEQUFRLENBQUMsS0FBRCxDQUZEO0FBQUEsTUFFaENHLFFBRmdDO0FBQUEsTUFFdEJDLFdBRnNCOztBQUFBLG1CQUdyQkMsNkRBQVMsRUFIWTtBQUFBLE1BRy9CQyxLQUgrQixjQUcvQkEsS0FIK0I7O0FBS3ZDLE1BQU1DLGNBQWMsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ3ZDLFFBQU1DLGdCQUFnQixHQUFHTixRQUFRLEdBQUcsa0JBQUgsR0FBd0IsaUJBQXpEO0FB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkRixDQUpGLENBREYsQ0FERjtBQXlCRDs7R0EvRFFGLEs7VUFHV1EscUQ7OztLQUhYUixLO0FBaUVNQSxvRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWZpbGVuYW1lLWV4dGVuc2lvbiAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVjb2lsUm9vdCB9IGZyb20gJ3JlY29pbCc7XG5cbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IE1haW5IZWFkZXIgZnJvbSAnc3JjL3NlY3Rpb25zL01haW5IZWFkZXInO1xuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSAnc3JjL3NlY3Rpb25zL1BhZ2VIZWFkZXInO1xuaW1wb3J0IE5hdiBmcm9tICdzcmMvc2VjdGlvbnMvTmF2JztcbmltcG9ydCBGb290ZXIgZnJvbSAnc3JjL3NlY3Rpb25zL0Zvb3Rlcic7XG5pbXBvcnQgUGFnZUxvYWRpbmcgZnJvbSAnc3JjL2NvbXBvbmVudHMvUGFnZUxvYWRpbmcnO1xuaW1wb3J0IE1lbnVCdG4gZnJvbSAnc3JjL2NvbXBvbmVudHMvTWVudUJ0bic7XG5cbmltcG9ydCAnLi4vc3R5bGVzL3N0eWxlLnNjc3MnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW2lzTG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyByb3V0ZSB9ID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlTWVudU9wZW4gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgYW5pbWF0ZUNsYXNzTmFtZSA9IG1lbnVPcGVuID8gJ21lbnUtcm9sbGluZy1vdXQnIDogJ21lbnUtcm9sbGluZy1pbic7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKGFuaW1hdGVDbGFzc05hbWUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKGFuaW1hdGVDbGFzc05hbWUpO1xuICAgICAgc2V0TWVudU9wZW4oKHByZXYpID0+ICFwcmV2KTtcbiAgICB9LCAyNTApO1xuICB9LCBbbWVudU9wZW5dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyb3V0ZS5pbmNsdWRlcygnYXInKSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSAnZGlyZWN0aW9uLXJ0bCc7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9ICdhcic7XG4gICAgICBkb2N1bWVudC5kaXIgPSAncnRsJztcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSAnZGlyZWN0aW9uLWx0cic7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9ICdlbic7XG4gICAgICBkb2N1bWVudC5kaXIgPSAnbHRyJztcbiAgICB9XG4gIH0sIFtyb3V0ZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdjb21wbGV0ZScpIHtcbiAgICAgIHdpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHNldExvYWRlZCh0cnVlKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldExvYWRlZCh0cnVlKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBpc01haW5QYWdlID0gUmVhY3QudXNlTWVtbygoKSA9PiBbJy8nLCAnL2FyJ10uaW5jbHVkZXMocm91dGUpLCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVjb2lsUm9vdD5cbiAgICAgIDw+XG4gICAgICAgIHshaXNMb2FkZWQgJiYgPFBhZ2VMb2FkaW5nIC8+fVxuICAgICAgICA8TWVudUJ0biBvbk1lbnVPcGVuPXtoYW5kbGVNZW51T3Blbn0gbWVudU9wZW49e21lbnVPcGVufSAvPlxuICAgICAgICA8TmF2IG9uTWVudU9wZW49e2hhbmRsZU1lbnVPcGVufSBtZW51T3Blbj17bWVudU9wZW59IC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2B3cmFwcGVyICR7XG4gICAgICAgICAgICBpc01haW5QYWdlID8gJ3dyYXBwZXItLW1haW4nIDogJ3dyYXBwZXItLXBhZ2UnXG4gICAgICAgICAgfSAke21lbnVPcGVuID8gJ3dyYXBwZXItLW1lbnUtb3BlbicgOiAnJ31gfVxuICAgICAgICA+XG4gICAgICAgICAge2lzTWFpblBhZ2UgPyAoXG4gICAgICAgICAgICA8TWFpbkhlYWRlciBvbk1lbnVPcGVuPXtoYW5kbGVNZW51T3Blbn0gbWVudU9wZW49e21lbnVPcGVufSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8UGFnZUhlYWRlciBvbk1lbnVPcGVuPXtoYW5kbGVNZW51T3Blbn0gbWVudU9wZW49e21lbnVPcGVufSAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPC9tYWluPlxuXG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgIDwvUmVjb2lsUm9vdD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ })

})