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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Grid_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Grid,Paper,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Grid_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Grid,Paper,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Grid_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Grid,Paper,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Grid_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Grid,Paper,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Paper/Paper.js\");\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-beautiful-dnd */ \"(app-pages-browser)/./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n\n\n\nconst DragAndDropContainer = (param)=>{\n    let { columns, onDragEnd } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__.DragDropContext, {\n        onDragEnd: onDragEnd,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            container: true,\n            spacing: 3,\n            children: columns.map((column)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    item: true,\n                    xs: 12,\n                    md: 4,\n                    lg: 3,\n                    sx: {\n                        display: \"flex\",\n                        justifyContent: \"space-between\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__.Droppable, {\n                        droppableId: String(column.id),\n                        children: (provided)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                ...provided.droppableProps,\n                                ref: provided.innerRef,\n                                sx: {\n                                    background: \"#f4f5f7\",\n                                    padding: \"16px\",\n                                    borderRadius: \"4px\",\n                                    minHeight: \"300px\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        variant: \"h6\",\n                                        sx: {\n                                            marginBottom: \"16px\"\n                                        },\n                                        children: column.title\n                                    }, void 0, false, {\n                                        fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                                        lineNumber: 22,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    column.items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__.Draggable, {\n                                            draggableId: String(item.id),\n                                            index: index,\n                                            children: (provided, snapshot)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                    ref: provided.innerRef,\n                                                    ...provided.draggableProps,\n                                                    ...provided.dragHandleProps,\n                                                    sx: {\n                                                        padding: \"16px\",\n                                                        marginBottom: \"8px\",\n                                                        backgroundColor: snapshot.isDragging ? \"lightblue\" : \"white\",\n                                                        userSelect: \"none\",\n                                                        border: snapshot.isDragging ? \"2px solid #007bff\" : \"none\"\n                                                    },\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                            variant: \"body1\",\n                                                            children: item.title\n                                                        }, void 0, false, {\n                                                            fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                                                            lineNumber: 48,\n                                                            columnNumber: 27\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                            variant: \"body2\",\n                                                            children: item.content\n                                                        }, void 0, false, {\n                                                            fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                                                            lineNumber: 49,\n                                                            columnNumber: 27\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                                                    lineNumber: 32,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                        }, String(item.id), false, {\n                                            fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                                            lineNumber: 26,\n                                            columnNumber: 21\n                                        }, undefined)),\n                                    provided.placeholder\n                                ]\n                            }, void 0, true, {\n                                fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                                lineNumber: 12,\n                                columnNumber: 17\n                            }, undefined)\n                    }, void 0, false, {\n                        fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                        lineNumber: 10,\n                        columnNumber: 13\n                    }, undefined)\n                }, String(column.id), false, {\n                    fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n_c = DragAndDropContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DragAndDropContainer);\nvar _c;\n$RefreshReg$(_c, \"DragAndDropContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0RyYWdBbmREcm9wQ29udGFpbmVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE2RDtBQUNlO0FBRTVFLE1BQU1PLHVCQUF1QjtRQUFDLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFO0lBQ2xELHFCQUNFLDhEQUFDTCxnRUFBZUE7UUFBQ0ssV0FBV0E7a0JBQzFCLDRFQUFDUixxR0FBSUE7WUFBQ1MsU0FBUztZQUFDQyxTQUFTO3NCQUN0QkgsUUFBUUksR0FBRyxDQUFDLENBQUNDLHVCQUNaLDhEQUFDWixxR0FBSUE7b0JBQUNhLElBQUk7b0JBQUNDLElBQUk7b0JBQUlDLElBQUk7b0JBQUdDLElBQUk7b0JBQUdDLElBQUk7d0JBQUVDLFNBQVM7d0JBQVFDLGdCQUFnQjtvQkFBZ0I7OEJBQ3RGLDRFQUFDZCwwREFBU0E7d0JBQUNlLGFBQWFDLE9BQU9ULE9BQU9VLEVBQUU7a0NBQ3JDLENBQUNDLHlCQUNBLDhEQUFDeEIscUdBQUdBO2dDQUNELEdBQUd3QixTQUFTQyxjQUFjO2dDQUMzQkMsS0FBS0YsU0FBU0csUUFBUTtnQ0FDdEJULElBQUk7b0NBQ0ZVLFlBQVk7b0NBQ1pDLFNBQVM7b0NBQ1RDLGNBQWM7b0NBQ2RDLFdBQVc7Z0NBQ2I7O2tEQUVBLDhEQUFDNUIscUdBQVVBO3dDQUFDNkIsU0FBUTt3Q0FBS2QsSUFBSTs0Q0FBRWUsY0FBYzt3Q0FBTztrREFDakRwQixPQUFPcUIsS0FBSzs7Ozs7O29DQUVkckIsT0FBT3NCLEtBQUssQ0FBQ3ZCLEdBQUcsQ0FBQyxDQUFDRSxNQUFNc0Isc0JBQ3ZCLDhEQUFDL0IsMERBQVNBOzRDQUVSZ0MsYUFBYWYsT0FBT1IsS0FBS1MsRUFBRTs0Q0FDM0JhLE9BQU9BO3NEQUVOLENBQUNaLFVBQVVjLHlCQUNWLDhEQUFDcEMscUdBQUtBO29EQUNKd0IsS0FBS0YsU0FBU0csUUFBUTtvREFDckIsR0FBR0gsU0FBU2UsY0FBYztvREFDMUIsR0FBR2YsU0FBU2dCLGVBQWU7b0RBQzVCdEIsSUFBSTt3REFDRlcsU0FBUzt3REFDVEksY0FBYzt3REFDZFEsaUJBQWlCSCxTQUFTSSxVQUFVLEdBQ2hDLGNBQ0E7d0RBQ0pDLFlBQVk7d0RBQ1pDLFFBQVFOLFNBQVNJLFVBQVUsR0FDdkIsc0JBQ0E7b0RBQ047O3NFQUVBLDhEQUFDdkMscUdBQVVBOzREQUFDNkIsU0FBUTtzRUFBU2xCLEtBQUtvQixLQUFLOzs7Ozs7c0VBQ3ZDLDhEQUFDL0IscUdBQVVBOzREQUFDNkIsU0FBUTtzRUFBU2xCLEtBQUsrQixPQUFPOzs7Ozs7Ozs7Ozs7MkNBdEJ4Q3ZCLE9BQU9SLEtBQUtTLEVBQUU7Ozs7O29DQTJCdEJDLFNBQVNzQixXQUFXOzs7Ozs7Ozs7Ozs7bUJBN0NtRXhCLE9BQU9ULE9BQU9VLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztBQXNEMUg7S0EzRE1oQjtBQTZETiwrREFBZUEsb0JBQW9CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0RyYWdBbmREcm9wQ29udGFpbmVyLmpzeD9mMmEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgR3JpZCwgUGFwZXIsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgRHJhZ0Ryb3BDb250ZXh0LCBEcmFnZ2FibGUsIERyb3BwYWJsZSB9IGZyb20gXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCI7XG5cbmNvbnN0IERyYWdBbmREcm9wQ29udGFpbmVyID0gKHsgY29sdW1ucywgb25EcmFnRW5kIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17b25EcmFnRW5kfT5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cbiAgICAgICAge2NvbHVtbnMubWFwKChjb2x1bW4pID0+IChcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9IGxnPXszfSBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicgfX0ga2V5PXtTdHJpbmcoY29sdW1uLmlkKX0+XG4gICAgICAgICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPXtTdHJpbmcoY29sdW1uLmlkKX0+XG4gICAgICAgICAgICAgIHsocHJvdmlkZWQpID0+IChcbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9XG4gICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZjRmNWY3XCIsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTZweFwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogXCIzMDBweFwiLCAvLyBFbnN1cmUgdGhlcmUncyBzb21lIGhlaWdodCBmb3IgZHJvcHBpbmcgaXRlbXNcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgc3g9e3sgbWFyZ2luQm90dG9tOiBcIjE2cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAge2NvbHVtbi50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIHtjb2x1bW4uaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtTdHJpbmcoaXRlbS5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlSWQ9e1N0cmluZyhpdGVtLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkLCBzbmFwc2hvdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhcGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjE2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiOHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzbmFwc2hvdC5pc0RyYWdnaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibGlnaHRibHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc25hcHNob3QuaXNEcmFnZ2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjJweCBzb2xpZCAjMDA3YmZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiPntpdGVtLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+e2l0ZW0uY29udGVudH08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0Ryb3BwYWJsZT5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICkpfVxuICAgICAgPC9HcmlkPlxuICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHJhZ0FuZERyb3BDb250YWluZXI7XG4iXSwibmFtZXMiOlsiQm94IiwiR3JpZCIsIlBhcGVyIiwiVHlwb2dyYXBoeSIsIkRyYWdEcm9wQ29udGV4dCIsIkRyYWdnYWJsZSIsIkRyb3BwYWJsZSIsIkRyYWdBbmREcm9wQ29udGFpbmVyIiwiY29sdW1ucyIsIm9uRHJhZ0VuZCIsImNvbnRhaW5lciIsInNwYWNpbmciLCJtYXAiLCJjb2x1bW4iLCJpdGVtIiwieHMiLCJtZCIsImxnIiwic3giLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJkcm9wcGFibGVJZCIsIlN0cmluZyIsImlkIiwicHJvdmlkZWQiLCJkcm9wcGFibGVQcm9wcyIsInJlZiIsImlubmVyUmVmIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJtaW5IZWlnaHQiLCJ2YXJpYW50IiwibWFyZ2luQm90dG9tIiwidGl0bGUiLCJpdGVtcyIsImluZGV4IiwiZHJhZ2dhYmxlSWQiLCJzbmFwc2hvdCIsImRyYWdnYWJsZVByb3BzIiwiZHJhZ0hhbmRsZVByb3BzIiwiYmFja2dyb3VuZENvbG9yIiwiaXNEcmFnZ2luZyIsInVzZXJTZWxlY3QiLCJib3JkZXIiLCJjb250ZW50IiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/DragAndDropContainer.jsx\n"));

/***/ })

});