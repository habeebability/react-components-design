"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SpeakersList.js":
/*!****************************************!*\
  !*** ./src/components/SpeakersList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-placeholder */ \"./node_modules/react-placeholder/lib/index.js\");\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction SpeakersList(param) {\n    let { showSessions } = param;\n    _s();\n    const { isLoading, hasError, error, speakerData: speakers } = useRequestSpeakers(2000);\n    if (hasError === true) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-danger\",\n        children: [\n            \"ERROR: \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                children: [\n                    \"loading Speaker Data Failed \",\n                    error\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/SpeakersList.js\",\n                lineNumber: 18,\n                columnNumber: 16\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/SpeakersList.js\",\n        lineNumber: 17,\n        columnNumber: 7\n    }, this);\n    // if (isLoading) return <div>Loading...</div>;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_placeholder__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            type: \"media\",\n            rows: 15,\n            className: \"speakerslist-placeholder\",\n            ready: !isLoading,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: speakersData.map(function(speaker) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        speaker: speaker,\n                        showSessions: showSessions,\n                        onFavoriteToggle: ()=>{\n                            onFavoriteToggle(speaker.id);\n                        }\n                    }, speaker.id, false, {\n                        fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/SpeakersList.js\",\n                        lineNumber: 34,\n                        columnNumber: 15\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/SpeakersList.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/SpeakersList.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/SpeakersList.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(SpeakersList, \"P+ivHoAGKMuXKvxSDCRxhsJrbiI=\", true);\n_c = SpeakersList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersList);\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0QztBQUNLO0FBQ2pCO0FBRVM7QUFFekMsU0FBU0ssYUFBYSxLQUFnQjtRQUFoQixFQUFFQyxZQUFZLEVBQUUsR0FBaEI7O0lBQ3BCLE1BQU0sRUFDSkMsU0FBUyxFQUNUQyxRQUFRLEVBQ1JDLEtBQUssRUFDTEMsYUFBYUMsUUFBUSxFQUN0QixHQUFHQyxtQkFBbUI7SUFFdkIsSUFBSUosYUFBYSxNQUNmLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVOztZQUFjOzBCQUNwQiw4REFBQ0M7O29CQUFFO29CQUE2Qk47Ozs7Ozs7Ozs7Ozs7SUFJN0MsK0NBQStDO0lBQy9DLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDWix5REFBZ0JBO1lBQ2ZjLE1BQUs7WUFDTEMsTUFBTTtZQUNOSCxXQUFVO1lBQ1ZJLE9BQU8sQ0FBQ1g7c0JBRVIsNEVBQUNNO2dCQUFJQyxXQUFVOzBCQUNaSyxhQUFhQyxHQUFHLENBQUMsU0FBVUMsT0FBTztvQkFDakMscUJBQ0UsOERBQUNsQixnREFBT0E7d0JBRU5rQixTQUFTQTt3QkFDVGYsY0FBY0E7d0JBQ2RnQixrQkFBa0I7NEJBQ2hCQSxpQkFBaUJELFFBQVFFLEVBQUU7d0JBQzdCO3VCQUxLRixRQUFRRSxFQUFFOzs7OztnQkFRckI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLVjtHQXpDU2xCO0tBQUFBO0FBMkNULCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzTGlzdC5qcz8yYTY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdFBsYWNlaG9sZGVyIGZyb20gXCJyZWFjdC1wbGFjZWhvbGRlclwiO1xuaW1wb3J0IFNwZWFrZXIgZnJvbSBcIi4vU3BlYWtlclwiO1xuXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uLy4uL1NwZWFrZXJEYXRhXCI7XG5cbmZ1bmN0aW9uIFNwZWFrZXJzTGlzdCh7IHNob3dTZXNzaW9ucyB9KSB7XG4gIGNvbnN0IHtcbiAgICBpc0xvYWRpbmcsXG4gICAgaGFzRXJyb3IsXG4gICAgZXJyb3IsXG4gICAgc3BlYWtlckRhdGE6IHNwZWFrZXJzLFxuICB9ID0gdXNlUmVxdWVzdFNwZWFrZXJzKDIwMDApO1xuXG4gIGlmIChoYXNFcnJvciA9PT0gdHJ1ZSlcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPlxuICAgICAgICBFUlJPUjogPGI+bG9hZGluZyBTcGVha2VyIERhdGEgRmFpbGVkIHtlcnJvcn08L2I+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gIC8vIGlmIChpc0xvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3BlYWtlcnMtbGlzdFwiPlxuICAgICAgPFJlYWN0UGxhY2Vob2xkZXJcbiAgICAgICAgdHlwZT1cIm1lZGlhXCJcbiAgICAgICAgcm93cz17MTV9XG4gICAgICAgIGNsYXNzTmFtZT1cInNwZWFrZXJzbGlzdC1wbGFjZWhvbGRlclwiXG4gICAgICAgIHJlYWR5PXshaXNMb2FkaW5nfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIHtzcGVha2Vyc0RhdGEubWFwKGZ1bmN0aW9uIChzcGVha2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8U3BlYWtlclxuICAgICAgICAgICAgICAgIGtleT17c3BlYWtlci5pZH1cbiAgICAgICAgICAgICAgICBzcGVha2VyPXtzcGVha2VyfVxuICAgICAgICAgICAgICAgIHNob3dTZXNzaW9ucz17c2hvd1Nlc3Npb25zfVxuICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGUoc3BlYWtlci5pZCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9SZWFjdFBsYWNlaG9sZGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTcGVha2Vyc0xpc3Q7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJSZWFjdFBsYWNlaG9sZGVyIiwiU3BlYWtlciIsImRhdGEiLCJTcGVha2Vyc0xpc3QiLCJzaG93U2Vzc2lvbnMiLCJpc0xvYWRpbmciLCJoYXNFcnJvciIsImVycm9yIiwic3BlYWtlckRhdGEiLCJzcGVha2VycyIsInVzZVJlcXVlc3RTcGVha2VycyIsImRpdiIsImNsYXNzTmFtZSIsImIiLCJ0eXBlIiwicm93cyIsInJlYWR5Iiwic3BlYWtlcnNEYXRhIiwibWFwIiwic3BlYWtlciIsIm9uRmF2b3JpdGVUb2dnbGUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SpeakersList.js\n"));

/***/ })

});