"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/liveblocks-auth/route";
exports.ids = ["app/api/liveblocks-auth/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fliveblocks-auth%2Froute&page=%2Fapi%2Fliveblocks-auth%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fliveblocks-auth%2Froute.ts&appDir=%2FUsers%2Fayush%2FCode%2Fliveblocks%2Fexamples%2Fnextjs-yjs-blocknote-advanced%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fayush%2FCode%2Fliveblocks%2Fexamples%2Fnextjs-yjs-blocknote-advanced&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fliveblocks-auth%2Froute&page=%2Fapi%2Fliveblocks-auth%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fliveblocks-auth%2Froute.ts&appDir=%2FUsers%2Fayush%2FCode%2Fliveblocks%2Fexamples%2Fnextjs-yjs-blocknote-advanced%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fayush%2FCode%2Fliveblocks%2Fexamples%2Fnextjs-yjs-blocknote-advanced&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_ayush_Code_liveblocks_examples_nextjs_yjs_blocknote_advanced_src_app_api_liveblocks_auth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/liveblocks-auth/route.ts */ \"(rsc)/./src/app/api/liveblocks-auth/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/liveblocks-auth/route\",\n        pathname: \"/api/liveblocks-auth\",\n        filename: \"route\",\n        bundlePath: \"app/api/liveblocks-auth/route\"\n    },\n    resolvedPagePath: \"/Users/ayush/Code/liveblocks/examples/nextjs-yjs-blocknote-advanced/src/app/api/liveblocks-auth/route.ts\",\n    nextConfigOutput,\n    userland: _Users_ayush_Code_liveblocks_examples_nextjs_yjs_blocknote_advanced_src_app_api_liveblocks_auth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/liveblocks-auth/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZsaXZlYmxvY2tzLWF1dGglMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmxpdmVibG9ja3MtYXV0aCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmxpdmVibG9ja3MtYXV0aCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmF5dXNoJTJGQ29kZSUyRmxpdmVibG9ja3MlMkZleGFtcGxlcyUyRm5leHRqcy15anMtYmxvY2tub3RlLWFkdmFuY2VkJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmF5dXNoJTJGQ29kZSUyRmxpdmVibG9ja3MlMkZleGFtcGxlcyUyRm5leHRqcy15anMtYmxvY2tub3RlLWFkdmFuY2VkJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ3dEO0FBQ3JJO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGxpdmVibG9ja3MtZXhhbXBsZXMvbmV4dGpzLXlqcy1ibG9ja25vdGUtYWR2YW5jZWQvP2NkOGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2F5dXNoL0NvZGUvbGl2ZWJsb2Nrcy9leGFtcGxlcy9uZXh0anMteWpzLWJsb2Nrbm90ZS1hZHZhbmNlZC9zcmMvYXBwL2FwaS9saXZlYmxvY2tzLWF1dGgvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2xpdmVibG9ja3MtYXV0aC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2xpdmVibG9ja3MtYXV0aFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvbGl2ZWJsb2Nrcy1hdXRoL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2F5dXNoL0NvZGUvbGl2ZWJsb2Nrcy9leGFtcGxlcy9uZXh0anMteWpzLWJsb2Nrbm90ZS1hZHZhbmNlZC9zcmMvYXBwL2FwaS9saXZlYmxvY2tzLWF1dGgvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvbGl2ZWJsb2Nrcy1hdXRoL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fliveblocks-auth%2Froute&page=%2Fapi%2Fliveblocks-auth%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fliveblocks-auth%2Froute.ts&appDir=%2FUsers%2Fayush%2FCode%2Fliveblocks%2Fexamples%2Fnextjs-yjs-blocknote-advanced%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fayush%2FCode%2Fliveblocks%2Fexamples%2Fnextjs-yjs-blocknote-advanced&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/liveblocks-auth/route.ts":
/*!**********************************************!*\
  !*** ./src/app/api/liveblocks-auth/route.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _liveblocks_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @liveblocks/node */ \"(rsc)/./node_modules/@liveblocks/node/dist/index.mjs\");\n\n/**\n * Authenticating your Liveblocks application\n * https://liveblocks.io/docs/authentication\n */ const liveblocks = new _liveblocks_node__WEBPACK_IMPORTED_MODULE_0__.Liveblocks({\n    secret: process.env.LIVEBLOCKS_SECRET_KEY\n});\nasync function POST(request) {\n    // Get the current user's unique id from your database\n    const userId = Math.floor(Math.random() * 10000);\n    // Create a session for the current user\n    // userInfo is made available in Liveblocks presence hooks, e.g. useOthers\n    const session = liveblocks.prepareSession(`user-${userId}`, {\n        userInfo: USER_INFO[Math.floor(Math.random() * 10) % USER_INFO.length]\n    });\n    // Use a naming pattern to allow access to rooms with a wildcard\n    session.allow(USER_INFO[0].name, session.FULL_ACCESS);\n    // Authorize the user and return the result\n    const { body, status } = await session.authorize();\n    return new Response(body, {\n        status\n    });\n}\nconst USER_INFO = [\n    {\n        name: \"Charlie Layne\",\n        color: \"#D583F0\",\n        picture: \"https://liveblocks.io/avatars/avatar-1.png\"\n    },\n    {\n        name: \"Mislav Abha\",\n        color: \"#F08385\",\n        picture: \"https://liveblocks.io/avatars/avatar-2.png\"\n    },\n    {\n        name: \"Tatum Paolo\",\n        color: \"#F0D885\",\n        picture: \"https://liveblocks.io/avatars/avatar-3.png\"\n    },\n    {\n        name: \"Anjali Wanda\",\n        color: \"#85EED6\",\n        picture: \"https://liveblocks.io/avatars/avatar-4.png\"\n    },\n    {\n        name: \"Jody Hekla\",\n        color: \"#85BBF0\",\n        picture: \"https://liveblocks.io/avatars/avatar-5.png\"\n    },\n    {\n        name: \"Emil Joyce\",\n        color: \"#8594F0\",\n        picture: \"https://liveblocks.io/avatars/avatar-6.png\"\n    },\n    {\n        name: \"Jory Quispe\",\n        color: \"#85DBF0\",\n        picture: \"https://liveblocks.io/avatars/avatar-7.png\"\n    },\n    {\n        name: \"Quinn Elton\",\n        color: \"#87EE85\",\n        picture: \"https://liveblocks.io/avatars/avatar-8.png\"\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9saXZlYmxvY2tzLWF1dGgvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBOEM7QUFHOUM7OztDQUdDLEdBRUQsTUFBTUMsYUFBYSxJQUFJRCx3REFBVUEsQ0FBQztJQUNoQ0UsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxxQkFBcUI7QUFDM0M7QUFFTyxlQUFlQyxLQUFLQyxPQUFvQjtJQUM3QyxzREFBc0Q7SUFDdEQsTUFBTUMsU0FBU0MsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUs7SUFFMUMsd0NBQXdDO0lBQ3hDLDBFQUEwRTtJQUMxRSxNQUFNQyxVQUFVWCxXQUFXWSxjQUFjLENBQUMsQ0FBQyxLQUFLLEVBQUVMLE9BQU8sQ0FBQyxFQUFFO1FBQzFETSxVQUFVQyxTQUFTLENBQUNOLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLLE1BQU1JLFVBQVVDLE1BQU0sQ0FBQztJQUN4RTtJQUVBLGdFQUFnRTtJQUNoRUosUUFBUUssS0FBSyxDQUFDRixTQUFTLENBQUMsRUFBRSxDQUFDRyxJQUFJLEVBQUVOLFFBQVFPLFdBQVc7SUFFcEQsMkNBQTJDO0lBQzNDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUUsR0FBRyxNQUFNVCxRQUFRVSxTQUFTO0lBRWhELE9BQU8sSUFBSUMsU0FBU0gsTUFBTTtRQUFFQztJQUFPO0FBQ3JDO0FBRUEsTUFBTU4sWUFBWTtJQUNoQjtRQUNFRyxNQUFNO1FBQ05NLE9BQU87UUFDUEMsU0FBUztJQUNYO0lBQ0E7UUFDRVAsTUFBTTtRQUNOTSxPQUFPO1FBQ1BDLFNBQVM7SUFDWDtJQUNBO1FBQ0VQLE1BQU07UUFDTk0sT0FBTztRQUNQQyxTQUFTO0lBQ1g7SUFDQTtRQUNFUCxNQUFNO1FBQ05NLE9BQU87UUFDUEMsU0FBUztJQUNYO0lBQ0E7UUFDRVAsTUFBTTtRQUNOTSxPQUFPO1FBQ1BDLFNBQVM7SUFDWDtJQUNBO1FBQ0VQLE1BQU07UUFDTk0sT0FBTztRQUNQQyxTQUFTO0lBQ1g7SUFDQTtRQUNFUCxNQUFNO1FBQ05NLE9BQU87UUFDUEMsU0FBUztJQUNYO0lBQ0E7UUFDRVAsTUFBTTtRQUNOTSxPQUFPO1FBQ1BDLFNBQVM7SUFDWDtDQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGxpdmVibG9ja3MtZXhhbXBsZXMvbmV4dGpzLXlqcy1ibG9ja25vdGUtYWR2YW5jZWQvLi9zcmMvYXBwL2FwaS9saXZlYmxvY2tzLWF1dGgvcm91dGUudHM/MDQwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXZlYmxvY2tzIH0gZnJvbSBcIkBsaXZlYmxvY2tzL25vZGVcIjtcbmltcG9ydCB7IE5leHRSZXF1ZXN0IH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5cbi8qKlxuICogQXV0aGVudGljYXRpbmcgeW91ciBMaXZlYmxvY2tzIGFwcGxpY2F0aW9uXG4gKiBodHRwczovL2xpdmVibG9ja3MuaW8vZG9jcy9hdXRoZW50aWNhdGlvblxuICovXG5cbmNvbnN0IGxpdmVibG9ja3MgPSBuZXcgTGl2ZWJsb2Nrcyh7XG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTElWRUJMT0NLU19TRUNSRVRfS0VZISxcbn0pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICAvLyBHZXQgdGhlIGN1cnJlbnQgdXNlcidzIHVuaXF1ZSBpZCBmcm9tIHlvdXIgZGF0YWJhc2VcbiAgY29uc3QgdXNlcklkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDApO1xuXG4gIC8vIENyZWF0ZSBhIHNlc3Npb24gZm9yIHRoZSBjdXJyZW50IHVzZXJcbiAgLy8gdXNlckluZm8gaXMgbWFkZSBhdmFpbGFibGUgaW4gTGl2ZWJsb2NrcyBwcmVzZW5jZSBob29rcywgZS5nLiB1c2VPdGhlcnNcbiAgY29uc3Qgc2Vzc2lvbiA9IGxpdmVibG9ja3MucHJlcGFyZVNlc3Npb24oYHVzZXItJHt1c2VySWR9YCwge1xuICAgIHVzZXJJbmZvOiBVU0VSX0lORk9bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICUgVVNFUl9JTkZPLmxlbmd0aF0sXG4gIH0pO1xuXG4gIC8vIFVzZSBhIG5hbWluZyBwYXR0ZXJuIHRvIGFsbG93IGFjY2VzcyB0byByb29tcyB3aXRoIGEgd2lsZGNhcmRcbiAgc2Vzc2lvbi5hbGxvdyhVU0VSX0lORk9bMF0ubmFtZSwgc2Vzc2lvbi5GVUxMX0FDQ0VTUyk7XG5cbiAgLy8gQXV0aG9yaXplIHRoZSB1c2VyIGFuZCByZXR1cm4gdGhlIHJlc3VsdFxuICBjb25zdCB7IGJvZHksIHN0YXR1cyB9ID0gYXdhaXQgc2Vzc2lvbi5hdXRob3JpemUoKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKGJvZHksIHsgc3RhdHVzIH0pO1xufVxuXG5jb25zdCBVU0VSX0lORk8gPSBbXG4gIHtcbiAgICBuYW1lOiBcIkNoYXJsaWUgTGF5bmVcIixcbiAgICBjb2xvcjogXCIjRDU4M0YwXCIsXG4gICAgcGljdHVyZTogXCJodHRwczovL2xpdmVibG9ja3MuaW8vYXZhdGFycy9hdmF0YXItMS5wbmdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTWlzbGF2IEFiaGFcIixcbiAgICBjb2xvcjogXCIjRjA4Mzg1XCIsXG4gICAgcGljdHVyZTogXCJodHRwczovL2xpdmVibG9ja3MuaW8vYXZhdGFycy9hdmF0YXItMi5wbmdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVGF0dW0gUGFvbG9cIixcbiAgICBjb2xvcjogXCIjRjBEODg1XCIsXG4gICAgcGljdHVyZTogXCJodHRwczovL2xpdmVibG9ja3MuaW8vYXZhdGFycy9hdmF0YXItMy5wbmdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQW5qYWxpIFdhbmRhXCIsXG4gICAgY29sb3I6IFwiIzg1RUVENlwiLFxuICAgIHBpY3R1cmU6IFwiaHR0cHM6Ly9saXZlYmxvY2tzLmlvL2F2YXRhcnMvYXZhdGFyLTQucG5nXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkpvZHkgSGVrbGFcIixcbiAgICBjb2xvcjogXCIjODVCQkYwXCIsXG4gICAgcGljdHVyZTogXCJodHRwczovL2xpdmVibG9ja3MuaW8vYXZhdGFycy9hdmF0YXItNS5wbmdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRW1pbCBKb3ljZVwiLFxuICAgIGNvbG9yOiBcIiM4NTk0RjBcIixcbiAgICBwaWN0dXJlOiBcImh0dHBzOi8vbGl2ZWJsb2Nrcy5pby9hdmF0YXJzL2F2YXRhci02LnBuZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJKb3J5IFF1aXNwZVwiLFxuICAgIGNvbG9yOiBcIiM4NURCRjBcIixcbiAgICBwaWN0dXJlOiBcImh0dHBzOi8vbGl2ZWJsb2Nrcy5pby9hdmF0YXJzL2F2YXRhci03LnBuZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJRdWlubiBFbHRvblwiLFxuICAgIGNvbG9yOiBcIiM4N0VFODVcIixcbiAgICBwaWN0dXJlOiBcImh0dHBzOi8vbGl2ZWJsb2Nrcy5pby9hdmF0YXJzL2F2YXRhci04LnBuZ1wiLFxuICB9LFxuXTtcbiJdLCJuYW1lcyI6WyJMaXZlYmxvY2tzIiwibGl2ZWJsb2NrcyIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJMSVZFQkxPQ0tTX1NFQ1JFVF9LRVkiLCJQT1NUIiwicmVxdWVzdCIsInVzZXJJZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNlc3Npb24iLCJwcmVwYXJlU2Vzc2lvbiIsInVzZXJJbmZvIiwiVVNFUl9JTkZPIiwibGVuZ3RoIiwiYWxsb3ciLCJuYW1lIiwiRlVMTF9BQ0NFU1MiLCJib2R5Iiwic3RhdHVzIiwiYXV0aG9yaXplIiwiUmVzcG9uc2UiLCJjb2xvciIsInBpY3R1cmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/liveblocks-auth/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@liveblocks","vendor-chunks/fast-sha256","vendor-chunks/@stablelib"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fliveblocks-auth%2Froute&page=%2Fapi%2Fliveblocks-auth%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fliveblocks-auth%2Froute.ts&appDir=%2FUsers%2Fayush%2FCode%2Fliveblocks%2Fexamples%2Fnextjs-yjs-blocknote-advanced%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fayush%2FCode%2Fliveblocks%2Fexamples%2Fnextjs-yjs-blocknote-advanced&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();