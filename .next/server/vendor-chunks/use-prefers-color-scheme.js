"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/use-prefers-color-scheme";
exports.ids = ["vendor-chunks/use-prefers-color-scheme"];
exports.modules = {

/***/ "(ssr)/./node_modules/use-prefers-color-scheme/dist/index.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/use-prefers-color-scheme/dist/index.esm.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ d),\n/* harmony export */   usePrefersColorScheme: () => (/* binding */ a)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar a=()=>{let[c,i]=react__WEBPACK_IMPORTED_MODULE_0__.useState(()=>{if(typeof window>\"u\")return\"no-preference\";let r=window.matchMedia(\"(prefers-color-scheme: dark)\"),e=window.matchMedia(\"(prefers-color-scheme: light)\");return r.matches?\"dark\":e.matches?\"light\":\"no-preference\"});return react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{if(typeof window.matchMedia!=\"function\")return;let r=window.matchMedia(\"(prefers-color-scheme: dark)\"),e=window.matchMedia(\"(prefers-color-scheme: light)\");if(typeof e.addEventListener==\"function\"){let t=({matches:o})=>{o&&i(\"dark\")},s=({matches:o})=>{o&&i(\"light\")};return r.addEventListener(\"change\",t),e.addEventListener(\"change\",s),()=>{r.removeEventListener(\"change\",t),e.removeEventListener(\"change\",s)}}if(typeof e.addListener==\"function\"){let t=()=>i(r.matches?\"dark\":e.matches?\"light\":\"no-preference\");return r.addListener(t),e.addListener(t),()=>{r.removeListener(t),e.removeListener(t)}}},[]),c},d=a;\n//# sourceMappingURL=index.esm.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLXByZWZlcnMtY29sb3Itc2NoZW1lL2Rpc3QvaW5kZXguZXNtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0IsV0FBVyxTQUFTLDJDQUFVLE1BQU0sMkNBQTJDLDZHQUE2RywwREFBMEQsRUFBRSxPQUFPLDRDQUFXLE1BQU0sK0NBQStDLDZHQUE2RywwQ0FBMEMsUUFBUSxVQUFVLElBQUksYUFBYSxLQUFLLFVBQVUsSUFBSSxlQUFlLDBFQUEwRSxxRUFBcUUscUNBQXFDLGdFQUFnRSw4Q0FBOEMsMENBQTBDLE9BQU8sS0FBcUQ7QUFDMzdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGxpdmVibG9ja3MtZXhhbXBsZXMvbmV4dGpzLXlqcy1ibG9ja25vdGUtYWR2YW5jZWQvLi9ub2RlX21vZHVsZXMvdXNlLXByZWZlcnMtY29sb3Itc2NoZW1lL2Rpc3QvaW5kZXguZXNtLmpzPzYyNWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0KmFzIG4gZnJvbVwicmVhY3RcIjt2YXIgYT0oKT0+e2xldFtjLGldPW4udXNlU3RhdGUoKCk9PntpZih0eXBlb2Ygd2luZG93PlwidVwiKXJldHVyblwibm8tcHJlZmVyZW5jZVwiO2xldCByPXdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKSxlPXdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodClcIik7cmV0dXJuIHIubWF0Y2hlcz9cImRhcmtcIjplLm1hdGNoZXM/XCJsaWdodFwiOlwibm8tcHJlZmVyZW5jZVwifSk7cmV0dXJuIG4udXNlRWZmZWN0KCgpPT57aWYodHlwZW9mIHdpbmRvdy5tYXRjaE1lZGlhIT1cImZ1bmN0aW9uXCIpcmV0dXJuO2xldCByPXdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKSxlPXdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodClcIik7aWYodHlwZW9mIGUuYWRkRXZlbnRMaXN0ZW5lcj09XCJmdW5jdGlvblwiKXtsZXQgdD0oe21hdGNoZXM6b30pPT57byYmaShcImRhcmtcIil9LHM9KHttYXRjaGVzOm99KT0+e28mJmkoXCJsaWdodFwiKX07cmV0dXJuIHIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLHQpLGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLHMpLCgpPT57ci5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsdCksZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIscyl9fWlmKHR5cGVvZiBlLmFkZExpc3RlbmVyPT1cImZ1bmN0aW9uXCIpe2xldCB0PSgpPT5pKHIubWF0Y2hlcz9cImRhcmtcIjplLm1hdGNoZXM/XCJsaWdodFwiOlwibm8tcHJlZmVyZW5jZVwiKTtyZXR1cm4gci5hZGRMaXN0ZW5lcih0KSxlLmFkZExpc3RlbmVyKHQpLCgpPT57ci5yZW1vdmVMaXN0ZW5lcih0KSxlLnJlbW92ZUxpc3RlbmVyKHQpfX19LFtdKSxjfSxkPWE7ZXhwb3J0e2QgYXMgZGVmYXVsdCxhIGFzIHVzZVByZWZlcnNDb2xvclNjaGVtZX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-prefers-color-scheme/dist/index.esm.js\n");

/***/ })

};
;