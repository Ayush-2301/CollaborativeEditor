"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/prosemirror-schema-list";
exports.ids = ["vendor-chunks/prosemirror-schema-list"];
exports.modules = {

/***/ "(ssr)/./node_modules/prosemirror-schema-list/dist/index.js":
/*!************************************************************!*\
  !*** ./node_modules/prosemirror-schema-list/dist/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addListNodes: () => (/* binding */ addListNodes),\n/* harmony export */   bulletList: () => (/* binding */ bulletList),\n/* harmony export */   liftListItem: () => (/* binding */ liftListItem),\n/* harmony export */   listItem: () => (/* binding */ listItem),\n/* harmony export */   orderedList: () => (/* binding */ orderedList),\n/* harmony export */   sinkListItem: () => (/* binding */ sinkListItem),\n/* harmony export */   splitListItem: () => (/* binding */ splitListItem),\n/* harmony export */   wrapInList: () => (/* binding */ wrapInList)\n/* harmony export */ });\n/* harmony import */ var prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prosemirror-transform */ \"(ssr)/./node_modules/prosemirror-transform/dist/index.js\");\n/* harmony import */ var prosemirror_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prosemirror-model */ \"(ssr)/./node_modules/prosemirror-model/dist/index.js\");\n/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prosemirror-state */ \"(ssr)/./node_modules/prosemirror-state/dist/index.js\");\n\n\n\n\nconst olDOM = [\"ol\", 0], ulDOM = [\"ul\", 0], liDOM = [\"li\", 0];\n/**\nAn ordered list [node spec](https://prosemirror.net/docs/ref/#model.NodeSpec). Has a single\nattribute, `order`, which determines the number at which the list\nstarts counting, and defaults to 1. Represented as an `<ol>`\nelement.\n*/\nconst orderedList = {\n    attrs: { order: { default: 1 } },\n    parseDOM: [{ tag: \"ol\", getAttrs(dom) {\n                return { order: dom.hasAttribute(\"start\") ? +dom.getAttribute(\"start\") : 1 };\n            } }],\n    toDOM(node) {\n        return node.attrs.order == 1 ? olDOM : [\"ol\", { start: node.attrs.order }, 0];\n    }\n};\n/**\nA bullet list node spec, represented in the DOM as `<ul>`.\n*/\nconst bulletList = {\n    parseDOM: [{ tag: \"ul\" }],\n    toDOM() { return ulDOM; }\n};\n/**\nA list item (`<li>`) spec.\n*/\nconst listItem = {\n    parseDOM: [{ tag: \"li\" }],\n    toDOM() { return liDOM; },\n    defining: true\n};\nfunction add(obj, props) {\n    let copy = {};\n    for (let prop in obj)\n        copy[prop] = obj[prop];\n    for (let prop in props)\n        copy[prop] = props[prop];\n    return copy;\n}\n/**\nConvenience function for adding list-related node types to a map\nspecifying the nodes for a schema. Adds\n[`orderedList`](https://prosemirror.net/docs/ref/#schema-list.orderedList) as `\"ordered_list\"`,\n[`bulletList`](https://prosemirror.net/docs/ref/#schema-list.bulletList) as `\"bullet_list\"`, and\n[`listItem`](https://prosemirror.net/docs/ref/#schema-list.listItem) as `\"list_item\"`.\n\n`itemContent` determines the content expression for the list items.\nIf you want the commands defined in this module to apply to your\nlist structure, it should have a shape like `\"paragraph block*\"` or\n`\"paragraph (ordered_list | bullet_list)*\"`. `listGroup` can be\ngiven to assign a group name to the list node types, for example\n`\"block\"`.\n*/\nfunction addListNodes(nodes, itemContent, listGroup) {\n    return nodes.append({\n        ordered_list: add(orderedList, { content: \"list_item+\", group: listGroup }),\n        bullet_list: add(bulletList, { content: \"list_item+\", group: listGroup }),\n        list_item: add(listItem, { content: itemContent })\n    });\n}\n/**\nReturns a command function that wraps the selection in a list with\nthe given type an attributes. If `dispatch` is null, only return a\nvalue to indicate whether this is possible, but don't actually\nperform the change.\n*/\nfunction wrapInList(listType, attrs = null) {\n    return function (state, dispatch) {\n        let { $from, $to } = state.selection;\n        let range = $from.blockRange($to), doJoin = false, outerRange = range;\n        if (!range)\n            return false;\n        // This is at the top of an existing list item\n        if (range.depth >= 2 && $from.node(range.depth - 1).type.compatibleContent(listType) && range.startIndex == 0) {\n            // Don't do anything if this is the top of the list\n            if ($from.index(range.depth - 1) == 0)\n                return false;\n            let $insert = state.doc.resolve(range.start - 2);\n            outerRange = new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.NodeRange($insert, $insert, range.depth);\n            if (range.endIndex < range.parent.childCount)\n                range = new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.NodeRange($from, state.doc.resolve($to.end(range.depth)), range.depth);\n            doJoin = true;\n        }\n        let wrap = (0,prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__.findWrapping)(outerRange, listType, attrs, range);\n        if (!wrap)\n            return false;\n        if (dispatch)\n            dispatch(doWrapInList(state.tr, range, wrap, doJoin, listType).scrollIntoView());\n        return true;\n    };\n}\nfunction doWrapInList(tr, range, wrappers, joinBefore, listType) {\n    let content = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.empty;\n    for (let i = wrappers.length - 1; i >= 0; i--)\n        content = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(wrappers[i].type.create(wrappers[i].attrs, content));\n    tr.step(new prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__.ReplaceAroundStep(range.start - (joinBefore ? 2 : 0), range.end, range.start, range.end, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(content, 0, 0), wrappers.length, true));\n    let found = 0;\n    for (let i = 0; i < wrappers.length; i++)\n        if (wrappers[i].type == listType)\n            found = i + 1;\n    let splitDepth = wrappers.length - found;\n    let splitPos = range.start + wrappers.length - (joinBefore ? 2 : 0), parent = range.parent;\n    for (let i = range.startIndex, e = range.endIndex, first = true; i < e; i++, first = false) {\n        if (!first && (0,prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__.canSplit)(tr.doc, splitPos, splitDepth)) {\n            tr.split(splitPos, splitDepth);\n            splitPos += 2 * splitDepth;\n        }\n        splitPos += parent.child(i).nodeSize;\n    }\n    return tr;\n}\n/**\nBuild a command that splits a non-empty textblock at the top level\nof a list item by also splitting that list item.\n*/\nfunction splitListItem(itemType, itemAttrs) {\n    return function (state, dispatch) {\n        let { $from, $to, node } = state.selection;\n        if ((node && node.isBlock) || $from.depth < 2 || !$from.sameParent($to))\n            return false;\n        let grandParent = $from.node(-1);\n        if (grandParent.type != itemType)\n            return false;\n        if ($from.parent.content.size == 0 && $from.node(-1).childCount == $from.indexAfter(-1)) {\n            // In an empty block. If this is a nested list, the wrapping\n            // list item should be split. Otherwise, bail out and let next\n            // command handle lifting.\n            if ($from.depth == 3 || $from.node(-3).type != itemType ||\n                $from.index(-2) != $from.node(-2).childCount - 1)\n                return false;\n            if (dispatch) {\n                let wrap = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.empty;\n                let depthBefore = $from.index(-1) ? 1 : $from.index(-2) ? 2 : 3;\n                // Build a fragment containing empty versions of the structure\n                // from the outer list item to the parent node of the cursor\n                for (let d = $from.depth - depthBefore; d >= $from.depth - 3; d--)\n                    wrap = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from($from.node(d).copy(wrap));\n                let depthAfter = $from.indexAfter(-1) < $from.node(-2).childCount ? 1\n                    : $from.indexAfter(-2) < $from.node(-3).childCount ? 2 : 3;\n                // Add a second list item with an empty default start node\n                wrap = wrap.append(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(itemType.createAndFill()));\n                let start = $from.before($from.depth - (depthBefore - 1));\n                let tr = state.tr.replace(start, $from.after(-depthAfter), new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(wrap, 4 - depthBefore, 0));\n                let sel = -1;\n                tr.doc.nodesBetween(start, tr.doc.content.size, (node, pos) => {\n                    if (sel > -1)\n                        return false;\n                    if (node.isTextblock && node.content.size == 0)\n                        sel = pos + 1;\n                });\n                if (sel > -1)\n                    tr.setSelection(prosemirror_state__WEBPACK_IMPORTED_MODULE_2__.Selection.near(tr.doc.resolve(sel)));\n                dispatch(tr.scrollIntoView());\n            }\n            return true;\n        }\n        let nextType = $to.pos == $from.end() ? grandParent.contentMatchAt(0).defaultType : null;\n        let tr = state.tr.delete($from.pos, $to.pos);\n        let types = nextType ? [itemAttrs ? { type: itemType, attrs: itemAttrs } : null, { type: nextType }] : undefined;\n        if (!(0,prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__.canSplit)(tr.doc, $from.pos, 2, types))\n            return false;\n        if (dispatch)\n            dispatch(tr.split($from.pos, 2, types).scrollIntoView());\n        return true;\n    };\n}\n/**\nCreate a command to lift the list item around the selection up into\na wrapping list.\n*/\nfunction liftListItem(itemType) {\n    return function (state, dispatch) {\n        let { $from, $to } = state.selection;\n        let range = $from.blockRange($to, node => node.childCount > 0 && node.firstChild.type == itemType);\n        if (!range)\n            return false;\n        if (!dispatch)\n            return true;\n        if ($from.node(range.depth - 1).type == itemType) // Inside a parent list\n            return liftToOuterList(state, dispatch, itemType, range);\n        else // Outer list node\n            return liftOutOfList(state, dispatch, range);\n    };\n}\nfunction liftToOuterList(state, dispatch, itemType, range) {\n    let tr = state.tr, end = range.end, endOfList = range.$to.end(range.depth);\n    if (end < endOfList) {\n        // There are siblings after the lifted items, which must become\n        // children of the last item\n        tr.step(new prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__.ReplaceAroundStep(end - 1, endOfList, end, endOfList, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(itemType.create(null, range.parent.copy())), 1, 0), 1, true));\n        range = new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.NodeRange(tr.doc.resolve(range.$from.pos), tr.doc.resolve(endOfList), range.depth);\n    }\n    const target = (0,prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__.liftTarget)(range);\n    if (target == null)\n        return false;\n    tr.lift(range, target);\n    let after = tr.mapping.map(end, -1) - 1;\n    if ((0,prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__.canJoin)(tr.doc, after))\n        tr.join(after);\n    dispatch(tr.scrollIntoView());\n    return true;\n}\nfunction liftOutOfList(state, dispatch, range) {\n    let tr = state.tr, list = range.parent;\n    // Merge the list items into a single big item\n    for (let pos = range.end, i = range.endIndex - 1, e = range.startIndex; i > e; i--) {\n        pos -= list.child(i).nodeSize;\n        tr.delete(pos - 1, pos + 1);\n    }\n    let $start = tr.doc.resolve(range.start), item = $start.nodeAfter;\n    if (tr.mapping.map(range.end) != range.start + $start.nodeAfter.nodeSize)\n        return false;\n    let atStart = range.startIndex == 0, atEnd = range.endIndex == list.childCount;\n    let parent = $start.node(-1), indexBefore = $start.index(-1);\n    if (!parent.canReplace(indexBefore + (atStart ? 0 : 1), indexBefore + 1, item.content.append(atEnd ? prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.empty : prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(list))))\n        return false;\n    let start = $start.pos, end = start + item.nodeSize;\n    // Strip off the surrounding list. At the sides where we're not at\n    // the end of the list, the existing list is closed. At sides where\n    // this is the end, it is overwritten to its end.\n    tr.step(new prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__.ReplaceAroundStep(start - (atStart ? 1 : 0), end + (atEnd ? 1 : 0), start + 1, end - 1, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice((atStart ? prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.empty : prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(list.copy(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.empty)))\n        .append(atEnd ? prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.empty : prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(list.copy(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.empty))), atStart ? 0 : 1, atEnd ? 0 : 1), atStart ? 0 : 1));\n    dispatch(tr.scrollIntoView());\n    return true;\n}\n/**\nCreate a command to sink the list item around the selection down\ninto an inner list.\n*/\nfunction sinkListItem(itemType) {\n    return function (state, dispatch) {\n        let { $from, $to } = state.selection;\n        let range = $from.blockRange($to, node => node.childCount > 0 && node.firstChild.type == itemType);\n        if (!range)\n            return false;\n        let startIndex = range.startIndex;\n        if (startIndex == 0)\n            return false;\n        let parent = range.parent, nodeBefore = parent.child(startIndex - 1);\n        if (nodeBefore.type != itemType)\n            return false;\n        if (dispatch) {\n            let nestedBefore = nodeBefore.lastChild && nodeBefore.lastChild.type == parent.type;\n            let inner = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(nestedBefore ? itemType.create() : null);\n            let slice = new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Slice(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(itemType.create(null, prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.Fragment.from(parent.type.create(null, inner)))), nestedBefore ? 3 : 1, 0);\n            let before = range.start, after = range.end;\n            dispatch(state.tr.step(new prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__.ReplaceAroundStep(before - (nestedBefore ? 3 : 1), after, before, after, slice, 1, true))\n                .scrollIntoView());\n        }\n        return true;\n    };\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcHJvc2VtaXJyb3Itc2NoZW1hLWxpc3QvZGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF1RztBQUN4QztBQUNqQjs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUyxjQUFjO0FBQ3BDLGlCQUFpQjtBQUNqQix5QkFBeUI7QUFDekIsZUFBZTtBQUNmO0FBQ0Esd0RBQXdELHlCQUF5QjtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsV0FBVztBQUM1QixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixXQUFXO0FBQzVCLGNBQWMsZUFBZTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMseUNBQXlDO0FBQ2xGLHVDQUF1Qyx5Q0FBeUM7QUFDaEYsbUNBQW1DLHNCQUFzQjtBQUN6RCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxhQUFhO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix3REFBUztBQUN0QztBQUNBLDRCQUE0Qix3REFBUztBQUNyQztBQUNBO0FBQ0EsbUJBQW1CLG1FQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdURBQVE7QUFDMUIsc0NBQXNDLFFBQVE7QUFDOUMsa0JBQWtCLHVEQUFRO0FBQzFCLGdCQUFnQixvRUFBaUIsNEVBQTRFLG9EQUFLO0FBQ2xIO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSxPQUFPO0FBQzVFLHNCQUFzQiwrREFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsbUJBQW1CO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHVEQUFRO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxzQkFBc0I7QUFDOUUsMkJBQTJCLHVEQUFRO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyx1REFBUTtBQUMzQztBQUNBLCtFQUErRSxvREFBSztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxvQ0FBb0Msd0RBQVM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLG1DQUFtQyxVQUFVLGdCQUFnQjtBQUMzRyxhQUFhLCtEQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsYUFBYTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvRUFBaUIseUNBQXlDLG9EQUFLLENBQUMsdURBQVE7QUFDNUYsb0JBQW9CLHdEQUFTO0FBQzdCO0FBQ0EsbUJBQW1CLGlFQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4REFBTztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFLE9BQU87QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlHQUF5Ryx1REFBUSxTQUFTLHVEQUFRO0FBQ2xJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0VBQWlCLDJFQUEyRSxvREFBSyxZQUFZLHVEQUFRLFNBQVMsdURBQVEsZ0JBQWdCLHVEQUFRO0FBQzlLLHdCQUF3Qix1REFBUSxTQUFTLHVEQUFRLGdCQUFnQix1REFBUTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGFBQWE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1REFBUTtBQUNoQyw0QkFBNEIsb0RBQUssQ0FBQyx1REFBUSw0QkFBNEIsdURBQVE7QUFDOUU7QUFDQSx1Q0FBdUMsb0VBQWlCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWtIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGxpdmVibG9ja3MtZXhhbXBsZXMvbmV4dGpzLXlqcy1ibG9ja25vdGUtYWR2YW5jZWQvLi9ub2RlX21vZHVsZXMvcHJvc2VtaXJyb3Itc2NoZW1hLWxpc3QvZGlzdC9pbmRleC5qcz85ZWJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZpbmRXcmFwcGluZywgUmVwbGFjZUFyb3VuZFN0ZXAsIGNhblNwbGl0LCBsaWZ0VGFyZ2V0LCBjYW5Kb2luIH0gZnJvbSAncHJvc2VtaXJyb3ItdHJhbnNmb3JtJztcbmltcG9ydCB7IE5vZGVSYW5nZSwgRnJhZ21lbnQsIFNsaWNlIH0gZnJvbSAncHJvc2VtaXJyb3ItbW9kZWwnO1xuaW1wb3J0IHsgU2VsZWN0aW9uIH0gZnJvbSAncHJvc2VtaXJyb3Itc3RhdGUnO1xuXG5jb25zdCBvbERPTSA9IFtcIm9sXCIsIDBdLCB1bERPTSA9IFtcInVsXCIsIDBdLCBsaURPTSA9IFtcImxpXCIsIDBdO1xuLyoqXG5BbiBvcmRlcmVkIGxpc3QgW25vZGUgc3BlY10oaHR0cHM6Ly9wcm9zZW1pcnJvci5uZXQvZG9jcy9yZWYvI21vZGVsLk5vZGVTcGVjKS4gSGFzIGEgc2luZ2xlXG5hdHRyaWJ1dGUsIGBvcmRlcmAsIHdoaWNoIGRldGVybWluZXMgdGhlIG51bWJlciBhdCB3aGljaCB0aGUgbGlzdFxuc3RhcnRzIGNvdW50aW5nLCBhbmQgZGVmYXVsdHMgdG8gMS4gUmVwcmVzZW50ZWQgYXMgYW4gYDxvbD5gXG5lbGVtZW50LlxuKi9cbmNvbnN0IG9yZGVyZWRMaXN0ID0ge1xuICAgIGF0dHJzOiB7IG9yZGVyOiB7IGRlZmF1bHQ6IDEgfSB9LFxuICAgIHBhcnNlRE9NOiBbeyB0YWc6IFwib2xcIiwgZ2V0QXR0cnMoZG9tKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgb3JkZXI6IGRvbS5oYXNBdHRyaWJ1dGUoXCJzdGFydFwiKSA/ICtkb20uZ2V0QXR0cmlidXRlKFwic3RhcnRcIikgOiAxIH07XG4gICAgICAgICAgICB9IH1dLFxuICAgIHRvRE9NKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUuYXR0cnMub3JkZXIgPT0gMSA/IG9sRE9NIDogW1wib2xcIiwgeyBzdGFydDogbm9kZS5hdHRycy5vcmRlciB9LCAwXTtcbiAgICB9XG59O1xuLyoqXG5BIGJ1bGxldCBsaXN0IG5vZGUgc3BlYywgcmVwcmVzZW50ZWQgaW4gdGhlIERPTSBhcyBgPHVsPmAuXG4qL1xuY29uc3QgYnVsbGV0TGlzdCA9IHtcbiAgICBwYXJzZURPTTogW3sgdGFnOiBcInVsXCIgfV0sXG4gICAgdG9ET00oKSB7IHJldHVybiB1bERPTTsgfVxufTtcbi8qKlxuQSBsaXN0IGl0ZW0gKGA8bGk+YCkgc3BlYy5cbiovXG5jb25zdCBsaXN0SXRlbSA9IHtcbiAgICBwYXJzZURPTTogW3sgdGFnOiBcImxpXCIgfV0sXG4gICAgdG9ET00oKSB7IHJldHVybiBsaURPTTsgfSxcbiAgICBkZWZpbmluZzogdHJ1ZVxufTtcbmZ1bmN0aW9uIGFkZChvYmosIHByb3BzKSB7XG4gICAgbGV0IGNvcHkgPSB7fTtcbiAgICBmb3IgKGxldCBwcm9wIGluIG9iailcbiAgICAgICAgY29weVtwcm9wXSA9IG9ialtwcm9wXTtcbiAgICBmb3IgKGxldCBwcm9wIGluIHByb3BzKVxuICAgICAgICBjb3B5W3Byb3BdID0gcHJvcHNbcHJvcF07XG4gICAgcmV0dXJuIGNvcHk7XG59XG4vKipcbkNvbnZlbmllbmNlIGZ1bmN0aW9uIGZvciBhZGRpbmcgbGlzdC1yZWxhdGVkIG5vZGUgdHlwZXMgdG8gYSBtYXBcbnNwZWNpZnlpbmcgdGhlIG5vZGVzIGZvciBhIHNjaGVtYS4gQWRkc1xuW2BvcmRlcmVkTGlzdGBdKGh0dHBzOi8vcHJvc2VtaXJyb3IubmV0L2RvY3MvcmVmLyNzY2hlbWEtbGlzdC5vcmRlcmVkTGlzdCkgYXMgYFwib3JkZXJlZF9saXN0XCJgLFxuW2BidWxsZXRMaXN0YF0oaHR0cHM6Ly9wcm9zZW1pcnJvci5uZXQvZG9jcy9yZWYvI3NjaGVtYS1saXN0LmJ1bGxldExpc3QpIGFzIGBcImJ1bGxldF9saXN0XCJgLCBhbmRcbltgbGlzdEl0ZW1gXShodHRwczovL3Byb3NlbWlycm9yLm5ldC9kb2NzL3JlZi8jc2NoZW1hLWxpc3QubGlzdEl0ZW0pIGFzIGBcImxpc3RfaXRlbVwiYC5cblxuYGl0ZW1Db250ZW50YCBkZXRlcm1pbmVzIHRoZSBjb250ZW50IGV4cHJlc3Npb24gZm9yIHRoZSBsaXN0IGl0ZW1zLlxuSWYgeW91IHdhbnQgdGhlIGNvbW1hbmRzIGRlZmluZWQgaW4gdGhpcyBtb2R1bGUgdG8gYXBwbHkgdG8geW91clxubGlzdCBzdHJ1Y3R1cmUsIGl0IHNob3VsZCBoYXZlIGEgc2hhcGUgbGlrZSBgXCJwYXJhZ3JhcGggYmxvY2sqXCJgIG9yXG5gXCJwYXJhZ3JhcGggKG9yZGVyZWRfbGlzdCB8IGJ1bGxldF9saXN0KSpcImAuIGBsaXN0R3JvdXBgIGNhbiBiZVxuZ2l2ZW4gdG8gYXNzaWduIGEgZ3JvdXAgbmFtZSB0byB0aGUgbGlzdCBub2RlIHR5cGVzLCBmb3IgZXhhbXBsZVxuYFwiYmxvY2tcImAuXG4qL1xuZnVuY3Rpb24gYWRkTGlzdE5vZGVzKG5vZGVzLCBpdGVtQ29udGVudCwgbGlzdEdyb3VwKSB7XG4gICAgcmV0dXJuIG5vZGVzLmFwcGVuZCh7XG4gICAgICAgIG9yZGVyZWRfbGlzdDogYWRkKG9yZGVyZWRMaXN0LCB7IGNvbnRlbnQ6IFwibGlzdF9pdGVtK1wiLCBncm91cDogbGlzdEdyb3VwIH0pLFxuICAgICAgICBidWxsZXRfbGlzdDogYWRkKGJ1bGxldExpc3QsIHsgY29udGVudDogXCJsaXN0X2l0ZW0rXCIsIGdyb3VwOiBsaXN0R3JvdXAgfSksXG4gICAgICAgIGxpc3RfaXRlbTogYWRkKGxpc3RJdGVtLCB7IGNvbnRlbnQ6IGl0ZW1Db250ZW50IH0pXG4gICAgfSk7XG59XG4vKipcblJldHVybnMgYSBjb21tYW5kIGZ1bmN0aW9uIHRoYXQgd3JhcHMgdGhlIHNlbGVjdGlvbiBpbiBhIGxpc3Qgd2l0aFxudGhlIGdpdmVuIHR5cGUgYW4gYXR0cmlidXRlcy4gSWYgYGRpc3BhdGNoYCBpcyBudWxsLCBvbmx5IHJldHVybiBhXG52YWx1ZSB0byBpbmRpY2F0ZSB3aGV0aGVyIHRoaXMgaXMgcG9zc2libGUsIGJ1dCBkb24ndCBhY3R1YWxseVxucGVyZm9ybSB0aGUgY2hhbmdlLlxuKi9cbmZ1bmN0aW9uIHdyYXBJbkxpc3QobGlzdFR5cGUsIGF0dHJzID0gbnVsbCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RhdGUsIGRpc3BhdGNoKSB7XG4gICAgICAgIGxldCB7ICRmcm9tLCAkdG8gfSA9IHN0YXRlLnNlbGVjdGlvbjtcbiAgICAgICAgbGV0IHJhbmdlID0gJGZyb20uYmxvY2tSYW5nZSgkdG8pLCBkb0pvaW4gPSBmYWxzZSwgb3V0ZXJSYW5nZSA9IHJhbmdlO1xuICAgICAgICBpZiAoIXJhbmdlKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAvLyBUaGlzIGlzIGF0IHRoZSB0b3Agb2YgYW4gZXhpc3RpbmcgbGlzdCBpdGVtXG4gICAgICAgIGlmIChyYW5nZS5kZXB0aCA+PSAyICYmICRmcm9tLm5vZGUocmFuZ2UuZGVwdGggLSAxKS50eXBlLmNvbXBhdGlibGVDb250ZW50KGxpc3RUeXBlKSAmJiByYW5nZS5zdGFydEluZGV4ID09IDApIHtcbiAgICAgICAgICAgIC8vIERvbid0IGRvIGFueXRoaW5nIGlmIHRoaXMgaXMgdGhlIHRvcCBvZiB0aGUgbGlzdFxuICAgICAgICAgICAgaWYgKCRmcm9tLmluZGV4KHJhbmdlLmRlcHRoIC0gMSkgPT0gMClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBsZXQgJGluc2VydCA9IHN0YXRlLmRvYy5yZXNvbHZlKHJhbmdlLnN0YXJ0IC0gMik7XG4gICAgICAgICAgICBvdXRlclJhbmdlID0gbmV3IE5vZGVSYW5nZSgkaW5zZXJ0LCAkaW5zZXJ0LCByYW5nZS5kZXB0aCk7XG4gICAgICAgICAgICBpZiAocmFuZ2UuZW5kSW5kZXggPCByYW5nZS5wYXJlbnQuY2hpbGRDb3VudClcbiAgICAgICAgICAgICAgICByYW5nZSA9IG5ldyBOb2RlUmFuZ2UoJGZyb20sIHN0YXRlLmRvYy5yZXNvbHZlKCR0by5lbmQocmFuZ2UuZGVwdGgpKSwgcmFuZ2UuZGVwdGgpO1xuICAgICAgICAgICAgZG9Kb2luID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgd3JhcCA9IGZpbmRXcmFwcGluZyhvdXRlclJhbmdlLCBsaXN0VHlwZSwgYXR0cnMsIHJhbmdlKTtcbiAgICAgICAgaWYgKCF3cmFwKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoZGlzcGF0Y2gpXG4gICAgICAgICAgICBkaXNwYXRjaChkb1dyYXBJbkxpc3Qoc3RhdGUudHIsIHJhbmdlLCB3cmFwLCBkb0pvaW4sIGxpc3RUeXBlKS5zY3JvbGxJbnRvVmlldygpKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGRvV3JhcEluTGlzdCh0ciwgcmFuZ2UsIHdyYXBwZXJzLCBqb2luQmVmb3JlLCBsaXN0VHlwZSkge1xuICAgIGxldCBjb250ZW50ID0gRnJhZ21lbnQuZW1wdHk7XG4gICAgZm9yIChsZXQgaSA9IHdyYXBwZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxuICAgICAgICBjb250ZW50ID0gRnJhZ21lbnQuZnJvbSh3cmFwcGVyc1tpXS50eXBlLmNyZWF0ZSh3cmFwcGVyc1tpXS5hdHRycywgY29udGVudCkpO1xuICAgIHRyLnN0ZXAobmV3IFJlcGxhY2VBcm91bmRTdGVwKHJhbmdlLnN0YXJ0IC0gKGpvaW5CZWZvcmUgPyAyIDogMCksIHJhbmdlLmVuZCwgcmFuZ2Uuc3RhcnQsIHJhbmdlLmVuZCwgbmV3IFNsaWNlKGNvbnRlbnQsIDAsIDApLCB3cmFwcGVycy5sZW5ndGgsIHRydWUpKTtcbiAgICBsZXQgZm91bmQgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd3JhcHBlcnMubGVuZ3RoOyBpKyspXG4gICAgICAgIGlmICh3cmFwcGVyc1tpXS50eXBlID09IGxpc3RUeXBlKVxuICAgICAgICAgICAgZm91bmQgPSBpICsgMTtcbiAgICBsZXQgc3BsaXREZXB0aCA9IHdyYXBwZXJzLmxlbmd0aCAtIGZvdW5kO1xuICAgIGxldCBzcGxpdFBvcyA9IHJhbmdlLnN0YXJ0ICsgd3JhcHBlcnMubGVuZ3RoIC0gKGpvaW5CZWZvcmUgPyAyIDogMCksIHBhcmVudCA9IHJhbmdlLnBhcmVudDtcbiAgICBmb3IgKGxldCBpID0gcmFuZ2Uuc3RhcnRJbmRleCwgZSA9IHJhbmdlLmVuZEluZGV4LCBmaXJzdCA9IHRydWU7IGkgPCBlOyBpKyssIGZpcnN0ID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKCFmaXJzdCAmJiBjYW5TcGxpdCh0ci5kb2MsIHNwbGl0UG9zLCBzcGxpdERlcHRoKSkge1xuICAgICAgICAgICAgdHIuc3BsaXQoc3BsaXRQb3MsIHNwbGl0RGVwdGgpO1xuICAgICAgICAgICAgc3BsaXRQb3MgKz0gMiAqIHNwbGl0RGVwdGg7XG4gICAgICAgIH1cbiAgICAgICAgc3BsaXRQb3MgKz0gcGFyZW50LmNoaWxkKGkpLm5vZGVTaXplO1xuICAgIH1cbiAgICByZXR1cm4gdHI7XG59XG4vKipcbkJ1aWxkIGEgY29tbWFuZCB0aGF0IHNwbGl0cyBhIG5vbi1lbXB0eSB0ZXh0YmxvY2sgYXQgdGhlIHRvcCBsZXZlbFxub2YgYSBsaXN0IGl0ZW0gYnkgYWxzbyBzcGxpdHRpbmcgdGhhdCBsaXN0IGl0ZW0uXG4qL1xuZnVuY3Rpb24gc3BsaXRMaXN0SXRlbShpdGVtVHlwZSwgaXRlbUF0dHJzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdGF0ZSwgZGlzcGF0Y2gpIHtcbiAgICAgICAgbGV0IHsgJGZyb20sICR0bywgbm9kZSB9ID0gc3RhdGUuc2VsZWN0aW9uO1xuICAgICAgICBpZiAoKG5vZGUgJiYgbm9kZS5pc0Jsb2NrKSB8fCAkZnJvbS5kZXB0aCA8IDIgfHwgISRmcm9tLnNhbWVQYXJlbnQoJHRvKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgbGV0IGdyYW5kUGFyZW50ID0gJGZyb20ubm9kZSgtMSk7XG4gICAgICAgIGlmIChncmFuZFBhcmVudC50eXBlICE9IGl0ZW1UeXBlKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoJGZyb20ucGFyZW50LmNvbnRlbnQuc2l6ZSA9PSAwICYmICRmcm9tLm5vZGUoLTEpLmNoaWxkQ291bnQgPT0gJGZyb20uaW5kZXhBZnRlcigtMSkpIHtcbiAgICAgICAgICAgIC8vIEluIGFuIGVtcHR5IGJsb2NrLiBJZiB0aGlzIGlzIGEgbmVzdGVkIGxpc3QsIHRoZSB3cmFwcGluZ1xuICAgICAgICAgICAgLy8gbGlzdCBpdGVtIHNob3VsZCBiZSBzcGxpdC4gT3RoZXJ3aXNlLCBiYWlsIG91dCBhbmQgbGV0IG5leHRcbiAgICAgICAgICAgIC8vIGNvbW1hbmQgaGFuZGxlIGxpZnRpbmcuXG4gICAgICAgICAgICBpZiAoJGZyb20uZGVwdGggPT0gMyB8fCAkZnJvbS5ub2RlKC0zKS50eXBlICE9IGl0ZW1UeXBlIHx8XG4gICAgICAgICAgICAgICAgJGZyb20uaW5kZXgoLTIpICE9ICRmcm9tLm5vZGUoLTIpLmNoaWxkQ291bnQgLSAxKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGlmIChkaXNwYXRjaCkge1xuICAgICAgICAgICAgICAgIGxldCB3cmFwID0gRnJhZ21lbnQuZW1wdHk7XG4gICAgICAgICAgICAgICAgbGV0IGRlcHRoQmVmb3JlID0gJGZyb20uaW5kZXgoLTEpID8gMSA6ICRmcm9tLmluZGV4KC0yKSA/IDIgOiAzO1xuICAgICAgICAgICAgICAgIC8vIEJ1aWxkIGEgZnJhZ21lbnQgY29udGFpbmluZyBlbXB0eSB2ZXJzaW9ucyBvZiB0aGUgc3RydWN0dXJlXG4gICAgICAgICAgICAgICAgLy8gZnJvbSB0aGUgb3V0ZXIgbGlzdCBpdGVtIHRvIHRoZSBwYXJlbnQgbm9kZSBvZiB0aGUgY3Vyc29yXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZCA9ICRmcm9tLmRlcHRoIC0gZGVwdGhCZWZvcmU7IGQgPj0gJGZyb20uZGVwdGggLSAzOyBkLS0pXG4gICAgICAgICAgICAgICAgICAgIHdyYXAgPSBGcmFnbWVudC5mcm9tKCRmcm9tLm5vZGUoZCkuY29weSh3cmFwKSk7XG4gICAgICAgICAgICAgICAgbGV0IGRlcHRoQWZ0ZXIgPSAkZnJvbS5pbmRleEFmdGVyKC0xKSA8ICRmcm9tLm5vZGUoLTIpLmNoaWxkQ291bnQgPyAxXG4gICAgICAgICAgICAgICAgICAgIDogJGZyb20uaW5kZXhBZnRlcigtMikgPCAkZnJvbS5ub2RlKC0zKS5jaGlsZENvdW50ID8gMiA6IDM7XG4gICAgICAgICAgICAgICAgLy8gQWRkIGEgc2Vjb25kIGxpc3QgaXRlbSB3aXRoIGFuIGVtcHR5IGRlZmF1bHQgc3RhcnQgbm9kZVxuICAgICAgICAgICAgICAgIHdyYXAgPSB3cmFwLmFwcGVuZChGcmFnbWVudC5mcm9tKGl0ZW1UeXBlLmNyZWF0ZUFuZEZpbGwoKSkpO1xuICAgICAgICAgICAgICAgIGxldCBzdGFydCA9ICRmcm9tLmJlZm9yZSgkZnJvbS5kZXB0aCAtIChkZXB0aEJlZm9yZSAtIDEpKTtcbiAgICAgICAgICAgICAgICBsZXQgdHIgPSBzdGF0ZS50ci5yZXBsYWNlKHN0YXJ0LCAkZnJvbS5hZnRlcigtZGVwdGhBZnRlciksIG5ldyBTbGljZSh3cmFwLCA0IC0gZGVwdGhCZWZvcmUsIDApKTtcbiAgICAgICAgICAgICAgICBsZXQgc2VsID0gLTE7XG4gICAgICAgICAgICAgICAgdHIuZG9jLm5vZGVzQmV0d2VlbihzdGFydCwgdHIuZG9jLmNvbnRlbnQuc2l6ZSwgKG5vZGUsIHBvcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsID4gLTEpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmlzVGV4dGJsb2NrICYmIG5vZGUuY29udGVudC5zaXplID09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWwgPSBwb3MgKyAxO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChzZWwgPiAtMSlcbiAgICAgICAgICAgICAgICAgICAgdHIuc2V0U2VsZWN0aW9uKFNlbGVjdGlvbi5uZWFyKHRyLmRvYy5yZXNvbHZlKHNlbCkpKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh0ci5zY3JvbGxJbnRvVmlldygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZXh0VHlwZSA9ICR0by5wb3MgPT0gJGZyb20uZW5kKCkgPyBncmFuZFBhcmVudC5jb250ZW50TWF0Y2hBdCgwKS5kZWZhdWx0VHlwZSA6IG51bGw7XG4gICAgICAgIGxldCB0ciA9IHN0YXRlLnRyLmRlbGV0ZSgkZnJvbS5wb3MsICR0by5wb3MpO1xuICAgICAgICBsZXQgdHlwZXMgPSBuZXh0VHlwZSA/IFtpdGVtQXR0cnMgPyB7IHR5cGU6IGl0ZW1UeXBlLCBhdHRyczogaXRlbUF0dHJzIH0gOiBudWxsLCB7IHR5cGU6IG5leHRUeXBlIH1dIDogdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIWNhblNwbGl0KHRyLmRvYywgJGZyb20ucG9zLCAyLCB0eXBlcykpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChkaXNwYXRjaClcbiAgICAgICAgICAgIGRpc3BhdGNoKHRyLnNwbGl0KCRmcm9tLnBvcywgMiwgdHlwZXMpLnNjcm9sbEludG9WaWV3KCkpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xufVxuLyoqXG5DcmVhdGUgYSBjb21tYW5kIHRvIGxpZnQgdGhlIGxpc3QgaXRlbSBhcm91bmQgdGhlIHNlbGVjdGlvbiB1cCBpbnRvXG5hIHdyYXBwaW5nIGxpc3QuXG4qL1xuZnVuY3Rpb24gbGlmdExpc3RJdGVtKGl0ZW1UeXBlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdGF0ZSwgZGlzcGF0Y2gpIHtcbiAgICAgICAgbGV0IHsgJGZyb20sICR0byB9ID0gc3RhdGUuc2VsZWN0aW9uO1xuICAgICAgICBsZXQgcmFuZ2UgPSAkZnJvbS5ibG9ja1JhbmdlKCR0bywgbm9kZSA9PiBub2RlLmNoaWxkQ291bnQgPiAwICYmIG5vZGUuZmlyc3RDaGlsZC50eXBlID09IGl0ZW1UeXBlKTtcbiAgICAgICAgaWYgKCFyYW5nZSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKCFkaXNwYXRjaClcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAoJGZyb20ubm9kZShyYW5nZS5kZXB0aCAtIDEpLnR5cGUgPT0gaXRlbVR5cGUpIC8vIEluc2lkZSBhIHBhcmVudCBsaXN0XG4gICAgICAgICAgICByZXR1cm4gbGlmdFRvT3V0ZXJMaXN0KHN0YXRlLCBkaXNwYXRjaCwgaXRlbVR5cGUsIHJhbmdlKTtcbiAgICAgICAgZWxzZSAvLyBPdXRlciBsaXN0IG5vZGVcbiAgICAgICAgICAgIHJldHVybiBsaWZ0T3V0T2ZMaXN0KHN0YXRlLCBkaXNwYXRjaCwgcmFuZ2UpO1xuICAgIH07XG59XG5mdW5jdGlvbiBsaWZ0VG9PdXRlckxpc3Qoc3RhdGUsIGRpc3BhdGNoLCBpdGVtVHlwZSwgcmFuZ2UpIHtcbiAgICBsZXQgdHIgPSBzdGF0ZS50ciwgZW5kID0gcmFuZ2UuZW5kLCBlbmRPZkxpc3QgPSByYW5nZS4kdG8uZW5kKHJhbmdlLmRlcHRoKTtcbiAgICBpZiAoZW5kIDwgZW5kT2ZMaXN0KSB7XG4gICAgICAgIC8vIFRoZXJlIGFyZSBzaWJsaW5ncyBhZnRlciB0aGUgbGlmdGVkIGl0ZW1zLCB3aGljaCBtdXN0IGJlY29tZVxuICAgICAgICAvLyBjaGlsZHJlbiBvZiB0aGUgbGFzdCBpdGVtXG4gICAgICAgIHRyLnN0ZXAobmV3IFJlcGxhY2VBcm91bmRTdGVwKGVuZCAtIDEsIGVuZE9mTGlzdCwgZW5kLCBlbmRPZkxpc3QsIG5ldyBTbGljZShGcmFnbWVudC5mcm9tKGl0ZW1UeXBlLmNyZWF0ZShudWxsLCByYW5nZS5wYXJlbnQuY29weSgpKSksIDEsIDApLCAxLCB0cnVlKSk7XG4gICAgICAgIHJhbmdlID0gbmV3IE5vZGVSYW5nZSh0ci5kb2MucmVzb2x2ZShyYW5nZS4kZnJvbS5wb3MpLCB0ci5kb2MucmVzb2x2ZShlbmRPZkxpc3QpLCByYW5nZS5kZXB0aCk7XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldCA9IGxpZnRUYXJnZXQocmFuZ2UpO1xuICAgIGlmICh0YXJnZXQgPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHRyLmxpZnQocmFuZ2UsIHRhcmdldCk7XG4gICAgbGV0IGFmdGVyID0gdHIubWFwcGluZy5tYXAoZW5kLCAtMSkgLSAxO1xuICAgIGlmIChjYW5Kb2luKHRyLmRvYywgYWZ0ZXIpKVxuICAgICAgICB0ci5qb2luKGFmdGVyKTtcbiAgICBkaXNwYXRjaCh0ci5zY3JvbGxJbnRvVmlldygpKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGxpZnRPdXRPZkxpc3Qoc3RhdGUsIGRpc3BhdGNoLCByYW5nZSkge1xuICAgIGxldCB0ciA9IHN0YXRlLnRyLCBsaXN0ID0gcmFuZ2UucGFyZW50O1xuICAgIC8vIE1lcmdlIHRoZSBsaXN0IGl0ZW1zIGludG8gYSBzaW5nbGUgYmlnIGl0ZW1cbiAgICBmb3IgKGxldCBwb3MgPSByYW5nZS5lbmQsIGkgPSByYW5nZS5lbmRJbmRleCAtIDEsIGUgPSByYW5nZS5zdGFydEluZGV4OyBpID4gZTsgaS0tKSB7XG4gICAgICAgIHBvcyAtPSBsaXN0LmNoaWxkKGkpLm5vZGVTaXplO1xuICAgICAgICB0ci5kZWxldGUocG9zIC0gMSwgcG9zICsgMSk7XG4gICAgfVxuICAgIGxldCAkc3RhcnQgPSB0ci5kb2MucmVzb2x2ZShyYW5nZS5zdGFydCksIGl0ZW0gPSAkc3RhcnQubm9kZUFmdGVyO1xuICAgIGlmICh0ci5tYXBwaW5nLm1hcChyYW5nZS5lbmQpICE9IHJhbmdlLnN0YXJ0ICsgJHN0YXJ0Lm5vZGVBZnRlci5ub2RlU2l6ZSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGxldCBhdFN0YXJ0ID0gcmFuZ2Uuc3RhcnRJbmRleCA9PSAwLCBhdEVuZCA9IHJhbmdlLmVuZEluZGV4ID09IGxpc3QuY2hpbGRDb3VudDtcbiAgICBsZXQgcGFyZW50ID0gJHN0YXJ0Lm5vZGUoLTEpLCBpbmRleEJlZm9yZSA9ICRzdGFydC5pbmRleCgtMSk7XG4gICAgaWYgKCFwYXJlbnQuY2FuUmVwbGFjZShpbmRleEJlZm9yZSArIChhdFN0YXJ0ID8gMCA6IDEpLCBpbmRleEJlZm9yZSArIDEsIGl0ZW0uY29udGVudC5hcHBlbmQoYXRFbmQgPyBGcmFnbWVudC5lbXB0eSA6IEZyYWdtZW50LmZyb20obGlzdCkpKSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGxldCBzdGFydCA9ICRzdGFydC5wb3MsIGVuZCA9IHN0YXJ0ICsgaXRlbS5ub2RlU2l6ZTtcbiAgICAvLyBTdHJpcCBvZmYgdGhlIHN1cnJvdW5kaW5nIGxpc3QuIEF0IHRoZSBzaWRlcyB3aGVyZSB3ZSdyZSBub3QgYXRcbiAgICAvLyB0aGUgZW5kIG9mIHRoZSBsaXN0LCB0aGUgZXhpc3RpbmcgbGlzdCBpcyBjbG9zZWQuIEF0IHNpZGVzIHdoZXJlXG4gICAgLy8gdGhpcyBpcyB0aGUgZW5kLCBpdCBpcyBvdmVyd3JpdHRlbiB0byBpdHMgZW5kLlxuICAgIHRyLnN0ZXAobmV3IFJlcGxhY2VBcm91bmRTdGVwKHN0YXJ0IC0gKGF0U3RhcnQgPyAxIDogMCksIGVuZCArIChhdEVuZCA/IDEgOiAwKSwgc3RhcnQgKyAxLCBlbmQgLSAxLCBuZXcgU2xpY2UoKGF0U3RhcnQgPyBGcmFnbWVudC5lbXB0eSA6IEZyYWdtZW50LmZyb20obGlzdC5jb3B5KEZyYWdtZW50LmVtcHR5KSkpXG4gICAgICAgIC5hcHBlbmQoYXRFbmQgPyBGcmFnbWVudC5lbXB0eSA6IEZyYWdtZW50LmZyb20obGlzdC5jb3B5KEZyYWdtZW50LmVtcHR5KSkpLCBhdFN0YXJ0ID8gMCA6IDEsIGF0RW5kID8gMCA6IDEpLCBhdFN0YXJ0ID8gMCA6IDEpKTtcbiAgICBkaXNwYXRjaCh0ci5zY3JvbGxJbnRvVmlldygpKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbi8qKlxuQ3JlYXRlIGEgY29tbWFuZCB0byBzaW5rIHRoZSBsaXN0IGl0ZW0gYXJvdW5kIHRoZSBzZWxlY3Rpb24gZG93blxuaW50byBhbiBpbm5lciBsaXN0LlxuKi9cbmZ1bmN0aW9uIHNpbmtMaXN0SXRlbShpdGVtVHlwZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RhdGUsIGRpc3BhdGNoKSB7XG4gICAgICAgIGxldCB7ICRmcm9tLCAkdG8gfSA9IHN0YXRlLnNlbGVjdGlvbjtcbiAgICAgICAgbGV0IHJhbmdlID0gJGZyb20uYmxvY2tSYW5nZSgkdG8sIG5vZGUgPT4gbm9kZS5jaGlsZENvdW50ID4gMCAmJiBub2RlLmZpcnN0Q2hpbGQudHlwZSA9PSBpdGVtVHlwZSk7XG4gICAgICAgIGlmICghcmFuZ2UpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGxldCBzdGFydEluZGV4ID0gcmFuZ2Uuc3RhcnRJbmRleDtcbiAgICAgICAgaWYgKHN0YXJ0SW5kZXggPT0gMClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgbGV0IHBhcmVudCA9IHJhbmdlLnBhcmVudCwgbm9kZUJlZm9yZSA9IHBhcmVudC5jaGlsZChzdGFydEluZGV4IC0gMSk7XG4gICAgICAgIGlmIChub2RlQmVmb3JlLnR5cGUgIT0gaXRlbVR5cGUpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChkaXNwYXRjaCkge1xuICAgICAgICAgICAgbGV0IG5lc3RlZEJlZm9yZSA9IG5vZGVCZWZvcmUubGFzdENoaWxkICYmIG5vZGVCZWZvcmUubGFzdENoaWxkLnR5cGUgPT0gcGFyZW50LnR5cGU7XG4gICAgICAgICAgICBsZXQgaW5uZXIgPSBGcmFnbWVudC5mcm9tKG5lc3RlZEJlZm9yZSA/IGl0ZW1UeXBlLmNyZWF0ZSgpIDogbnVsbCk7XG4gICAgICAgICAgICBsZXQgc2xpY2UgPSBuZXcgU2xpY2UoRnJhZ21lbnQuZnJvbShpdGVtVHlwZS5jcmVhdGUobnVsbCwgRnJhZ21lbnQuZnJvbShwYXJlbnQudHlwZS5jcmVhdGUobnVsbCwgaW5uZXIpKSkpLCBuZXN0ZWRCZWZvcmUgPyAzIDogMSwgMCk7XG4gICAgICAgICAgICBsZXQgYmVmb3JlID0gcmFuZ2Uuc3RhcnQsIGFmdGVyID0gcmFuZ2UuZW5kO1xuICAgICAgICAgICAgZGlzcGF0Y2goc3RhdGUudHIuc3RlcChuZXcgUmVwbGFjZUFyb3VuZFN0ZXAoYmVmb3JlIC0gKG5lc3RlZEJlZm9yZSA/IDMgOiAxKSwgYWZ0ZXIsIGJlZm9yZSwgYWZ0ZXIsIHNsaWNlLCAxLCB0cnVlKSlcbiAgICAgICAgICAgICAgICAuc2Nyb2xsSW50b1ZpZXcoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbn1cblxuZXhwb3J0IHsgYWRkTGlzdE5vZGVzLCBidWxsZXRMaXN0LCBsaWZ0TGlzdEl0ZW0sIGxpc3RJdGVtLCBvcmRlcmVkTGlzdCwgc2lua0xpc3RJdGVtLCBzcGxpdExpc3RJdGVtLCB3cmFwSW5MaXN0IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/prosemirror-schema-list/dist/index.js\n");

/***/ })

};
;