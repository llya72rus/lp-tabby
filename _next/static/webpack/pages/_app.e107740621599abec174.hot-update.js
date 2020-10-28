webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/MenuBtn.jsx":
/*!************************************!*\
  !*** ./src/components/MenuBtn.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/ilya_makov/projects/hera-next/src/components/MenuBtn.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar MenuBtn = function MenuBtn(_ref) {\n  _s();\n\n  var onMenuOpen = _ref.onMenuOpen,\n      menuOpen = _ref.menuOpen;\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])(),\n      category = _useRouter.query.category;\n\n  var handleMenuOpen = function handleMenuOpen() {\n    return onMenuOpen(true);\n  };\n\n  return __jsx(\"button\", {\n    onClick: handleMenuOpen,\n    type: \"button\",\n    className: \"menu-btn \".concat(menuOpen ? 'menu-btn--menu-open' : 'menu-btn--menu-closed'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, category ? __jsx(\"svg\", {\n    className: \"menu-btn__svg menu-btn__svg--category\",\n    width: \"52\",\n    height: \"52\",\n    viewBox: \"0 0 52 52\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, __jsx(\"circle\", {\n    cx: \"26\",\n    cy: \"26\",\n    r: \"26\",\n    fill: \"#B0F3C0\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }), __jsx(\"rect\", {\n    x: \"14\",\n    y: \"20\",\n    width: \"24\",\n    height: \"2\",\n    fill: \"#292929\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }), __jsx(\"rect\", {\n    x: \"14\",\n    y: \"25\",\n    width: \"24\",\n    height: \"2\",\n    fill: \"#292929\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }), __jsx(\"rect\", {\n    x: \"14\",\n    y: \"30\",\n    width: \"24\",\n    height: \"2\",\n    fill: \"#292929\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  })) : __jsx(\"svg\", {\n    width: \"52\",\n    height: \"52\",\n    className: \"menu-btn__svg\",\n    viewBox: \"0 0 52 52\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(\"circle\", {\n    cx: \"26\",\n    cy: \"26\",\n    r: \"26\",\n    fill: \"#fff\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }), __jsx(\"path\", {\n    fill: \"#7BB49B\",\n    d: \"M14 20h24v2H14zM14 25h24v2H14zM14 30h24v2H14z\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  })));\n};\n\n_s(MenuBtn, \"SB73tSeQXf4OwIjgFYsvZwdjNK4=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = MenuBtn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuBtn);\n\nvar _c;\n\n$RefreshReg$(_c, \"MenuBtn\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVudUJ0bi5qc3g/MTI5ZSJdLCJuYW1lcyI6WyJNZW51QnRuIiwib25NZW51T3BlbiIsIm1lbnVPcGVuIiwidXNlUm91dGVyIiwiY2F0ZWdvcnkiLCJxdWVyeSIsImhhbmRsZU1lbnVPcGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUE4QjtBQUFBOztBQUFBLE1BQTNCQyxVQUEyQixRQUEzQkEsVUFBMkI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsbUJBR3hDQyw2REFBUyxFQUgrQjtBQUFBLE1BRWpDQyxRQUZpQyxjQUUxQ0MsS0FGMEMsQ0FFakNELFFBRmlDOztBQUs1QyxNQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IsV0FBT0wsVUFBVSxDQUFDLElBQUQsQ0FBakI7QUFDRCxHQUZEOztBQUdBLFNBQ0U7QUFDRSxXQUFPLEVBQUVLLGNBRFg7QUFFRSxRQUFJLEVBQUMsUUFGUDtBQUdFLGFBQVMscUJBQ1BKLFFBQVEsR0FBRyxxQkFBSCxHQUEyQix1QkFENUIsQ0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0dFLFFBQVEsR0FDUDtBQUNFLGFBQVMsRUFBQyx1Q0FEWjtBQUVFLFNBQUssRUFBQyxJQUZSO0FBR0UsVUFBTSxFQUFDLElBSFQ7QUFJRSxXQUFPLEVBQUMsV0FKVjtBQUtFLFFBQUksRUFBQyxNQUxQO0FBTUUsU0FBSyxFQUFDLDRCQU5SO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRRTtBQUFRLE1BQUUsRUFBQyxJQUFYO0FBQWdCLE1BQUUsRUFBQyxJQUFuQjtBQUF3QixLQUFDLEVBQUMsSUFBMUI7QUFBK0IsUUFBSSxFQUFDLFNBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVNFO0FBQU0sS0FBQyxFQUFDLElBQVI7QUFBYSxLQUFDLEVBQUMsSUFBZjtBQUFvQixTQUFLLEVBQUMsSUFBMUI7QUFBK0IsVUFBTSxFQUFDLEdBQXRDO0FBQTBDLFFBQUksRUFBQyxTQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsRUFVRTtBQUFNLEtBQUMsRUFBQyxJQUFSO0FBQWEsS0FBQyxFQUFDLElBQWY7QUFBb0IsU0FBSyxFQUFDLElBQTFCO0FBQStCLFVBQU0sRUFBQyxHQUF0QztBQUEwQyxRQUFJLEVBQUMsU0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLEVBV0U7QUFBTSxLQUFDLEVBQUMsSUFBUjtBQUFhLEtBQUMsRUFBQyxJQUFmO0FBQW9CLFNBQUssRUFBQyxJQUExQjtBQUErQixVQUFNLEVBQUMsR0FBdEM7QUFBMEMsUUFBSSxFQUFDLFNBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixDQURPLEdBZVA7QUFDRSxTQUFLLEVBQUMsSUFEUjtBQUVFLFVBQU0sRUFBQyxJQUZUO0FBR0UsYUFBUyxFQUFDLGVBSFo7QUFJRSxXQUFPLEVBQUMsV0FKVjtBQUtFLFFBQUksRUFBQyxNQUxQO0FBTUUsU0FBSyxFQUFDLDRCQU5SO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRRTtBQUFRLE1BQUUsRUFBQyxJQUFYO0FBQWdCLE1BQUUsRUFBQyxJQUFuQjtBQUF3QixLQUFDLEVBQUMsSUFBMUI7QUFBK0IsUUFBSSxFQUFDLE1BQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVNFO0FBQ0UsUUFBSSxFQUFDLFNBRFA7QUFFRSxLQUFDLEVBQUMsK0NBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLENBdEJKLENBREY7QUF3Q0QsQ0FoREQ7O0dBQU1KLE87VUFHQUcscUQ7OztLQUhBSCxPO0FBa0RTQSxzRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL01lbnVCdG4uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgTWVudUJ0biA9ICh7IG9uTWVudU9wZW4sIG1lbnVPcGVuIH0pID0+IHtcbiAgY29uc3Qge1xuICAgIHF1ZXJ5OiB7IGNhdGVnb3J5IH1cbiAgfSA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGhhbmRsZU1lbnVPcGVuID0gKCkgPT4ge1xuICAgIHJldHVybiBvbk1lbnVPcGVuKHRydWUpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIG9uQ2xpY2s9e2hhbmRsZU1lbnVPcGVufVxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzc05hbWU9e2BtZW51LWJ0biAke1xuICAgICAgICBtZW51T3BlbiA/ICdtZW51LWJ0bi0tbWVudS1vcGVuJyA6ICdtZW51LWJ0bi0tbWVudS1jbG9zZWQnXG4gICAgICB9YH1cbiAgICA+XG4gICAgICB7Y2F0ZWdvcnkgPyAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICBjbGFzc05hbWU9XCJtZW51LWJ0bl9fc3ZnIG1lbnUtYnRuX19zdmctLWNhdGVnb3J5XCJcbiAgICAgICAgICB3aWR0aD1cIjUyXCJcbiAgICAgICAgICBoZWlnaHQ9XCI1MlwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCA1MiA1MlwiXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICA+XG4gICAgICAgICAgPGNpcmNsZSBjeD1cIjI2XCIgY3k9XCIyNlwiIHI9XCIyNlwiIGZpbGw9XCIjQjBGM0MwXCIgLz5cbiAgICAgICAgICA8cmVjdCB4PVwiMTRcIiB5PVwiMjBcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMlwiIGZpbGw9XCIjMjkyOTI5XCIgLz5cbiAgICAgICAgICA8cmVjdCB4PVwiMTRcIiB5PVwiMjVcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMlwiIGZpbGw9XCIjMjkyOTI5XCIgLz5cbiAgICAgICAgICA8cmVjdCB4PVwiMTRcIiB5PVwiMzBcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMlwiIGZpbGw9XCIjMjkyOTI5XCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICApIDogKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgd2lkdGg9XCI1MlwiXG4gICAgICAgICAgaGVpZ2h0PVwiNTJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtYnRuX19zdmdcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTIgNTJcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxjaXJjbGUgY3g9XCIyNlwiIGN5PVwiMjZcIiByPVwiMjZcIiBmaWxsPVwiI2ZmZlwiIC8+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGZpbGw9XCIjN0JCNDlCXCJcbiAgICAgICAgICAgIGQ9XCJNMTQgMjBoMjR2MkgxNHpNMTQgMjVoMjR2MkgxNHpNMTQgMzBoMjR2MkgxNHpcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgKX1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVCdG47XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/MenuBtn.jsx\n");

/***/ })

})