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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _MutationStatLine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MutationStatLine */ \"./components/Mutant/MutationStatLine.tsx\");\n/* harmony import */ var _AmountSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AmountSelector */ \"./components/Mutant/AmountSelector.tsx\");\n/* harmony import */ var _Button_MoaycRectButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Button/MoaycRectButton */ \"./components/Button/MoaycRectButton.tsx\");\n/* harmony import */ var _hooks_useScreenWidth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useScreenWidth */ \"./hooks/useScreenWidth.ts\");\n/* harmony import */ var _styles_device__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/device */ \"./styles/device.ts\");\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  background: #1E2117;\\n  border-radius: 20px;\\n  padding: 23px;\\n  display: flex;\\n\\n  @media screen and \",\n        \" {\\n    margin-left: 48px;\\n    min-width: 215px;\\n    padding: 23px;\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  min-width: 257px;\\n\\n  height: 311px;\\n  display: flex;\\n  flex-direction: column;\\n  \\n  \\n  @media screen and \",\n        \" {\\n    margin-left: 48px;\\n    min-width: 215px;\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  border: 1.5px solid #87CC01 !important;\\n  border-radius: 15px;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  border: 1.5px solid #87CC01;\\n  border-radius: 6px;\\n  font-family: 'Rubik', sans-serif;\\n  font-style: italic;\\n  font-weight: 700;\\n  font-size: 12px;\\n  line-height: 130%;\\n  display: flex;\\n  align-items: center;\\n  text-align: center;\\n  justify-content: center;\\n  text-transform: uppercase;\\n  background: linear-gradient(159.53deg, #B4D109 1.07%, #87CC00 72.47%);\\n  -webkit-background-clip: text;\\n  -webkit-text-fill-color: transparent;\\n\\n  padding: 9.5px 36px;\\n  margin-bottom: 40px;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar MutationWindowContainer = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n    displayName: \"MutationWindow__MutationWindowContainer\",\n    componentId: \"sc-6498576-0\"\n})(_templateObject(), _styles_device__WEBPACK_IMPORTED_MODULE_8__.device.tablet);\n_c = MutationWindowContainer;\nvar MintMenu = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n    displayName: \"MutationWindow__MintMenu\",\n    componentId: \"sc-6498576-1\"\n})(_templateObject1(), _styles_device__WEBPACK_IMPORTED_MODULE_8__.device.tablet);\n_c1 = MintMenu;\nvar MutantPreview = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((next_image__WEBPACK_IMPORTED_MODULE_3___default())).withConfig({\n    displayName: \"MutationWindow__MutantPreview\",\n    componentId: \"sc-6498576-2\"\n})(_templateObject2());\n_c2 = MutantPreview;\nvar MintStatus = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n    displayName: \"MutationWindow__MintStatus\",\n    componentId: \"sc-6498576-3\"\n})(_templateObject3());\n_c3 = MintStatus;\nvar MutationWindow = function() {\n    _s();\n    var isMobile = (0,_hooks_useScreenWidth__WEBPACK_IMPORTED_MODULE_7__.useWindowSize)().isMobile;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MutationWindowContainer, {\n        children: [\n            !isMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MutantPreview, {\n                src: \"/images/placeholder.gif\",\n                width: 311,\n                height: 311\n            }, void 0, false, {\n                fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                lineNumber: 72,\n                columnNumber: 27\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MintMenu, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MintStatus, {\n                        children: \"whitelist mint is live\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MutationStatLine__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        name: \"Mutants left:\",\n                        value: 2999\n                    }, void 0, false, {\n                        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MutationStatLine__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        name: \"Price:\",\n                        value: \"33 $OP\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        style: {\n                            flexGrow: 1\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MutationStatLine__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        style: {\n                            marginBottom: 8\n                        },\n                        name: \"Total:\",\n                        value: \"1833 $OP\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_AmountSelector__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Button_MoaycRectButton__WEBPACK_IMPORTED_MODULE_6__.MoaycRectButton, {\n                        style: {\n                            marginTop: 11\n                        },\n                        children: \"Mint\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n        lineNumber: 71,\n        columnNumber: 9\n    }, _this);\n};\n_s(MutationWindow, \"RrAUomeLti9nx2PuSFos4cGInHk=\", false, function() {\n    return [\n        _hooks_useScreenWidth__WEBPACK_IMPORTED_MODULE_7__.useWindowSize\n    ];\n});\n_c4 = MutationWindow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MutationWindow);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"MutationWindowContainer\");\n$RefreshReg$(_c1, \"MintMenu\");\n$RefreshReg$(_c2, \"MutantPreview\");\n$RefreshReg$(_c3, \"MintStatus\");\n$RefreshReg$(_c4, \"MutationWindow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL011dGFudC9NdXRhdGlvbldpbmRvdy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2E7QUFDUjtBQUNtQjtBQUNKO0FBQ2M7QUFDRDtBQUNkO0FBRzdDLElBQU1RLHVCQUF1QixHQUFHUCx3RUFBVTs7O3NCQU1wQk0seURBQWEsQ0FLbEM7QUFYS0MsS0FBQUEsdUJBQXVCO0FBYzdCLElBQU1HLFFBQVEsR0FBR1Ysd0VBQVU7Ozt1QkFRTE0seURBQWEsQ0FJbEM7QUFaS0ksTUFBQUEsUUFBUTtBQWNkLElBQU1DLGFBQWEsR0FBR1gsNkRBQU0sQ0FBQ0MsbURBQUssQ0FBQzs7O3NCQUdsQztBQUhLVSxNQUFBQSxhQUFhO0FBTW5CLElBQU1DLFVBQVUsR0FBR1osd0VBQVU7OztzQkFtQjVCO0FBbkJLWSxNQUFBQSxVQUFVO0FBcUJoQixJQUFNQyxjQUFjLEdBQUcsV0FBTTs7SUFFekIsSUFBTSxRQUFTLEdBQUlSLG9FQUFhLEVBQUUsQ0FBM0JTLFFBQVE7SUFFZixxQkFDSSw4REFBQ1AsdUJBQXVCOztZQUNuQixDQUFDTyxRQUFRLGtCQUFJLDhEQUFDSCxhQUFhO2dCQUFDSSxHQUFHLEVBQUUseUJBQXlCO2dCQUFFQyxLQUFLLEVBQUUsR0FBRztnQkFBRUMsTUFBTSxFQUFFLEdBQUc7Ozs7O3FCQUFHOzBCQUV2Riw4REFBQ1AsUUFBUTs7a0NBQ0wsOERBQUNFLFVBQVU7a0NBQUMsd0JBRVo7Ozs7OzZCQUFhO2tDQUNiLDhEQUFDVix5REFBZ0I7d0JBQUNnQixJQUFJLEVBQUUsZUFBZTt3QkFBRUMsS0FBSyxFQUFFLElBQUk7Ozs7OzZCQUFHO2tDQUN2RCw4REFBQ2pCLHlEQUFnQjt3QkFBQ2dCLElBQUksRUFBRSxRQUFRO3dCQUFFQyxLQUFLLEVBQUUsUUFBUTs7Ozs7NkJBQUc7a0NBQ3BELDhEQUFDWCxLQUFHO3dCQUFDWSxLQUFLLEVBQUU7NEJBQUNDLFFBQVEsRUFBRSxDQUFDO3lCQUFDOzs7Ozs2QkFBRztrQ0FDNUIsOERBQUNuQix5REFBZ0I7d0JBQUNrQixLQUFLLEVBQUU7NEJBQUNFLFlBQVksRUFBRSxDQUFDO3lCQUFDO3dCQUFFSixJQUFJLEVBQUUsUUFBUTt3QkFBRUMsS0FBSyxFQUFFLFVBQVU7Ozs7OzZCQUFHO2tDQUNoRiw4REFBQ2hCLHVEQUFjOzs7OzZCQUFFO2tDQUNqQiw4REFBQ0Msb0VBQWU7d0JBQUNnQixLQUFLLEVBQUU7NEJBQUNHLFNBQVMsRUFBRSxFQUFFO3lCQUFDO2tDQUFFLE1BQUk7Ozs7OzZCQUFrQjs7Ozs7O3FCQUN4RDs7Ozs7O2FBQ1csQ0FDNUI7QUFDTixDQUFDO0dBckJLVixjQUFjOztRQUVHUixnRUFBYTs7O0FBRjlCUSxNQUFBQSxjQUFjO0FBdUJwQiwrREFBZUEsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXV0YW50L011dGF0aW9uV2luZG93LnRzeD8zYjM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTXV0YXRpb25TdGF0TGluZSBmcm9tIFwiLi9NdXRhdGlvblN0YXRMaW5lXCI7XG5pbXBvcnQgQW1vdW50U2VsZWN0b3IgZnJvbSBcIi4vQW1vdW50U2VsZWN0b3JcIjtcbmltcG9ydCB7IE1vYXljUmVjdEJ1dHRvbiB9IGZyb20gXCIuLi9CdXR0b24vTW9heWNSZWN0QnV0dG9uXCI7XG5pbXBvcnQgeyB1c2VXaW5kb3dTaXplIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVNjcmVlbldpZHRoXCI7XG5pbXBvcnQgeyBkZXZpY2UgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL2RldmljZVwiO1xuXG5cbmNvbnN0IE11dGF0aW9uV2luZG93Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogIzFFMjExNztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMjNweDtcbiAgZGlzcGxheTogZmxleDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAke2RldmljZS50YWJsZXR9IHtcbiAgICBtYXJnaW4tbGVmdDogNDhweDtcbiAgICBtaW4td2lkdGg6IDIxNXB4O1xuICAgIHBhZGRpbmc6IDIzcHg7XG4gIH1cbmA7XG5cblxuY29uc3QgTWludE1lbnUgPSBzdHlsZWQuZGl2YFxuICBtaW4td2lkdGg6IDI1N3B4O1xuXG4gIGhlaWdodDogMzExcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIFxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgJHtkZXZpY2UudGFibGV0fSB7XG4gICAgbWFyZ2luLWxlZnQ6IDQ4cHg7XG4gICAgbWluLXdpZHRoOiAyMTVweDtcbiAgfVxuYDtcblxuY29uc3QgTXV0YW50UHJldmlldyA9IHN0eWxlZChJbWFnZSlgXG4gIGJvcmRlcjogMS41cHggc29saWQgIzg3Q0MwMSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuYDtcblxuXG5jb25zdCBNaW50U3RhdHVzID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjODdDQzAxO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEzMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTkuNTNkZWcsICNCNEQxMDkgMS4wNyUsICM4N0NDMDAgNzIuNDclKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICBwYWRkaW5nOiA5LjVweCAzNnB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuYDtcblxuY29uc3QgTXV0YXRpb25XaW5kb3cgPSAoKSA9PiB7XG5cbiAgICBjb25zdCB7aXNNb2JpbGV9ID0gdXNlV2luZG93U2l6ZSgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE11dGF0aW9uV2luZG93Q29udGFpbmVyPlxuICAgICAgICAgICAgeyFpc01vYmlsZSAmJiA8TXV0YW50UHJldmlldyBzcmM9e1wiL2ltYWdlcy9wbGFjZWhvbGRlci5naWZcIn0gd2lkdGg9ezMxMX0gaGVpZ2h0PXszMTF9Lz59XG5cbiAgICAgICAgICAgIDxNaW50TWVudT5cbiAgICAgICAgICAgICAgICA8TWludFN0YXR1cz5cbiAgICAgICAgICAgICAgICAgICAgd2hpdGVsaXN0IG1pbnQgaXMgbGl2ZVxuICAgICAgICAgICAgICAgIDwvTWludFN0YXR1cz5cbiAgICAgICAgICAgICAgICA8TXV0YXRpb25TdGF0TGluZSBuYW1lPXtcIk11dGFudHMgbGVmdDpcIn0gdmFsdWU9ezI5OTl9Lz5cbiAgICAgICAgICAgICAgICA8TXV0YXRpb25TdGF0TGluZSBuYW1lPXtcIlByaWNlOlwifSB2YWx1ZT17JzMzICRPUCd9Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleEdyb3c6IDF9fS8+XG4gICAgICAgICAgICAgICAgPE11dGF0aW9uU3RhdExpbmUgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDh9fSBuYW1lPXtcIlRvdGFsOlwifSB2YWx1ZT17JzE4MzMgJE9QJ30vPlxuICAgICAgICAgICAgICAgIDxBbW91bnRTZWxlY3Rvci8+XG4gICAgICAgICAgICAgICAgPE1vYXljUmVjdEJ1dHRvbiBzdHlsZT17e21hcmdpblRvcDogMTF9fT5NaW50PC9Nb2F5Y1JlY3RCdXR0b24+XG4gICAgICAgICAgICA8L01pbnRNZW51PlxuICAgICAgICA8L011dGF0aW9uV2luZG93Q29udGFpbmVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNdXRhdGlvbldpbmRvdzsiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJJbWFnZSIsIk11dGF0aW9uU3RhdExpbmUiLCJBbW91bnRTZWxlY3RvciIsIk1vYXljUmVjdEJ1dHRvbiIsInVzZVdpbmRvd1NpemUiLCJkZXZpY2UiLCJNdXRhdGlvbldpbmRvd0NvbnRhaW5lciIsImRpdiIsInRhYmxldCIsIk1pbnRNZW51IiwiTXV0YW50UHJldmlldyIsIk1pbnRTdGF0dXMiLCJNdXRhdGlvbldpbmRvdyIsImlzTW9iaWxlIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJuYW1lIiwidmFsdWUiLCJzdHlsZSIsImZsZXhHcm93IiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Mutant/MutationWindow.tsx\n"));

/***/ })

});