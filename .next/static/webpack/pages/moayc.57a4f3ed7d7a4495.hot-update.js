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

/***/ "./components/Mutant/MoaycModal.tsx":
/*!******************************************!*\
  !*** ./components/Mutant/MoaycModal.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  //height: 10px;\\n  //display: fle\\n  background-color: rgba(255, 255, 255, 0.1);\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nvar StyledModal = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((react_modal__WEBPACK_IMPORTED_MODULE_3___default())).withConfig({\n    displayName: \"MoaycModal__StyledModal\",\n    componentId: \"sc-8d6447f3-0\"\n})(_templateObject());\nvar MoaycModal = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_3___default()), {\n        style: {\n            overlay: {\n                backgroundColor: \"rgba(255, 255, 255, 0.1)\"\n            }\n        },\n        isOpen: true,\n        children: \"hello\"\n    }, void 0, false, {\n        fileName: \"/Users/vash/Projects/Crypto/oayc/oayc-frontend/components/Mutant/MoaycModal.tsx\",\n        lineNumber: 14,\n        columnNumber: 12\n    }, _this);\n};\n_c = MoaycModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MoaycModal);\nvar _c;\n$RefreshReg$(_c, \"MoaycModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL011dGFudC9Nb2F5Y01vZGFsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2E7QUFFUDtBQUVoQyxJQUFNRyxXQUFXLEdBQUdGLDZEQUFNLENBQUNDLG9EQUFLLENBQUM7OztxQkFJaEM7QUFFRCxJQUFNRSxVQUFVLEdBQUcsV0FBTTtJQUVyQixxQkFBTyw4REFBQ0Ysb0RBQUs7UUFDVEcsS0FBSyxFQUFFO1lBQ0hDLE9BQU8sRUFBRTtnQkFDTEMsZUFBZSxFQUFFLDBCQUEwQjthQUM5QztTQUNKO1FBQ0RDLE1BQU0sRUFBRSxJQUFJO2tCQUNmLE9BRUQ7Ozs7O2FBQVEsQ0FBQztBQUNiLENBQUM7QUFaS0osS0FBQUEsVUFBVTtBQWNoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXV0YW50L01vYXljTW9kYWwudHN4P2MyYzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XG5cbmNvbnN0IFN0eWxlZE1vZGFsID0gc3R5bGVkKE1vZGFsKWBcbiAgLy9oZWlnaHQ6IDEwcHg7XG4gIC8vZGlzcGxheTogZmxlXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbmA7XG5cbmNvbnN0IE1vYXljTW9kYWwgPSAoKSA9PiB7XG5cbiAgICByZXR1cm4gPE1vZGFsXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBvdmVybGF5OiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgICAgaXNPcGVuPXt0cnVlfVxuICAgID5cbiAgICAgICAgaGVsbG9cbiAgICA8L01vZGFsPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vYXljTW9kYWw7Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiTW9kYWwiLCJTdHlsZWRNb2RhbCIsIk1vYXljTW9kYWwiLCJzdHlsZSIsIm92ZXJsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpc09wZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Mutant/MoaycModal.tsx\n"));

/***/ })

});