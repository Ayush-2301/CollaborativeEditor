"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/vfile-location";
exports.ids = ["vendor-chunks/vfile-location"];
exports.modules = {

/***/ "(ssr)/./node_modules/vfile-location/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/vfile-location/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   location: () => (/* binding */ location)\n/* harmony export */ });\n/**\n * @typedef {import('vfile').VFile} VFile\n * @typedef {import('vfile').Value} Value\n */\n\n/**\n * @typedef Point\n *   unist point, where `line` and `column` can be `undefined`.\n * @property {number | undefined} line\n *   Line.\n * @property {number | undefined} column\n *   Column.\n * @property {number | undefined} [offset]\n *   Offset.\n *\n * @typedef PointLike\n *   unist point, allowed as input.\n * @property {number | null | undefined} [line]\n *   Line.\n * @property {number | null | undefined} [column]\n *   Column.\n * @property {number | null | undefined} [offset]\n *   Offset.\n *\n * @callback ToPoint\n *   Get a line/column-based `point` from `offset`.\n * @param {number | null | undefined} [offset]\n *   Something that should be an `offset.\n * @returns {Point}\n *   Point, line/column are undefined for invalid or out of bounds input.\n *\n * @callback ToOffset\n *   Get an offset from a line/column-based `point`.\n * @param {Point | null | undefined} [point]\n *   Something that should be a `point.\n * @returns {number}\n *   Offset or `-1` for invalid or out of bounds input.\n *\n * @typedef Location\n *   Accessors for index.\n * @property {ToPoint} toPoint\n *   Get a line/column-based `point` from `offset`.\n * @property {ToOffset} toOffset\n *   Get an offset from a line/column-based `point`.\n */\n\n/**\n * Index the given document so you can translate between line/column and offset\n * based positional info.\n *\n * @param {VFile | Value} file\n *   File to index.\n * @returns {Location}\n *   Accessors for index.\n */\nfunction location(file) {\n  const value = String(file)\n  /** @type {Array<number>} */\n  const indices = []\n  const search = /\\r?\\n|\\r/g\n\n  while (search.test(value)) {\n    indices.push(search.lastIndex)\n  }\n\n  indices.push(value.length + 1)\n\n  return {toPoint, toOffset}\n\n  /** @type {ToPoint} */\n  function toPoint(offset) {\n    let index = -1\n\n    if (\n      typeof offset === 'number' &&\n      offset > -1 &&\n      offset < indices[indices.length - 1]\n    ) {\n      while (++index < indices.length) {\n        if (indices[index] > offset) {\n          return {\n            line: index + 1,\n            column: offset - (index > 0 ? indices[index - 1] : 0) + 1,\n            offset\n          }\n        }\n      }\n    }\n\n    return {line: undefined, column: undefined, offset: undefined}\n  }\n\n  /** @type {ToOffset} */\n  function toOffset(point) {\n    const line = point && point.line\n    const column = point && point.column\n\n    if (\n      typeof line === 'number' &&\n      typeof column === 'number' &&\n      !Number.isNaN(line) &&\n      !Number.isNaN(column) &&\n      line - 1 in indices\n    ) {\n      const offset = (indices[line - 2] || 0) + column - 1 || 0\n\n      if (offset > -1 && offset < indices[indices.length - 1]) {\n        return offset\n      }\n    }\n\n    return -1\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdmZpbGUtbG9jYXRpb24vbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBLGFBQWEsdUJBQXVCO0FBQ3BDLGFBQWEsdUJBQXVCO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsb0JBQW9CO0FBQ2xDO0FBQ0EsY0FBYyxvQkFBb0I7QUFDbEM7QUFDQSxjQUFjLG9CQUFvQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsMkJBQTJCO0FBQ3pDO0FBQ0EsY0FBYywyQkFBMkI7QUFDekM7QUFDQSxjQUFjLDJCQUEyQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMkJBQTJCO0FBQ3RDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVywwQkFBMEI7QUFDckM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFNBQVM7QUFDdkI7QUFDQSxjQUFjLFVBQVU7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUDtBQUNBLGFBQWEsZUFBZTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxVQUFVOztBQUVWLGFBQWEsU0FBUztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUEsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BsaXZlYmxvY2tzLWV4YW1wbGVzL25leHRqcy15anMtYmxvY2tub3RlLWFkdmFuY2VkLy4vbm9kZV9tb2R1bGVzL3ZmaWxlLWxvY2F0aW9uL2xpYi9pbmRleC5qcz80NmVmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgndmZpbGUnKS5WRmlsZX0gVkZpbGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3ZmaWxlJykuVmFsdWV9IFZhbHVlXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiBQb2ludFxuICogICB1bmlzdCBwb2ludCwgd2hlcmUgYGxpbmVgIGFuZCBgY29sdW1uYCBjYW4gYmUgYHVuZGVmaW5lZGAuXG4gKiBAcHJvcGVydHkge251bWJlciB8IHVuZGVmaW5lZH0gbGluZVxuICogICBMaW5lLlxuICogQHByb3BlcnR5IHtudW1iZXIgfCB1bmRlZmluZWR9IGNvbHVtblxuICogICBDb2x1bW4uXG4gKiBAcHJvcGVydHkge251bWJlciB8IHVuZGVmaW5lZH0gW29mZnNldF1cbiAqICAgT2Zmc2V0LlxuICpcbiAqIEB0eXBlZGVmIFBvaW50TGlrZVxuICogICB1bmlzdCBwb2ludCwgYWxsb3dlZCBhcyBpbnB1dC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2xpbmVdXG4gKiAgIExpbmUuXG4gKiBAcHJvcGVydHkge251bWJlciB8IG51bGwgfCB1bmRlZmluZWR9IFtjb2x1bW5dXG4gKiAgIENvbHVtbi5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZH0gW29mZnNldF1cbiAqICAgT2Zmc2V0LlxuICpcbiAqIEBjYWxsYmFjayBUb1BvaW50XG4gKiAgIEdldCBhIGxpbmUvY29sdW1uLWJhc2VkIGBwb2ludGAgZnJvbSBgb2Zmc2V0YC5cbiAqIEBwYXJhbSB7bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZH0gW29mZnNldF1cbiAqICAgU29tZXRoaW5nIHRoYXQgc2hvdWxkIGJlIGFuIGBvZmZzZXQuXG4gKiBAcmV0dXJucyB7UG9pbnR9XG4gKiAgIFBvaW50LCBsaW5lL2NvbHVtbiBhcmUgdW5kZWZpbmVkIGZvciBpbnZhbGlkIG9yIG91dCBvZiBib3VuZHMgaW5wdXQuXG4gKlxuICogQGNhbGxiYWNrIFRvT2Zmc2V0XG4gKiAgIEdldCBhbiBvZmZzZXQgZnJvbSBhIGxpbmUvY29sdW1uLWJhc2VkIGBwb2ludGAuXG4gKiBAcGFyYW0ge1BvaW50IHwgbnVsbCB8IHVuZGVmaW5lZH0gW3BvaW50XVxuICogICBTb21ldGhpbmcgdGhhdCBzaG91bGQgYmUgYSBgcG9pbnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICogICBPZmZzZXQgb3IgYC0xYCBmb3IgaW52YWxpZCBvciBvdXQgb2YgYm91bmRzIGlucHV0LlxuICpcbiAqIEB0eXBlZGVmIExvY2F0aW9uXG4gKiAgIEFjY2Vzc29ycyBmb3IgaW5kZXguXG4gKiBAcHJvcGVydHkge1RvUG9pbnR9IHRvUG9pbnRcbiAqICAgR2V0IGEgbGluZS9jb2x1bW4tYmFzZWQgYHBvaW50YCBmcm9tIGBvZmZzZXRgLlxuICogQHByb3BlcnR5IHtUb09mZnNldH0gdG9PZmZzZXRcbiAqICAgR2V0IGFuIG9mZnNldCBmcm9tIGEgbGluZS9jb2x1bW4tYmFzZWQgYHBvaW50YC5cbiAqL1xuXG4vKipcbiAqIEluZGV4IHRoZSBnaXZlbiBkb2N1bWVudCBzbyB5b3UgY2FuIHRyYW5zbGF0ZSBiZXR3ZWVuIGxpbmUvY29sdW1uIGFuZCBvZmZzZXRcbiAqIGJhc2VkIHBvc2l0aW9uYWwgaW5mby5cbiAqXG4gKiBAcGFyYW0ge1ZGaWxlIHwgVmFsdWV9IGZpbGVcbiAqICAgRmlsZSB0byBpbmRleC5cbiAqIEByZXR1cm5zIHtMb2NhdGlvbn1cbiAqICAgQWNjZXNzb3JzIGZvciBpbmRleC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvY2F0aW9uKGZpbGUpIHtcbiAgY29uc3QgdmFsdWUgPSBTdHJpbmcoZmlsZSlcbiAgLyoqIEB0eXBlIHtBcnJheTxudW1iZXI+fSAqL1xuICBjb25zdCBpbmRpY2VzID0gW11cbiAgY29uc3Qgc2VhcmNoID0gL1xccj9cXG58XFxyL2dcblxuICB3aGlsZSAoc2VhcmNoLnRlc3QodmFsdWUpKSB7XG4gICAgaW5kaWNlcy5wdXNoKHNlYXJjaC5sYXN0SW5kZXgpXG4gIH1cblxuICBpbmRpY2VzLnB1c2godmFsdWUubGVuZ3RoICsgMSlcblxuICByZXR1cm4ge3RvUG9pbnQsIHRvT2Zmc2V0fVxuXG4gIC8qKiBAdHlwZSB7VG9Qb2ludH0gKi9cbiAgZnVuY3Rpb24gdG9Qb2ludChvZmZzZXQpIHtcbiAgICBsZXQgaW5kZXggPSAtMVxuXG4gICAgaWYgKFxuICAgICAgdHlwZW9mIG9mZnNldCA9PT0gJ251bWJlcicgJiZcbiAgICAgIG9mZnNldCA+IC0xICYmXG4gICAgICBvZmZzZXQgPCBpbmRpY2VzW2luZGljZXMubGVuZ3RoIC0gMV1cbiAgICApIHtcbiAgICAgIHdoaWxlICgrK2luZGV4IDwgaW5kaWNlcy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGluZGljZXNbaW5kZXhdID4gb2Zmc2V0KSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxpbmU6IGluZGV4ICsgMSxcbiAgICAgICAgICAgIGNvbHVtbjogb2Zmc2V0IC0gKGluZGV4ID4gMCA/IGluZGljZXNbaW5kZXggLSAxXSA6IDApICsgMSxcbiAgICAgICAgICAgIG9mZnNldFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7bGluZTogdW5kZWZpbmVkLCBjb2x1bW46IHVuZGVmaW5lZCwgb2Zmc2V0OiB1bmRlZmluZWR9XG4gIH1cblxuICAvKiogQHR5cGUge1RvT2Zmc2V0fSAqL1xuICBmdW5jdGlvbiB0b09mZnNldChwb2ludCkge1xuICAgIGNvbnN0IGxpbmUgPSBwb2ludCAmJiBwb2ludC5saW5lXG4gICAgY29uc3QgY29sdW1uID0gcG9pbnQgJiYgcG9pbnQuY29sdW1uXG5cbiAgICBpZiAoXG4gICAgICB0eXBlb2YgbGluZSA9PT0gJ251bWJlcicgJiZcbiAgICAgIHR5cGVvZiBjb2x1bW4gPT09ICdudW1iZXInICYmXG4gICAgICAhTnVtYmVyLmlzTmFOKGxpbmUpICYmXG4gICAgICAhTnVtYmVyLmlzTmFOKGNvbHVtbikgJiZcbiAgICAgIGxpbmUgLSAxIGluIGluZGljZXNcbiAgICApIHtcbiAgICAgIGNvbnN0IG9mZnNldCA9IChpbmRpY2VzW2xpbmUgLSAyXSB8fCAwKSArIGNvbHVtbiAtIDEgfHwgMFxuXG4gICAgICBpZiAob2Zmc2V0ID4gLTEgJiYgb2Zmc2V0IDwgaW5kaWNlc1tpbmRpY2VzLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgIHJldHVybiBvZmZzZXRcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gLTFcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/vfile-location/lib/index.js\n");

/***/ })

};
;