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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _MutationStatLine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MutationStatLine */ \"./components/Mutant/MutationStatLine.tsx\");\n/* harmony import */ var _AmountSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AmountSelector */ \"./components/Mutant/AmountSelector.tsx\");\n/* harmony import */ var _Button_MoaycRectButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Button/MoaycRectButton */ \"./components/Button/MoaycRectButton.tsx\");\n/* harmony import */ var _hooks_useScreenWidth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useScreenWidth */ \"./hooks/useScreenWidth.ts\");\n/* harmony import */ var _styles_device__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/device */ \"./styles/device.ts\");\n/* harmony import */ var _MoaycModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MoaycModal */ \"./components/Mutant/MoaycModal.tsx\");\n/* harmony import */ var _Fail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Fail */ \"./components/Mutant/Fail.tsx\");\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  background: #1E2117;\\n  border-radius: 20px;\\n  padding: 28px 39px;\\n  display: flex;\\n\\n  @media screen and \",\n        \" {\\n    min-width: 215px;\\n    padding: 23px;\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  min-width: 257px;\\n\\n  height: 311px;\\n  display: flex;\\n  flex-direction: column;\\n\\n\\n  @media screen and \",\n        \" {\\n    margin-left: 48px;\\n    min-width: 215px;\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  border: 1.5px solid #87CC01 !important;\\n  border-radius: 15px;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  border: 1.5px solid #87CC01;\\n  border-radius: 6px;\\n  font-family: 'Rubik', sans-serif;\\n  font-style: italic;\\n  font-weight: 700;\\n  font-size: 12px;\\n  line-height: 130%;\\n  display: flex;\\n  align-items: center;\\n  text-align: center;\\n  justify-content: center;\\n  text-transform: uppercase;\\n  background: linear-gradient(159.53deg, #B4D109 1.07%, #87CC00 72.47%);\\n  -webkit-background-clip: text;\\n  -webkit-text-fill-color: transparent;\\n\\n  padding: 9.5px 36px;\\n  margin-bottom: 40px;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar MutationWindowContainer = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div.withConfig({\n    displayName: \"MutationWindow__MutationWindowContainer\",\n    componentId: \"sc-c6fd43ec-0\"\n})(_templateObject(), _styles_device__WEBPACK_IMPORTED_MODULE_8__.device.tablet);\n_c = MutationWindowContainer;\nvar MintMenu = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div.withConfig({\n    displayName: \"MutationWindow__MintMenu\",\n    componentId: \"sc-c6fd43ec-1\"\n})(_templateObject1(), _styles_device__WEBPACK_IMPORTED_MODULE_8__.device.tablet);\n_c1 = MintMenu;\nvar MutantPreview = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"])((next_image__WEBPACK_IMPORTED_MODULE_3___default())).withConfig({\n    displayName: \"MutationWindow__MutantPreview\",\n    componentId: \"sc-c6fd43ec-2\"\n})(_templateObject2());\n_c2 = MutantPreview;\nvar MintStatus = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div.withConfig({\n    displayName: \"MutationWindow__MintStatus\",\n    componentId: \"sc-c6fd43ec-3\"\n})(_templateObject3());\n_c3 = MintStatus;\nvar MutationWindow = function() {\n    _s();\n    var isMobile = (0,_hooks_useScreenWidth__WEBPACK_IMPORTED_MODULE_7__.useWindowSize)().isMobile;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isOpen = ref[0], setIsOpen = ref[1];\n    var isSoldOut = true;\n    var isNotStarted = true;\n    if (isSoldOut) {}\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MutationWindowContainer, {\n        children: [\n            !isMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MutantPreview, {\n                src: \"/images/placeholder.gif\",\n                width: 311,\n                height: 311\n            }, void 0, false, {\n                fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                lineNumber: 84,\n                columnNumber: 27\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MintMenu, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MintStatus, {\n                        children: \"whitelist mint is live\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MutationStatLine__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        name: \"Mutants left:\",\n                        value: 2999\n                    }, void 0, false, {\n                        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MutationStatLine__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        name: \"Price:\",\n                        value: \"33 $OP\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        style: {\n                            flexGrow: 1\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MutationStatLine__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        style: {\n                            marginBottom: 8\n                        },\n                        name: \"Total:\",\n                        value: \"1833 $OP\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_AmountSelector__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Button_MoaycRectButton__WEBPACK_IMPORTED_MODULE_6__.MoaycRectButton, {\n                        style: {\n                            marginTop: 11\n                        },\n                        onClick: function() {\n                            return setIsOpen(true);\n                        },\n                        children: \"Mint\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                lineNumber: 86,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MoaycModal__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                isOpen: isOpen,\n                onClose: function() {\n                    return setIsOpen(false);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Fail__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                    onClose: function() {\n                        return setIsOpen(false);\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                lineNumber: 107,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n        lineNumber: 82,\n        columnNumber: 9\n    }, _this);\n};\n_s(MutationWindow, \"or+gNB6O0/VhoQsCb/cEqtGiWAI=\", false, function() {\n    return [\n        _hooks_useScreenWidth__WEBPACK_IMPORTED_MODULE_7__.useWindowSize\n    ];\n});\n_c4 = MutationWindow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MutationWindow);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"MutationWindowContainer\");\n$RefreshReg$(_c1, \"MintMenu\");\n$RefreshReg$(_c2, \"MutantPreview\");\n$RefreshReg$(_c3, \"MintStatus\");\n$RefreshReg$(_c4, \"MutationWindow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL011dGFudC9NdXRhdGlvbldpbmRvdy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDRDtBQUNSO0FBQ21CO0FBQ0o7QUFDYztBQUNEO0FBQ2Q7QUFDUDtBQUNaO0FBRzFCLElBQU1XLHVCQUF1QixHQUFHVCx5RUFBVTs7O3NCQU1wQk0seURBQWEsQ0FJbEM7QUFWS0csS0FBQUEsdUJBQXVCO0FBYTdCLElBQU1HLFFBQVEsR0FBR1oseUVBQVU7Ozt1QkFRTE0seURBQWEsQ0FJbEM7QUFaS00sTUFBQUEsUUFBUTtBQWNkLElBQU1DLGFBQWEsR0FBR2IsOERBQU0sQ0FBQ0MsbURBQUssQ0FBQzs7O3NCQUdsQztBQUhLWSxNQUFBQSxhQUFhO0FBTW5CLElBQU1DLFVBQVUsR0FBR2QseUVBQVU7OztzQkFtQjVCO0FBbkJLYyxNQUFBQSxVQUFVO0FBcUJoQixJQUFNQyxjQUFjLEdBQUcsV0FBTTs7SUFFekIsSUFBTSxRQUFTLEdBQUlWLG9FQUFhLEVBQUUsQ0FBM0JXLFFBQVE7SUFDZixJQUE0QmpCLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBcENrQixNQUFNLEdBQWVsQixHQUFlLEdBQTlCLEVBQUVtQixTQUFTLEdBQUluQixHQUFlLEdBQW5CO0lBRXhCLElBQU1vQixTQUFTLEdBQUcsSUFBSTtJQUN0QixJQUFNQyxZQUFZLEdBQUcsSUFBSTtJQUl6QixJQUFJRCxTQUFTLEVBQUUsQ0FFZixDQUFDO0lBRUQscUJBQ0ksOERBQUNWLHVCQUF1Qjs7WUFFbkIsQ0FBQ08sUUFBUSxrQkFBSSw4REFBQ0gsYUFBYTtnQkFBQ1EsR0FBRyxFQUFFLHlCQUF5QjtnQkFBRUMsS0FBSyxFQUFFLEdBQUc7Z0JBQUVDLE1BQU0sRUFBRSxHQUFHOzs7OztxQkFBRzswQkFFdkYsOERBQUNYLFFBQVE7O2tDQUNMLDhEQUFDRSxVQUFVO2tDQUFDLHdCQUVaOzs7Ozs2QkFBYTtrQ0FDYiw4REFBQ1oseURBQWdCO3dCQUFDc0IsSUFBSSxFQUFFLGVBQWU7d0JBQUVDLEtBQUssRUFBRSxJQUFJOzs7Ozs2QkFBRztrQ0FDdkQsOERBQUN2Qix5REFBZ0I7d0JBQUNzQixJQUFJLEVBQUUsUUFBUTt3QkFBRUMsS0FBSyxFQUFFLFFBQVE7Ozs7OzZCQUFHO2tDQUNwRCw4REFBQ2YsS0FBRzt3QkFBQ2dCLEtBQUssRUFBRTs0QkFBQ0MsUUFBUSxFQUFFLENBQUM7eUJBQUM7Ozs7OzZCQUFHO2tDQUM1Qiw4REFBQ3pCLHlEQUFnQjt3QkFBQ3dCLEtBQUssRUFBRTs0QkFBQ0UsWUFBWSxFQUFFLENBQUM7eUJBQUM7d0JBQUVKLElBQUksRUFBRSxRQUFRO3dCQUFFQyxLQUFLLEVBQUUsVUFBVTs7Ozs7NkJBQUc7a0NBQ2hGLDhEQUFDdEIsdURBQWM7Ozs7NkJBQUU7a0NBQ2pCLDhEQUFDQyxvRUFBZTt3QkFBQ3NCLEtBQUssRUFBRTs0QkFBQ0csU0FBUyxFQUFFLEVBQUU7eUJBQUM7d0JBQUVDLE9BQU8sRUFBRTttQ0FBTVosU0FBUyxDQUFDLElBQUksQ0FBQzt5QkFBQTtrQ0FBRSxNQUFJOzs7Ozs2QkFBa0I7Ozs7OztxQkFDeEY7MEJBV1gsOERBQUNYLG1EQUFVO2dCQUFDVSxNQUFNLEVBQUVBLE1BQU07Z0JBQUVjLE9BQU8sRUFBRTsyQkFBTWIsU0FBUyxDQUFDLEtBQUssQ0FBQztpQkFBQTswQkFDdkQsNEVBQUNWLDhDQUFJO29CQUFDdUIsT0FBTyxFQUFFOytCQUFNYixTQUFTLENBQUMsS0FBSyxDQUFDO3FCQUFBOzs7Ozt5QkFBRzs7Ozs7cUJBQy9COzs7Ozs7YUFHUyxDQUM1QjtBQUNOLENBQUM7R0EvQ0tILGNBQWM7O1FBRUdWLGdFQUFhOzs7QUFGOUJVLE1BQUFBLGNBQWM7QUFpRHBCLCtEQUFlQSxjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NdXRhbnQvTXV0YXRpb25XaW5kb3cudHN4PzNiMzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IE11dGF0aW9uU3RhdExpbmUgZnJvbSBcIi4vTXV0YXRpb25TdGF0TGluZVwiO1xuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gXCIuL0Ftb3VudFNlbGVjdG9yXCI7XG5pbXBvcnQgeyBNb2F5Y1JlY3RCdXR0b24gfSBmcm9tIFwiLi4vQnV0dG9uL01vYXljUmVjdEJ1dHRvblwiO1xuaW1wb3J0IHsgdXNlV2luZG93U2l6ZSB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VTY3JlZW5XaWR0aFwiO1xuaW1wb3J0IHsgZGV2aWNlIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9kZXZpY2VcIjtcbmltcG9ydCBNb2F5Y01vZGFsIGZyb20gXCIuL01vYXljTW9kYWxcIjtcbmltcG9ydCBGYWlsIGZyb20gXCIuL0ZhaWxcIjtcblxuXG5jb25zdCBNdXRhdGlvbldpbmRvd0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICMxRTIxMTc7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDI4cHggMzlweDtcbiAgZGlzcGxheTogZmxleDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAke2RldmljZS50YWJsZXR9IHtcbiAgICBtaW4td2lkdGg6IDIxNXB4O1xuICAgIHBhZGRpbmc6IDIzcHg7XG4gIH1cbmA7XG5cblxuY29uc3QgTWludE1lbnUgPSBzdHlsZWQuZGl2YFxuICBtaW4td2lkdGg6IDI1N3B4O1xuXG4gIGhlaWdodDogMzExcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAke2RldmljZS50YWJsZXR9IHtcbiAgICBtYXJnaW4tbGVmdDogNDhweDtcbiAgICBtaW4td2lkdGg6IDIxNXB4O1xuICB9XG5gO1xuXG5jb25zdCBNdXRhbnRQcmV2aWV3ID0gc3R5bGVkKEltYWdlKWBcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjODdDQzAxICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5gO1xuXG5cbmNvbnN0IE1pbnRTdGF0dXMgPSBzdHlsZWQuZGl2YFxuICBib3JkZXI6IDEuNXB4IHNvbGlkICM4N0NDMDE7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTMwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE1OS41M2RlZywgI0I0RDEwOSAxLjA3JSwgIzg3Q0MwMCA3Mi40NyUpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gIHBhZGRpbmc6IDkuNXB4IDM2cHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG5gO1xuXG5jb25zdCBNdXRhdGlvbldpbmRvdyA9ICgpID0+IHtcblxuICAgIGNvbnN0IHtpc01vYmlsZX0gPSB1c2VXaW5kb3dTaXplKCk7XG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGlzU29sZE91dCA9IHRydWU7XG4gICAgY29uc3QgaXNOb3RTdGFydGVkID0gdHJ1ZTtcblxuXG5cbiAgICBpZiAoaXNTb2xkT3V0KSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxNdXRhdGlvbldpbmRvd0NvbnRhaW5lcj5cblxuICAgICAgICAgICAgeyFpc01vYmlsZSAmJiA8TXV0YW50UHJldmlldyBzcmM9e1wiL2ltYWdlcy9wbGFjZWhvbGRlci5naWZcIn0gd2lkdGg9ezMxMX0gaGVpZ2h0PXszMTF9Lz59XG5cbiAgICAgICAgICAgIDxNaW50TWVudT5cbiAgICAgICAgICAgICAgICA8TWludFN0YXR1cz5cbiAgICAgICAgICAgICAgICAgICAgd2hpdGVsaXN0IG1pbnQgaXMgbGl2ZVxuICAgICAgICAgICAgICAgIDwvTWludFN0YXR1cz5cbiAgICAgICAgICAgICAgICA8TXV0YXRpb25TdGF0TGluZSBuYW1lPXtcIk11dGFudHMgbGVmdDpcIn0gdmFsdWU9ezI5OTl9Lz5cbiAgICAgICAgICAgICAgICA8TXV0YXRpb25TdGF0TGluZSBuYW1lPXtcIlByaWNlOlwifSB2YWx1ZT17JzMzICRPUCd9Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleEdyb3c6IDF9fS8+XG4gICAgICAgICAgICAgICAgPE11dGF0aW9uU3RhdExpbmUgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDh9fSBuYW1lPXtcIlRvdGFsOlwifSB2YWx1ZT17JzE4MzMgJE9QJ30vPlxuICAgICAgICAgICAgICAgIDxBbW91bnRTZWxlY3Rvci8+XG4gICAgICAgICAgICAgICAgPE1vYXljUmVjdEJ1dHRvbiBzdHlsZT17e21hcmdpblRvcDogMTF9fSBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4odHJ1ZSl9Pk1pbnQ8L01vYXljUmVjdEJ1dHRvbj5cbiAgICAgICAgICAgIDwvTWludE1lbnU+XG5cblxuICAgICAgICAgICAgey8qPE1vYXljTW9kYWwgaXNPcGVuPXtpc09wZW59IG9uQ2xvc2U9eygpID0+IHNldElzT3BlbihmYWxzZSl9PiovfVxuICAgICAgICAgICAgey8qICAgIDxQcm9jZXNzaW5nLz4qL31cbiAgICAgICAgICAgIHsvKjwvTW9heWNNb2RhbD4qL31cblxuICAgICAgICAgICAgey8qPE1vYXljTW9kYWwgaXNPcGVuPXtpc09wZW59IG9uQ2xvc2U9eygpID0+IHNldElzT3BlbihmYWxzZSl9PiovfVxuICAgICAgICAgICAgey8qICAgIDxTdWNjZXNzIG9uQ2xvc2U9eygpID0+IHNldElzT3BlbihmYWxzZSl9Lz4qL31cbiAgICAgICAgICAgIHsvKjwvTW9heWNNb2RhbD4qL31cblxuICAgICAgICAgICAgPE1vYXljTW9kYWwgaXNPcGVuPXtpc09wZW59IG9uQ2xvc2U9eygpID0+IHNldElzT3BlbihmYWxzZSl9PlxuICAgICAgICAgICAgICAgIDxGYWlsIG9uQ2xvc2U9eygpID0+IHNldElzT3BlbihmYWxzZSl9Lz5cbiAgICAgICAgICAgIDwvTW9heWNNb2RhbD5cblxuXG4gICAgICAgIDwvTXV0YXRpb25XaW5kb3dDb250YWluZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE11dGF0aW9uV2luZG93OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwiSW1hZ2UiLCJNdXRhdGlvblN0YXRMaW5lIiwiQW1vdW50U2VsZWN0b3IiLCJNb2F5Y1JlY3RCdXR0b24iLCJ1c2VXaW5kb3dTaXplIiwiZGV2aWNlIiwiTW9heWNNb2RhbCIsIkZhaWwiLCJNdXRhdGlvbldpbmRvd0NvbnRhaW5lciIsImRpdiIsInRhYmxldCIsIk1pbnRNZW51IiwiTXV0YW50UHJldmlldyIsIk1pbnRTdGF0dXMiLCJNdXRhdGlvbldpbmRvdyIsImlzTW9iaWxlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiaXNTb2xkT3V0IiwiaXNOb3RTdGFydGVkIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJuYW1lIiwidmFsdWUiLCJzdHlsZSIsImZsZXhHcm93IiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwib25DbGljayIsIm9uQ2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Mutant/MutationWindow.tsx\n"));

/***/ })

});