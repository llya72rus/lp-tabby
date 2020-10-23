webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/sections/Nav.jsx":
/*!******************************!*\
  !*** ./src/sections/Nav.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/locales */ \"./src/locales/index.js\");\n/* harmony import */ var src_components_HOCs_withLang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/HOCs/withLang */ \"./src/components/HOCs/withLang.jsx\");\n/* harmony import */ var _components_Toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Toggle */ \"./src/components/Toggle.jsx\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data */ \"./src/data.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/ilya_makov/projects/hera-next/src/sections/Nav.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Nav = function Nav(_ref) {\n  _s();\n\n  var menuOpen = _ref.menuOpen,\n      onMenuOpen = _ref.onMenuOpen,\n      lang = _ref.lang;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n\n  var handleLang = function handleLang(language) {\n    var route = router.query.category ? \"stores/\".concat(router.query.category) : '';\n    console.log('r', r);\n\n    if (language === 'ar') {\n      router.push(\"/ar/\".concat(route));\n    } else {\n      router.push(\"/\".concat(route));\n    }\n\n    onMenuOpen();\n  };\n\n  return __jsx(\"nav\", {\n    className: \"nav \".concat(menuOpen ? 'nav--show' : 'nav--hidden'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(\"button\", {\n    onClick: onMenuOpen,\n    type: \"button\",\n    className: \"menu-btn \".concat(menuOpen ? 'menu-btn--open' : ''),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, __jsx(\"svg\", {\n    width: \"52\",\n    height: \"52\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, __jsx(\"circle\", {\n    cx: \"26\",\n    cy: \"26\",\n    r: \"26\",\n    fill: \"#fff\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 11\n    }\n  }), __jsx(\"path\", {\n    fill: \"#7BB49B\",\n    d: \"M14 20h24v2H14zM14 25h24v2H14zM14 30h24v2H14z\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }))), __jsx(\"ul\", {\n    className: \"nav__main-list\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }, _data__WEBPACK_IMPORTED_MODULE_5__[\"default\"].navigation.map(function (_ref2, i) {\n    var anchor = _ref2.anchor,\n        innerNavigation = _ref2.innerNavigation;\n    return __jsx(\"li\", {\n      key: anchor,\n      className: \"nav__main-item\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 11\n      }\n    }, __jsx(\"a\", {\n      onClick: onMenuOpen,\n      href: anchor,\n      className: \"nav__main-link\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 13\n      }\n    }, Object(src_locales__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(lang).navigation[i].label), !!innerNavigation && __jsx(\"ul\", {\n      className: \"nav__inner-list\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 15\n      }\n    }, innerNavigation.map(function (_ref3, j) {\n      var link = _ref3.link;\n      var categoryLink = lang === 'en' ? link : \"/ar\".concat(link);\n      return __jsx(\"li\", {\n        key: categoryLink,\n        className: \"nav__inner-item\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 21\n        }\n      }, __jsx(\"a\", {\n        onClick: onMenuOpen,\n        href: categoryLink,\n        className: \"nav__inner-link\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 23\n        }\n      }, Object(src_locales__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(lang).navigation[i].innerNavigation[j].label));\n    })));\n  })), __jsx(_components_Toggle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    size: \"sm\",\n    data: [{\n      label: src_locales__WEBPACK_IMPORTED_MODULE_2__[\"ar\"].langSwitch,\n      value: 'ar',\n      id: 'ar'\n    }, {\n      label: src_locales__WEBPACK_IMPORTED_MODULE_2__[\"en\"].langSwitch,\n      value: 'en',\n      id: 'en'\n    }],\n    name: \"lang\",\n    checked: lang,\n    onToggle: handleLang,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Nav, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(src_components_HOCs_withLang__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Nav));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Nav\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL05hdi5qc3g/ODFmYiJdLCJuYW1lcyI6WyJOYXYiLCJtZW51T3BlbiIsIm9uTWVudU9wZW4iLCJsYW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlTGFuZyIsImxhbmd1YWdlIiwicm91dGUiLCJxdWVyeSIsImNhdGVnb3J5IiwiY29uc29sZSIsImxvZyIsInIiLCJwdXNoIiwidCIsIm5hdmlnYXRpb24iLCJtYXAiLCJpIiwiYW5jaG9yIiwiaW5uZXJOYXZpZ2F0aW9uIiwiaTE4biIsImxhYmVsIiwiaiIsImxpbmsiLCJjYXRlZ29yeUxpbmsiLCJhciIsImxhbmdTd2l0Y2giLCJ2YWx1ZSIsImlkIiwiZW4iLCJ3aXRoTGFuZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFvQztBQUFBOztBQUFBLE1BQWpDQyxRQUFpQyxRQUFqQ0EsUUFBaUM7QUFBQSxNQUF2QkMsVUFBdUIsUUFBdkJBLFVBQXVCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzlDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsUUFBRCxFQUFjO0FBQy9CLFFBQU1DLEtBQUssR0FBR0osTUFBTSxDQUFDSyxLQUFQLENBQWFDLFFBQWIsb0JBQ0FOLE1BQU0sQ0FBQ0ssS0FBUCxDQUFhQyxRQURiLElBRVYsRUFGSjtBQUdBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxHQUFaLEVBQWlCQyxDQUFqQjs7QUFDQSxRQUFJTixRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFDckJILFlBQU0sQ0FBQ1UsSUFBUCxlQUFtQk4sS0FBbkI7QUFDRCxLQUZELE1BRU87QUFDTEosWUFBTSxDQUFDVSxJQUFQLFlBQWdCTixLQUFoQjtBQUNEOztBQUNETixjQUFVO0FBQ1gsR0FYRDs7QUFhQSxTQUNFO0FBQUssYUFBUyxnQkFBU0QsUUFBUSxHQUFHLFdBQUgsR0FBaUIsYUFBbEMsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxXQUFPLEVBQUVDLFVBRFg7QUFFRSxRQUFJLEVBQUMsUUFGUDtBQUdFLGFBQVMscUJBQWNELFFBQVEsR0FBRyxnQkFBSCxHQUFzQixFQUE1QyxDQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUNFLFNBQUssRUFBQyxJQURSO0FBRUUsVUFBTSxFQUFDLElBRlQ7QUFHRSxRQUFJLEVBQUMsTUFIUDtBQUlFLFNBQUssRUFBQyw0QkFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUU7QUFBUSxNQUFFLEVBQUMsSUFBWDtBQUFnQixNQUFFLEVBQUMsSUFBbkI7QUFBd0IsS0FBQyxFQUFDLElBQTFCO0FBQStCLFFBQUksRUFBQyxNQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFPRTtBQUNFLFFBQUksRUFBQyxTQURQO0FBRUUsS0FBQyxFQUFDLCtDQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQUxGLENBREYsRUFtQkU7QUFBSSxhQUFTLEVBQUMsZ0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHYyw2Q0FBQyxDQUFDQyxVQUFGLENBQWFDLEdBQWIsQ0FBaUIsaUJBQThCQyxDQUE5QjtBQUFBLFFBQUdDLE1BQUgsU0FBR0EsTUFBSDtBQUFBLFFBQVdDLGVBQVgsU0FBV0EsZUFBWDtBQUFBLFdBQ2hCO0FBQUksU0FBRyxFQUFFRCxNQUFUO0FBQWlCLGVBQVMsRUFBQyxnQkFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsYUFBTyxFQUFFakIsVUFBWjtBQUF3QixVQUFJLEVBQUVpQixNQUE5QjtBQUFzQyxlQUFTLEVBQUMsZ0JBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0UsMkRBQUksQ0FBQ2xCLElBQUQsQ0FBSixDQUFXYSxVQUFYLENBQXNCRSxDQUF0QixFQUF5QkksS0FENUIsQ0FERixFQUlHLENBQUMsQ0FBQ0YsZUFBRixJQUNDO0FBQUksZUFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0EsZUFBZSxDQUFDSCxHQUFoQixDQUFvQixpQkFBV00sQ0FBWCxFQUFpQjtBQUFBLFVBQWRDLElBQWMsU0FBZEEsSUFBYztBQUNwQyxVQUFNQyxZQUFZLEdBQUd0QixJQUFJLEtBQUssSUFBVCxHQUFnQnFCLElBQWhCLGdCQUE2QkEsSUFBN0IsQ0FBckI7QUFDQSxhQUNFO0FBQUksV0FBRyxFQUFFQyxZQUFUO0FBQXVCLGlCQUFTLEVBQUMsaUJBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLGVBQU8sRUFBRXZCLFVBRFg7QUFFRSxZQUFJLEVBQUV1QixZQUZSO0FBR0UsaUJBQVMsRUFBQyxpQkFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBS0dKLDJEQUFJLENBQUNsQixJQUFELENBQUosQ0FBV2EsVUFBWCxDQUFzQkUsQ0FBdEIsRUFBeUJFLGVBQXpCLENBQXlDRyxDQUF6QyxFQUE0Q0QsS0FML0MsQ0FERixDQURGO0FBV0QsS0FiQSxDQURILENBTEosQ0FEZ0I7QUFBQSxHQUFqQixDQURILENBbkJGLEVBOENFLE1BQUMsMERBQUQ7QUFDRSxRQUFJLEVBQUMsSUFEUDtBQUVFLFFBQUksRUFBRSxDQUNKO0FBQ0VBLFdBQUssRUFBRUksOENBQUUsQ0FBQ0MsVUFEWjtBQUVFQyxXQUFLLEVBQUUsSUFGVDtBQUdFQyxRQUFFLEVBQUU7QUFITixLQURJLEVBTUo7QUFDRVAsV0FBSyxFQUFFUSw4Q0FBRSxDQUFDSCxVQURaO0FBRUVDLFdBQUssRUFBRSxJQUZUO0FBR0VDLFFBQUUsRUFBRTtBQUhOLEtBTkksQ0FGUjtBQWNFLFFBQUksRUFBQyxNQWRQO0FBZUUsV0FBTyxFQUFFMUIsSUFmWDtBQWdCRSxZQUFRLEVBQUVHLFVBaEJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE5Q0YsQ0FERjtBQW1FRCxDQW5GRDs7R0FBTU4sRztVQUNXSyxxRDs7O0tBRFhMLEc7QUFxRlMscUVBQUErQiw0RUFBUSxDQUFDL0IsR0FBRCxDQUF2QiIsImZpbGUiOiIuL3NyYy9zZWN0aW9ucy9OYXYuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgaTE4biwgeyBhciwgZW4gfSBmcm9tICdzcmMvbG9jYWxlcyc7XG5pbXBvcnQgd2l0aExhbmcgZnJvbSAnc3JjL2NvbXBvbmVudHMvSE9Dcy93aXRoTGFuZyc7XG5pbXBvcnQgVG9nZ2xlIGZyb20gJy4uL2NvbXBvbmVudHMvVG9nZ2xlJztcbmltcG9ydCB0IGZyb20gJy4uL2RhdGEnO1xuXG5jb25zdCBOYXYgPSAoeyBtZW51T3Blbiwgb25NZW51T3BlbiwgbGFuZyB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGhhbmRsZUxhbmcgPSAobGFuZ3VhZ2UpID0+IHtcbiAgICBjb25zdCByb3V0ZSA9IHJvdXRlci5xdWVyeS5jYXRlZ29yeVxuICAgICAgPyBgc3RvcmVzLyR7cm91dGVyLnF1ZXJ5LmNhdGVnb3J5fWBcbiAgICAgIDogJyc7XG4gICAgY29uc29sZS5sb2coJ3InLCByKTtcbiAgICBpZiAobGFuZ3VhZ2UgPT09ICdhcicpIHtcbiAgICAgIHJvdXRlci5wdXNoKGAvYXIvJHtyb3V0ZX1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm91dGVyLnB1c2goYC8ke3JvdXRlfWApO1xuICAgIH1cbiAgICBvbk1lbnVPcGVuKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT17YG5hdiAke21lbnVPcGVuID8gJ25hdi0tc2hvdycgOiAnbmF2LS1oaWRkZW4nfWB9PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXtvbk1lbnVPcGVufVxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPXtgbWVudS1idG4gJHttZW51T3BlbiA/ICdtZW51LWJ0bi0tb3BlbicgOiAnJ31gfVxuICAgICAgPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgd2lkdGg9XCI1MlwiXG4gICAgICAgICAgaGVpZ2h0PVwiNTJcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxjaXJjbGUgY3g9XCIyNlwiIGN5PVwiMjZcIiByPVwiMjZcIiBmaWxsPVwiI2ZmZlwiIC8+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGZpbGw9XCIjN0JCNDlCXCJcbiAgICAgICAgICAgIGQ9XCJNMTQgMjBoMjR2MkgxNHpNMTQgMjVoMjR2MkgxNHpNMTQgMzBoMjR2MkgxNHpcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibmF2X19tYWluLWxpc3RcIj5cbiAgICAgICAge3QubmF2aWdhdGlvbi5tYXAoKHsgYW5jaG9yLCBpbm5lck5hdmlnYXRpb24gfSwgaSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2FuY2hvcn0gY2xhc3NOYW1lPVwibmF2X19tYWluLWl0ZW1cIj5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e29uTWVudU9wZW59IGhyZWY9e2FuY2hvcn0gY2xhc3NOYW1lPVwibmF2X19tYWluLWxpbmtcIj5cbiAgICAgICAgICAgICAge2kxOG4obGFuZykubmF2aWdhdGlvbltpXS5sYWJlbH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIHshIWlubmVyTmF2aWdhdGlvbiAmJiAoXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZfX2lubmVyLWxpc3RcIj5cbiAgICAgICAgICAgICAgICB7aW5uZXJOYXZpZ2F0aW9uLm1hcCgoeyBsaW5rIH0sIGopID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5TGluayA9IGxhbmcgPT09ICdlbicgPyBsaW5rIDogYC9hciR7bGlua31gO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17Y2F0ZWdvcnlMaW5rfSBjbGFzc05hbWU9XCJuYXZfX2lubmVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25NZW51T3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2NhdGVnb3J5TGlua31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdl9faW5uZXItbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2kxOG4obGFuZykubmF2aWdhdGlvbltpXS5pbm5lck5hdmlnYXRpb25bal0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICAgPFRvZ2dsZVxuICAgICAgICBzaXplPVwic21cIlxuICAgICAgICBkYXRhPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IGFyLmxhbmdTd2l0Y2gsXG4gICAgICAgICAgICB2YWx1ZTogJ2FyJyxcbiAgICAgICAgICAgIGlkOiAnYXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogZW4ubGFuZ1N3aXRjaCxcbiAgICAgICAgICAgIHZhbHVlOiAnZW4nLFxuICAgICAgICAgICAgaWQ6ICdlbidcbiAgICAgICAgICB9XG4gICAgICAgIF19XG4gICAgICAgIG5hbWU9XCJsYW5nXCJcbiAgICAgICAgY2hlY2tlZD17bGFuZ31cbiAgICAgICAgb25Ub2dnbGU9e2hhbmRsZUxhbmd9XG4gICAgICAvPlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aExhbmcoTmF2KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sections/Nav.jsx\n");

/***/ })

})