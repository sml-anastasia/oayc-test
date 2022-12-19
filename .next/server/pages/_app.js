"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "wagmi"
var external_wagmi_ = __webpack_require__(8906);
;// CONCATENATED MODULE: external "wagmi/providers/public"
const public_namespaceObject = require("wagmi/providers/public");
;// CONCATENATED MODULE: external "@wagmi/core/chains"
const chains_namespaceObject = require("@wagmi/core/chains");
// EXTERNAL MODULE: ./connection/connection.ts + 2 modules
var connection = __webpack_require__(1207);
;// CONCATENATED MODULE: external "wagmi/providers/alchemy"
const alchemy_namespaceObject = require("wagmi/providers/alchemy");
;// CONCATENATED MODULE: ./pages/_app.tsx








const { chains , provider , webSocketProvider  } = (0,external_wagmi_.configureChains)([
    chains_namespaceObject.optimism
], [
    (0,alchemy_namespaceObject.alchemyProvider)({
        apiKey: "Kdb9I1fanjK6qJPSCUaGCa4KH9XOv3xP"
    }),
    (0,public_namespaceObject.publicProvider)(), 
]);
const client = (0,external_wagmi_.createClient)({
    autoConnect: false,
    connectors: [
        connection/* defaultConnector */.kW
    ],
    provider,
    webSocketProvider
});
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_wagmi_.WagmiConfig, {
        client: client,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 2534:
/***/ ((module) => {

module.exports = require("@wagmi/core");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8906:
/***/ ((module) => {

module.exports = require("wagmi");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [207], () => (__webpack_exec__(6233)));
module.exports = __webpack_exports__;

})();