"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/board/page",{

/***/ "(app-pages-browser)/./src/components/DragAndDropContainer.jsx":
/*!*************************************************!*\
  !*** ./src/components/DragAndDropContainer.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Paper,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Paper,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Paper,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Paper/Paper.js\");\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-beautiful-dnd */ \"(app-pages-browser)/./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n\n\n\nconst DragAndDropContainer = (param)=>{\n    let { columns, onDragEnd } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__.DragDropContext, {\n            onDragEnd: onDragEnd,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                sx: {\n                    display: \"flex\",\n                    gap: \"16px\",\n                    justifyContent: \"space-between\"\n                },\n                children: columns.map((column)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__.Droppable, {\n                        droppableId: String(column.id),\n                        children: (provided)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                ...provided.droppableProps,\n                                ref: provided.innerRef,\n                                sx: {\n                                    background: \"#f4f5f7\",\n                                    padding: \"16px\",\n                                    borderRadius: \"4px\",\n                                    minWidth: \"300px\",\n                                    maxWidth: \"300px\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        variant: \"h6\",\n                                        sx: {\n                                            marginBottom: \"16px\"\n                                        },\n                                        children: column.title\n                                    }, void 0, false, {\n                                        fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                                        lineNumber: 25,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    column.items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__.Draggable, {\n                                            draggableId: String(item.id),\n                                            index: index,\n                                            children: (provided, snapshot)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                    ref: provided.innerRef,\n                                                    ...provided.draggableProps,\n                                                    ...provided.dragHandleProps,\n                                                    sx: {\n                                                        padding: \"16px\",\n                                                        marginBottom: \"8px\",\n                                                        backgroundColor: snapshot.isDragging ? \"lightblue\" : \"white\",\n                                                        userSelect: \"none\",\n                                                        border: snapshot.isDragging ? \"2px solid #007bff\" : \"none\"\n                                                    },\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                            variant: \"body1\",\n                                                            children: item.title\n                                                        }, void 0, false, {\n                                                            fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                                                            lineNumber: 51,\n                                                            columnNumber: 27\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                            variant: \"body2\",\n                                                            children: item.content\n                                                        }, void 0, false, {\n                                                            fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                                                            lineNumber: 52,\n                                                            columnNumber: 27\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                                                    lineNumber: 35,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                        }, String(item.id), false, {\n                                            fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                                            lineNumber: 29,\n                                            columnNumber: 21\n                                        }, undefined)),\n                                    provided.placeholder\n                                ]\n                            }, void 0, true, {\n                                fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                                lineNumber: 14,\n                                columnNumber: 17\n                            }, undefined)\n                    }, String(column.id), false, {\n                        fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n_c = DragAndDropContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DragAndDropContainer);\nvar _c;\n$RefreshReg$(_c, \"DragAndDropContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0RyYWdBbmREcm9wQ29udGFpbmVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVEO0FBQ3FCO0FBRTVFLE1BQU1NLHVCQUF1QjtRQUFDLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFO0lBQ2xELHFCQUNFLDhEQUFDUixnR0FBR0E7a0JBQ0YsNEVBQUNHLGdFQUFlQTtZQUFDSyxXQUFXQTtzQkFDMUIsNEVBQUNSLGdHQUFHQTtnQkFDRlMsSUFBSTtvQkFBRUMsU0FBUztvQkFBUUMsS0FBSztvQkFBUUMsZ0JBQWdCO2dCQUFnQjswQkFFbkVMLFFBQVFNLEdBQUcsQ0FBQyxDQUFDQyx1QkFDWiw4REFBQ1QsMERBQVNBO3dCQUF5QlUsYUFBYUMsT0FBT0YsT0FBT0csRUFBRTtrQ0FDN0QsQ0FBQ0MseUJBQ0EsOERBQUNsQixnR0FBR0E7Z0NBQ0QsR0FBR2tCLFNBQVNDLGNBQWM7Z0NBQzNCQyxLQUFLRixTQUFTRyxRQUFRO2dDQUN0QlosSUFBSTtvQ0FDRmEsWUFBWTtvQ0FDWkMsU0FBUztvQ0FDVEMsY0FBYztvQ0FDZEMsVUFBVTtvQ0FDVkMsVUFBVTtnQ0FDWjs7a0RBRUEsOERBQUN4QixnR0FBVUE7d0NBQUN5QixTQUFRO3dDQUFLbEIsSUFBSTs0Q0FBRW1CLGNBQWM7d0NBQU87a0RBQ2pEZCxPQUFPZSxLQUFLOzs7Ozs7b0NBRWRmLE9BQU9nQixLQUFLLENBQUNqQixHQUFHLENBQUMsQ0FBQ2tCLE1BQU1DLHNCQUN2Qiw4REFBQzVCLDBEQUFTQTs0Q0FFUjZCLGFBQWFqQixPQUFPZSxLQUFLZCxFQUFFOzRDQUMzQmUsT0FBT0E7c0RBRU4sQ0FBQ2QsVUFBVWdCLHlCQUNWLDhEQUFDakMsZ0dBQUtBO29EQUNKbUIsS0FBS0YsU0FBU0csUUFBUTtvREFDckIsR0FBR0gsU0FBU2lCLGNBQWM7b0RBQzFCLEdBQUdqQixTQUFTa0IsZUFBZTtvREFDNUIzQixJQUFJO3dEQUNGYyxTQUFTO3dEQUNUSyxjQUFjO3dEQUNkUyxpQkFBaUJILFNBQVNJLFVBQVUsR0FDaEMsY0FDQTt3REFDSkMsWUFBWTt3REFDWkMsUUFBUU4sU0FBU0ksVUFBVSxHQUN2QixzQkFDQTtvREFDTjs7c0VBRUEsOERBQUNwQyxnR0FBVUE7NERBQUN5QixTQUFRO3NFQUFTSSxLQUFLRixLQUFLOzs7Ozs7c0VBQ3ZDLDhEQUFDM0IsZ0dBQVVBOzREQUFDeUIsU0FBUTtzRUFBU0ksS0FBS1UsT0FBTzs7Ozs7Ozs7Ozs7OzJDQXRCeEN6QixPQUFPZSxLQUFLZCxFQUFFOzs7OztvQ0EyQnRCQyxTQUFTd0IsV0FBVzs7Ozs7Ozt1QkE3Q1gxQixPQUFPRixPQUFPRyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNENUM7S0E5RE1YO0FBZ0VOLCtEQUFlQSxvQkFBb0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRHJhZ0FuZERyb3BDb250YWluZXIuanN4P2YyYTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBQYXBlciwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQsIERyYWdnYWJsZSwgRHJvcHBhYmxlIH0gZnJvbSBcInJlYWN0LWJlYXV0aWZ1bC1kbmRcIjtcblxuY29uc3QgRHJhZ0FuZERyb3BDb250YWluZXIgPSAoeyBjb2x1bW5zLCBvbkRyYWdFbmQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17b25EcmFnRW5kfT5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHN4PXt7IGRpc3BsYXk6IFwiZmxleFwiLCBnYXA6IFwiMTZweFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjb2x1bW5zLm1hcCgoY29sdW1uKSA9PiAoXG4gICAgICAgICAgICA8RHJvcHBhYmxlIGtleT17U3RyaW5nKGNvbHVtbi5pZCl9IGRyb3BwYWJsZUlkPXtTdHJpbmcoY29sdW1uLmlkKX0+XG4gICAgICAgICAgICAgIHsocHJvdmlkZWQpID0+IChcbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9XG4gICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZjRmNWY3XCIsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTZweFwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiBcIjMwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIjMwMHB4XCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIHN4PXt7IG1hcmdpbkJvdHRvbTogXCIxNnB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtjb2x1bW4udGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICB7Y29sdW1uLml0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZVxuICAgICAgICAgICAgICAgICAgICAgIGtleT17U3RyaW5nKGl0ZW0uaWQpfVxuICAgICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZUlkPXtTdHJpbmcoaXRlbS5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCwgc25hcHNob3QpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXBlclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxNnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjhweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc25hcHNob3QuaXNEcmFnZ2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImxpZ2h0Ymx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyU2VsZWN0OiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNuYXBzaG90LmlzRHJhZ2dpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIycHggc29saWQgIzAwN2JmZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIj57aXRlbS50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPntpdGVtLmNvbnRlbnR9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9Ecm9wcGFibGU+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9EcmFnRHJvcENvbnRleHQ+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEcmFnQW5kRHJvcENvbnRhaW5lcjtcbiJdLCJuYW1lcyI6WyJCb3giLCJQYXBlciIsIlR5cG9ncmFwaHkiLCJEcmFnRHJvcENvbnRleHQiLCJEcmFnZ2FibGUiLCJEcm9wcGFibGUiLCJEcmFnQW5kRHJvcENvbnRhaW5lciIsImNvbHVtbnMiLCJvbkRyYWdFbmQiLCJzeCIsImRpc3BsYXkiLCJnYXAiLCJqdXN0aWZ5Q29udGVudCIsIm1hcCIsImNvbHVtbiIsImRyb3BwYWJsZUlkIiwiU3RyaW5nIiwiaWQiLCJwcm92aWRlZCIsImRyb3BwYWJsZVByb3BzIiwicmVmIiwiaW5uZXJSZWYiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJ2YXJpYW50IiwibWFyZ2luQm90dG9tIiwidGl0bGUiLCJpdGVtcyIsIml0ZW0iLCJpbmRleCIsImRyYWdnYWJsZUlkIiwic25hcHNob3QiLCJkcmFnZ2FibGVQcm9wcyIsImRyYWdIYW5kbGVQcm9wcyIsImJhY2tncm91bmRDb2xvciIsImlzRHJhZ2dpbmciLCJ1c2VyU2VsZWN0IiwiYm9yZGVyIiwiY29udGVudCIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/DragAndDropContainer.jsx\n"));

/***/ })

});