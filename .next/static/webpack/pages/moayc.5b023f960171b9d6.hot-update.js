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

/***/ "./components/Mutant/TopBar.tsx":
/*!**************************************!*\
  !*** ./components/Mutant/TopBar.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_device__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/device */ \"./styles/device.ts\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var _Button_MoaycButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button/MoaycButton */ \"./components/Button/MoaycButton.tsx\");\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  position: relative;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin-top: 16px;\\n  padding: 0 20px;\\n\\n  @media screen and \",\n        \" {\\n    margin-top: 43px;\\n    padding: 0 136px;\\n  }\\n\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        '\\n  background: url(\"/main/favicons/green.svg\");\\n  background-size: 100% 100%;\\n  width: 39px;\\n  height: 46px;\\n  @media screen and ',\n        \" {\\n    width: 57px;\\n    height: 68px;\\n  }\\n\\n\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  font-family: 'Rubik', sans-serif;\\n  font-style: italic;\\n  font-weight: 700;\\n  line-height: 90%;\\n\\n  display: flex;\\n  align-items: center;\\n  text-align: right;\\n  text-transform: uppercase;\\n\\n  background: linear-gradient(159.53deg, #B4D109 1.07%, #87CC00 72.47%);\\n  -webkit-background-clip: text;\\n  -webkit-text-fill-color: transparent;\\n\\n  font-size: 24px;\\n\\n  @media screen and \",\n        \" {\\n    font-size: 70px;\\n  }\\n\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  position: absolute;\\n  left: 50%;\\n  transform: translateX(-50%);\\n  display: flex;\\n  align-items: center;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  font-family: 'Rubik', sans-serif;\\n  font-style: italic;\\n  font-weight: 700;\\n  font-size: 12px;\\n  line-height: 130%;\\n\\n  display: flex;\\n  align-items: center;\\n  text-transform: uppercase;\\n  \\n  background: linear-gradient(159.53deg, #B4D109 1.07%, #87CC00 72.47%);\\n  -webkit-background-clip: text;\\n  -webkit-text-fill-color: transparent;\\n  \\n  margin-right: 14px;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar StyledTopBar = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n    displayName: \"TopBar__StyledTopBar\",\n    componentId: \"sc-bc8a4cab-0\"\n})(_templateObject(), _styles_device__WEBPACK_IMPORTED_MODULE_3__.device.tablet);\n_c = StyledTopBar;\nvar StyledLogo = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n    displayName: \"TopBar__StyledLogo\",\n    componentId: \"sc-bc8a4cab-1\"\n})(_templateObject1(), _styles_device__WEBPACK_IMPORTED_MODULE_3__.device.tablet);\n_c1 = StyledLogo;\nvar MoaycText = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n    displayName: \"TopBar__MoaycText\",\n    componentId: \"sc-bc8a4cab-2\"\n})(_templateObject2(), _styles_device__WEBPACK_IMPORTED_MODULE_3__.device.tablet);\n_c2 = MoaycText;\nvar CenterContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n    displayName: \"TopBar__CenterContainer\",\n    componentId: \"sc-bc8a4cab-3\"\n})(_templateObject3());\n_c3 = CenterContainer;\nvar AccountAddress = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n    displayName: \"TopBar__AccountAddress\",\n    componentId: \"sc-bc8a4cab-4\"\n})(_templateObject4());\n_c4 = AccountAddress;\nvar TopBar = function() {\n    _s();\n    var ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.useAccount)(), address = ref.address, isConnected = ref.isConnected;\n    var disconnect = (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.useDisconnect)().disconnect;\n    var accountAddress = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        return \"\".concat(address === null || address === void 0 ? void 0 : address.substring(0, 6), \"...\").concat(address === null || address === void 0 ? void 0 : address.substring((address === null || address === void 0 ? void 0 : address.length) - 4, address === null || address === void 0 ? void 0 : address.length));\n    }, [\n        address\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledTopBar, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledLogo, {}, void 0, false, {\n                fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/TopBar.tsx\",\n                lineNumber: 97,\n                columnNumber: 13\n            }, _this),\n            isConnected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CenterContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AccountAddress, {\n                        children: accountAddress\n                    }, void 0, false, {\n                        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/TopBar.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Button_MoaycButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        size: \"small\",\n                        onClick: function() {\n                            return disconnect();\n                        },\n                        children: \"Disconnect\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/TopBar.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/TopBar.tsx\",\n                lineNumber: 98,\n                columnNumber: 29\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MoaycText, {\n                children: \"MOAYC\"\n            }, void 0, false, {\n                fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/TopBar.tsx\",\n                lineNumber: 109,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/TopBar.tsx\",\n        lineNumber: 96,\n        columnNumber: 9\n    }, _this);\n};\n_s(TopBar, \"8wPYs4l3fMxJTncajqSJMNvHQgw=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_6__.useAccount,\n        wagmi__WEBPACK_IMPORTED_MODULE_6__.useDisconnect\n    ];\n});\n_c5 = TopBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopBar);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"StyledTopBar\");\n$RefreshReg$(_c1, \"StyledLogo\");\n$RefreshReg$(_c2, \"MoaycText\");\n$RefreshReg$(_c3, \"CenterContainer\");\n$RefreshReg$(_c4, \"AccountAddress\");\n$RefreshReg$(_c5, \"TopBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL011dGFudC9Ub3BCYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNBO0FBQ007QUFDSztBQUNGO0FBR2hELElBQU1PLFlBQVksR0FBR0wsd0VBQVU7OztzQkFRVEMseURBQWEsQ0FLbEM7QUFiS0ksS0FBQUEsWUFBWTtBQWVsQixJQUFNRyxVQUFVLEdBQUdSLHdFQUFVOzs7dUJBS1BDLHlEQUFhLENBTWxDO0FBWEtPLE1BQUFBLFVBQVU7QUFhaEIsSUFBTUMsU0FBUyxHQUFHVCx3RUFBVTs7O3VCQWlCTkMseURBQWEsQ0FJbEM7QUFyQktRLE1BQUFBLFNBQVM7QUF1QmYsSUFBTUMsZUFBZSxHQUFHVix3RUFBVTs7O3NCQU1qQztBQU5LVSxNQUFBQSxlQUFlO0FBUXJCLElBQU1DLGNBQWMsR0FBR1gsd0VBQVU7OztzQkFnQmhDO0FBaEJLVyxNQUFBQSxjQUFjO0FBbUJwQixJQUFNQyxNQUFNLEdBQUcsV0FBTTs7SUFDakIsSUFBK0JWLEdBQVksR0FBWkEsaURBQVUsRUFBRSxFQUFwQ1csT0FBTyxHQUFpQlgsR0FBWSxDQUFwQ1csT0FBTyxFQUFFQyxXQUFXLEdBQUlaLEdBQVksQ0FBM0JZLFdBQVc7SUFDM0IsSUFBTSxVQUFXLEdBQUlYLG9EQUFhLEVBQUUsQ0FBN0JZLFVBQVU7SUFFakIsSUFBTUMsY0FBYyxHQUFHakIsOENBQU8sQ0FBQyxXQUFNO1FBQ2pDLE9BQU8sRUFBQyxRQUFFYyxPQUFPLGFBQVBBLE9BQU8sV0FBVyxHQUFsQkEsS0FBQUEsQ0FBa0IsR0FBbEJBLE9BQU8sQ0FBRUksU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxLQUFHLENBQS9CLENBQTBGLE9BQXpESixPQUFPLGFBQVBBLE9BQU8sV0FBVyxHQUFsQkEsS0FBQUEsQ0FBa0IsR0FBbEJBLE9BQU8sQ0FBRUksU0FBUyxDQUFDSixDQUFBQSxPQUFPLGFBQVBBLE9BQU8sV0FBUSxHQUFmQSxLQUFBQSxDQUFlLEdBQWZBLE9BQU8sQ0FBRUssTUFBTSxJQUFHLENBQUMsRUFBRUwsT0FBTyxhQUFQQSxPQUFPLFdBQVEsR0FBZkEsS0FBQUEsQ0FBZSxHQUFmQSxPQUFPLENBQUVLLE1BQU0sQ0FBQyxDQUFFLENBQUM7SUFDdkcsQ0FBQyxFQUFFO1FBQUNMLE9BQU87S0FBQyxDQUFDO0lBR2IscUJBQ0ksOERBQUNSLFlBQVk7OzBCQUNULDhEQUFDRyxVQUFVOzs7O3FCQUFFO1lBQ1pNLFdBQVcsa0JBQUksOERBQUNKLGVBQWU7O2tDQUc1Qiw4REFBQ0MsY0FBYztrQ0FBRUssY0FBYzs7Ozs7NkJBQWtCO2tDQUNqRCw4REFBQ1osMkRBQVc7d0JBQUNlLElBQUksRUFBQyxPQUFPO3dCQUFDQyxPQUFPLEVBQUU7bUNBQU1MLFVBQVUsRUFBRTt5QkFBQTtrQ0FBRSxZQUV2RDs7Ozs7NkJBQWM7Ozs7OztxQkFHQTswQkFFbEIsOERBQUNOLFNBQVM7MEJBQUMsT0FBSzs7Ozs7cUJBQVk7Ozs7OzthQUNqQixDQUNqQjtBQUNOLENBQUM7R0ExQktHLE1BQU07O1FBQ3VCViw2Q0FBVTtRQUNwQkMsZ0RBQWE7OztBQUZoQ1MsTUFBQUEsTUFBTTtBQTRCWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXV0YW50L1RvcEJhci50c3g/ZDdmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBkZXZpY2UgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL2RldmljZVwiO1xuaW1wb3J0IHsgdXNlQWNjb3VudCwgdXNlRGlzY29ubmVjdCB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IE1vYXljQnV0dG9uIGZyb20gXCIuLi9CdXR0b24vTW9heWNCdXR0b25cIjtcblxuXG5jb25zdCBTdHlsZWRUb3BCYXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcGFkZGluZzogMCAyMHB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kICR7ZGV2aWNlLnRhYmxldH0ge1xuICAgIG1hcmdpbi10b3A6IDQzcHg7XG4gICAgcGFkZGluZzogMCAxMzZweDtcbiAgfVxuXG5gO1xuXG5jb25zdCBTdHlsZWRMb2dvID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogdXJsKFwiL21haW4vZmF2aWNvbnMvZ3JlZW4uc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgd2lkdGg6IDM5cHg7XG4gIGhlaWdodDogNDZweDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgJHtkZXZpY2UudGFibGV0fSB7XG4gICAgd2lkdGg6IDU3cHg7XG4gICAgaGVpZ2h0OiA2OHB4O1xuICB9XG5cblxuYDtcblxuY29uc3QgTW9heWNUZXh0ID0gc3R5bGVkLmRpdmBcbiAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDkwJTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTU5LjUzZGVnLCAjQjREMTA5IDEuMDclLCAjODdDQzAwIDcyLjQ3JSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgZm9udC1zaXplOiAyNHB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kICR7ZGV2aWNlLnRhYmxldH0ge1xuICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgfVxuXG5gO1xuXG5jb25zdCBDZW50ZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgQWNjb3VudEFkZHJlc3MgPSBzdHlsZWQuZGl2YFxuICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxMzAlO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTU5LjUzZGVnLCAjQjREMTA5IDEuMDclLCAjODdDQzAwIDcyLjQ3JSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIFxuICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG5gO1xuXG5cbmNvbnN0IFRvcEJhciA9ICgpID0+IHtcbiAgICBjb25zdCB7YWRkcmVzcywgaXNDb25uZWN0ZWR9ID0gdXNlQWNjb3VudCgpO1xuICAgIGNvbnN0IHtkaXNjb25uZWN0fSA9IHVzZURpc2Nvbm5lY3QoKTtcblxuICAgIGNvbnN0IGFjY291bnRBZGRyZXNzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIHJldHVybiBgJHthZGRyZXNzPy5zdWJzdHJpbmcoMCwgNil9Li4uJHthZGRyZXNzPy5zdWJzdHJpbmcoYWRkcmVzcz8ubGVuZ3RoIC0gNCwgYWRkcmVzcz8ubGVuZ3RoKX1gO1xuICAgIH0sIFthZGRyZXNzXSk7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRUb3BCYXI+XG4gICAgICAgICAgICA8U3R5bGVkTG9nby8+XG4gICAgICAgICAgICB7aXNDb25uZWN0ZWQgJiYgPENlbnRlckNvbnRhaW5lcj5cblxuXG4gICAgICAgICAgICAgICAgPEFjY291bnRBZGRyZXNzPnthY2NvdW50QWRkcmVzc308L0FjY291bnRBZGRyZXNzPlxuICAgICAgICAgICAgICAgIDxNb2F5Y0J1dHRvbiBzaXplPVwic21hbGxcIiBvbkNsaWNrPXsoKSA9PiBkaXNjb25uZWN0KCl9PlxuICAgICAgICAgICAgICAgICAgICBEaXNjb25uZWN0XG4gICAgICAgICAgICAgICAgPC9Nb2F5Y0J1dHRvbj5cblxuXG4gICAgICAgICAgICA8L0NlbnRlckNvbnRhaW5lcj59XG5cbiAgICAgICAgICAgIDxNb2F5Y1RleHQ+TU9BWUM8L01vYXljVGV4dD5cbiAgICAgICAgPC9TdHlsZWRUb3BCYXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvcEJhcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VNZW1vIiwic3R5bGVkIiwiZGV2aWNlIiwidXNlQWNjb3VudCIsInVzZURpc2Nvbm5lY3QiLCJNb2F5Y0J1dHRvbiIsIlN0eWxlZFRvcEJhciIsImRpdiIsInRhYmxldCIsIlN0eWxlZExvZ28iLCJNb2F5Y1RleHQiLCJDZW50ZXJDb250YWluZXIiLCJBY2NvdW50QWRkcmVzcyIsIlRvcEJhciIsImFkZHJlc3MiLCJpc0Nvbm5lY3RlZCIsImRpc2Nvbm5lY3QiLCJhY2NvdW50QWRkcmVzcyIsInN1YnN0cmluZyIsImxlbmd0aCIsInNpemUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Mutant/TopBar.tsx\n"));

/***/ })

});