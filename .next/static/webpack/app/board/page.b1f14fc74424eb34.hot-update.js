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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Grid_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Grid,Paper,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Grid_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Grid,Paper,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Grid_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Grid,Paper,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Grid_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Grid,Paper,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Paper/Paper.js\");\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-beautiful-dnd */ \"(app-pages-browser)/./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n\n\n\nconst DragAndDropContainer = (param)=>{\n    let { columns, onDragEnd } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__.DragDropContext, {\n        onDragEnd: onDragEnd,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            sx: {\n                display: \"flex\",\n                gap: \"16px\",\n                justifyContent: \"space-between\"\n            },\n            children: columns.map((column)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__.Droppable, {\n                    droppableId: String(column.id),\n                    children: (provided)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            ...provided.droppableProps,\n                            ref: provided.innerRef,\n                            sx: {\n                                background: \"#f4f5f7\",\n                                padding: \"16px\",\n                                borderRadius: \"4px\",\n                                minWidth: \"300px\",\n                                maxWidth: \"300px\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    variant: \"h6\",\n                                    sx: {\n                                        marginBottom: \"16px\"\n                                    },\n                                    children: column.title\n                                }, void 0, false, {\n                                    fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 17\n                                }, undefined),\n                                column.items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__.Draggable, {\n                                        draggableId: String(item.id),\n                                        index: index,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            container: true,\n                                            children: (provided, snapshot)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                    item: true,\n                                                    xs: 6,\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                        ref: provided.innerRef,\n                                                        ...provided.draggableProps,\n                                                        ...provided.dragHandleProps,\n                                                        sx: {\n                                                            padding: \"16px\",\n                                                            marginBottom: \"8px\",\n                                                            backgroundColor: snapshot.isDragging ? \"lightblue\" : \"white\",\n                                                            userSelect: \"none\",\n                                                            border: snapshot.isDragging ? \"2px solid #007bff\" : \"none\"\n                                                        },\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                                variant: \"body1\",\n                                                                children: item.title\n                                                            }, void 0, false, {\n                                                                fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                                                                lineNumber: 52,\n                                                                columnNumber: 29\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                                variant: \"body2\",\n                                                                children: item.content\n                                                            }, void 0, false, {\n                                                                fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                                                                lineNumber: 53,\n                                                                columnNumber: 29\n                                                            }, undefined)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                                                        lineNumber: 36,\n                                                        columnNumber: 27\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                                                    lineNumber: 35,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, String(item.id), false, {\n                                        fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 19\n                                    }, undefined)),\n                                provided.placeholder\n                            ]\n                        }, void 0, true, {\n                            fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                            lineNumber: 13,\n                            columnNumber: 15\n                        }, undefined)\n                }, String(column.id), false, {\n                    fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n_c = DragAndDropContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DragAndDropContainer);\nvar _c;\n$RefreshReg$(_c, \"DragAndDropContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0RyYWdBbmREcm9wQ29udGFpbmVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE2RDtBQUNlO0FBRTVFLE1BQU1PLHVCQUF1QjtRQUFDLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFO0lBQ2xELHFCQUNFLDhEQUFDTCxnRUFBZUE7UUFBQ0ssV0FBV0E7a0JBQzFCLDRFQUFDVCxxR0FBR0E7WUFDRlUsSUFBSTtnQkFBRUMsU0FBUztnQkFBUUMsS0FBSztnQkFBUUMsZ0JBQWdCO1lBQWdCO3NCQUVuRUwsUUFBUU0sR0FBRyxDQUFDLENBQUNDLHVCQUNaLDhEQUFDVCwwREFBU0E7b0JBQXlCVSxhQUFhQyxPQUFPRixPQUFPRyxFQUFFOzhCQUM3RCxDQUFDQyx5QkFDQSw4REFBQ25CLHFHQUFHQTs0QkFDRCxHQUFHbUIsU0FBU0MsY0FBYzs0QkFDM0JDLEtBQUtGLFNBQVNHLFFBQVE7NEJBQ3RCWixJQUFJO2dDQUNGYSxZQUFZO2dDQUNaQyxTQUFTO2dDQUNUQyxjQUFjO2dDQUNkQyxVQUFVO2dDQUNWQyxVQUFVOzRCQUNaOzs4Q0FFQSw4REFBQ3hCLHFHQUFVQTtvQ0FBQ3lCLFNBQVE7b0NBQUtsQixJQUFJO3dDQUFFbUIsY0FBYztvQ0FBTzs4Q0FDakRkLE9BQU9lLEtBQUs7Ozs7OztnQ0FFZGYsT0FBT2dCLEtBQUssQ0FBQ2pCLEdBQUcsQ0FBQyxDQUFDa0IsTUFBTUMsc0JBQ3ZCLDhEQUFDNUIsMERBQVNBO3dDQUVSNkIsYUFBYWpCLE9BQU9lLEtBQUtkLEVBQUU7d0NBQzNCZSxPQUFPQTtrREFFUCw0RUFBQ2hDLHFHQUFJQTs0Q0FBQ2tDLFNBQVM7c0RBQ1osQ0FBQ2hCLFVBQVVpQix5QkFDViw4REFBQ25DLHFHQUFJQTtvREFBQytCLElBQUk7b0RBQUNLLElBQUk7OERBQ2IsNEVBQUNuQyxxR0FBS0E7d0RBQ0ptQixLQUFLRixTQUFTRyxRQUFRO3dEQUNyQixHQUFHSCxTQUFTbUIsY0FBYzt3REFDMUIsR0FBR25CLFNBQVNvQixlQUFlO3dEQUM1QjdCLElBQUk7NERBQ0ZjLFNBQVM7NERBQ1RLLGNBQWM7NERBQ2RXLGlCQUFpQkosU0FBU0ssVUFBVSxHQUNoQyxjQUNBOzREQUNKQyxZQUFZOzREQUNaQyxRQUFRUCxTQUFTSyxVQUFVLEdBQ3ZCLHNCQUNBO3dEQUNOOzswRUFFQSw4REFBQ3RDLHFHQUFVQTtnRUFBQ3lCLFNBQVE7MEVBQVNJLEtBQUtGLEtBQUs7Ozs7OzswRUFDdkMsOERBQUMzQixxR0FBVUE7Z0VBQUN5QixTQUFROzBFQUFTSSxLQUFLWSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VDQXhCNUMzQixPQUFPZSxLQUFLZCxFQUFFOzs7OztnQ0ErQnRCQyxTQUFTMEIsV0FBVzs7Ozs7OzttQkFqRFg1QixPQUFPRixPQUFPRyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7QUF5RDFDO0tBaEVNWDtBQWtFTiwrREFBZUEsb0JBQW9CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0RyYWdBbmREcm9wQ29udGFpbmVyLmpzeD9mMmEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgR3JpZCwgUGFwZXIsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgRHJhZ0Ryb3BDb250ZXh0LCBEcmFnZ2FibGUsIERyb3BwYWJsZSB9IGZyb20gXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCI7XG5cbmNvbnN0IERyYWdBbmREcm9wQ29udGFpbmVyID0gKHsgY29sdW1ucywgb25EcmFnRW5kIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17b25EcmFnRW5kfT5cbiAgICAgIDxCb3hcbiAgICAgICAgc3g9e3sgZGlzcGxheTogXCJmbGV4XCIsIGdhcDogXCIxNnB4XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiB9fVxuICAgICAgPlxuICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbHVtbikgPT4gKFxuICAgICAgICAgIDxEcm9wcGFibGUga2V5PXtTdHJpbmcoY29sdW1uLmlkKX0gZHJvcHBhYmxlSWQ9e1N0cmluZyhjb2x1bW4uaWQpfT5cbiAgICAgICAgICAgIHsocHJvdmlkZWQpID0+IChcbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc31cbiAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNmNGY1ZjdcIixcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTZweFwiLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxuICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IFwiMzAwcHhcIixcbiAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIjMwMHB4XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIHN4PXt7IG1hcmdpbkJvdHRvbTogXCIxNnB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICB7Y29sdW1uLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICB7Y29sdW1uLml0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGVcbiAgICAgICAgICAgICAgICAgICAga2V5PXtTdHJpbmcoaXRlbS5pZCl9XG4gICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZUlkPXtTdHJpbmcoaXRlbS5pZCl9XG4gICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQsIHNuYXBzaG90KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxNnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiOHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHNuYXBzaG90LmlzRHJhZ2dpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImxpZ2h0Ymx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlclNlbGVjdDogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNuYXBzaG90LmlzRHJhZ2dpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjJweCBzb2xpZCAjMDA3YmZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCI+e2l0ZW0udGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPntpdGVtLmNvbnRlbnR9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRHJvcHBhYmxlPlxuICAgICAgICApKX1cbiAgICAgIDwvQm94PlxuICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHJhZ0FuZERyb3BDb250YWluZXI7XG4iXSwibmFtZXMiOlsiQm94IiwiR3JpZCIsIlBhcGVyIiwiVHlwb2dyYXBoeSIsIkRyYWdEcm9wQ29udGV4dCIsIkRyYWdnYWJsZSIsIkRyb3BwYWJsZSIsIkRyYWdBbmREcm9wQ29udGFpbmVyIiwiY29sdW1ucyIsIm9uRHJhZ0VuZCIsInN4IiwiZGlzcGxheSIsImdhcCIsImp1c3RpZnlDb250ZW50IiwibWFwIiwiY29sdW1uIiwiZHJvcHBhYmxlSWQiLCJTdHJpbmciLCJpZCIsInByb3ZpZGVkIiwiZHJvcHBhYmxlUHJvcHMiLCJyZWYiLCJpbm5lclJlZiIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsInZhcmlhbnQiLCJtYXJnaW5Cb3R0b20iLCJ0aXRsZSIsIml0ZW1zIiwiaXRlbSIsImluZGV4IiwiZHJhZ2dhYmxlSWQiLCJjb250YWluZXIiLCJzbmFwc2hvdCIsInhzIiwiZHJhZ2dhYmxlUHJvcHMiLCJkcmFnSGFuZGxlUHJvcHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpc0RyYWdnaW5nIiwidXNlclNlbGVjdCIsImJvcmRlciIsImNvbnRlbnQiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/DragAndDropContainer.jsx\n"));

/***/ })

});