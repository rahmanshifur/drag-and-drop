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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Grid_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Grid,Paper,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Grid_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Grid,Paper,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Grid_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Grid,Paper,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Grid_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Grid,Paper,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Paper/Paper.js\");\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-beautiful-dnd */ \"(app-pages-browser)/./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n\n\n\nconst DragAndDropContainer = (param)=>{\n    let { columns, onDragEnd } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__.DragDropContext, {\n        onDragEnd: onDragEnd,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            container: true,\n            spacing: 3,\n            children: columns.map((column)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    item: true,\n                    xs: 12,\n                    md: 4,\n                    sx: {\n                        display: \"flex\",\n                        justifyContent: \"space-between\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__.Droppable, {\n                        droppableId: String(column.id),\n                        children: (provided)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                ...provided.droppableProps,\n                                ref: provided.innerRef,\n                                sx: {\n                                    background: \"#f4f5f7\",\n                                    padding: \"16px\",\n                                    borderRadius: \"4px\",\n                                    minHeight: \"300px\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        variant: \"h6\",\n                                        sx: {\n                                            marginBottom: \"16px\"\n                                        },\n                                        children: column.title\n                                    }, void 0, false, {\n                                        fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                                        lineNumber: 22,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    column.items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__.Draggable, {\n                                            draggableId: String(item.id),\n                                            index: index,\n                                            children: (provided, snapshot)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                    ref: provided.innerRef,\n                                                    ...provided.draggableProps,\n                                                    ...provided.dragHandleProps,\n                                                    sx: {\n                                                        padding: \"16px\",\n                                                        marginBottom: \"8px\",\n                                                        backgroundColor: snapshot.isDragging ? \"lightblue\" : \"white\",\n                                                        userSelect: \"none\",\n                                                        border: snapshot.isDragging ? \"2px solid #007bff\" : \"none\"\n                                                    },\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                            variant: \"body1\",\n                                                            children: item.title\n                                                        }, void 0, false, {\n                                                            fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                                                            lineNumber: 48,\n                                                            columnNumber: 27\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                            variant: \"body2\",\n                                                            children: item.content\n                                                        }, void 0, false, {\n                                                            fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                                                            lineNumber: 49,\n                                                            columnNumber: 27\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                                                    lineNumber: 32,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                        }, String(item.id), false, {\n                                            fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                                            lineNumber: 26,\n                                            columnNumber: 21\n                                        }, undefined)),\n                                    provided.placeholder\n                                ]\n                            }, void 0, true, {\n                                fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                                lineNumber: 12,\n                                columnNumber: 17\n                            }, undefined)\n                    }, void 0, false, {\n                        fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                        lineNumber: 10,\n                        columnNumber: 13\n                    }, undefined)\n                }, String(column.id), false, {\n                    fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n_c = DragAndDropContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DragAndDropContainer);\nvar _c;\n$RefreshReg$(_c, \"DragAndDropContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0RyYWdBbmREcm9wQ29udGFpbmVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE2RDtBQUNlO0FBRTVFLE1BQU1PLHVCQUF1QjtRQUFDLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFO0lBQ2xELHFCQUNFLDhEQUFDTCxnRUFBZUE7UUFBQ0ssV0FBV0E7a0JBQzFCLDRFQUFDUixxR0FBSUE7WUFBQ1MsU0FBUztZQUFDQyxTQUFTO3NCQUN0QkgsUUFBUUksR0FBRyxDQUFDLENBQUNDLHVCQUNaLDhEQUFDWixxR0FBSUE7b0JBQUNhLElBQUk7b0JBQUNDLElBQUk7b0JBQUlDLElBQUk7b0JBQUdDLElBQUk7d0JBQUVDLFNBQVM7d0JBQVFDLGdCQUFnQjtvQkFBZ0I7OEJBQy9FLDRFQUFDYiwwREFBU0E7d0JBQUNjLGFBQWFDLE9BQU9SLE9BQU9TLEVBQUU7a0NBQ3JDLENBQUNDLHlCQUNBLDhEQUFDdkIscUdBQUdBO2dDQUNELEdBQUd1QixTQUFTQyxjQUFjO2dDQUMzQkMsS0FBS0YsU0FBU0csUUFBUTtnQ0FDdEJULElBQUk7b0NBQ0ZVLFlBQVk7b0NBQ1pDLFNBQVM7b0NBQ1RDLGNBQWM7b0NBQ2RDLFdBQVc7Z0NBQ2I7O2tEQUVBLDhEQUFDM0IscUdBQVVBO3dDQUFDNEIsU0FBUTt3Q0FBS2QsSUFBSTs0Q0FBRWUsY0FBYzt3Q0FBTztrREFDakRuQixPQUFPb0IsS0FBSzs7Ozs7O29DQUVkcEIsT0FBT3FCLEtBQUssQ0FBQ3RCLEdBQUcsQ0FBQyxDQUFDRSxNQUFNcUIsc0JBQ3ZCLDhEQUFDOUIsMERBQVNBOzRDQUVSK0IsYUFBYWYsT0FBT1AsS0FBS1EsRUFBRTs0Q0FDM0JhLE9BQU9BO3NEQUVOLENBQUNaLFVBQVVjLHlCQUNWLDhEQUFDbkMscUdBQUtBO29EQUNKdUIsS0FBS0YsU0FBU0csUUFBUTtvREFDckIsR0FBR0gsU0FBU2UsY0FBYztvREFDMUIsR0FBR2YsU0FBU2dCLGVBQWU7b0RBQzVCdEIsSUFBSTt3REFDRlcsU0FBUzt3REFDVEksY0FBYzt3REFDZFEsaUJBQWlCSCxTQUFTSSxVQUFVLEdBQ2hDLGNBQ0E7d0RBQ0pDLFlBQVk7d0RBQ1pDLFFBQVFOLFNBQVNJLFVBQVUsR0FDdkIsc0JBQ0E7b0RBQ047O3NFQUVBLDhEQUFDdEMscUdBQVVBOzREQUFDNEIsU0FBUTtzRUFBU2pCLEtBQUttQixLQUFLOzs7Ozs7c0VBQ3ZDLDhEQUFDOUIscUdBQVVBOzREQUFDNEIsU0FBUTtzRUFBU2pCLEtBQUs4QixPQUFPOzs7Ozs7Ozs7Ozs7MkNBdEJ4Q3ZCLE9BQU9QLEtBQUtRLEVBQUU7Ozs7O29DQTJCdEJDLFNBQVNzQixXQUFXOzs7Ozs7Ozs7Ozs7bUJBN0M0RHhCLE9BQU9SLE9BQU9TLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztBQXNEbkg7S0EzRE1mO0FBNkROLCtEQUFlQSxvQkFBb0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRHJhZ0FuZERyb3BDb250YWluZXIuanN4P2YyYTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBHcmlkLCBQYXBlciwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQsIERyYWdnYWJsZSwgRHJvcHBhYmxlIH0gZnJvbSBcInJlYWN0LWJlYXV0aWZ1bC1kbmRcIjtcblxuY29uc3QgRHJhZ0FuZERyb3BDb250YWluZXIgPSAoeyBjb2x1bW5zLCBvbkRyYWdFbmQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtvbkRyYWdFbmR9PlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbHVtbikgPT4gKFxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0gc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nIH19IGtleT17U3RyaW5nKGNvbHVtbi5pZCl9PlxuICAgICAgICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD17U3RyaW5nKGNvbHVtbi5pZCl9PlxuICAgICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfVxuICAgICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2Y0ZjVmN1wiLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjE2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxuICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IFwiMzAwcHhcIiwgLy8gRW5zdXJlIHRoZXJlJ3Mgc29tZSBoZWlnaHQgZm9yIGRyb3BwaW5nIGl0ZW1zXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIHN4PXt7IG1hcmdpbkJvdHRvbTogXCIxNnB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtjb2x1bW4udGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICB7Y29sdW1uLml0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZVxuICAgICAgICAgICAgICAgICAgICAgIGtleT17U3RyaW5nKGl0ZW0uaWQpfVxuICAgICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZUlkPXtTdHJpbmcoaXRlbS5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCwgc25hcHNob3QpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXBlclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxNnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjhweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc25hcHNob3QuaXNEcmFnZ2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImxpZ2h0Ymx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyU2VsZWN0OiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNuYXBzaG90LmlzRHJhZ2dpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIycHggc29saWQgIzAwN2JmZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIj57aXRlbS50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPntpdGVtLmNvbnRlbnR9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9Ecm9wcGFibGU+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICApKX1cbiAgICAgIDwvR3JpZD5cbiAgICA8L0RyYWdEcm9wQ29udGV4dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERyYWdBbmREcm9wQ29udGFpbmVyO1xuIl0sIm5hbWVzIjpbIkJveCIsIkdyaWQiLCJQYXBlciIsIlR5cG9ncmFwaHkiLCJEcmFnRHJvcENvbnRleHQiLCJEcmFnZ2FibGUiLCJEcm9wcGFibGUiLCJEcmFnQW5kRHJvcENvbnRhaW5lciIsImNvbHVtbnMiLCJvbkRyYWdFbmQiLCJjb250YWluZXIiLCJzcGFjaW5nIiwibWFwIiwiY29sdW1uIiwiaXRlbSIsInhzIiwibWQiLCJzeCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImRyb3BwYWJsZUlkIiwiU3RyaW5nIiwiaWQiLCJwcm92aWRlZCIsImRyb3BwYWJsZVByb3BzIiwicmVmIiwiaW5uZXJSZWYiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsIm1pbkhlaWdodCIsInZhcmlhbnQiLCJtYXJnaW5Cb3R0b20iLCJ0aXRsZSIsIml0ZW1zIiwiaW5kZXgiLCJkcmFnZ2FibGVJZCIsInNuYXBzaG90IiwiZHJhZ2dhYmxlUHJvcHMiLCJkcmFnSGFuZGxlUHJvcHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpc0RyYWdnaW5nIiwidXNlclNlbGVjdCIsImJvcmRlciIsImNvbnRlbnQiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/DragAndDropContainer.jsx\n"));

/***/ })

});