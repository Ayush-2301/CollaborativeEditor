"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/rope-sequence";
exports.ids = ["vendor-chunks/rope-sequence"];
exports.modules = {

/***/ "(ssr)/./node_modules/rope-sequence/dist/index.js":
/*!**************************************************!*\
  !*** ./node_modules/rope-sequence/dist/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar GOOD_LEAF_SIZE = 200;\n\n// :: class<T> A rope sequence is a persistent sequence data structure\n// that supports appending, prepending, and slicing without doing a\n// full copy. It is represented as a mostly-balanced tree.\nvar RopeSequence = function RopeSequence () {};\n\nRopeSequence.prototype.append = function append (other) {\n  if (!other.length) { return this }\n  other = RopeSequence.from(other);\n\n  return (!this.length && other) ||\n    (other.length < GOOD_LEAF_SIZE && this.leafAppend(other)) ||\n    (this.length < GOOD_LEAF_SIZE && other.leafPrepend(this)) ||\n    this.appendInner(other)\n};\n\n// :: (union<[T], RopeSequence<T>>) → RopeSequence<T>\n// Prepend an array or other rope to this one, returning a new rope.\nRopeSequence.prototype.prepend = function prepend (other) {\n  if (!other.length) { return this }\n  return RopeSequence.from(other).append(this)\n};\n\nRopeSequence.prototype.appendInner = function appendInner (other) {\n  return new Append(this, other)\n};\n\n// :: (?number, ?number) → RopeSequence<T>\n// Create a rope repesenting a sub-sequence of this rope.\nRopeSequence.prototype.slice = function slice (from, to) {\n    if ( from === void 0 ) from = 0;\n    if ( to === void 0 ) to = this.length;\n\n  if (from >= to) { return RopeSequence.empty }\n  return this.sliceInner(Math.max(0, from), Math.min(this.length, to))\n};\n\n// :: (number) → T\n// Retrieve the element at the given position from this rope.\nRopeSequence.prototype.get = function get (i) {\n  if (i < 0 || i >= this.length) { return undefined }\n  return this.getInner(i)\n};\n\n// :: ((element: T, index: number) → ?bool, ?number, ?number)\n// Call the given function for each element between the given\n// indices. This tends to be more efficient than looping over the\n// indices and calling `get`, because it doesn't have to descend the\n// tree for every element.\nRopeSequence.prototype.forEach = function forEach (f, from, to) {\n    if ( from === void 0 ) from = 0;\n    if ( to === void 0 ) to = this.length;\n\n  if (from <= to)\n    { this.forEachInner(f, from, to, 0); }\n  else\n    { this.forEachInvertedInner(f, from, to, 0); }\n};\n\n// :: ((element: T, index: number) → U, ?number, ?number) → [U]\n// Map the given functions over the elements of the rope, producing\n// a flat array.\nRopeSequence.prototype.map = function map (f, from, to) {\n    if ( from === void 0 ) from = 0;\n    if ( to === void 0 ) to = this.length;\n\n  var result = [];\n  this.forEach(function (elt, i) { return result.push(f(elt, i)); }, from, to);\n  return result\n};\n\n// :: (?union<[T], RopeSequence<T>>) → RopeSequence<T>\n// Create a rope representing the given array, or return the rope\n// itself if a rope was given.\nRopeSequence.from = function from (values) {\n  if (values instanceof RopeSequence) { return values }\n  return values && values.length ? new Leaf(values) : RopeSequence.empty\n};\n\nvar Leaf = /*@__PURE__*/(function (RopeSequence) {\n  function Leaf(values) {\n    RopeSequence.call(this);\n    this.values = values;\n  }\n\n  if ( RopeSequence ) Leaf.__proto__ = RopeSequence;\n  Leaf.prototype = Object.create( RopeSequence && RopeSequence.prototype );\n  Leaf.prototype.constructor = Leaf;\n\n  var prototypeAccessors = { length: { configurable: true },depth: { configurable: true } };\n\n  Leaf.prototype.flatten = function flatten () {\n    return this.values\n  };\n\n  Leaf.prototype.sliceInner = function sliceInner (from, to) {\n    if (from == 0 && to == this.length) { return this }\n    return new Leaf(this.values.slice(from, to))\n  };\n\n  Leaf.prototype.getInner = function getInner (i) {\n    return this.values[i]\n  };\n\n  Leaf.prototype.forEachInner = function forEachInner (f, from, to, start) {\n    for (var i = from; i < to; i++)\n      { if (f(this.values[i], start + i) === false) { return false } }\n  };\n\n  Leaf.prototype.forEachInvertedInner = function forEachInvertedInner (f, from, to, start) {\n    for (var i = from - 1; i >= to; i--)\n      { if (f(this.values[i], start + i) === false) { return false } }\n  };\n\n  Leaf.prototype.leafAppend = function leafAppend (other) {\n    if (this.length + other.length <= GOOD_LEAF_SIZE)\n      { return new Leaf(this.values.concat(other.flatten())) }\n  };\n\n  Leaf.prototype.leafPrepend = function leafPrepend (other) {\n    if (this.length + other.length <= GOOD_LEAF_SIZE)\n      { return new Leaf(other.flatten().concat(this.values)) }\n  };\n\n  prototypeAccessors.length.get = function () { return this.values.length };\n\n  prototypeAccessors.depth.get = function () { return 0 };\n\n  Object.defineProperties( Leaf.prototype, prototypeAccessors );\n\n  return Leaf;\n}(RopeSequence));\n\n// :: RopeSequence\n// The empty rope sequence.\nRopeSequence.empty = new Leaf([]);\n\nvar Append = /*@__PURE__*/(function (RopeSequence) {\n  function Append(left, right) {\n    RopeSequence.call(this);\n    this.left = left;\n    this.right = right;\n    this.length = left.length + right.length;\n    this.depth = Math.max(left.depth, right.depth) + 1;\n  }\n\n  if ( RopeSequence ) Append.__proto__ = RopeSequence;\n  Append.prototype = Object.create( RopeSequence && RopeSequence.prototype );\n  Append.prototype.constructor = Append;\n\n  Append.prototype.flatten = function flatten () {\n    return this.left.flatten().concat(this.right.flatten())\n  };\n\n  Append.prototype.getInner = function getInner (i) {\n    return i < this.left.length ? this.left.get(i) : this.right.get(i - this.left.length)\n  };\n\n  Append.prototype.forEachInner = function forEachInner (f, from, to, start) {\n    var leftLen = this.left.length;\n    if (from < leftLen &&\n        this.left.forEachInner(f, from, Math.min(to, leftLen), start) === false)\n      { return false }\n    if (to > leftLen &&\n        this.right.forEachInner(f, Math.max(from - leftLen, 0), Math.min(this.length, to) - leftLen, start + leftLen) === false)\n      { return false }\n  };\n\n  Append.prototype.forEachInvertedInner = function forEachInvertedInner (f, from, to, start) {\n    var leftLen = this.left.length;\n    if (from > leftLen &&\n        this.right.forEachInvertedInner(f, from - leftLen, Math.max(to, leftLen) - leftLen, start + leftLen) === false)\n      { return false }\n    if (to < leftLen &&\n        this.left.forEachInvertedInner(f, Math.min(from, leftLen), to, start) === false)\n      { return false }\n  };\n\n  Append.prototype.sliceInner = function sliceInner (from, to) {\n    if (from == 0 && to == this.length) { return this }\n    var leftLen = this.left.length;\n    if (to <= leftLen) { return this.left.slice(from, to) }\n    if (from >= leftLen) { return this.right.slice(from - leftLen, to - leftLen) }\n    return this.left.slice(from, leftLen).append(this.right.slice(0, to - leftLen))\n  };\n\n  Append.prototype.leafAppend = function leafAppend (other) {\n    var inner = this.right.leafAppend(other);\n    if (inner) { return new Append(this.left, inner) }\n  };\n\n  Append.prototype.leafPrepend = function leafPrepend (other) {\n    var inner = this.left.leafPrepend(other);\n    if (inner) { return new Append(inner, this.right) }\n  };\n\n  Append.prototype.appendInner = function appendInner (other) {\n    if (this.left.depth >= Math.max(this.right.depth, other.depth) + 1)\n      { return new Append(this.left, new Append(this.right, other)) }\n    return new Append(this, other)\n  };\n\n  return Append;\n}(RopeSequence));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RopeSequence);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcm9wZS1zZXF1ZW5jZS9kaXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQjtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DLGdDQUFnQztBQUNuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCLFVBQVUsb0JBQW9CLFVBQVU7O0FBRXJFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CLFFBQVEsOENBQThDO0FBQ3REOztBQUVBO0FBQ0EsMkJBQTJCLFNBQVM7QUFDcEMsUUFBUSw4Q0FBOEM7QUFDdEQ7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBLGdEQUFnRDs7QUFFaEQsK0NBQStDOztBQUUvQzs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0EseUJBQXlCO0FBQ3pCLDJCQUEyQjtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVELGlFQUFlLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BsaXZlYmxvY2tzLWV4YW1wbGVzL25leHRqcy15anMtYmxvY2tub3RlLWFkdmFuY2VkLy4vbm9kZV9tb2R1bGVzL3JvcGUtc2VxdWVuY2UvZGlzdC9pbmRleC5qcz8yYmI3Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBHT09EX0xFQUZfU0laRSA9IDIwMDtcblxuLy8gOjogY2xhc3M8VD4gQSByb3BlIHNlcXVlbmNlIGlzIGEgcGVyc2lzdGVudCBzZXF1ZW5jZSBkYXRhIHN0cnVjdHVyZVxuLy8gdGhhdCBzdXBwb3J0cyBhcHBlbmRpbmcsIHByZXBlbmRpbmcsIGFuZCBzbGljaW5nIHdpdGhvdXQgZG9pbmcgYVxuLy8gZnVsbCBjb3B5LiBJdCBpcyByZXByZXNlbnRlZCBhcyBhIG1vc3RseS1iYWxhbmNlZCB0cmVlLlxudmFyIFJvcGVTZXF1ZW5jZSA9IGZ1bmN0aW9uIFJvcGVTZXF1ZW5jZSAoKSB7fTtcblxuUm9wZVNlcXVlbmNlLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiBhcHBlbmQgKG90aGVyKSB7XG4gIGlmICghb3RoZXIubGVuZ3RoKSB7IHJldHVybiB0aGlzIH1cbiAgb3RoZXIgPSBSb3BlU2VxdWVuY2UuZnJvbShvdGhlcik7XG5cbiAgcmV0dXJuICghdGhpcy5sZW5ndGggJiYgb3RoZXIpIHx8XG4gICAgKG90aGVyLmxlbmd0aCA8IEdPT0RfTEVBRl9TSVpFICYmIHRoaXMubGVhZkFwcGVuZChvdGhlcikpIHx8XG4gICAgKHRoaXMubGVuZ3RoIDwgR09PRF9MRUFGX1NJWkUgJiYgb3RoZXIubGVhZlByZXBlbmQodGhpcykpIHx8XG4gICAgdGhpcy5hcHBlbmRJbm5lcihvdGhlcilcbn07XG5cbi8vIDo6ICh1bmlvbjxbVF0sIFJvcGVTZXF1ZW5jZTxUPj4pIOKGkiBSb3BlU2VxdWVuY2U8VD5cbi8vIFByZXBlbmQgYW4gYXJyYXkgb3Igb3RoZXIgcm9wZSB0byB0aGlzIG9uZSwgcmV0dXJuaW5nIGEgbmV3IHJvcGUuXG5Sb3BlU2VxdWVuY2UucHJvdG90eXBlLnByZXBlbmQgPSBmdW5jdGlvbiBwcmVwZW5kIChvdGhlcikge1xuICBpZiAoIW90aGVyLmxlbmd0aCkgeyByZXR1cm4gdGhpcyB9XG4gIHJldHVybiBSb3BlU2VxdWVuY2UuZnJvbShvdGhlcikuYXBwZW5kKHRoaXMpXG59O1xuXG5Sb3BlU2VxdWVuY2UucHJvdG90eXBlLmFwcGVuZElubmVyID0gZnVuY3Rpb24gYXBwZW5kSW5uZXIgKG90aGVyKSB7XG4gIHJldHVybiBuZXcgQXBwZW5kKHRoaXMsIG90aGVyKVxufTtcblxuLy8gOjogKD9udW1iZXIsID9udW1iZXIpIOKGkiBSb3BlU2VxdWVuY2U8VD5cbi8vIENyZWF0ZSBhIHJvcGUgcmVwZXNlbnRpbmcgYSBzdWItc2VxdWVuY2Ugb2YgdGhpcyByb3BlLlxuUm9wZVNlcXVlbmNlLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIHNsaWNlIChmcm9tLCB0bykge1xuICAgIGlmICggZnJvbSA9PT0gdm9pZCAwICkgZnJvbSA9IDA7XG4gICAgaWYgKCB0byA9PT0gdm9pZCAwICkgdG8gPSB0aGlzLmxlbmd0aDtcblxuICBpZiAoZnJvbSA+PSB0bykgeyByZXR1cm4gUm9wZVNlcXVlbmNlLmVtcHR5IH1cbiAgcmV0dXJuIHRoaXMuc2xpY2VJbm5lcihNYXRoLm1heCgwLCBmcm9tKSwgTWF0aC5taW4odGhpcy5sZW5ndGgsIHRvKSlcbn07XG5cbi8vIDo6IChudW1iZXIpIOKGkiBUXG4vLyBSZXRyaWV2ZSB0aGUgZWxlbWVudCBhdCB0aGUgZ2l2ZW4gcG9zaXRpb24gZnJvbSB0aGlzIHJvcGUuXG5Sb3BlU2VxdWVuY2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCAoaSkge1xuICBpZiAoaSA8IDAgfHwgaSA+PSB0aGlzLmxlbmd0aCkgeyByZXR1cm4gdW5kZWZpbmVkIH1cbiAgcmV0dXJuIHRoaXMuZ2V0SW5uZXIoaSlcbn07XG5cbi8vIDo6ICgoZWxlbWVudDogVCwgaW5kZXg6IG51bWJlcikg4oaSID9ib29sLCA/bnVtYmVyLCA/bnVtYmVyKVxuLy8gQ2FsbCB0aGUgZ2l2ZW4gZnVuY3Rpb24gZm9yIGVhY2ggZWxlbWVudCBiZXR3ZWVuIHRoZSBnaXZlblxuLy8gaW5kaWNlcy4gVGhpcyB0ZW5kcyB0byBiZSBtb3JlIGVmZmljaWVudCB0aGFuIGxvb3Bpbmcgb3ZlciB0aGVcbi8vIGluZGljZXMgYW5kIGNhbGxpbmcgYGdldGAsIGJlY2F1c2UgaXQgZG9lc24ndCBoYXZlIHRvIGRlc2NlbmQgdGhlXG4vLyB0cmVlIGZvciBldmVyeSBlbGVtZW50LlxuUm9wZVNlcXVlbmNlLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaCAoZiwgZnJvbSwgdG8pIHtcbiAgICBpZiAoIGZyb20gPT09IHZvaWQgMCApIGZyb20gPSAwO1xuICAgIGlmICggdG8gPT09IHZvaWQgMCApIHRvID0gdGhpcy5sZW5ndGg7XG5cbiAgaWYgKGZyb20gPD0gdG8pXG4gICAgeyB0aGlzLmZvckVhY2hJbm5lcihmLCBmcm9tLCB0bywgMCk7IH1cbiAgZWxzZVxuICAgIHsgdGhpcy5mb3JFYWNoSW52ZXJ0ZWRJbm5lcihmLCBmcm9tLCB0bywgMCk7IH1cbn07XG5cbi8vIDo6ICgoZWxlbWVudDogVCwgaW5kZXg6IG51bWJlcikg4oaSIFUsID9udW1iZXIsID9udW1iZXIpIOKGkiBbVV1cbi8vIE1hcCB0aGUgZ2l2ZW4gZnVuY3Rpb25zIG92ZXIgdGhlIGVsZW1lbnRzIG9mIHRoZSByb3BlLCBwcm9kdWNpbmdcbi8vIGEgZmxhdCBhcnJheS5cblJvcGVTZXF1ZW5jZS5wcm90b3R5cGUubWFwID0gZnVuY3Rpb24gbWFwIChmLCBmcm9tLCB0bykge1xuICAgIGlmICggZnJvbSA9PT0gdm9pZCAwICkgZnJvbSA9IDA7XG4gICAgaWYgKCB0byA9PT0gdm9pZCAwICkgdG8gPSB0aGlzLmxlbmd0aDtcblxuICB2YXIgcmVzdWx0ID0gW107XG4gIHRoaXMuZm9yRWFjaChmdW5jdGlvbiAoZWx0LCBpKSB7IHJldHVybiByZXN1bHQucHVzaChmKGVsdCwgaSkpOyB9LCBmcm9tLCB0byk7XG4gIHJldHVybiByZXN1bHRcbn07XG5cbi8vIDo6ICg/dW5pb248W1RdLCBSb3BlU2VxdWVuY2U8VD4+KSDihpIgUm9wZVNlcXVlbmNlPFQ+XG4vLyBDcmVhdGUgYSByb3BlIHJlcHJlc2VudGluZyB0aGUgZ2l2ZW4gYXJyYXksIG9yIHJldHVybiB0aGUgcm9wZVxuLy8gaXRzZWxmIGlmIGEgcm9wZSB3YXMgZ2l2ZW4uXG5Sb3BlU2VxdWVuY2UuZnJvbSA9IGZ1bmN0aW9uIGZyb20gKHZhbHVlcykge1xuICBpZiAodmFsdWVzIGluc3RhbmNlb2YgUm9wZVNlcXVlbmNlKSB7IHJldHVybiB2YWx1ZXMgfVxuICByZXR1cm4gdmFsdWVzICYmIHZhbHVlcy5sZW5ndGggPyBuZXcgTGVhZih2YWx1ZXMpIDogUm9wZVNlcXVlbmNlLmVtcHR5XG59O1xuXG52YXIgTGVhZiA9IC8qQF9fUFVSRV9fKi8oZnVuY3Rpb24gKFJvcGVTZXF1ZW5jZSkge1xuICBmdW5jdGlvbiBMZWFmKHZhbHVlcykge1xuICAgIFJvcGVTZXF1ZW5jZS5jYWxsKHRoaXMpO1xuICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICB9XG5cbiAgaWYgKCBSb3BlU2VxdWVuY2UgKSBMZWFmLl9fcHJvdG9fXyA9IFJvcGVTZXF1ZW5jZTtcbiAgTGVhZi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBSb3BlU2VxdWVuY2UgJiYgUm9wZVNlcXVlbmNlLnByb3RvdHlwZSApO1xuICBMZWFmLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IExlYWY7XG5cbiAgdmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgbGVuZ3RoOiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSB9LGRlcHRoOiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH07XG5cbiAgTGVhZi5wcm90b3R5cGUuZmxhdHRlbiA9IGZ1bmN0aW9uIGZsYXR0ZW4gKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlc1xuICB9O1xuXG4gIExlYWYucHJvdG90eXBlLnNsaWNlSW5uZXIgPSBmdW5jdGlvbiBzbGljZUlubmVyIChmcm9tLCB0bykge1xuICAgIGlmIChmcm9tID09IDAgJiYgdG8gPT0gdGhpcy5sZW5ndGgpIHsgcmV0dXJuIHRoaXMgfVxuICAgIHJldHVybiBuZXcgTGVhZih0aGlzLnZhbHVlcy5zbGljZShmcm9tLCB0bykpXG4gIH07XG5cbiAgTGVhZi5wcm90b3R5cGUuZ2V0SW5uZXIgPSBmdW5jdGlvbiBnZXRJbm5lciAoaSkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlc1tpXVxuICB9O1xuXG4gIExlYWYucHJvdG90eXBlLmZvckVhY2hJbm5lciA9IGZ1bmN0aW9uIGZvckVhY2hJbm5lciAoZiwgZnJvbSwgdG8sIHN0YXJ0KSB7XG4gICAgZm9yICh2YXIgaSA9IGZyb207IGkgPCB0bzsgaSsrKVxuICAgICAgeyBpZiAoZih0aGlzLnZhbHVlc1tpXSwgc3RhcnQgKyBpKSA9PT0gZmFsc2UpIHsgcmV0dXJuIGZhbHNlIH0gfVxuICB9O1xuXG4gIExlYWYucHJvdG90eXBlLmZvckVhY2hJbnZlcnRlZElubmVyID0gZnVuY3Rpb24gZm9yRWFjaEludmVydGVkSW5uZXIgKGYsIGZyb20sIHRvLCBzdGFydCkge1xuICAgIGZvciAodmFyIGkgPSBmcm9tIC0gMTsgaSA+PSB0bzsgaS0tKVxuICAgICAgeyBpZiAoZih0aGlzLnZhbHVlc1tpXSwgc3RhcnQgKyBpKSA9PT0gZmFsc2UpIHsgcmV0dXJuIGZhbHNlIH0gfVxuICB9O1xuXG4gIExlYWYucHJvdG90eXBlLmxlYWZBcHBlbmQgPSBmdW5jdGlvbiBsZWFmQXBwZW5kIChvdGhlcikge1xuICAgIGlmICh0aGlzLmxlbmd0aCArIG90aGVyLmxlbmd0aCA8PSBHT09EX0xFQUZfU0laRSlcbiAgICAgIHsgcmV0dXJuIG5ldyBMZWFmKHRoaXMudmFsdWVzLmNvbmNhdChvdGhlci5mbGF0dGVuKCkpKSB9XG4gIH07XG5cbiAgTGVhZi5wcm90b3R5cGUubGVhZlByZXBlbmQgPSBmdW5jdGlvbiBsZWFmUHJlcGVuZCAob3RoZXIpIHtcbiAgICBpZiAodGhpcy5sZW5ndGggKyBvdGhlci5sZW5ndGggPD0gR09PRF9MRUFGX1NJWkUpXG4gICAgICB7IHJldHVybiBuZXcgTGVhZihvdGhlci5mbGF0dGVuKCkuY29uY2F0KHRoaXMudmFsdWVzKSkgfVxuICB9O1xuXG4gIHByb3RvdHlwZUFjY2Vzc29ycy5sZW5ndGguZ2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy52YWx1ZXMubGVuZ3RoIH07XG5cbiAgcHJvdG90eXBlQWNjZXNzb3JzLmRlcHRoLmdldCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyggTGVhZi5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG4gIHJldHVybiBMZWFmO1xufShSb3BlU2VxdWVuY2UpKTtcblxuLy8gOjogUm9wZVNlcXVlbmNlXG4vLyBUaGUgZW1wdHkgcm9wZSBzZXF1ZW5jZS5cblJvcGVTZXF1ZW5jZS5lbXB0eSA9IG5ldyBMZWFmKFtdKTtcblxudmFyIEFwcGVuZCA9IC8qQF9fUFVSRV9fKi8oZnVuY3Rpb24gKFJvcGVTZXF1ZW5jZSkge1xuICBmdW5jdGlvbiBBcHBlbmQobGVmdCwgcmlnaHQpIHtcbiAgICBSb3BlU2VxdWVuY2UuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICB0aGlzLmxlbmd0aCA9IGxlZnQubGVuZ3RoICsgcmlnaHQubGVuZ3RoO1xuICAgIHRoaXMuZGVwdGggPSBNYXRoLm1heChsZWZ0LmRlcHRoLCByaWdodC5kZXB0aCkgKyAxO1xuICB9XG5cbiAgaWYgKCBSb3BlU2VxdWVuY2UgKSBBcHBlbmQuX19wcm90b19fID0gUm9wZVNlcXVlbmNlO1xuICBBcHBlbmQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggUm9wZVNlcXVlbmNlICYmIFJvcGVTZXF1ZW5jZS5wcm90b3R5cGUgKTtcbiAgQXBwZW5kLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEFwcGVuZDtcblxuICBBcHBlbmQucHJvdG90eXBlLmZsYXR0ZW4gPSBmdW5jdGlvbiBmbGF0dGVuICgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0LmZsYXR0ZW4oKS5jb25jYXQodGhpcy5yaWdodC5mbGF0dGVuKCkpXG4gIH07XG5cbiAgQXBwZW5kLnByb3RvdHlwZS5nZXRJbm5lciA9IGZ1bmN0aW9uIGdldElubmVyIChpKSB7XG4gICAgcmV0dXJuIGkgPCB0aGlzLmxlZnQubGVuZ3RoID8gdGhpcy5sZWZ0LmdldChpKSA6IHRoaXMucmlnaHQuZ2V0KGkgLSB0aGlzLmxlZnQubGVuZ3RoKVxuICB9O1xuXG4gIEFwcGVuZC5wcm90b3R5cGUuZm9yRWFjaElubmVyID0gZnVuY3Rpb24gZm9yRWFjaElubmVyIChmLCBmcm9tLCB0bywgc3RhcnQpIHtcbiAgICB2YXIgbGVmdExlbiA9IHRoaXMubGVmdC5sZW5ndGg7XG4gICAgaWYgKGZyb20gPCBsZWZ0TGVuICYmXG4gICAgICAgIHRoaXMubGVmdC5mb3JFYWNoSW5uZXIoZiwgZnJvbSwgTWF0aC5taW4odG8sIGxlZnRMZW4pLCBzdGFydCkgPT09IGZhbHNlKVxuICAgICAgeyByZXR1cm4gZmFsc2UgfVxuICAgIGlmICh0byA+IGxlZnRMZW4gJiZcbiAgICAgICAgdGhpcy5yaWdodC5mb3JFYWNoSW5uZXIoZiwgTWF0aC5tYXgoZnJvbSAtIGxlZnRMZW4sIDApLCBNYXRoLm1pbih0aGlzLmxlbmd0aCwgdG8pIC0gbGVmdExlbiwgc3RhcnQgKyBsZWZ0TGVuKSA9PT0gZmFsc2UpXG4gICAgICB7IHJldHVybiBmYWxzZSB9XG4gIH07XG5cbiAgQXBwZW5kLnByb3RvdHlwZS5mb3JFYWNoSW52ZXJ0ZWRJbm5lciA9IGZ1bmN0aW9uIGZvckVhY2hJbnZlcnRlZElubmVyIChmLCBmcm9tLCB0bywgc3RhcnQpIHtcbiAgICB2YXIgbGVmdExlbiA9IHRoaXMubGVmdC5sZW5ndGg7XG4gICAgaWYgKGZyb20gPiBsZWZ0TGVuICYmXG4gICAgICAgIHRoaXMucmlnaHQuZm9yRWFjaEludmVydGVkSW5uZXIoZiwgZnJvbSAtIGxlZnRMZW4sIE1hdGgubWF4KHRvLCBsZWZ0TGVuKSAtIGxlZnRMZW4sIHN0YXJ0ICsgbGVmdExlbikgPT09IGZhbHNlKVxuICAgICAgeyByZXR1cm4gZmFsc2UgfVxuICAgIGlmICh0byA8IGxlZnRMZW4gJiZcbiAgICAgICAgdGhpcy5sZWZ0LmZvckVhY2hJbnZlcnRlZElubmVyKGYsIE1hdGgubWluKGZyb20sIGxlZnRMZW4pLCB0bywgc3RhcnQpID09PSBmYWxzZSlcbiAgICAgIHsgcmV0dXJuIGZhbHNlIH1cbiAgfTtcblxuICBBcHBlbmQucHJvdG90eXBlLnNsaWNlSW5uZXIgPSBmdW5jdGlvbiBzbGljZUlubmVyIChmcm9tLCB0bykge1xuICAgIGlmIChmcm9tID09IDAgJiYgdG8gPT0gdGhpcy5sZW5ndGgpIHsgcmV0dXJuIHRoaXMgfVxuICAgIHZhciBsZWZ0TGVuID0gdGhpcy5sZWZ0Lmxlbmd0aDtcbiAgICBpZiAodG8gPD0gbGVmdExlbikgeyByZXR1cm4gdGhpcy5sZWZ0LnNsaWNlKGZyb20sIHRvKSB9XG4gICAgaWYgKGZyb20gPj0gbGVmdExlbikgeyByZXR1cm4gdGhpcy5yaWdodC5zbGljZShmcm9tIC0gbGVmdExlbiwgdG8gLSBsZWZ0TGVuKSB9XG4gICAgcmV0dXJuIHRoaXMubGVmdC5zbGljZShmcm9tLCBsZWZ0TGVuKS5hcHBlbmQodGhpcy5yaWdodC5zbGljZSgwLCB0byAtIGxlZnRMZW4pKVxuICB9O1xuXG4gIEFwcGVuZC5wcm90b3R5cGUubGVhZkFwcGVuZCA9IGZ1bmN0aW9uIGxlYWZBcHBlbmQgKG90aGVyKSB7XG4gICAgdmFyIGlubmVyID0gdGhpcy5yaWdodC5sZWFmQXBwZW5kKG90aGVyKTtcbiAgICBpZiAoaW5uZXIpIHsgcmV0dXJuIG5ldyBBcHBlbmQodGhpcy5sZWZ0LCBpbm5lcikgfVxuICB9O1xuXG4gIEFwcGVuZC5wcm90b3R5cGUubGVhZlByZXBlbmQgPSBmdW5jdGlvbiBsZWFmUHJlcGVuZCAob3RoZXIpIHtcbiAgICB2YXIgaW5uZXIgPSB0aGlzLmxlZnQubGVhZlByZXBlbmQob3RoZXIpO1xuICAgIGlmIChpbm5lcikgeyByZXR1cm4gbmV3IEFwcGVuZChpbm5lciwgdGhpcy5yaWdodCkgfVxuICB9O1xuXG4gIEFwcGVuZC5wcm90b3R5cGUuYXBwZW5kSW5uZXIgPSBmdW5jdGlvbiBhcHBlbmRJbm5lciAob3RoZXIpIHtcbiAgICBpZiAodGhpcy5sZWZ0LmRlcHRoID49IE1hdGgubWF4KHRoaXMucmlnaHQuZGVwdGgsIG90aGVyLmRlcHRoKSArIDEpXG4gICAgICB7IHJldHVybiBuZXcgQXBwZW5kKHRoaXMubGVmdCwgbmV3IEFwcGVuZCh0aGlzLnJpZ2h0LCBvdGhlcikpIH1cbiAgICByZXR1cm4gbmV3IEFwcGVuZCh0aGlzLCBvdGhlcilcbiAgfTtcblxuICByZXR1cm4gQXBwZW5kO1xufShSb3BlU2VxdWVuY2UpKTtcblxuZXhwb3J0IGRlZmF1bHQgUm9wZVNlcXVlbmNlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rope-sequence/dist/index.js\n");

/***/ })

};
;