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

/***/ "./components/Mutant/AmountSelector.tsx":
/*!**********************************************!*\
  !*** ./components/Mutant/AmountSelector.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  border: 1.5px solid #87CC01;\\n  border-radius: 6px;\\n  padding: 7px;\\n\\n  display: flex;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  padding: 0;\\n  margin: 0;\\n  border: none;\\n  //background: none;\\n\\n\\n  font-family: 'Rubik';\\n  font-style: italic;\\n  font-weight: 700;\\n  font-size: 12px;\\n  line-height: 130%;\\n  /* identical to box height, or 16px */\\n\\n  display: flex;\\n  align-items: center;\\n  text-align: center;\\n  text-transform: uppercase;\\n\\n  /* Mutant */\\n\\n  background: linear-gradient(159.53deg, #B4D109 1.07%, #87CC00 72.47%);\\n  -webkit-background-clip: text;\\n  -webkit-text-fill-color: transparent;\\n  background-clip: text;\\n  text-fill-color: transparent;\\n\\n\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 23px;\\n  height: 23px;\\n  background: linear-gradient(159.53deg, #B4D109 1.07%, #87CC00 72.47%);\\n  border-radius: 3px;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\nvar StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"AmountSelector__StyledContainer\",\n    componentId: \"sc-504875d5-0\"\n})(_templateObject());\n_c = StyledContainer;\nvar StyledSelector = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].input.withConfig({\n    displayName: \"AmountSelector__StyledSelector\",\n    componentId: \"sc-504875d5-1\"\n})(_templateObject1());\n_c1 = StyledSelector;\nvar SelectorButton = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"AmountSelector__SelectorButton\",\n    componentId: \"sc-504875d5-2\"\n})(_templateObject2());\n_c2 = SelectorButton;\nvar PlusButton = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"AmountSelector__PlusButton\",\n    componentId: \"sc-504875d5-3\"\n})(_templateObject3());\nvar AmountSelector = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1), value = ref[0], setValue = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SelectorButton, {}, void 0, false, {\n                fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/AmountSelector.tsx\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledSelector, {\n                value: value,\n                onChange: function(e) {\n                    return setValue(Number.parseInt(e.currentTarget.value));\n                }\n            }, void 0, false, {\n                fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/AmountSelector.tsx\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SelectorButton, {}, void 0, false, {\n                fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/AmountSelector.tsx\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/AmountSelector.tsx\",\n        lineNumber: 62,\n        columnNumber: 9\n    }, _this);\n};\n_s(AmountSelector, \"vpR6s6c+pWN9iYRRE4XhvQBqRwA=\");\n_c3 = AmountSelector;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AmountSelector);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"StyledContainer\");\n$RefreshReg$(_c1, \"StyledSelector\");\n$RefreshReg$(_c2, \"SelectorButton\");\n$RefreshReg$(_c3, \"AmountSelector\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL011dGFudC9BbW91bnRTZWxlY3Rvci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0Q7QUFHdkMsSUFBTUcsZUFBZSxHQUFHRCx3RUFBVTs7O3FCQU1qQztBQU5LQyxLQUFBQSxlQUFlO0FBUXJCLElBQU1FLGNBQWMsR0FBR0gsMEVBQVk7OztzQkE0QmxDO0FBNUJLRyxNQUFBQSxjQUFjO0FBOEJwQixJQUFNRSxjQUFjLEdBQUdMLHdFQUFVOzs7c0JBUWhDO0FBUktLLE1BQUFBLGNBQWM7QUFVcEIsSUFBTUMsVUFBVSxHQUFHTix3RUFBVTs7O3NCQUFFO0FBRy9CLElBQU1PLGNBQWMsR0FBRyxXQUFNOztJQUV6QixJQUEwQlIsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQUE5QlMsS0FBSyxHQUFjVCxHQUFXLEdBQXpCLEVBQUVVLFFBQVEsR0FBSVYsR0FBVyxHQUFmO0lBR3RCLHFCQUNJLDhEQUFDRSxlQUFlOzswQkFDWiw4REFBQ0ksY0FBYzs7OztxQkFFRTswQkFDakIsOERBQUNGLGNBQWM7Z0JBQUNLLEtBQUssRUFBRUEsS0FBSztnQkFBRUUsUUFBUSxFQUFFQyxTQUFBQSxDQUFDOzJCQUFJRixRQUFRLENBQUNHLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDRixDQUFDLENBQUNHLGFBQWEsQ0FBQ04sS0FBSyxDQUFDLENBQUM7aUJBQUE7Ozs7O3FCQUFHOzBCQUNoRyw4REFBQ0gsY0FBYzs7OztxQkFFRTs7Ozs7O2FBQ0gsQ0FDcEI7QUFDTixDQUFDO0dBaEJLRSxjQUFjO0FBQWRBLE1BQUFBLGNBQWM7QUFrQnBCLCtEQUFlQSxjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NdXRhbnQvQW1vdW50U2VsZWN0b3IudHN4P2E4YjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuXG5jb25zdCBTdHlsZWRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBib3JkZXI6IDEuNXB4IHNvbGlkICM4N0NDMDE7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogN3B4O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5jb25zdCBTdHlsZWRTZWxlY3RvciA9IHN0eWxlZC5pbnB1dGBcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIC8vYmFja2dyb3VuZDogbm9uZTtcblxuXG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEzMCU7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAxNnB4ICovXG5cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gIC8qIE11dGFudCAqL1xuXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTkuNTNkZWcsICNCNEQxMDkgMS4wNyUsICM4N0NDMDAgNzIuNDclKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICB0ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuXG5cbmA7XG5cbmNvbnN0IFNlbGVjdG9yQnV0dG9uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAyM3B4O1xuICBoZWlnaHQ6IDIzcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTkuNTNkZWcsICNCNEQxMDkgMS4wNyUsICM4N0NDMDAgNzIuNDclKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuYDtcblxuY29uc3QgUGx1c0J1dHRvbiA9IHN0eWxlZC5kaXZgYDtcblxuXG5jb25zdCBBbW91bnRTZWxlY3RvciA9ICgpID0+IHtcblxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoMSk7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRDb250YWluZXI+XG4gICAgICAgICAgICA8U2VsZWN0b3JCdXR0b24+XG5cbiAgICAgICAgICAgIDwvU2VsZWN0b3JCdXR0b24+XG4gICAgICAgICAgICA8U3R5bGVkU2VsZWN0b3IgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17ZSA9PiBzZXRWYWx1ZShOdW1iZXIucGFyc2VJbnQoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKSl9Lz5cbiAgICAgICAgICAgIDxTZWxlY3RvckJ1dHRvbj5cblxuICAgICAgICAgICAgPC9TZWxlY3RvckJ1dHRvbj5cbiAgICAgICAgPC9TdHlsZWRDb250YWluZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFtb3VudFNlbGVjdG9yOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwiU3R5bGVkQ29udGFpbmVyIiwiZGl2IiwiU3R5bGVkU2VsZWN0b3IiLCJpbnB1dCIsIlNlbGVjdG9yQnV0dG9uIiwiUGx1c0J1dHRvbiIsIkFtb3VudFNlbGVjdG9yIiwidmFsdWUiLCJzZXRWYWx1ZSIsIm9uQ2hhbmdlIiwiZSIsIk51bWJlciIsInBhcnNlSW50IiwiY3VycmVudFRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Mutant/AmountSelector.tsx\n"));

/***/ })

});