"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/moayc",{

/***/ "./components/Mutant/Fail.tsx":
/*!************************************!*\
  !*** ./components/Mutant/Fail.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Button_RoundCloseButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button/RoundCloseButton */ \"./components/Button/RoundCloseButton.tsx\");\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  position: relative;\\n  height: 100%;\\n  width: 100%;\\n\\n  display: flex;\\n  justify-content: end;\\n  align-items: center;\\n  flex-direction: column;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        '\\n  position: absolute;\\n  top: 40%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  background: url(\"/images/svg/fail-icon.svg\") no-repeat top;\\n  width: 73px;\\n  height: 73px;\\n'\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  font-family: 'Rubik',sans-serif;\\n  font-style: italic;\\n  font-weight: 700;\\n  font-size: 16px;\\n  line-height: 130%;\\n  /* identical to box height, or 21px */\\n\\n  display: flex;\\n  align-items: center;\\n  text-align: center;\\n  text-transform: uppercase;\\n\\n  color: #C93041;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  font-family: 'Rubik', sans-serif;\\n  font-style: italic;\\n  font-weight: 700;\\n  font-size: 16px;\\n  line-height: 130%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  text-transform: uppercase;\\n  background: linear-gradient(159.53deg, #B4D109 1.07%, #87CC00 72.47%);\\n  -webkit-background-clip: text;\\n  -webkit-text-fill-color: transparent;\\n  margin-bottom: 31px;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  position: absolute;\\n  display: flex;\\n  justify-content: end;\\n  width: 100%;\\n  padding: 10px;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nvar StyledFail = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"Fail__StyledFail\",\n    componentId: \"sc-b4ef3f00-0\"\n})(_templateObject());\n_c = StyledFail;\nvar FailIcon = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"Fail__FailIcon\",\n    componentId: \"sc-b4ef3f00-1\"\n})(_templateObject1());\n_c1 = FailIcon;\nvar FailText = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"Fail__FailText\",\n    componentId: \"sc-b4ef3f00-2\"\n})(_templateObject2());\n_c2 = FailText;\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"Fail__Text\",\n    componentId: \"sc-b4ef3f00-3\"\n})(_templateObject3());\n_c3 = Text;\nvar CloseButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"Fail__CloseButtonContainer\",\n    componentId: \"sc-b4ef3f00-4\"\n})(_templateObject4());\n_c4 = CloseButtonContainer;\nvar Fail = function(param) {\n    var onClose = param.onClose;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledFail, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CloseButtonContainer, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Button_RoundCloseButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    onClick: onClose\n                }, void 0, false, {\n                    fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/Fail.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/Fail.tsx\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(FailIcon, {}, void 0, false, {\n                fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/Fail.tsx\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(FailText, {\n                children: \"Fail!\"\n            }, void 0, false, {\n                fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/Fail.tsx\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Text, {\n                children: \"PESKY BUGS CHEWED THROUGH THE WIRES AGAIN\"\n            }, void 0, false, {\n                fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/Fail.tsx\",\n                lineNumber: 82,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/Fail.tsx\",\n        lineNumber: 74,\n        columnNumber: 9\n    }, _this);\n};\n_c5 = Fail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fail);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"StyledFail\");\n$RefreshReg$(_c1, \"FailIcon\");\n$RefreshReg$(_c2, \"FailText\");\n$RefreshReg$(_c3, \"Text\");\n$RefreshReg$(_c4, \"CloseButtonContainer\");\n$RefreshReg$(_c5, \"Fail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL011dGFudC9GYWlsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDYTtBQUNtQjtBQUcxRCxJQUFNRyxVQUFVLEdBQUdGLHdFQUFVOzs7cUJBUzVCO0FBVEtFLEtBQUFBLFVBQVU7QUFZaEIsSUFBTUUsUUFBUSxHQUFHSix3RUFBVTs7O3NCQVExQjtBQVJLSSxNQUFBQSxRQUFRO0FBVWQsSUFBTUMsUUFBUSxHQUFHTCx3RUFBVTs7O3NCQWMxQjtBQWRLSyxNQUFBQSxRQUFRO0FBZWQsSUFBTUMsSUFBSSxHQUFHTix3RUFBVTs7O3NCQWN0QjtBQWRLTSxNQUFBQSxJQUFJO0FBZ0JWLElBQU1DLG9CQUFvQixHQUFHUCx3RUFBVTs7O3NCQU10QztBQU5LTyxNQUFBQSxvQkFBb0I7QUFhMUIsSUFBTUMsSUFBSSxHQUFHLGdCQUEwQjtRQUF4QkMsT0FBTyxTQUFQQSxPQUFPO0lBQ2xCLHFCQUNJLDhEQUFDUCxVQUFVOzswQkFDUCw4REFBQ0ssb0JBQW9COzBCQUNqQiw0RUFBQ04sZ0VBQWdCO29CQUFDUyxPQUFPLEVBQUVELE9BQU87Ozs7O3lCQUFHOzs7OztxQkFDbEI7MEJBQ3ZCLDhEQUFDTCxRQUFROzs7O3FCQUFFOzBCQUNYLDhEQUFDQyxRQUFROzBCQUFDLE9BRVY7Ozs7O3FCQUFXOzBCQUNYLDhEQUFDQyxJQUFJOzBCQUFDLDJDQUVOOzs7OztxQkFBTzs7Ozs7O2FBQ0UsQ0FDZjtBQUNOLENBQUM7QUFmS0UsTUFBQUEsSUFBSTtBQWlCViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXV0YW50L0ZhaWwudHN4PzkwM2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgUm91bmRDbG9zZUJ1dHRvbiBmcm9tIFwiLi4vQnV0dG9uL1JvdW5kQ2xvc2VCdXR0b25cIjtcblxuXG5jb25zdCBTdHlsZWRGYWlsID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYDtcblxuXG5jb25zdCBGYWlsSWNvbiA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQ6IHVybChcIi9pbWFnZXMvc3ZnL2ZhaWwtaWNvbi5zdmdcIikgbm8tcmVwZWF0IHRvcDtcbiAgd2lkdGg6IDczcHg7XG4gIGhlaWdodDogNzNweDtcbmA7XG5cbmNvbnN0IEZhaWxUZXh0ID0gc3R5bGVkLmRpdmBcbiAgZm9udC1mYW1pbHk6ICdSdWJpaycsc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgMjFweCAqL1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICBjb2xvcjogI0M5MzA0MTtcbmA7XG5jb25zdCBUZXh0ID0gc3R5bGVkLmRpdmBcbiAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTMwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTkuNTNkZWcsICNCNEQxMDkgMS4wNyUsICM4N0NDMDAgNzIuNDclKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWJvdHRvbTogMzFweDtcbmA7XG5cbmNvbnN0IENsb3NlQnV0dG9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG5gO1xuXG5cbmludGVyZmFjZSBGYWlsUHJvcHMge1xuICAgIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IEZhaWwgPSAoe29uQ2xvc2V9OiBGYWlsUHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkRmFpbD5cbiAgICAgICAgICAgIDxDbG9zZUJ1dHRvbkNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8Um91bmRDbG9zZUJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfS8+XG4gICAgICAgICAgICA8L0Nsb3NlQnV0dG9uQ29udGFpbmVyPlxuICAgICAgICAgICAgPEZhaWxJY29uLz5cbiAgICAgICAgICAgIDxGYWlsVGV4dD5cbiAgICAgICAgICAgICAgICBGYWlsIVxuICAgICAgICAgICAgPC9GYWlsVGV4dD5cbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgIFBFU0tZIEJVR1MgQ0hFV0VEIFRIUk9VR0ggVEhFIFdJUkVTIEFHQUlOXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvU3R5bGVkRmFpbD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmFpbDsiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJSb3VuZENsb3NlQnV0dG9uIiwiU3R5bGVkRmFpbCIsImRpdiIsIkZhaWxJY29uIiwiRmFpbFRleHQiLCJUZXh0IiwiQ2xvc2VCdXR0b25Db250YWluZXIiLCJGYWlsIiwib25DbG9zZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Mutant/Fail.tsx\n"));

/***/ })

});