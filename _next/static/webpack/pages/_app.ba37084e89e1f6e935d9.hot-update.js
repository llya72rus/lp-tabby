webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/sections/Nav.jsx":
/*!******************************!*\
  !*** ./src/sections/Nav.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/locales */ \"./src/locales/index.js\");\n/* harmony import */ var src_components_HOCs_withLang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/HOCs/withLang */ \"./src/components/HOCs/withLang.jsx\");\n/* harmony import */ var _components_Toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Toggle */ \"./src/components/Toggle.jsx\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data */ \"./src/data.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/ilya_makov/projects/hera-next/src/sections/Nav.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Nav = function Nav(_ref) {\n  _s();\n\n  var menuOpen = _ref.menuOpen,\n      onMenuOpen = _ref.onMenuOpen,\n      lang = _ref.lang;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  console.log(router.route, router.query.category);\n\n  var handleLang = function handleLang(language) {\n    var r = router.query.category ? \"stores/\".concat(router.query.category) : router.router;\n    console.log('r', r);\n    debugger;\n\n    if (language === 'ar') {\n      router.push(\"/ar/\".concat(r));\n    } else {\n      router.push(\"/\".concat(r));\n    }\n\n    onMenuOpen();\n  };\n\n  return __jsx(\"nav\", {\n    className: \"nav \".concat(menuOpen ? 'nav--show' : 'nav--hidden'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(\"button\", {\n    onClick: onMenuOpen,\n    type: \"button\",\n    className: \"menu-btn \".concat(menuOpen ? 'menu-btn--open' : ''),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(\"svg\", {\n    width: \"52\",\n    height: \"52\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, __jsx(\"circle\", {\n    cx: \"26\",\n    cy: \"26\",\n    r: \"26\",\n    fill: \"#fff\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }), __jsx(\"path\", {\n    fill: \"#7BB49B\",\n    d: \"M14 20h24v2H14zM14 25h24v2H14zM14 30h24v2H14z\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  }))), __jsx(\"ul\", {\n    className: \"nav__main-list\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }, _data__WEBPACK_IMPORTED_MODULE_5__[\"default\"].navigation.map(function (_ref2, i) {\n    var anchor = _ref2.anchor,\n        innerNavigation = _ref2.innerNavigation;\n    return __jsx(\"li\", {\n      key: anchor,\n      className: \"nav__main-item\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 11\n      }\n    }, __jsx(\"a\", {\n      onClick: onMenuOpen,\n      href: anchor,\n      className: \"nav__main-link\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 13\n      }\n    }, Object(src_locales__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(lang).navigation[i].label), !!innerNavigation && __jsx(\"ul\", {\n      className: \"nav__inner-list\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 15\n      }\n    }, innerNavigation.map(function (_ref3, j) {\n      var link = _ref3.link;\n      var categoryLink = lang === 'en' ? link : \"/ar\".concat(link);\n      return __jsx(\"li\", {\n        key: categoryLink,\n        className: \"nav__inner-item\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 21\n        }\n      }, __jsx(\"a\", {\n        onClick: onMenuOpen,\n        href: categoryLink,\n        className: \"nav__inner-link\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 23\n        }\n      }, Object(src_locales__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(lang).navigation[i].innerNavigation[j].label));\n    })));\n  })), __jsx(_components_Toggle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    size: \"sm\",\n    data: [{\n      label: src_locales__WEBPACK_IMPORTED_MODULE_2__[\"ar\"].langSwitch,\n      value: 'ar',\n      id: 'ar'\n    }, {\n      label: src_locales__WEBPACK_IMPORTED_MODULE_2__[\"en\"].langSwitch,\n      value: 'en',\n      id: 'en'\n    }],\n    name: \"lang\",\n    checked: lang,\n    onToggle: handleLang,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Nav, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(src_components_HOCs_withLang__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Nav));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Nav\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL05hdi5qc3g/ODFmYiJdLCJuYW1lcyI6WyJOYXYiLCJtZW51T3BlbiIsIm9uTWVudU9wZW4iLCJsYW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29uc29sZSIsImxvZyIsInJvdXRlIiwicXVlcnkiLCJjYXRlZ29yeSIsImhhbmRsZUxhbmciLCJsYW5ndWFnZSIsInIiLCJwdXNoIiwidCIsIm5hdmlnYXRpb24iLCJtYXAiLCJpIiwiYW5jaG9yIiwiaW5uZXJOYXZpZ2F0aW9uIiwiaTE4biIsImxhYmVsIiwiaiIsImxpbmsiLCJjYXRlZ29yeUxpbmsiLCJhciIsImxhbmdTd2l0Y2giLCJ2YWx1ZSIsImlkIiwiZW4iLCJ3aXRoTGFuZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFvQztBQUFBOztBQUFBLE1BQWpDQyxRQUFpQyxRQUFqQ0EsUUFBaUM7QUFBQSxNQUF2QkMsVUFBdUIsUUFBdkJBLFVBQXVCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzlDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlILE1BQU0sQ0FBQ0ksS0FBbkIsRUFBMEJKLE1BQU0sQ0FBQ0ssS0FBUCxDQUFhQyxRQUF2Qzs7QUFFQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxRQUFELEVBQWM7QUFDL0IsUUFBTUMsQ0FBQyxHQUFHVCxNQUFNLENBQUNLLEtBQVAsQ0FBYUMsUUFBYixvQkFDSU4sTUFBTSxDQUFDSyxLQUFQLENBQWFDLFFBRGpCLElBRU5OLE1BQU0sQ0FBQ0EsTUFGWDtBQUdBRSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxHQUFaLEVBQWlCTSxDQUFqQjtBQUNBOztBQUNBLFFBQUlELFFBQVEsS0FBSyxJQUFqQixFQUF1QjtB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QUssRUFBRSxJQUZUO0FBR0VDLFFBQUUsRUFBRTtBQUhOLEtBREksRUFNSjtBQUNFUCxXQUFLLEVBQUVRLDhDQUFFLENBQUNILFVBRFo7QUFFRUMsV0FBSyxFQUFFLElBRlQ7QUFHRUMsUUFBRSxFQUFFO0FBSE4sS0FOSSxDQUZSO0FBY0UsUUFBSSxFQUFDLE1BZFA7QUFlRSxXQUFPLEVBQUUxQixJQWZYO0FBZ0JFLFlBQVEsRUFBRVEsVUFoQlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTlDRixDQURGO0FBbUVELENBdEZEOztHQUFNWCxHO1VBQ1dLLHFEOzs7S0FEWEwsRztBQXdGUyxxRUFBQStCLDRFQUFRLENBQUMvQixHQUFELENBQXZCIiwiZmlsZSI6Ii4vc3JjL3NlY3Rpb25zL05hdi5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCBpMThuLCB7IGFyLCBlbiB9IGZyb20gJ3NyYy9sb2NhbGVzJztcbmltcG9ydCB3aXRoTGFuZyBmcm9tICdzcmMvY29tcG9uZW50cy9IT0NzL3dpdGhMYW5nJztcbmltcG9ydCBUb2dnbGUgZnJvbSAnLi4vY29tcG9uZW50cy9Ub2dnbGUnO1xuaW1wb3J0IHQgZnJvbSAnLi4vZGF0YSc7XG5cbmNvbnN0IE5hdiA9ICh7IG1lbnVPcGVuLCBvbk1lbnVPcGVuLCBsYW5nIH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc29sZS5sb2cocm91dGVyLnJvdXRlLCByb3V0ZXIucXVlcnkuY2F0ZWdvcnkpO1xuXG4gIGNvbnN0IGhhbmRsZUxhbmcgPSAobGFuZ3VhZ2UpID0+IHtcbiAgICBjb25zdCByID0gcm91dGVyLnF1ZXJ5LmNhdGVnb3J5XG4gICAgICA/IGBzdG9yZXMvJHtyb3V0ZXIucXVlcnkuY2F0ZWdvcnl9YFxuICAgICAgOiByb3V0ZXIucm91dGVyO1xuICAgIGNvbnNvbGUubG9nKCdyJywgcik7XG4gICAgZGVidWdnZXI7XG4gICAgaWYgKGxhbmd1YWdlID09PSAnYXInKSB7XG4gICAgICByb3V0ZXIucHVzaChgL2FyLyR7cn1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm91dGVyLnB1c2goYC8ke3J9YCk7XG4gICAgfVxuICAgIG9uTWVudU9wZW4oKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPXtgbmF2ICR7bWVudU9wZW4gPyAnbmF2LS1zaG93JyA6ICduYXYtLWhpZGRlbid9YH0+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e29uTWVudU9wZW59XG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzc05hbWU9e2BtZW51LWJ0biAke21lbnVPcGVuID8gJ21lbnUtYnRuLS1vcGVuJyA6ICcnfWB9XG4gICAgICA+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICB3aWR0aD1cIjUyXCJcbiAgICAgICAgICBoZWlnaHQ9XCI1MlwiXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICA+XG4gICAgICAgICAgPGNpcmNsZSBjeD1cIjI2XCIgY3k9XCIyNlwiIHI9XCIyNlwiIGZpbGw9XCIjZmZmXCIgLz5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZmlsbD1cIiM3QkI0OUJcIlxuICAgICAgICAgICAgZD1cIk0xNCAyMGgyNHYySDE0ek0xNCAyNWgyNHYySDE0ek0xNCAzMGgyNHYySDE0elwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZfX21haW4tbGlzdFwiPlxuICAgICAgICB7dC5uYXZpZ2F0aW9uLm1hcCgoeyBhbmNob3IsIGlubmVyTmF2aWdhdGlvbiB9LCBpKSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17YW5jaG9yfSBjbGFzc05hbWU9XCJuYXZfX21haW4taXRlbVwiPlxuICAgICAgICAgICAgPGEgb25DbGljaz17b25NZW51T3Blbn0gaHJlZj17YW5jaG9yfSBjbGFzc05hbWU9XCJuYXZfX21haW4tbGlua1wiPlxuICAgICAgICAgICAgICB7aTE4bihsYW5nKS5uYXZpZ2F0aW9uW2ldLmxhYmVsfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgeyEhaW5uZXJOYXZpZ2F0aW9uICYmIChcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdl9faW5uZXItbGlzdFwiPlxuICAgICAgICAgICAgICAgIHtpbm5lck5hdmlnYXRpb24ubWFwKCh7IGxpbmsgfSwgaikgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlMaW5rID0gbGFuZyA9PT0gJ2VuJyA/IGxpbmsgOiBgL2FyJHtsaW5rfWA7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeUxpbmt9IGNsYXNzTmFtZT1cIm5hdl9faW5uZXItaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbk1lbnVPcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17Y2F0ZWdvcnlMaW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2X19pbm5lci1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aTE4bihsYW5nKS5uYXZpZ2F0aW9uW2ldLmlubmVyTmF2aWdhdGlvbltqXS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8VG9nZ2xlXG4gICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgIGRhdGE9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogYXIubGFuZ1N3aXRjaCxcbiAgICAgICAgICAgIHZhbHVlOiAnYXInLFxuICAgICAgICAgICAgaWQ6ICdhcidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBlbi5sYW5nU3dpdGNoLFxuICAgICAgICAgICAgdmFsdWU6ICdlbicsXG4gICAgICAgICAgICBpZDogJ2VuJ1xuICAgICAgICAgIH1cbiAgICAgICAgXX1cbiAgICAgICAgbmFtZT1cImxhbmdcIlxuICAgICAgICBjaGVja2VkPXtsYW5nfVxuICAgICAgICBvblRvZ2dsZT17aGFuZGxlTGFuZ31cbiAgICAgIC8+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoTGFuZyhOYXYpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sections/Nav.jsx\n");

/***/ })

})