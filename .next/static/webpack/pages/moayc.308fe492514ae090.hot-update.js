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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_device__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/device */ \"./styles/device.ts\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var _Button_MoaycButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button/MoaycButton */ \"./components/Button/MoaycButton.tsx\");\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  position: relative;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin-top: 16px;\\n  padding: 0 20px;\\n\\n  @media screen and \",\n        \" {\\n    margin-top: 43px;\\n    padding: 0 136px;\\n  }\\n\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        '\\n  background: url(\"/main/favicons/green.svg\");\\n  background-size: 100% 100%;\\n  width: 39px;\\n  height: 46px;\\n  @media screen and ',\n        \" {\\n    width: 57px;\\n    height: 68px;\\n  }\\n\\n\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  font-family: 'Rubik', sans-serif;\\n  font-style: italic;\\n  font-weight: 700;\\n  line-height: 90%;\\n\\n  display: flex;\\n  align-items: center;\\n  text-align: right;\\n  text-transform: uppercase;\\n\\n  background: linear-gradient(159.53deg, #B4D109 1.07%, #87CC00 72.47%);\\n  -webkit-background-clip: text;\\n  -webkit-text-fill-color: transparent;\\n\\n  font-size: 24px;\\n\\n  @media screen and \",\n        \" {\\n    font-size: 70px;\\n  }\\n\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  position: absolute;\\n  left: 50%;\\n  transform: translateX(-50%);\\n  display: flex;\\n  align-items: center;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  font-family: 'Rubik', sans-serif;\\n  font-style: italic;\\n  font-weight: 700;\\n  font-size: 12px;\\n  line-height: 130%;\\n\\n  display: flex;\\n  align-items: center;\\n  text-transform: uppercase;\\n\\n  background: linear-gradient(159.53deg, #B4D109 1.07%, #87CC00 72.47%);\\n  -webkit-background-clip: text;\\n  -webkit-text-fill-color: transparent;\\n\\n  margin-right: 14px;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar StyledTopBar = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n    displayName: \"TopBar__StyledTopBar\",\n    componentId: \"sc-8024bda7-0\"\n})(_templateObject(), _styles_device__WEBPACK_IMPORTED_MODULE_3__.device.tablet);\n_c = StyledTopBar;\nvar StyledLogo = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n    displayName: \"TopBar__StyledLogo\",\n    componentId: \"sc-8024bda7-1\"\n})(_templateObject1(), _styles_device__WEBPACK_IMPORTED_MODULE_3__.device.tablet);\n_c1 = StyledLogo;\nvar MoaycText = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n    displayName: \"TopBar__MoaycText\",\n    componentId: \"sc-8024bda7-2\"\n})(_templateObject2(), _styles_device__WEBPACK_IMPORTED_MODULE_3__.device.tablet);\n_c2 = MoaycText;\nvar CenterContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n    displayName: \"TopBar__CenterContainer\",\n    componentId: \"sc-8024bda7-3\"\n})(_templateObject3());\n_c3 = CenterContainer;\nvar AccountAddress = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n    displayName: \"TopBar__AccountAddress\",\n    componentId: \"sc-8024bda7-4\"\n})(_templateObject4());\n_c4 = AccountAddress;\nvar TopBar = function() {\n    _s();\n    var ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.useAccount)(), address = ref.address, isConnected = ref.isConnected;\n    var disconnect = (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.useDisconnect)().disconnect;\n    var accountAddress = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        return \"\".concat(address === null || address === void 0 ? void 0 : address.substring(0, 6), \"...\").concat(address === null || address === void 0 ? void 0 : address.substring((address === null || address === void 0 ? void 0 : address.length) - 4, address === null || address === void 0 ? void 0 : address.length));\n    }, [\n        address\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledTopBar, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledLogo, {}, void 0, false, {\n                fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/TopBar.tsx\",\n                lineNumber: 97,\n                columnNumber: 13\n            }, _this),\n            isConnected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CenterContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AccountAddress, {\n                        children: accountAddress\n                    }, void 0, false, {\n                        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/TopBar.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Button_MoaycButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        size: \"small\",\n                        onClick: function() {\n                            return disconnect();\n                        },\n                        children: \"Disconnect\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/TopBar.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/TopBar.tsx\",\n                lineNumber: 99,\n                columnNumber: 17\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MoaycText, {\n                children: \"MOAYC\"\n            }, void 0, false, {\n                fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/TopBar.tsx\",\n                lineNumber: 107,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/TopBar.tsx\",\n        lineNumber: 96,\n        columnNumber: 9\n    }, _this);\n};\n_s(TopBar, \"8wPYs4l3fMxJTncajqSJMNvHQgw=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_6__.useAccount,\n        wagmi__WEBPACK_IMPORTED_MODULE_6__.useDisconnect\n    ];\n});\n_c5 = TopBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopBar);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"StyledTopBar\");\n$RefreshReg$(_c1, \"StyledLogo\");\n$RefreshReg$(_c2, \"MoaycText\");\n$RefreshReg$(_c3, \"CenterContainer\");\n$RefreshReg$(_c4, \"AccountAddress\");\n$RefreshReg$(_c5, \"TopBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL011dGFudC9Ub3BCYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNBO0FBQ007QUFDSztBQUNGO0FBR2hELElBQU1PLFlBQVksR0FBR0wsd0VBQVU7OztzQkFRVEMseURBQWEsQ0FLbEM7QUFiS0ksS0FBQUEsWUFBWTtBQWVsQixJQUFNRyxVQUFVLEdBQUdSLHdFQUFVOzs7dUJBS1BDLHlEQUFhLENBTWxDO0FBWEtPLE1BQUFBLFVBQVU7QUFhaEIsSUFBTUMsU0FBUyxHQUFHVCx3RUFBVTs7O3VCQWlCTkMseURBQWEsQ0FJbEM7QUFyQktRLE1BQUFBLFNBQVM7QUF1QmYsSUFBTUMsZUFBZSxHQUFHVix3RUFBVTs7O3NCQU1qQztBQU5LVSxNQUFBQSxlQUFlO0FBUXJCLElBQU1DLGNBQWMsR0FBR1gsd0VBQVU7OztzQkFnQmhDO0FBaEJLVyxNQUFBQSxjQUFjO0FBbUJwQixJQUFNQyxNQUFNLEdBQUcsV0FBTTs7SUFDakIsSUFBK0JWLEdBQVksR0FBWkEsaURBQVUsRUFBRSxFQUFwQ1csT0FBTyxHQUFpQlgsR0FBWSxDQUFwQ1csT0FBTyxFQUFFQyxXQUFXLEdBQUlaLEdBQVksQ0FBM0JZLFdBQVc7SUFDM0IsSUFBTSxVQUFXLEdBQUlYLG9EQUFhLEVBQUUsQ0FBN0JZLFVBQVU7SUFFakIsSUFBTUMsY0FBYyxHQUFHakIsOENBQU8sQ0FBQyxXQUFNO1FBQ2pDLE9BQU8sRUFBQyxRQUFFYyxPQUFPLGFBQVBBLE9BQU8sV0FBVyxHQUFsQkEsS0FBQUEsQ0FBa0IsR0FBbEJBLE9BQU8sQ0FBRUksU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxLQUFHLENBQS9CLENBQTBGLE9BQXpESixPQUFPLGFBQVBBLE9BQU8sV0FBVyxHQUFsQkEsS0FBQUEsQ0FBa0IsR0FBbEJBLE9BQU8sQ0FBRUksU0FBUyxDQUFDSixDQUFBQSxPQUFPLGFBQVBBLE9BQU8sV0FBUSxHQUFmQSxLQUFBQSxDQUFlLEdBQWZBLE9BQU8sQ0FBRUssTUFBTSxJQUFHLENBQUMsRUFBRUwsT0FBTyxhQUFQQSxPQUFPLFdBQVEsR0FBZkEsS0FBQUEsQ0FBZSxHQUFmQSxPQUFPLENBQUVLLE1BQU0sQ0FBQyxDQUFFLENBQUM7SUFDdkcsQ0FBQyxFQUFFO1FBQUNMLE9BQU87S0FBQyxDQUFDO0lBR2IscUJBQ0ksOERBQUNSLFlBQVk7OzBCQUNULDhEQUFDRyxVQUFVOzs7O3FCQUFFO1lBQ1pNLFdBQVcsa0JBQ1IsOERBQUNKLGVBQWU7O2tDQUNaLDhEQUFDQyxjQUFjO2tDQUFFSyxjQUFjOzs7Ozs2QkFBa0I7a0NBQ2pELDhEQUFDWiwyREFBVzt3QkFBQ2UsSUFBSSxFQUFDLE9BQU87d0JBQUNDLE9BQU8sRUFBRTttQ0FBTUwsVUFBVSxFQUFFO3lCQUFBO2tDQUFFLFlBRXZEOzs7Ozs2QkFBYzs7Ozs7O3FCQUNBOzBCQUd0Qiw4REFBQ04sU0FBUzswQkFBQyxPQUFLOzs7OztxQkFBWTs7Ozs7O2FBQ2pCLENBQ2pCO0FBQ04sQ0FBQztHQXhCS0csTUFBTTs7UUFDdUJWLDZDQUFVO1FBQ3BCQyxnREFBYTs7O0FBRmhDUyxNQUFBQSxNQUFNO0FBMEJaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NdXRhbnQvVG9wQmFyLnRzeD9kN2ZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IGRldmljZSB9IGZyb20gXCIuLi8uLi9zdHlsZXMvZGV2aWNlXCI7XG5pbXBvcnQgeyB1c2VBY2NvdW50LCB1c2VEaXNjb25uZWN0IH0gZnJvbSBcIndhZ21pXCI7XG5pbXBvcnQgTW9heWNCdXR0b24gZnJvbSBcIi4uL0J1dHRvbi9Nb2F5Y0J1dHRvblwiO1xuXG5cbmNvbnN0IFN0eWxlZFRvcEJhciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgJHtkZXZpY2UudGFibGV0fSB7XG4gICAgbWFyZ2luLXRvcDogNDNweDtcbiAgICBwYWRkaW5nOiAwIDEzNnB4O1xuICB9XG5cbmA7XG5cbmNvbnN0IFN0eWxlZExvZ28gPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIvbWFpbi9mYXZpY29ucy9ncmVlbi5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICB3aWR0aDogMzlweDtcbiAgaGVpZ2h0OiA0NnB4O1xuICBAbWVkaWEgc2NyZWVuIGFuZCAke2RldmljZS50YWJsZXR9IHtcbiAgICB3aWR0aDogNTdweDtcbiAgICBoZWlnaHQ6IDY4cHg7XG4gIH1cblxuXG5gO1xuXG5jb25zdCBNb2F5Y1RleHQgPSBzdHlsZWQuZGl2YFxuICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogOTAlO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTkuNTNkZWcsICNCNEQxMDkgMS4wNyUsICM4N0NDMDAgNzIuNDclKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICBmb250LXNpemU6IDI0cHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgJHtkZXZpY2UudGFibGV0fSB7XG4gICAgZm9udC1zaXplOiA3MHB4O1xuICB9XG5cbmA7XG5cbmNvbnN0IENlbnRlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBBY2NvdW50QWRkcmVzcyA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEzMCU7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTU5LjUzZGVnLCAjQjREMTA5IDEuMDclLCAjODdDQzAwIDcyLjQ3JSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xuYDtcblxuXG5jb25zdCBUb3BCYXIgPSAoKSA9PiB7XG4gICAgY29uc3Qge2FkZHJlc3MsIGlzQ29ubmVjdGVkfSA9IHVzZUFjY291bnQoKTtcbiAgICBjb25zdCB7ZGlzY29ubmVjdH0gPSB1c2VEaXNjb25uZWN0KCk7XG5cbiAgICBjb25zdCBhY2NvdW50QWRkcmVzcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICByZXR1cm4gYCR7YWRkcmVzcz8uc3Vic3RyaW5nKDAsIDYpfS4uLiR7YWRkcmVzcz8uc3Vic3RyaW5nKGFkZHJlc3M/Lmxlbmd0aCAtIDQsIGFkZHJlc3M/Lmxlbmd0aCl9YDtcbiAgICB9LCBbYWRkcmVzc10pO1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkVG9wQmFyPlxuICAgICAgICAgICAgPFN0eWxlZExvZ28vPlxuICAgICAgICAgICAge2lzQ29ubmVjdGVkICYmXG4gICAgICAgICAgICAgICAgPENlbnRlckNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPEFjY291bnRBZGRyZXNzPnthY2NvdW50QWRkcmVzc308L0FjY291bnRBZGRyZXNzPlxuICAgICAgICAgICAgICAgICAgICA8TW9heWNCdXR0b24gc2l6ZT1cInNtYWxsXCIgb25DbGljaz17KCkgPT4gZGlzY29ubmVjdCgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIERpc2Nvbm5lY3RcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2F5Y0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0NlbnRlckNvbnRhaW5lcj5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPE1vYXljVGV4dD5NT0FZQzwvTW9heWNUZXh0PlxuICAgICAgICA8L1N0eWxlZFRvcEJhcj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9wQmFyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZU1lbW8iLCJzdHlsZWQiLCJkZXZpY2UiLCJ1c2VBY2NvdW50IiwidXNlRGlzY29ubmVjdCIsIk1vYXljQnV0dG9uIiwiU3R5bGVkVG9wQmFyIiwiZGl2IiwidGFibGV0IiwiU3R5bGVkTG9nbyIsIk1vYXljVGV4dCIsIkNlbnRlckNvbnRhaW5lciIsIkFjY291bnRBZGRyZXNzIiwiVG9wQmFyIiwiYWRkcmVzcyIsImlzQ29ubmVjdGVkIiwiZGlzY29ubmVjdCIsImFjY291bnRBZGRyZXNzIiwic3Vic3RyaW5nIiwibGVuZ3RoIiwic2l6ZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Mutant/TopBar.tsx\n"));

/***/ })

});