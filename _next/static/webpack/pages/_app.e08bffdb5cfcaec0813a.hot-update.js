webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/dist/index.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var src_sections_MainHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/sections/MainHeader */ \"./src/sections/MainHeader.jsx\");\n/* harmony import */ var src_sections_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/sections/Nav */ \"./src/sections/Nav.jsx\");\n/* harmony import */ var src_sections_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/sections/Footer */ \"./src/sections/Footer.jsx\");\n/* harmony import */ var src_components_PageLoading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/PageLoading */ \"./src/components/PageLoading.jsx\");\n/* harmony import */ var src_components_MenuBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/MenuBtn */ \"./src/components/MenuBtn.jsx\");\n/* harmony import */ var src_components_Error404__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/components/Error404 */ \"./src/components/Error404.jsx\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_10__);\n\n\nvar _jsxFileName = \"/Users/ilya_makov/projects/hera-next/src/pages/_app.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n/* eslint-disable react/jsx-filename-extension */\n\n\n\n\n\n\n\n\n\n\n\nfunction App(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      isLoaded = _useState[0],\n      setLoaded = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      menuOpen = _useState2[0],\n      setMenuOpen = _useState2[1];\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])(),\n      route = _useRouter.route,\n      asPath = _useRouter.asPath,\n      category = _useRouter.query.category;\n\n  var handleMenuOpen = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (preventScroll) {\n    var animateClassName = menuOpen ? \"menu-rolling-out\" : 'menu-rolling-in';\n    document.body.classList.add(animateClassName);\n    if (preventScroll && menuOpen) document.body.classList.add('nav-toggle');\n    setTimeout(function () {\n      document.body.classList.remove(animateClassName);\n      document.body.classList.remove('nav-toggle');\n      setMenuOpen(function (prev) {\n        return !prev;\n      });\n    }, 250);\n  }, [menuOpen]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (asPath.includes('#')) {\n      alert('a');\n      document.body.classList.add('static');\n      setTimeout(function () {\n        document.body.classList.remove('static');\n      }, 250);\n    }\n  }, [asPath]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (route.includes('ar')) {\n      document.body.classList.remove('direction-ltr');\n      document.body.classList.add('direction-rtl');\n      document.documentElement.lang = 'ar';\n      document.dir = 'rtl';\n    } else {\n      document.body.classList.remove('direction-rtl');\n      document.body.classList.add('direction-ltr');\n      document.documentElement.lang = 'en';\n      document.dir = 'ltr';\n    }\n\n    if (category) {\n      document.body.classList.remove('home');\n      document.body.classList.remove('category');\n      document.body.classList.add('category');\n    } else {\n      document.body.classList.remove('category');\n      document.body.classList.remove('home');\n      document.body.classList.add('home');\n    }\n  }, [route]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (document.readyState !== 'complete') {\n      window.onload = function () {\n        setLoaded(true);\n        document.body.classList.add('content-loaded');\n      };\n    } else {\n      setLoaded(true);\n      document.body.classList.add('content-loaded');\n    }\n  }, []);\n  var isMainPage = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(function () {\n    return ['/', '/ar'].includes(route);\n  }, [route]);\n  if (route.includes('error')) return __jsx(src_components_Error404__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 39\n    }\n  });\n  return __jsx(recoil__WEBPACK_IMPORTED_MODULE_2__[\"RecoilRoot\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 5\n    }\n  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, !isLoaded && __jsx(src_components_PageLoading__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 23\n    }\n  }), __jsx(src_components_MenuBtn__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onMenuOpen: handleMenuOpen,\n    menuOpen: menuOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 9\n    }\n  }), __jsx(src_sections_Nav__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onMenuOpen: handleMenuOpen,\n    menuOpen: menuOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: \"wrapper  \".concat(menuOpen ? 'wrapper--menu-open' : ''),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 9\n    }\n  }, isMainPage && __jsx(src_sections_MainHeader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onMenuOpen: handleMenuOpen,\n    menuOpen: menuOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 13\n    }\n  }), __jsx(\"main\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 11\n    }\n  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 13\n    }\n  }))), __jsx(src_sections_Footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 11\n    }\n  }))));\n}\n\n_s(App, \"mRlScnGHhCKqDsDHEQAlFnccjg4=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAuanM/MjI1NCJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ1c2VTdGF0ZSIsImlzTG9hZGVkIiwic2V0TG9hZGVkIiwibWVudU9wZW4iLCJzZXRNZW51T3BlbiIsInVzZVJvdXRlciIsInJvdXRlIiwiYXNQYXRoIiwiY2F0ZWdvcnkiLCJxdWVyeSIsImhhbmRsZU1lbnVPcGVuIiwidXNlQ2FsbGJhY2siLCJwcmV2ZW50U2Nyb2xsIiwiYW5pbWF0ZUNsYXNzTmFtZSIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJwcmV2IiwidXNlRWZmZWN0IiwiaW5jbHVkZXMiLCJhbGVydCIsImRvY3VtZW50RWxlbWVudCIsImxhbmciLCJkaXIiLCJyZWFkeVN0YXRlIiwid2luZG93Iiwib25sb2FkIiwiaXNNYWluUGFnZSIsIlJlYWN0IiwidXNlTWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVBLFNBQVNBLEdBQVQsT0FBdUM7QUFBQTs7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhOztBQUFBLGtCQUNQQyxzREFBUSxDQUFDLElBQUQsQ0FERDtBQUFBLE1BQzlCQyxRQUQ4QjtBQUFBLE1BQ3BCQyxTQURvQjs7QUFBQSxtQkFFTEYsc0RBQVEsQ0FBQyxLQUFELENBRkg7QUFBQSxNQUU5QkcsUUFGOEI7QUFBQSxNQUVwQkMsV0FGb0I7O0FBQUEsbUJBT2pDQyw2REFBUyxFQVB3QjtBQUFBLE1BSW5DQyxLQUptQyxjQUluQ0EsS0FKbUM7QUFBQSxNQUtuQ0MsTUFMbUMsY0FLbkNBLE1BTG1DO0FBQUEsTUFNMUJDLFFBTjBCLGNBTW5DQyxLQU5tQyxDQU0xQkQsUUFOMEI7O0FBU3JDLE1BQU1FLGNBQWMsR0FBR0MseURBQVcsQ0FDaEMsVUFBQ0MsYUFBRCxFQUFtQjtBQUNqQixRQUFNQyxnQkFBZ0IsR0FBR1YsUUFBUSx3QkFFN0IsaUJBRko7QUFHQVcsWUFBUSxDQUFDQyxJQUFULENBQWNDLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCSixnQkFBNUI7QUFDQSxRQUFJRCxhQUFhLElBQUlULFFBQXJCLEVBQStCVyxRQUFRLENBQUNDLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsWUFBNUI7QUFDL0JDLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZKLGNBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxTQUFkLENBQXdCRyxNQUF4QixDQUErQk4sZ0JBQS9CO0FBQ0FDLGNBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxTQUFkLENBQXdCRyxNQUF4QixDQUErQixZQUEvQjtBQUNBZixpQkFBVyxDQUFDLFVBQUNnQixJQUFEO0FBQUEsZUFBVSxDQUFDQSxJQUFYO0FBQUEsT0FBRCxDQUFYO0FBQ0QsS0FKUyxFQUlQLEdBSk8sQ0FBVjtBQUtELEdBWitCLEVBYWhDLENBQUNqQixRQUFELENBYmdDLENBQWxDO0FBZ0JBa0IseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSWQsTUFBTSxDQUFDZSxRQUFQLENBQWdCLEdBQWhCLENBQUosRUFBMEI7QUFDeEJDLFdBQUssQ0FBQyxHQUFELENBQUw7QUFDQVQsY0FBUSxDQUFDQyxJQUFULENBQWNDLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLFFBQTVCO0FBQ0FDLGdCQUFVLENBQUMsWUFBTTtBQUNmSixnQkFBUSxDQUFDQyxJQUFULENBQWNDLFNBQWQsQ0FBd0JHLE1BQXhCLENBQStCLFFBQS9CO0FBQ0QsT0FGUyxFQUVQLEdBRk8sQ0FBVjtBQUdEO0FBQ0YsR0FSUSxFQVFOLENBQUNaLE1BQUQsQ0FSTSxDQUFUO0FBVUFjLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlmLEtBQUssQ0FBQ2dCLFFBQU4sQ0FBZSxJQUFmLENBQUosRUFBMEI7QUFDeEJSLGNBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxTQUFkLENBQXdCRyxNQUF4QixDQUErQixlQUEvQjtBQUNBTCxjQUFRLENBQUNDLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsZUFBNUI7QUFDQUgsY0FBUSxDQUFDVSxlQUFULENBQXlCQyxJQUF6QixHQUFnQyxJQUFoQztBQUNBWCxjQUFRLENBQUNZLEdBQVQsR0FBZSxLQUFmO0FBQ0QsS0FMRCxNQUtPO0FBQ0xaLGNBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxTQUFkLENBQXdCRyxNQUF4QixDQUErQixlQUEvQjtBQUNBTCxjQUFRLENBQUNDLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsZUFBNUI7QUFDQUgsY0FBUSxDQUFDVSxlQUFULENBQXlCQyxJQUF6QixHQUFnQyxJQUFoQztBQUNBWCxjQUFRLENBQUNZLEdBQVQsR0FBZSxLQUFmO0FBQ0Q7O0FBRUQsUUFBSWxCLFFBQUosRUFBYztBQUNaTSxjQUFRLENBQUNDLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkcsTUFBeEIsQ0FBK0IsTUFBL0I7QUFDQUwsY0FBUSxDQUFDQyxJQUFULENBQWNDLFNBQWQsQ0FBd0JHLE1BQXhCLENBQStCLFVBQS9CO0FBQ0FMLGNBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxTQUFkLENBQXdCQyxHQUF4QixDQUE0QixVQUE1QjtBQUNELEtBSkQsTUFJTztBQUNMSCxjQUFRLENBQUNDLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkcsTUFBeEIsQ0FBK0IsVUFBL0I7QUFDQUwsY0FBUSxDQUFDQyxJQUFULENBQWNDLFNBQWQsQ0FBd0JHLE1BQXhCLENBQStCLE1BQS9CO0FBQ0FMLGNBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxTQUFkLENBQXdCQyxHQUF4QixDQUE0QixNQUE1QjtBQUNEO0FBQ0YsR0F0QlEsRUFzQk4sQ0FBQ1gsS0FBRCxDQXRCTSxDQUFUO0FBd0JBZSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJUCxRQUFRLENBQUNhLFVBQVQsS0FBd0IsVUFBNUIsRUFBd0M7QUFDdENDLFlBQU0sQ0FBQ0MsTUFBUCxHQUFnQixZQUFNO0FBQ3BCM0IsaUJBQVMsQ0FBQyxJQUFELENBQVQ7QUFDQVksZ0JBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxTQUFkLENBQXdCQyxHQUF4QixDQUE0QixnQkFBNUI7QUFDRCxPQUhEO0FBSUQsS0FMRCxNQUtPO0FBQ0xmLGVBQVMsQ0FBQyxJQUFELENBQVQ7QUFDQVksY0FBUSxDQUFDQyxJQUFULENBQWNDLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLGdCQUE1QjtBQUNEO0FBQ0YsR0FWUSxFQVVOLEVBVk0sQ0FBVDtBQVlBLE1BQU1hLFVBQVUsR0FBR0MsNENBQUssQ0FBQ0MsT0FBTixDQUFjO0FBQUEsV0FBTSxDQUFDLEdBQUQsRUFBTSxLQUFOLEVBQWFWLFFBQWIsQ0FBc0JoQixLQUF0QixDQUFOO0FBQUEsR0FBZCxFQUFrRCxDQUFDQSxLQUFELENBQWxELENBQW5CO0FBRUEsTUFBSUEsS0FBSyxDQUFDZ0IsUUFBTixDQUFlLE9BQWYsQ0FBSixFQUE2QixPQUFPLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQO0FBRTdCLFNBQ0UsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsbUVBQ0csQ0FBQ3JCLFFBQUQsSUFBYSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEaEIsRUFFRSxNQUFDLDhEQUFEO0FBQVMsY0FBVSxFQUFFUyxjQUFyQjtBQUFxQyxZQUFRLEVBQUVQLFFBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsd0RBQUQ7QUFBSyxjQUFVLEVBQUVPLGNBQWpCO0FBQWlDLFlBQVEsRUFBRVAsUUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUU7QUFBSyxhQUFTLHFCQUFjQSxRQUFRLEdBQUcsb0JBQUgsR0FBMEIsRUFBaEQsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0cyQixVQUFVLElBQ1QsTUFBQywrREFBRDtBQUFZLGNBQVUsRUFBRXBCLGNBQXhCO0FBQXdDLFlBQVEsRUFBRVAsUUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRCx5RkFBZUosU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsQ0FKRixFQVFFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBSkYsQ0FERixDQURGO0FBbUJEOztHQTlGUUYsRztVQU9IUSxxRDs7O0tBUEdSLEc7QUFnR01BLGtFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWNvaWxSb290IH0gZnJvbSAncmVjb2lsJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IE1haW5IZWFkZXIgZnJvbSAnc3JjL3NlY3Rpb25zL01haW5IZWFkZXInO1xuaW1wb3J0IE5hdiBmcm9tICdzcmMvc2VjdGlvbnMvTmF2JztcbmltcG9ydCBGb290ZXIgZnJvbSAnc3JjL3NlY3Rpb25zL0Zvb3Rlcic7XG5pbXBvcnQgUGFnZUxvYWRpbmcgZnJvbSAnc3JjL2NvbXBvbmVudHMvUGFnZUxvYWRpbmcnO1xuaW1wb3J0IE1lbnVCdG4gZnJvbSAnc3JjL2NvbXBvbmVudHMvTWVudUJ0bic7XG5cbmltcG9ydCBFcnJvcjQwNCBmcm9tICdzcmMvY29tcG9uZW50cy9FcnJvcjQwNCc7XG5cbmltcG9ydCAnLi4vc3R5bGVzL3N0eWxlLnNjc3MnO1xuXG5mdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IFtpc0xvYWRlZCwgc2V0TG9hZGVkXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbbWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qge1xuICAgIHJvdXRlLFxuICAgIGFzUGF0aCxcbiAgICBxdWVyeTogeyBjYXRlZ29yeSB9XG4gIH0gPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVNZW51T3BlbiA9IHVzZUNhbGxiYWNrKFxuICAgIChwcmV2ZW50U2Nyb2xsKSA9PiB7XG4gICAgICBjb25zdCBhbmltYXRlQ2xhc3NOYW1lID0gbWVudU9wZW5cbiAgICAgICAgPyBgbWVudS1yb2xsaW5nLW91dGBcbiAgICAgICAgOiAnbWVudS1yb2xsaW5nLWluJztcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChhbmltYXRlQ2xhc3NOYW1lKTtcbiAgICAgIGlmIChwcmV2ZW50U2Nyb2xsICYmIG1lbnVPcGVuKSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ25hdi10b2dnbGUnKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoYW5pbWF0ZUNsYXNzTmFtZSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LXRvZ2dsZScpO1xuICAgICAgICBzZXRNZW51T3BlbigocHJldikgPT4gIXByZXYpO1xuICAgICAgfSwgMjUwKTtcbiAgICB9LFxuICAgIFttZW51T3Blbl1cbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhc1BhdGguaW5jbHVkZXMoJyMnKSkge1xuICAgICAgYWxlcnQoJ2EnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnc3RhdGljJyk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzdGF0aWMnKTtcbiAgICAgIH0sIDI1MCk7XG4gICAgfVxuICB9LCBbYXNQYXRoXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocm91dGUuaW5jbHVkZXMoJ2FyJykpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGlyZWN0aW9uLWx0cicpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkaXJlY3Rpb24tcnRsJyk7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9ICdhcic7XG4gICAgICBkb2N1bWVudC5kaXIgPSAncnRsJztcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdkaXJlY3Rpb24tcnRsJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2RpcmVjdGlvbi1sdHInKTtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gJ2VuJztcbiAgICAgIGRvY3VtZW50LmRpciA9ICdsdHInO1xuICAgIH1cblxuICAgIGlmIChjYXRlZ29yeSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdob21lJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2NhdGVnb3J5Jyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnY2F0ZWdvcnknKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaG9tZScpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG4gICAgfVxuICB9LCBbcm91dGVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnY29tcGxldGUnKSB7XG4gICAgICB3aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBzZXRMb2FkZWQodHJ1ZSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnY29udGVudC1sb2FkZWQnKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldExvYWRlZCh0cnVlKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnY29udGVudC1sb2FkZWQnKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBpc01haW5QYWdlID0gUmVhY3QudXNlTWVtbygoKSA9PiBbJy8nLCAnL2FyJ10uaW5jbHVkZXMocm91dGUpLCBbcm91dGVdKTtcblxuICBpZiAocm91dGUuaW5jbHVkZXMoJ2Vycm9yJykpIHJldHVybiA8RXJyb3I0MDQgLz47XG5cbiAgcmV0dXJuIChcbiAgICA8UmVjb2lsUm9vdD5cbiAgICAgIDw+XG4gICAgICAgIHshaXNMb2FkZWQgJiYgPFBhZ2VMb2FkaW5nIC8+fVxuICAgICAgICA8TWVudUJ0biBvbk1lbnVPcGVuPXtoYW5kbGVNZW51T3Blbn0gbWVudU9wZW49e21lbnVPcGVufSAvPlxuICAgICAgICA8TmF2IG9uTWVudU9wZW49e2hhbmRsZU1lbnVPcGVufSBtZW51T3Blbj17bWVudU9wZW59IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgd3JhcHBlciAgJHttZW51T3BlbiA/ICd3cmFwcGVyLS1tZW51LW9wZW4nIDogJyd9YH0+XG4gICAgICAgICAge2lzTWFpblBhZ2UgJiYgKFxuICAgICAgICAgICAgPE1haW5IZWFkZXIgb25NZW51T3Blbj17aGFuZGxlTWVudU9wZW59IG1lbnVPcGVuPXttZW51T3Blbn0gLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgIDwvbWFpbj5cblxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICA8L1JlY29pbFJvb3Q+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ })

})