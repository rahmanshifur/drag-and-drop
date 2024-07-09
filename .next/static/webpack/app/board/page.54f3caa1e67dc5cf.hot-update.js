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

/***/ "(app-pages-browser)/./src/app/board/page.jsx":
/*!********************************!*\
  !*** ./src/app/board/page.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_PrimaryBtnLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/PrimaryBtnLink */ \"(app-pages-browser)/./src/components/ui/PrimaryBtnLink.jsx\");\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _components_DragAndDropContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/DragAndDropContainer */ \"(app-pages-browser)/./src/components/DragAndDropContainer.jsx\");\n/* harmony import */ var _store_features_appSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/features/appSlice */ \"(app-pages-browser)/./src/store/features/appSlice.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst DragAndDropPage = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    const layout = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.app.layout);\n    const handleDragEnd = (result)=>{\n        if (!result.destination) return;\n        const { source, destination } = result;\n        const sourceColumn = layout.find((col)=>col.id === String(source.droppableId));\n        const destColumn = layout.find((col)=>col.id === String(destination.droppableId));\n        const sourceItems = Array.from(sourceColumn.items);\n        if (source.droppableId === destination.droppableId) {\n            const [removed] = sourceItems.splice(source.index, 1);\n            sourceItems.splice(destination.index, 0, removed);\n            const newLayout = layout.map((col)=>col.id === String(source.droppableId) ? {\n                    ...col,\n                    items: sourceItems\n                } : col);\n            dispatch((0,_store_features_appSlice__WEBPACK_IMPORTED_MODULE_3__.setLayout)(newLayout));\n        } else {\n            const destItems = Array.from(destColumn.items);\n            const [removed] = sourceItems.splice(source.index, 1);\n            destItems.splice(destination.index, 0, removed);\n            const newLayout = layout.map((col)=>{\n                if (col.id === String(source.droppableId)) {\n                    return {\n                        ...col,\n                        items: sourceItems\n                    };\n                }\n                if (col.id === String(destination.droppableId)) {\n                    return {\n                        ...col,\n                        items: destItems\n                    };\n                }\n                return col;\n            });\n            dispatch((0,_store_features_appSlice__WEBPACK_IMPORTED_MODULE_3__.setLayout)(newLayout));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        sx: {\n            padding: \"16px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                variant: \"h4\",\n                sx: {\n                    marginBottom: \"16px\"\n                },\n                children: \"Client Regimen Request\"\n            }, void 0, false, {\n                fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\app\\\\board\\\\page.jsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_PrimaryBtnLink__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Add New One\",\n                href: \"/\"\n            }, void 0, false, {\n                fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\app\\\\board\\\\page.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DragAndDropContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                columns: layout,\n                onDragEnd: handleDragEnd\n            }, void 0, false, {\n                fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\app\\\\board\\\\page.jsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"W:\\\\works\\\\DND\\\\drag-drop\\\\src\\\\app\\\\board\\\\page.jsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DragAndDropPage, \"tQ/UTKKkWH7f0J77UIhdkLoJOmk=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = DragAndDropPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DragAndDropPage);\nvar _c;\n$RefreshReg$(_c, \"DragAndDropPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYm9hcmQvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUU0RDtBQUNaO0FBQ087QUFDa0I7QUFDZjtBQUUxRCxNQUFNTyxrQkFBa0I7O0lBQ3RCLE1BQU1DLFdBQVdMLHdEQUFXQTtJQUM1QixNQUFNTSxTQUFTTCx3REFBV0EsQ0FBQyxDQUFDTSxRQUFVQSxNQUFNQyxHQUFHLENBQUNGLE1BQU07SUFFdEQsTUFBTUcsZ0JBQWdCLENBQUNDO1FBQ3JCLElBQUksQ0FBQ0EsT0FBT0MsV0FBVyxFQUFFO1FBRXpCLE1BQU0sRUFBRUMsTUFBTSxFQUFFRCxXQUFXLEVBQUUsR0FBR0Q7UUFFaEMsTUFBTUcsZUFBZVAsT0FBT1EsSUFBSSxDQUM5QixDQUFDQyxNQUFRQSxJQUFJQyxFQUFFLEtBQUtDLE9BQU9MLE9BQU9NLFdBQVc7UUFFL0MsTUFBTUMsYUFBYWIsT0FBT1EsSUFBSSxDQUM1QixDQUFDQyxNQUFRQSxJQUFJQyxFQUFFLEtBQUtDLE9BQU9OLFlBQVlPLFdBQVc7UUFHcEQsTUFBTUUsY0FBY0MsTUFBTUMsSUFBSSxDQUFDVCxhQUFhVSxLQUFLO1FBRWpELElBQUlYLE9BQU9NLFdBQVcsS0FBS1AsWUFBWU8sV0FBVyxFQUFFO1lBQ2xELE1BQU0sQ0FBQ00sUUFBUSxHQUFHSixZQUFZSyxNQUFNLENBQUNiLE9BQU9jLEtBQUssRUFBRTtZQUNuRE4sWUFBWUssTUFBTSxDQUFDZCxZQUFZZSxLQUFLLEVBQUUsR0FBR0Y7WUFFekMsTUFBTUcsWUFBWXJCLE9BQU9zQixHQUFHLENBQUMsQ0FBQ2IsTUFDNUJBLElBQUlDLEVBQUUsS0FBS0MsT0FBT0wsT0FBT00sV0FBVyxJQUNoQztvQkFBRSxHQUFHSCxHQUFHO29CQUFFUSxPQUFPSDtnQkFBWSxJQUM3Qkw7WUFHTlYsU0FBU0YsbUVBQVNBLENBQUN3QjtRQUNyQixPQUFPO1lBQ0wsTUFBTUUsWUFBWVIsTUFBTUMsSUFBSSxDQUFDSCxXQUFXSSxLQUFLO1lBQzdDLE1BQU0sQ0FBQ0MsUUFBUSxHQUFHSixZQUFZSyxNQUFNLENBQUNiLE9BQU9jLEtBQUssRUFBRTtZQUNuREcsVUFBVUosTUFBTSxDQUFDZCxZQUFZZSxLQUFLLEVBQUUsR0FBR0Y7WUFFdkMsTUFBTUcsWUFBWXJCLE9BQU9zQixHQUFHLENBQUMsQ0FBQ2I7Z0JBQzVCLElBQUlBLElBQUlDLEVBQUUsS0FBS0MsT0FBT0wsT0FBT00sV0FBVyxHQUFHO29CQUN6QyxPQUFPO3dCQUFFLEdBQUdILEdBQUc7d0JBQUVRLE9BQU9IO29CQUFZO2dCQUN0QztnQkFDQSxJQUFJTCxJQUFJQyxFQUFFLEtBQUtDLE9BQU9OLFlBQVlPLFdBQVcsR0FBRztvQkFDOUMsT0FBTzt3QkFBRSxHQUFHSCxHQUFHO3dCQUFFUSxPQUFPTTtvQkFBVTtnQkFDcEM7Z0JBQ0EsT0FBT2Q7WUFDVDtZQUVBVixTQUFTRixtRUFBU0EsQ0FBQ3dCO1FBQ3JCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQzdCLDBGQUFHQTtRQUFDZ0MsSUFBSTtZQUFFQyxTQUFTO1FBQU87OzBCQUN6Qiw4REFBQ2hDLDBGQUFVQTtnQkFBQ2lDLFNBQVE7Z0JBQUtGLElBQUk7b0JBQUVHLGNBQWM7Z0JBQU87MEJBQUc7Ozs7OzswQkFHdkQsOERBQUNwQyxxRUFBY0E7Z0JBQUNxQyxNQUFNO2dCQUFlQyxNQUFNOzs7Ozs7MEJBQzNDLDhEQUFDakMsd0VBQW9CQTtnQkFBQ2tDLFNBQVM5QjtnQkFBUStCLFdBQVc1Qjs7Ozs7Ozs7Ozs7O0FBR3hEO0dBekRNTDs7UUFDYUosb0RBQVdBO1FBQ2JDLG9EQUFXQTs7O0tBRnRCRztBQTJETiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2JvYXJkL3BhZ2UuanN4P2E3YjEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBQcmltYXJ5QnRuTGluayBmcm9tIFwiQC9jb21wb25lbnRzL3VpL1ByaW1hcnlCdG5MaW5rXCI7XG5pbXBvcnQgeyBCb3gsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgRHJhZ0FuZERyb3BDb250YWluZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRHJhZ0FuZERyb3BDb250YWluZXJcIjtcbmltcG9ydCB7IHNldExheW91dCB9IGZyb20gXCIuLi8uLi9zdG9yZS9mZWF0dXJlcy9hcHBTbGljZVwiO1xuXG5jb25zdCBEcmFnQW5kRHJvcFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgbGF5b3V0ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hcHAubGF5b3V0KTtcblxuICBjb25zdCBoYW5kbGVEcmFnRW5kID0gKHJlc3VsdCkgPT4ge1xuICAgIGlmICghcmVzdWx0LmRlc3RpbmF0aW9uKSByZXR1cm47XG5cbiAgICBjb25zdCB7IHNvdXJjZSwgZGVzdGluYXRpb24gfSA9IHJlc3VsdDtcblxuICAgIGNvbnN0IHNvdXJjZUNvbHVtbiA9IGxheW91dC5maW5kKFxuICAgICAgKGNvbCkgPT4gY29sLmlkID09PSBTdHJpbmcoc291cmNlLmRyb3BwYWJsZUlkKVxuICAgICk7XG4gICAgY29uc3QgZGVzdENvbHVtbiA9IGxheW91dC5maW5kKFxuICAgICAgKGNvbCkgPT4gY29sLmlkID09PSBTdHJpbmcoZGVzdGluYXRpb24uZHJvcHBhYmxlSWQpXG4gICAgKTtcblxuICAgIGNvbnN0IHNvdXJjZUl0ZW1zID0gQXJyYXkuZnJvbShzb3VyY2VDb2x1bW4uaXRlbXMpO1xuXG4gICAgaWYgKHNvdXJjZS5kcm9wcGFibGVJZCA9PT0gZGVzdGluYXRpb24uZHJvcHBhYmxlSWQpIHtcbiAgICAgIGNvbnN0IFtyZW1vdmVkXSA9IHNvdXJjZUl0ZW1zLnNwbGljZShzb3VyY2UuaW5kZXgsIDEpO1xuICAgICAgc291cmNlSXRlbXMuc3BsaWNlKGRlc3RpbmF0aW9uLmluZGV4LCAwLCByZW1vdmVkKTtcblxuICAgICAgY29uc3QgbmV3TGF5b3V0ID0gbGF5b3V0Lm1hcCgoY29sKSA9PlxuICAgICAgICBjb2wuaWQgPT09IFN0cmluZyhzb3VyY2UuZHJvcHBhYmxlSWQpXG4gICAgICAgICAgPyB7IC4uLmNvbCwgaXRlbXM6IHNvdXJjZUl0ZW1zIH1cbiAgICAgICAgICA6IGNvbFxuICAgICAgKTtcblxuICAgICAgZGlzcGF0Y2goc2V0TGF5b3V0KG5ld0xheW91dCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkZXN0SXRlbXMgPSBBcnJheS5mcm9tKGRlc3RDb2x1bW4uaXRlbXMpO1xuICAgICAgY29uc3QgW3JlbW92ZWRdID0gc291cmNlSXRlbXMuc3BsaWNlKHNvdXJjZS5pbmRleCwgMSk7XG4gICAgICBkZXN0SXRlbXMuc3BsaWNlKGRlc3RpbmF0aW9uLmluZGV4LCAwLCByZW1vdmVkKTtcblxuICAgICAgY29uc3QgbmV3TGF5b3V0ID0gbGF5b3V0Lm1hcCgoY29sKSA9PiB7XG4gICAgICAgIGlmIChjb2wuaWQgPT09IFN0cmluZyhzb3VyY2UuZHJvcHBhYmxlSWQpKSB7XG4gICAgICAgICAgcmV0dXJuIHsgLi4uY29sLCBpdGVtczogc291cmNlSXRlbXMgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sLmlkID09PSBTdHJpbmcoZGVzdGluYXRpb24uZHJvcHBhYmxlSWQpKSB7XG4gICAgICAgICAgcmV0dXJuIHsgLi4uY29sLCBpdGVtczogZGVzdEl0ZW1zIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbDtcbiAgICAgIH0pO1xuXG4gICAgICBkaXNwYXRjaChzZXRMYXlvdXQobmV3TGF5b3V0KSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17eyBwYWRkaW5nOiBcIjE2cHhcIiB9fT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIHN4PXt7IG1hcmdpbkJvdHRvbTogXCIxNnB4XCIgfX0+XG4gICAgICAgIENsaWVudCBSZWdpbWVuIFJlcXVlc3RcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxQcmltYXJ5QnRuTGluayB0ZXh0PXsnQWRkIE5ldyBPbmUnfSBocmVmPXsnLyd9IC8+XG4gICAgICA8RHJhZ0FuZERyb3BDb250YWluZXIgY29sdW1ucz17bGF5b3V0fSBvbkRyYWdFbmQ9e2hhbmRsZURyYWdFbmR9IC8+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEcmFnQW5kRHJvcFBhZ2U7XG4iXSwibmFtZXMiOlsiUHJpbWFyeUJ0bkxpbmsiLCJCb3giLCJUeXBvZ3JhcGh5IiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIkRyYWdBbmREcm9wQ29udGFpbmVyIiwic2V0TGF5b3V0IiwiRHJhZ0FuZERyb3BQYWdlIiwiZGlzcGF0Y2giLCJsYXlvdXQiLCJzdGF0ZSIsImFwcCIsImhhbmRsZURyYWdFbmQiLCJyZXN1bHQiLCJkZXN0aW5hdGlvbiIsInNvdXJjZSIsInNvdXJjZUNvbHVtbiIsImZpbmQiLCJjb2wiLCJpZCIsIlN0cmluZyIsImRyb3BwYWJsZUlkIiwiZGVzdENvbHVtbiIsInNvdXJjZUl0ZW1zIiwiQXJyYXkiLCJmcm9tIiwiaXRlbXMiLCJyZW1vdmVkIiwic3BsaWNlIiwiaW5kZXgiLCJuZXdMYXlvdXQiLCJtYXAiLCJkZXN0SXRlbXMiLCJzeCIsInBhZGRpbmciLCJ2YXJpYW50IiwibWFyZ2luQm90dG9tIiwidGV4dCIsImhyZWYiLCJjb2x1bW5zIiwib25EcmFnRW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/board/page.jsx\n"));

/***/ })

});