webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/dist/index.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var src_sections_MainHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/sections/MainHeader */ \"./src/sections/MainHeader.jsx\");\n/* harmony import */ var src_sections_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/sections/Nav */ \"./src/sections/Nav.jsx\");\n/* harmony import */ var src_sections_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/sections/Footer */ \"./src/sections/Footer.jsx\");\n/* harmony import */ var src_components_PageLoading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/PageLoading */ \"./src/components/PageLoading.jsx\");\n/* harmony import */ var src_components_MenuBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/MenuBtn */ \"./src/components/MenuBtn.jsx\");\n/* harmony import */ var src_components_Error404__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/components/Error404 */ \"./src/components/Error404.jsx\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_10__);\n\n\nvar _jsxFileName = \"/Users/ilya_makov/projects/hera-next/src/pages/_app.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n/* eslint-disable react/jsx-filename-extension */\n\n\n\n\n\n\n\n\n\n\n\nfunction App(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      isLoaded = _useState[0],\n      setLoaded = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      menuOpen = _useState2[0],\n      setMenuOpen = _useState2[1];\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])(),\n      route = _useRouter.route,\n      asPath = _useRouter.asPath,\n      category = _useRouter.query.category;\n\n  var handleMenuOpen = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (preventScroll) {\n    var animateClassName = menuOpen ? \"menu-rolling-out\" : 'menu-rolling-in';\n    document.body.classList.add(animateClassName);\n    if (preventScroll && menuOpen) document.body.classList.add('nav-toggle');\n    setTimeout(function () {\n      document.body.classList.remove(animateClassName);\n      document.body.classList.remove('nav-toggle');\n      setMenuOpen(function (prev) {\n        return !prev;\n      });\n    }, 250);\n  }, [menuOpen]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (asPath.includes('#')) {\n      document.body.classList.add('static');\n      setTimeout(function () {\n        document.body.classList.remove('static');\n      }, 250);\n    }\n  }, [asPath]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (route.includes('ar')) {\n      document.body.classList.remove('direction-ltr');\n      document.body.classList.add('direction-rtl');\n      document.documentElement.lang = 'ar';\n      document.dir = 'rtl';\n    } else {\n      document.body.classList.remove('direction-rtl');\n      document.body.classList.add('direction-ltr');\n      document.documentElement.lang = 'en';\n      document.dir = 'ltr';\n    }\n\n    if (category) {\n      document.body.classList.remove('home');\n      document.body.classList.remove('category');\n      document.body.classList.add('category');\n    } else {\n      document.body.classList.remove('category');\n      document.body.classList.remove('home');\n      document.body.classList.add('home');\n    }\n  }, [route]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (document.readyState !== 'complete') {\n      window.onload = function () {\n        setLoaded(true);\n        document.body.classList.add('content-loaded');\n      };\n    } else {\n      setLoaded(true);\n      document.body.classList.add('content-loaded');\n    }\n  }, []);\n  var isMainPage = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(function () {\n    return ['/', '/ar'].includes(route);\n  }, [route]);\n  if (route.includes('error')) return __jsx(src_components_Error404__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 39\n    }\n  });\n  return __jsx(recoil__WEBPACK_IMPORTED_MODULE_2__[\"RecoilRoot\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 5\n    }\n  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, !isLoaded && __jsx(src_components_PageLoading__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 23\n    }\n  }), __jsx(src_components_MenuBtn__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onMenuOpen: handleMenuOpen,\n    menuOpen: menuOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 9\n    }\n  }), __jsx(src_sections_Nav__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onMenuOpen: handleMenuOpen,\n    menuOpen: menuOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: \"wrapper  \".concat(menuOpen ? 'wrapper--menu-open' : ''),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 9\n    }\n  }, isMainPage && __jsx(src_sections_MainHeader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onMenuOpen: handleMenuOpen,\n    menuOpen: menuOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 13\n    }\n  }), __jsx(\"main\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 11\n    }\n  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 13\n    }\n  }))), __jsx(src_sections_Footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 11\n    }\n  }))));\n}\n\n_s(App, \"mRlScnGHhCKqDsDHEQAlFnccjg4=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAuanM/MjI1NCJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ1c2VTdGF0ZSIsImlzTG9hZGVkIiwic2V0TG9hZGVkIiwibWVudU9wZW4iLCJzZXRNZW51T3BlbiIsInVzZVJvdXRlciIsInJvdXRlIiwiYXNQYXRoIiwiY2F0ZWdvcnkiLCJxdWVyeSIsImhhbmRsZU1lbnVPcGVuIiwidXNlQ2FsbGJhY2siLCJwcmV2ZW50U2Nyb2xsIiwiYW5pbWF0ZUNsYXNzTmFtZSIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJwcmV2IiwidXNlRWZmZWN0IiwiaW5jbHVkZXMiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwiZGlyIiwicmVhZHlTdGF0ZSIsIndpbmRvdyIsIm9ubG9hZCIsImlzTWFpblBhZ2UiLCJSZWFjdCIsInVzZU1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQSxTQUFTQSxHQUFULE9BQXVDO0FBQUE7O0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTs7QUFBQSxrQkFDUEMsc0RBQVEsQ0FBQyxJQUFELENBREQ7QUFBQSxNQUM5QkMsUUFEOEI7QUFBQSxNQUNwQkMsU0FEb0I7O0FBQUEsbUJBRUxGLHNEQUFRLENBQUMsS0FBRCxDQUZIO0FBQUEsTUFFOUJHLFFBRjhCO0FBQUEsTUFFcEJDLFdBRm9COztBQUFBLG1CQU9qQ0MsNkRBQVMsRUFQd0I7QUFBQSxNQUluQ0MsS0FKbUMsY0FJbkNBLEtBSm1DO0FBQUEsTUFLbkNDLE1BTG1DLGNBS25DQSxNQUxtQztBQUFBLE1BTTFCQyxRQU4wQixjQU1uQ0MsS0FObUMsQ0FN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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRzBCLFVBQVUsSUFDVCxNQUFDLCtEQUFEO0FBQVksY0FBVSxFQUFFbkIsY0FBeEI7QUFBd0MsWUFBUSxFQUFFUCxRQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFELHlGQUFlSixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQUpGLEVBUUUsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsQ0FKRixDQURGLENBREY7QUFtQkQ7O0dBN0ZRRixHO1VBT0hRLHFEOzs7S0FQR1IsRztBQStGTUEsa0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1maWxlbmFtZS1leHRlbnNpb24gKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlY29pbFJvb3QgfSBmcm9tICdyZWNvaWwnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgTWFpbkhlYWRlciBmcm9tICdzcmMvc2VjdGlvbnMvTWFpbkhlYWRlcic7XG5pbXBvcnQgTmF2IGZyb20gJ3NyYy9zZWN0aW9ucy9OYXYnO1xuaW1wb3J0IEZvb3RlciBmcm9tICdzcmMvc2VjdGlvbnMvRm9vdGVyJztcbmltcG9ydCBQYWdlTG9hZGluZyBmcm9tICdzcmMvY29tcG9uZW50cy9QYWdlTG9hZGluZyc7XG5pbXBvcnQgTWVudUJ0biBmcm9tICdzcmMvY29tcG9uZW50cy9NZW51QnRuJztcblxuaW1wb3J0IEVycm9yNDA0IGZyb20gJ3NyYy9jb21wb25lbnRzL0Vycm9yNDA0JztcblxuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuc2Nzcyc7XG5cbmZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW2lzTG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFttZW51T3Blbiwgc2V0TWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7XG4gICAgcm91dGUsXG4gICAgYXNQYXRoLFxuICAgIHF1ZXJ5OiB7IGNhdGVnb3J5IH1cbiAgfSA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGhhbmRsZU1lbnVPcGVuID0gdXNlQ2FsbGJhY2soXG4gICAgKHByZXZlbnRTY3JvbGwpID0+IHtcbiAgICAgIGNvbnN0IGFuaW1hdGVDbGFzc05hbWUgPSBtZW51T3BlblxuICAgICAgICA/IGBtZW51LXJvbGxpbmctb3V0YFxuICAgICAgICA6ICdtZW51LXJvbGxpbmctaW4nO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKGFuaW1hdGVDbGFzc05hbWUpO1xuICAgICAgaWYgKHByZXZlbnRTY3JvbGwgJiYgbWVudU9wZW4pIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbmF2LXRvZ2dsZScpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShhbmltYXRlQ2xhc3NOYW1lKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCduYXYtdG9nZ2xlJyk7XG4gICAgICAgIHNldE1lbnVPcGVuKChwcmV2KSA9PiAhcHJldik7XG4gICAgICB9LCAyNTApO1xuICAgIH0sXG4gICAgW21lbnVPcGVuXVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFzUGF0aC5pbmNsdWRlcygnIycpKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3N0YXRpYycpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc3RhdGljJyk7XG4gICAgICB9LCAyNTApO1xuICAgIH1cbiAgfSwgW2FzUGF0aF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJvdXRlLmluY2x1ZGVzKCdhcicpKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2RpcmVjdGlvbi1sdHInKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZGlyZWN0aW9uLXJ0bCcpO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSAnYXInO1xuICAgICAgZG9jdW1lbnQuZGlyID0gJ3J0bCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGlyZWN0aW9uLXJ0bCcpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkaXJlY3Rpb24tbHRyJyk7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9ICdlbic7XG4gICAgICBkb2N1bWVudC5kaXIgPSAnbHRyJztcbiAgICB9XG5cbiAgICBpZiAoY2F0ZWdvcnkpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaG9tZScpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdjYXRlZ29yeScpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2NhdGVnb3J5Jyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2hvbWUnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuICAgIH1cbiAgfSwgW3JvdXRlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2NvbXBsZXRlJykge1xuICAgICAgd2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgc2V0TG9hZGVkKHRydWUpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtbG9hZGVkJyk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRMb2FkZWQodHJ1ZSk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtbG9hZGVkJyk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgaXNNYWluUGFnZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gWycvJywgJy9hciddLmluY2x1ZGVzKHJvdXRlKSwgW3JvdXRlXSk7XG5cbiAgaWYgKHJvdXRlLmluY2x1ZGVzKCdlcnJvcicpKSByZXR1cm4gPEVycm9yNDA0IC8+O1xuXG4gIHJldHVybiAoXG4gICAgPFJlY29pbFJvb3Q+XG4gICAgICA8PlxuICAgICAgICB7IWlzTG9hZGVkICYmIDxQYWdlTG9hZGluZyAvPn1cbiAgICAgICAgPE1lbnVCdG4gb25NZW51T3Blbj17aGFuZGxlTWVudU9wZW59IG1lbnVPcGVuPXttZW51T3Blbn0gLz5cbiAgICAgICAgPE5hdiBvbk1lbnVPcGVuPXtoYW5kbGVNZW51T3Blbn0gbWVudU9wZW49e21lbnVPcGVufSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHdyYXBwZXIgICR7bWVudU9wZW4gPyAnd3JhcHBlci0tbWVudS1vcGVuJyA6ICcnfWB9PlxuICAgICAgICAgIHtpc01haW5QYWdlICYmIChcbiAgICAgICAgICAgIDxNYWluSGVhZGVyIG9uTWVudU9wZW49e2hhbmRsZU1lbnVPcGVufSBtZW51T3Blbj17bWVudU9wZW59IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8L21haW4+XG5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgPC9SZWNvaWxSb290PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ })

})