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

/***/ "./components/Mutant/MutationWindow.tsx":
/*!**********************************************!*\
  !*** ./components/Mutant/MutationWindow.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _MutationStatLine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MutationStatLine */ \"./components/Mutant/MutationStatLine.tsx\");\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  background: #1E2117;\\n  border-radius: 20px;\\n  padding: 23px;\\n  display: flex;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  min-width: 215px;\\n  margin-left: 48px;\\n  \\n  height: 311px;\\n  display: flex;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  border: 1.5px solid #87CC01 !important;\\n  border-radius: 15px;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  border: 1.5px solid #87CC01;\\n  border-radius: 6px;\\n  font-family: 'Rubik', sans-serif;\\n  font-style: italic;\\n  font-weight: 700;\\n  font-size: 12px;\\n  line-height: 130%;\\n  display: flex;\\n  align-items: center;\\n  text-align: center;\\n  justify-content: center;\\n  text-transform: uppercase;\\n  background: linear-gradient(159.53deg, #B4D109 1.07%, #87CC00 72.47%);\\n  -webkit-background-clip: text;\\n  -webkit-text-fill-color: transparent;\\n  \\n  padding: 11px 36px;\\n  margin-bottom: 40px;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\nvar MutationWindowContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n    displayName: \"MutationWindow__MutationWindowContainer\",\n    componentId: \"sc-dbc164e8-0\"\n})(_templateObject());\n_c = MutationWindowContainer;\nvar MintMenu = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n    displayName: \"MutationWindow__MintMenu\",\n    componentId: \"sc-dbc164e8-1\"\n})(_templateObject1());\n_c1 = MintMenu;\nvar MutantPreview = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((next_image__WEBPACK_IMPORTED_MODULE_3___default())).withConfig({\n    displayName: \"MutationWindow__MutantPreview\",\n    componentId: \"sc-dbc164e8-2\"\n})(_templateObject2());\n_c2 = MutantPreview;\nvar MintStatus = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n    displayName: \"MutationWindow__MintStatus\",\n    componentId: \"sc-dbc164e8-3\"\n})(_templateObject3());\n_c3 = MintStatus;\nvar MutationWindow = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MutationWindowContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MutantPreview, {\n                src: \"/images/placeholder.gif\",\n                width: 311,\n                height: 311\n            }, void 0, false, {\n                fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MintMenu, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MintStatus, {\n                        children: \"whitelist mint is live\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MutationStatLine__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        name: \"Mutants left:\",\n                        value: 2999\n                    }, void 0, false, {\n                        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MutationStatLine__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        name: \"Price:\",\n                        value: \"33$OP\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        style: {\n                            height: \"100%\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MutationStatLine__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        name: \"Total:\",\n                        value: \"1833$OP\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, _this);\n};\n_c4 = MutationWindow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MutationWindow);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"MutationWindowContainer\");\n$RefreshReg$(_c1, \"MintMenu\");\n$RefreshReg$(_c2, \"MutantPreview\");\n$RefreshReg$(_c3, \"MintStatus\");\n$RefreshReg$(_c4, \"MutationWindow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL011dGFudC9NdXRhdGlvbldpbmRvdy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDYTtBQUNSO0FBQ21CO0FBR2xELElBQU1JLHVCQUF1QixHQUFHSCx3RUFBVTs7O3FCQUt6QztBQUxLRyxLQUFBQSx1QkFBdUI7QUFRN0IsSUFBTUUsUUFBUSxHQUFHTCx3RUFBVTs7O3NCQU0xQjtBQU5LSyxNQUFBQSxRQUFRO0FBUWQsSUFBTUMsYUFBYSxHQUFHTiw2REFBTSxDQUFDQyxtREFBSyxDQUFDOzs7c0JBR2xDO0FBSEtLLE1BQUFBLGFBQWE7QUFNbkIsSUFBTUMsVUFBVSxHQUFHUCx3RUFBVTs7O3NCQW1CNUI7QUFuQktPLE1BQUFBLFVBQVU7QUFxQmhCLElBQU1DLGNBQWMsR0FBRyxXQUFNO0lBQ3pCLHFCQUNJLDhEQUFDTCx1QkFBdUI7OzBCQUNwQiw4REFBQ0csYUFBYTtnQkFBQ0csR0FBRyxFQUFFLHlCQUF5QjtnQkFBRUMsS0FBSyxFQUFFLEdBQUc7Z0JBQUVDLE1BQU0sRUFBRSxHQUFHOzs7OztxQkFBRzswQkFDekUsOERBQUNOLFFBQVE7O2tDQUNMLDhEQUFDRSxVQUFVO2tDQUFDLHdCQUVaOzs7Ozs2QkFBYTtrQ0FDYiw4REFBQ0wseURBQWdCO3dCQUFDVSxJQUFJLEVBQUUsZUFBZTt3QkFBRUMsS0FBSyxFQUFFLElBQUk7Ozs7OzZCQUFHO2tDQUN2RCw4REFBQ1gseURBQWdCO3dCQUFDVSxJQUFJLEVBQUUsUUFBUTt3QkFBRUMsS0FBSyxFQUFFLE9BQU87Ozs7OzZCQUFHO2tDQUNuRCw4REFBQ1QsS0FBRzt3QkFBQ1UsS0FBSyxFQUFFOzRCQUFDSCxNQUFNLEVBQUUsTUFBTTt5QkFBQzs7Ozs7NkJBQVE7a0NBQ3BDLDhEQUFDVCx5REFBZ0I7d0JBQUNVLElBQUksRUFBRSxRQUFRO3dCQUFFQyxLQUFLLEVBQUUsU0FBUzs7Ozs7NkJBQUc7Ozs7OztxQkFFOUM7Ozs7OzthQUNXLENBQzVCO0FBQ04sQ0FBQztBQWhCS0wsTUFBQUEsY0FBYztBQWtCcEIsK0RBQWVBLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL011dGFudC9NdXRhdGlvbldpbmRvdy50c3g/M2IzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IE11dGF0aW9uU3RhdExpbmUgZnJvbSBcIi4vTXV0YXRpb25TdGF0TGluZVwiO1xuXG5cbmNvbnN0IE11dGF0aW9uV2luZG93Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogIzFFMjExNztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMjNweDtcbiAgZGlzcGxheTogZmxleDtcbmA7XG5cblxuY29uc3QgTWludE1lbnUgPSBzdHlsZWQuZGl2YFxuICBtaW4td2lkdGg6IDIxNXB4O1xuICBtYXJnaW4tbGVmdDogNDhweDtcbiAgXG4gIGhlaWdodDogMzExcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5jb25zdCBNdXRhbnRQcmV2aWV3ID0gc3R5bGVkKEltYWdlKWBcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjODdDQzAxICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5gO1xuXG5cbmNvbnN0IE1pbnRTdGF0dXMgPSBzdHlsZWQuZGl2YFxuICBib3JkZXI6IDEuNXB4IHNvbGlkICM4N0NDMDE7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTMwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE1OS41M2RlZywgI0I0RDEwOSAxLjA3JSwgIzg3Q0MwMCA3Mi40NyUpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICBcbiAgcGFkZGluZzogMTFweCAzNnB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuYDtcblxuY29uc3QgTXV0YXRpb25XaW5kb3cgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE11dGF0aW9uV2luZG93Q29udGFpbmVyPlxuICAgICAgICAgICAgPE11dGFudFByZXZpZXcgc3JjPXtcIi9pbWFnZXMvcGxhY2Vob2xkZXIuZ2lmXCJ9IHdpZHRoPXszMTF9IGhlaWdodD17MzExfS8+XG4gICAgICAgICAgICA8TWludE1lbnU+XG4gICAgICAgICAgICAgICAgPE1pbnRTdGF0dXM+XG4gICAgICAgICAgICAgICAgICAgIHdoaXRlbGlzdCBtaW50IGlzIGxpdmVcbiAgICAgICAgICAgICAgICA8L01pbnRTdGF0dXM+XG4gICAgICAgICAgICAgICAgPE11dGF0aW9uU3RhdExpbmUgbmFtZT17XCJNdXRhbnRzIGxlZnQ6XCJ9IHZhbHVlPXsyOTk5fS8+XG4gICAgICAgICAgICAgICAgPE11dGF0aW9uU3RhdExpbmUgbmFtZT17XCJQcmljZTpcIn0gdmFsdWU9eyczMyRPUCd9Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiBcIjEwMCVcIn19PjwvZGl2PlxuICAgICAgICAgICAgICAgIDxNdXRhdGlvblN0YXRMaW5lIG5hbWU9e1wiVG90YWw6XCJ9IHZhbHVlPXsnMTgzMyRPUCd9Lz5cblxuICAgICAgICAgICAgPC9NaW50TWVudT5cbiAgICAgICAgPC9NdXRhdGlvbldpbmRvd0NvbnRhaW5lcj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXV0YXRpb25XaW5kb3c7Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiSW1hZ2UiLCJNdXRhdGlvblN0YXRMaW5lIiwiTXV0YXRpb25XaW5kb3dDb250YWluZXIiLCJkaXYiLCJNaW50TWVudSIsIk11dGFudFByZXZpZXciLCJNaW50U3RhdHVzIiwiTXV0YXRpb25XaW5kb3ciLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsIm5hbWUiLCJ2YWx1ZSIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Mutant/MutationWindow.tsx\n"));

/***/ })

});