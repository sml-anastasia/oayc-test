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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _MutationStatLine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MutationStatLine */ \"./components/Mutant/MutationStatLine.tsx\");\n/* harmony import */ var _AmountSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AmountSelector */ \"./components/Mutant/AmountSelector.tsx\");\n/* harmony import */ var _Button_MoaycRectButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Button/MoaycRectButton */ \"./components/Button/MoaycRectButton.tsx\");\n/* harmony import */ var _hooks_useScreenWidth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useScreenWidth */ \"./hooks/useScreenWidth.ts\");\n/* harmony import */ var _styles_device__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/device */ \"./styles/device.ts\");\n/* harmony import */ var _MoaycModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MoaycModal */ \"./components/Mutant/MoaycModal.tsx\");\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  background: #1E2117;\\n  border-radius: 20px;\\n  padding: 28px 39px;\\n  display: flex;\\n\\n  @media screen and \",\n        \" {\\n    min-width: 215px;\\n    padding: 23px;\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  min-width: 257px;\\n\\n  height: 311px;\\n  display: flex;\\n  flex-direction: column;\\n\\n\\n  @media screen and \",\n        \" {\\n    margin-left: 48px;\\n    min-width: 215px;\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  border: 1.5px solid #87CC01 !important;\\n  border-radius: 15px;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  border: 1.5px solid #87CC01;\\n  border-radius: 6px;\\n  font-family: 'Rubik', sans-serif;\\n  font-style: italic;\\n  font-weight: 700;\\n  font-size: 12px;\\n  line-height: 130%;\\n  display: flex;\\n  align-items: center;\\n  text-align: center;\\n  justify-content: center;\\n  text-transform: uppercase;\\n  background: linear-gradient(159.53deg, #B4D109 1.07%, #87CC00 72.47%);\\n  -webkit-background-clip: text;\\n  -webkit-text-fill-color: transparent;\\n\\n  padding: 9.5px 36px;\\n  margin-bottom: 40px;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar MutationWindowContainer = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div.withConfig({\n    displayName: \"MutationWindow__MutationWindowContainer\",\n    componentId: \"sc-24f6b083-0\"\n})(_templateObject(), _styles_device__WEBPACK_IMPORTED_MODULE_8__.device.tablet);\n_c = MutationWindowContainer;\nvar MintMenu = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div.withConfig({\n    displayName: \"MutationWindow__MintMenu\",\n    componentId: \"sc-24f6b083-1\"\n})(_templateObject1(), _styles_device__WEBPACK_IMPORTED_MODULE_8__.device.tablet);\n_c1 = MintMenu;\nvar MutantPreview = (0,styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"])((next_image__WEBPACK_IMPORTED_MODULE_3___default())).withConfig({\n    displayName: \"MutationWindow__MutantPreview\",\n    componentId: \"sc-24f6b083-2\"\n})(_templateObject2());\n_c2 = MutantPreview;\nvar MintStatus = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div.withConfig({\n    displayName: \"MutationWindow__MintStatus\",\n    componentId: \"sc-24f6b083-3\"\n})(_templateObject3());\n_c3 = MintStatus;\nvar MutationWindow = function() {\n    _s();\n    var isMobile = (0,_hooks_useScreenWidth__WEBPACK_IMPORTED_MODULE_7__.useWindowSize)().isMobile;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isOpen = ref[0], setIsOpen = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MutationWindowContainer, {\n        children: [\n            !isMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MutantPreview, {\n                src: \"/images/placeholder.gif\",\n                width: 311,\n                height: 311\n            }, void 0, false, {\n                fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                lineNumber: 74,\n                columnNumber: 27\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MintMenu, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MintStatus, {\n                        children: \"whitelist mint is live\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MutationStatLine__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        name: \"Mutants left:\",\n                        value: 2999\n                    }, void 0, false, {\n                        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MutationStatLine__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        name: \"Price:\",\n                        value: \"33 $OP\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        style: {\n                            flexGrow: 1\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MutationStatLine__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        style: {\n                            marginBottom: 8\n                        },\n                        name: \"Total:\",\n                        value: \"1833 $OP\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_AmountSelector__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Button_MoaycRectButton__WEBPACK_IMPORTED_MODULE_6__.MoaycRectButton, {\n                        style: {\n                            marginTop: 11\n                        },\n                        onClick: function() {\n                            return setIsOpen(true);\n                        },\n                        children: \"Mint\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MoaycModal__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                isOpen: isOpen,\n                onClose: function() {\n                    return setIsOpen(false);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n                lineNumber: 89,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MutationWindow.tsx\",\n        lineNumber: 73,\n        columnNumber: 9\n    }, _this);\n};\n_s(MutationWindow, \"or+gNB6O0/VhoQsCb/cEqtGiWAI=\", false, function() {\n    return [\n        _hooks_useScreenWidth__WEBPACK_IMPORTED_MODULE_7__.useWindowSize\n    ];\n});\n_c4 = MutationWindow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MutationWindow);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"MutationWindowContainer\");\n$RefreshReg$(_c1, \"MintMenu\");\n$RefreshReg$(_c2, \"MutantPreview\");\n$RefreshReg$(_c3, \"MintStatus\");\n$RefreshReg$(_c4, \"MutationWindow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL011dGFudC9NdXRhdGlvbldpbmRvdy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNEO0FBQ1I7QUFDbUI7QUFDSjtBQUNjO0FBQ0Q7QUFDZDtBQUNQO0FBSXRDLElBQU1VLHVCQUF1QixHQUFHUix5RUFBVTs7O3NCQU1wQk0seURBQWEsQ0FJbEM7QUFWS0UsS0FBQUEsdUJBQXVCO0FBYTdCLElBQU1HLFFBQVEsR0FBR1gseUVBQVU7Ozt1QkFRTE0seURBQWEsQ0FJbEM7QUFaS0ssTUFBQUEsUUFBUTtBQWNkLElBQU1DLGFBQWEsR0FBR1osOERBQU0sQ0FBQ0MsbURBQUssQ0FBQzs7O3NCQUdsQztBQUhLVyxNQUFBQSxhQUFhO0FBTW5CLElBQU1DLFVBQVUsR0FBR2IseUVBQVU7OztzQkFtQjVCO0FBbkJLYSxNQUFBQSxVQUFVO0FBcUJoQixJQUFNQyxjQUFjLEdBQUcsV0FBTTs7SUFFekIsSUFBTSxRQUFTLEdBQUlULG9FQUFhLEVBQUUsQ0FBM0JVLFFBQVE7SUFDZixJQUE0QmhCLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBcENpQixNQUFNLEdBQWVqQixHQUFlLEdBQTlCLEVBQUVrQixTQUFTLEdBQUlsQixHQUFlLEdBQW5CO0lBRXhCLHFCQUNJLDhEQUFDUyx1QkFBdUI7O1lBQ25CLENBQUNPLFFBQVEsa0JBQUksOERBQUNILGFBQWE7Z0JBQUNNLEdBQUcsRUFBRSx5QkFBeUI7Z0JBQUVDLEtBQUssRUFBRSxHQUFHO2dCQUFFQyxNQUFNLEVBQUUsR0FBRzs7Ozs7cUJBQUc7MEJBRXZGLDhEQUFDVCxRQUFROztrQ0FDTCw4REFBQ0UsVUFBVTtrQ0FBQyx3QkFFWjs7Ozs7NkJBQWE7a0NBQ2IsOERBQUNYLHlEQUFnQjt3QkFBQ21CLElBQUksRUFBRSxlQUFlO3dCQUFFQyxLQUFLLEVBQUUsSUFBSTs7Ozs7NkJBQUc7a0NBQ3ZELDhEQUFDcEIseURBQWdCO3dCQUFDbUIsSUFBSSxFQUFFLFFBQVE7d0JBQUVDLEtBQUssRUFBRSxRQUFROzs7Ozs2QkFBRztrQ0FDcEQsOERBQUNiLEtBQUc7d0JBQUNjLEtBQUssRUFBRTs0QkFBQ0MsUUFBUSxFQUFFLENBQUM7eUJBQUM7Ozs7OzZCQUFHO2tDQUM1Qiw4REFBQ3RCLHlEQUFnQjt3QkFBQ3FCLEtBQUssRUFBRTs0QkFBQ0UsWUFBWSxFQUFFLENBQUM7eUJBQUM7d0JBQUVKLElBQUksRUFBRSxRQUFRO3dCQUFFQyxLQUFLLEVBQUUsVUFBVTs7Ozs7NkJBQUc7a0NBQ2hGLDhEQUFDbkIsdURBQWM7Ozs7NkJBQUU7a0NBQ2pCLDhEQUFDQyxvRUFBZTt3QkFBQ21CLEtBQUssRUFBRTs0QkFBQ0csU0FBUyxFQUFFLEVBQUU7eUJBQUM7d0JBQUVDLE9BQU8sRUFBRTttQ0FBTVYsU0FBUyxDQUFDLElBQUksQ0FBQzt5QkFBQTtrQ0FBRSxNQUFJOzs7Ozs2QkFBa0I7Ozs7OztxQkFDeEY7MEJBR1gsOERBQUNWLG1EQUFVO2dCQUFDUyxNQUFNLEVBQUVBLE1BQU07Z0JBQUVZLE9BQU8sRUFBRTsyQkFBTVgsU0FBUyxDQUFDLEtBQUssQ0FBQztpQkFBQTs7Ozs7cUJBQUc7Ozs7OzthQUN4QyxDQUM1QjtBQUNOLENBQUM7R0F6QktILGNBQWM7O1FBRUdULGdFQUFhOzs7QUFGOUJTLE1BQUFBLGNBQWM7QUEyQnBCLCtEQUFlQSxjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NdXRhbnQvTXV0YXRpb25XaW5kb3cudHN4PzNiMzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IE11dGF0aW9uU3RhdExpbmUgZnJvbSBcIi4vTXV0YXRpb25TdGF0TGluZVwiO1xuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gXCIuL0Ftb3VudFNlbGVjdG9yXCI7XG5pbXBvcnQgeyBNb2F5Y1JlY3RCdXR0b24gfSBmcm9tIFwiLi4vQnV0dG9uL01vYXljUmVjdEJ1dHRvblwiO1xuaW1wb3J0IHsgdXNlV2luZG93U2l6ZSB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VTY3JlZW5XaWR0aFwiO1xuaW1wb3J0IHsgZGV2aWNlIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9kZXZpY2VcIjtcbmltcG9ydCBNb2F5Y01vZGFsIGZyb20gXCIuL01vYXljTW9kYWxcIjtcbmltcG9ydCBmYSBmcm9tIFwiQHdhbGxldGNvbm5lY3QvcXJjb2RlLW1vZGFsL2Rpc3QvY2pzL2Jyb3dzZXIvbGFuZ3VhZ2VzL2ZhXCI7XG5cblxuY29uc3QgTXV0YXRpb25XaW5kb3dDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAjMUUyMTE3O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAyOHB4IDM5cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgJHtkZXZpY2UudGFibGV0fSB7XG4gICAgbWluLXdpZHRoOiAyMTVweDtcbiAgICBwYWRkaW5nOiAyM3B4O1xuICB9XG5gO1xuXG5cbmNvbnN0IE1pbnRNZW51ID0gc3R5bGVkLmRpdmBcbiAgbWluLXdpZHRoOiAyNTdweDtcblxuICBoZWlnaHQ6IDMxMXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgJHtkZXZpY2UudGFibGV0fSB7XG4gICAgbWFyZ2luLWxlZnQ6IDQ4cHg7XG4gICAgbWluLXdpZHRoOiAyMTVweDtcbiAgfVxuYDtcblxuY29uc3QgTXV0YW50UHJldmlldyA9IHN0eWxlZChJbWFnZSlgXG4gIGJvcmRlcjogMS41cHggc29saWQgIzg3Q0MwMSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuYDtcblxuXG5jb25zdCBNaW50U3RhdHVzID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjODdDQzAxO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEzMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTkuNTNkZWcsICNCNEQxMDkgMS4wNyUsICM4N0NDMDAgNzIuNDclKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICBwYWRkaW5nOiA5LjVweCAzNnB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuYDtcblxuY29uc3QgTXV0YXRpb25XaW5kb3cgPSAoKSA9PiB7XG5cbiAgICBjb25zdCB7aXNNb2JpbGV9ID0gdXNlV2luZG93U2l6ZSgpO1xuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TXV0YXRpb25XaW5kb3dDb250YWluZXI+XG4gICAgICAgICAgICB7IWlzTW9iaWxlICYmIDxNdXRhbnRQcmV2aWV3IHNyYz17XCIvaW1hZ2VzL3BsYWNlaG9sZGVyLmdpZlwifSB3aWR0aD17MzExfSBoZWlnaHQ9ezMxMX0vPn1cblxuICAgICAgICAgICAgPE1pbnRNZW51PlxuICAgICAgICAgICAgICAgIDxNaW50U3RhdHVzPlxuICAgICAgICAgICAgICAgICAgICB3aGl0ZWxpc3QgbWludCBpcyBsaXZlXG4gICAgICAgICAgICAgICAgPC9NaW50U3RhdHVzPlxuICAgICAgICAgICAgICAgIDxNdXRhdGlvblN0YXRMaW5lIG5hbWU9e1wiTXV0YW50cyBsZWZ0OlwifSB2YWx1ZT17Mjk5OX0vPlxuICAgICAgICAgICAgICAgIDxNdXRhdGlvblN0YXRMaW5lIG5hbWU9e1wiUHJpY2U6XCJ9IHZhbHVlPXsnMzMgJE9QJ30vPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4R3JvdzogMX19Lz5cbiAgICAgICAgICAgICAgICA8TXV0YXRpb25TdGF0TGluZSBzdHlsZT17e21hcmdpbkJvdHRvbTogOH19IG5hbWU9e1wiVG90YWw6XCJ9IHZhbHVlPXsnMTgzMyAkT1AnfS8+XG4gICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yLz5cbiAgICAgICAgICAgICAgICA8TW9heWNSZWN0QnV0dG9uIHN0eWxlPXt7bWFyZ2luVG9wOiAxMX19IG9uQ2xpY2s9eygpID0+IHNldElzT3Blbih0cnVlKX0+TWludDwvTW9heWNSZWN0QnV0dG9uPlxuICAgICAgICAgICAgPC9NaW50TWVudT5cblxuXG4gICAgICAgICAgICA8TW9heWNNb2RhbCBpc09wZW49e2lzT3Blbn0gb25DbG9zZT17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX0vPlxuICAgICAgICA8L011dGF0aW9uV2luZG93Q29udGFpbmVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNdXRhdGlvbldpbmRvdzsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlZCIsIkltYWdlIiwiTXV0YXRpb25TdGF0TGluZSIsIkFtb3VudFNlbGVjdG9yIiwiTW9heWNSZWN0QnV0dG9uIiwidXNlV2luZG93U2l6ZSIsImRldmljZSIsIk1vYXljTW9kYWwiLCJNdXRhdGlvbldpbmRvd0NvbnRhaW5lciIsImRpdiIsInRhYmxldCIsIk1pbnRNZW51IiwiTXV0YW50UHJldmlldyIsIk1pbnRTdGF0dXMiLCJNdXRhdGlvbldpbmRvdyIsImlzTW9iaWxlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJuYW1lIiwidmFsdWUiLCJzdHlsZSIsImZsZXhHcm93IiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwib25DbGljayIsIm9uQ2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Mutant/MutationWindow.tsx\n"));

/***/ })

});