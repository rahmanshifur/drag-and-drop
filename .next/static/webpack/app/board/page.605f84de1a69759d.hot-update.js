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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Grid_Paper_Typography_styled_mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Grid,Paper,Typography,styled!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/styles/styled.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Grid_Paper_Typography_styled_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Grid,Paper,Typography,styled!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Paper/Paper.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Grid_Paper_Typography_styled_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Grid,Paper,Typography,styled!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Grid_Paper_Typography_styled_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Grid,Paper,Typography,styled!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Grid_Paper_Typography_styled_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Grid,Paper,Typography,styled!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-beautiful-dnd */ \"(app-pages-browser)/./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n\n\n\nconst DragAndDropContainer = (param)=>{\n    let { columns, onDragEnd } = param;\n    const Item = (0,_barrel_optimize_names_Box_Grid_Paper_Typography_styled_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_barrel_optimize_names_Box_Grid_Paper_Typography_styled_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((param)=>{\n        let { theme } = param;\n        return {\n            backgroundColor: theme.palette.mode === \"dark\" ? \"#1A2027\" : \"#fff\",\n            ...theme.typography.body2,\n            padding: theme.spacing(2),\n            textAlign: \"center\",\n            color: theme.palette.text.secondary\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid_Paper_Typography_styled_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        item: true,\n        xs: 2,\n        sm: 4,\n        md: 4,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__.DragDropContext, {\n                onDragEnd: onDragEnd,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid_Paper_Typography_styled_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    sx: {\n                        display: \"flex\",\n                        gap: \"16px\",\n                        justifyContent: \"space-between\"\n                    },\n                    children: columns.map((column)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__.Droppable, {\n                            droppableId: String(column.id),\n                            children: (provided)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid_Paper_Typography_styled_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    ...provided.droppableProps,\n                                    ref: provided.innerRef,\n                                    sx: {\n                                        background: \"#f4f5f7\",\n                                        padding: \"16px\",\n                                        borderRadius: \"4px\",\n                                        minWidth: \"300px\",\n                                        maxWidth: \"300px\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid_Paper_Typography_styled_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            variant: \"h6\",\n                                            sx: {\n                                                marginBottom: \"16px\"\n                                            },\n                                            children: column.title\n                                        }, void 0, false, {\n                                            fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                                            lineNumber: 35,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        column.items.map((item, index1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__.Draggable, {\n                                                draggableId: String(item.id),\n                                                index: index1,\n                                                children: (provided, snapshot)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid_Paper_Typography_styled_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                        ref: provided.innerRef,\n                                                        ...provided.draggableProps,\n                                                        ...provided.dragHandleProps,\n                                                        sx: {\n                                                            padding: \"16px\",\n                                                            marginBottom: \"8px\",\n                                                            backgroundColor: snapshot.isDragging ? \"lightblue\" : \"white\",\n                                                            userSelect: \"none\",\n                                                            border: snapshot.isDragging ? \"2px solid #007bff\" : \"none\"\n                                                        },\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid_Paper_Typography_styled_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                                variant: \"body1\",\n                                                                children: item.title\n                                                            }, void 0, false, {\n                                                                fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                                                                lineNumber: 61,\n                                                                columnNumber: 29\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid_Paper_Typography_styled_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                                variant: \"body2\",\n                                                                children: item.content\n                                                            }, void 0, false, {\n                                                                fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                                                                lineNumber: 62,\n                                                                columnNumber: 29\n                                                            }, undefined)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                                                        lineNumber: 45,\n                                                        columnNumber: 27\n                                                    }, undefined)\n                                            }, String(item.id), false, {\n                                                fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                                                lineNumber: 39,\n                                                columnNumber: 23\n                                            }, undefined)),\n                                        provided.placeholder\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 19\n                                }, undefined)\n                        }, String(column.id), false, {\n                            fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 15\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, undefined)\n    }, index, false, {\n        fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\components\\\\DragAndDropContainer.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_c = DragAndDropContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DragAndDropContainer); /* \n   <Grid item xs={2} sm={4} md={4} key={index}>\n      <Item>xs=2</Item>\n    </Grid>\n*/ \nvar _c;\n$RefreshReg$(_c, \"DragAndDropContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0RyYWdBbmREcm9wQ29udGFpbmVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBcUU7QUFDTztBQUU1RSxNQUFNUSx1QkFBdUI7UUFBQyxFQUFFQyxPQUFPLEVBQUVDLFNBQVMsRUFBRTtJQUVsRCxNQUFNQyxPQUFPUixnSEFBTUEsQ0FBQ0QsNEdBQUtBLEVBQUU7WUFBQyxFQUFFVSxLQUFLLEVBQUU7ZUFBTTtZQUN6Q0MsaUJBQWlCRCxNQUFNRSxPQUFPLENBQUNDLElBQUksS0FBSyxTQUFTLFlBQVk7WUFDN0QsR0FBR0gsTUFBTUksVUFBVSxDQUFDQyxLQUFLO1lBQ3pCQyxTQUFTTixNQUFNTyxPQUFPLENBQUM7WUFDdkJDLFdBQVc7WUFDWEMsT0FBT1QsTUFBTUUsT0FBTyxDQUFDUSxJQUFJLENBQUNDLFNBQVM7UUFDckM7O0lBRUEscUJBQ0UsOERBQUN0Qiw0R0FBSUE7UUFBQ3VCLElBQUk7UUFBQ0MsSUFBSTtRQUFHQyxJQUFJO1FBQUdDLElBQUk7a0JBQzNCLDRFQUFDaEI7c0JBQ0MsNEVBQUNOLGdFQUFlQTtnQkFBQ0ssV0FBV0E7MEJBQzFCLDRFQUFDViw0R0FBR0E7b0JBQ0Y0QixJQUFJO3dCQUFFQyxTQUFTO3dCQUFRQyxLQUFLO3dCQUFRQyxnQkFBZ0I7b0JBQWdCOzhCQUVuRXRCLFFBQVF1QixHQUFHLENBQUMsQ0FBQ0MsdUJBQ1osOERBQUMxQiwwREFBU0E7NEJBQXlCMkIsYUFBYUMsT0FBT0YsT0FBT0csRUFBRTtzQ0FDN0QsQ0FBQ0MseUJBQ0EsOERBQUNyQyw0R0FBR0E7b0NBQ0QsR0FBR3FDLFNBQVNDLGNBQWM7b0NBQzNCQyxLQUFLRixTQUFTRyxRQUFRO29DQUN0QlosSUFBSTt3Q0FDRmEsWUFBWTt3Q0FDWnZCLFNBQVM7d0NBQ1R3QixjQUFjO3dDQUNkQyxVQUFVO3dDQUNWQyxVQUFVO29DQUNaOztzREFFQSw4REFBQ3hDLDRHQUFVQTs0Q0FBQ3lDLFNBQVE7NENBQUtqQixJQUFJO2dEQUFFa0IsY0FBYzs0Q0FBTztzREFDakRiLE9BQU9jLEtBQUs7Ozs7Ozt3Q0FFZGQsT0FBT2UsS0FBSyxDQUFDaEIsR0FBRyxDQUFDLENBQUNSLE1BQU15Qix1QkFDdkIsOERBQUMzQywwREFBU0E7Z0RBRVI0QyxhQUFhZixPQUFPWCxLQUFLWSxFQUFFO2dEQUMzQmEsT0FBT0E7MERBRU4sQ0FBQ1osVUFBVWMseUJBQ1YsOERBQUNqRCw0R0FBS0E7d0RBQ0pxQyxLQUFLRixTQUFTRyxRQUFRO3dEQUNyQixHQUFHSCxTQUFTZSxjQUFjO3dEQUMxQixHQUFHZixTQUFTZ0IsZUFBZTt3REFDNUJ6QixJQUFJOzREQUNGVixTQUFTOzREQUNUNEIsY0FBYzs0REFDZGpDLGlCQUFpQnNDLFNBQVNHLFVBQVUsR0FDaEMsY0FDQTs0REFDSkMsWUFBWTs0REFDWkMsUUFBUUwsU0FBU0csVUFBVSxHQUN2QixzQkFDQTt3REFDTjs7MEVBRUEsOERBQUNsRCw0R0FBVUE7Z0VBQUN5QyxTQUFROzBFQUFTckIsS0FBS3VCLEtBQUs7Ozs7OzswRUFDdkMsOERBQUMzQyw0R0FBVUE7Z0VBQUN5QyxTQUFROzBFQUFTckIsS0FBS2lDLE9BQU87Ozs7Ozs7Ozs7OzsrQ0F0QnhDdEIsT0FBT1gsS0FBS1ksRUFBRTs7Ozs7d0NBMkJ0QkMsU0FBU3FCLFdBQVc7Ozs7Ozs7MkJBN0NYdkIsT0FBT0YsT0FBT0csRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FQTGE7Ozs7O0FBOER6QztLQXpFTXpDO0FBMkVOLCtEQUFlQSxvQkFBb0JBLEVBQUMsQ0FHcEM7Ozs7QUFJQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9EcmFnQW5kRHJvcENvbnRhaW5lci5qc3g/ZjJhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEdyaWQsIFBhcGVyLCBzdHlsZWQsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgRHJhZ0Ryb3BDb250ZXh0LCBEcmFnZ2FibGUsIERyb3BwYWJsZSB9IGZyb20gXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCI7XG5cbmNvbnN0IERyYWdBbmREcm9wQ29udGFpbmVyID0gKHsgY29sdW1ucywgb25EcmFnRW5kIH0pID0+IHtcblxuICBjb25zdCBJdGVtID0gc3R5bGVkKFBhcGVyKSgoeyB0aGVtZSB9KSA9PiAoe1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnZGFyaycgPyAnIzFBMjAyNycgOiAnI2ZmZicsXG4gICAgLi4udGhlbWUudHlwb2dyYXBoeS5ib2R5MixcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gIH0pKTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHNtPXs0fSBtZD17NH0ga2V5PXtpbmRleH0+XG4gICAgICA8SXRlbT5cbiAgICAgICAgPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e29uRHJhZ0VuZH0+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgc3g9e3sgZGlzcGxheTogXCJmbGV4XCIsIGdhcDogXCIxNnB4XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjb2x1bW5zLm1hcCgoY29sdW1uKSA9PiAoXG4gICAgICAgICAgICAgIDxEcm9wcGFibGUga2V5PXtTdHJpbmcoY29sdW1uLmlkKX0gZHJvcHBhYmxlSWQ9e1N0cmluZyhjb2x1bW4uaWQpfT5cbiAgICAgICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNmNGY1ZjdcIixcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjE2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IFwiMzAwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCIzMDBweFwiLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBzeD17eyBtYXJnaW5Cb3R0b206IFwiMTZweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW4udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5pdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtTdHJpbmcoaXRlbS5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGVJZD17U3RyaW5nKGl0ZW0uaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQsIHNuYXBzaG90KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXBlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTZweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjhweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzbmFwc2hvdC5pc0RyYWdnaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJsaWdodGJsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzbmFwc2hvdC5pc0RyYWdnaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIycHggc29saWQgIzAwN2JmZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiPntpdGVtLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj57aXRlbS5jb250ZW50fTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0Ryb3BwYWJsZT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0RyYWdEcm9wQ29udGV4dD5cbiAgICAgIDwvSXRlbT5cbiAgICA8L0dyaWQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEcmFnQW5kRHJvcENvbnRhaW5lcjtcblxuXG4vKiBcbiAgIDxHcmlkIGl0ZW0geHM9ezJ9IHNtPXs0fSBtZD17NH0ga2V5PXtpbmRleH0+XG4gICAgICA8SXRlbT54cz0yPC9JdGVtPlxuICAgIDwvR3JpZD5cbiovIl0sIm5hbWVzIjpbIkJveCIsIkdyaWQiLCJQYXBlciIsInN0eWxlZCIsIlR5cG9ncmFwaHkiLCJEcmFnRHJvcENvbnRleHQiLCJEcmFnZ2FibGUiLCJEcm9wcGFibGUiLCJEcmFnQW5kRHJvcENvbnRhaW5lciIsImNvbHVtbnMiLCJvbkRyYWdFbmQiLCJJdGVtIiwidGhlbWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwibW9kZSIsInR5cG9ncmFwaHkiLCJib2R5MiIsInBhZGRpbmciLCJzcGFjaW5nIiwidGV4dEFsaWduIiwiY29sb3IiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwiaXRlbSIsInhzIiwic20iLCJtZCIsInN4IiwiZGlzcGxheSIsImdhcCIsImp1c3RpZnlDb250ZW50IiwibWFwIiwiY29sdW1uIiwiZHJvcHBhYmxlSWQiLCJTdHJpbmciLCJpZCIsInByb3ZpZGVkIiwiZHJvcHBhYmxlUHJvcHMiLCJyZWYiLCJpbm5lclJlZiIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwidmFyaWFudCIsIm1hcmdpbkJvdHRvbSIsInRpdGxlIiwiaXRlbXMiLCJpbmRleCIsImRyYWdnYWJsZUlkIiwic25hcHNob3QiLCJkcmFnZ2FibGVQcm9wcyIsImRyYWdIYW5kbGVQcm9wcyIsImlzRHJhZ2dpbmciLCJ1c2VyU2VsZWN0IiwiYm9yZGVyIiwiY29udGVudCIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/DragAndDropContainer.jsx\n"));

/***/ })

});