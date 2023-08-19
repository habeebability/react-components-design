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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-placeholder */ \"./node_modules/react-placeholder/lib/index.js\");\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var _hooks_useRequestSpeakers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useRequestSpeakers */ \"./src/hooks/useRequestSpeakers.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction SpeakersList(param) {\n    let { showSessions } = param;\n    _s();\n    const { isLoading, hasError, error, speakerData: speakers } = (0,_hooks_useRequestSpeakers__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(2000);\n    if (hasError === true) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-danger\",\n        children: [\n            \"ERROR: \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                children: [\n                    \"loading Speaker Data Failed \",\n                    error\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/SpeakersList.js\",\n                lineNumber: 17,\n                columnNumber: 16\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/SpeakersList.js\",\n        lineNumber: 16,\n        columnNumber: 7\n    }, this);\n    // if (isLoading) return <div>Loading...</div>;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_placeholder__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            type: \"media\",\n            rows: 15,\n            className: \"speakerslist-placeholder\",\n            ready: !isLoading,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: speakersData.map(function(speaker) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        speaker: speaker,\n                        showSessions: showSessions,\n                        onFavoriteToggle: ()=>{\n                            onFavoriteToggle(speaker.id);\n                        }\n                    }, speaker.id, false, {\n                        fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/SpeakersList.js\",\n                        lineNumber: 33,\n                        columnNumber: 15\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/SpeakersList.js\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/SpeakersList.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/SpeakersList.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(SpeakersList, \"P+ivHoAGKMuXKvxSDCRxhsJrbiI=\", false, function() {\n    return [\n        _hooks_useRequestSpeakers__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = SpeakersList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersList);\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUQ7QUFDakI7QUFFNkI7QUFFN0QsU0FBU0csYUFBYSxLQUFnQjtRQUFoQixFQUFFQyxZQUFZLEVBQUUsR0FBaEI7O0lBQ3BCLE1BQU0sRUFDSkMsU0FBUyxFQUNUQyxRQUFRLEVBQ1JDLEtBQUssRUFDTEMsYUFBYUMsUUFBUSxFQUN0QixHQUFHUCxxRUFBa0JBLENBQUM7SUFFdkIsSUFBSUksYUFBYSxNQUNmLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVOztZQUFjOzBCQUNwQiw4REFBQ0M7O29CQUFFO29CQUE2Qkw7Ozs7Ozs7Ozs7Ozs7SUFJN0MsK0NBQStDO0lBQy9DLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDWCx5REFBZ0JBO1lBQ2ZhLE1BQUs7WUFDTEMsTUFBTTtZQUNOSCxXQUFVO1lBQ1ZJLE9BQU8sQ0FBQ1Y7c0JBRVIsNEVBQUNLO2dCQUFJQyxXQUFVOzBCQUNaSyxhQUFhQyxHQUFHLENBQUMsU0FBVUMsT0FBTztvQkFDakMscUJBQ0UsOERBQUNqQixnREFBT0E7d0JBRU5pQixTQUFTQTt3QkFDVGQsY0FBY0E7d0JBQ2RlLGtCQUFrQjs0QkFDaEJBLGlCQUFpQkQsUUFBUUUsRUFBRTt3QkFDN0I7dUJBTEtGLFFBQVFFLEVBQUU7Ozs7O2dCQVFyQjs7Ozs7Ozs7Ozs7Ozs7OztBQUtWO0dBekNTakI7O1FBTUhELGlFQUFrQkE7OztLQU5mQztBQTJDVCwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanM/MmE2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RQbGFjZWhvbGRlciBmcm9tIFwicmVhY3QtcGxhY2Vob2xkZXJcIjtcbmltcG9ydCBTcGVha2VyIGZyb20gXCIuL1NwZWFrZXJcIjtcblxuaW1wb3J0IHVzZVJlcXVlc3RTcGVha2VycyBmcm9tIFwiLi4vaG9va3MvdXNlUmVxdWVzdFNwZWFrZXJzXCI7XG5cbmZ1bmN0aW9uIFNwZWFrZXJzTGlzdCh7IHNob3dTZXNzaW9ucyB9KSB7XG4gIGNvbnN0IHtcbiAgICBpc0xvYWRpbmcsXG4gICAgaGFzRXJyb3IsXG4gICAgZXJyb3IsXG4gICAgc3BlYWtlckRhdGE6IHNwZWFrZXJzLFxuICB9ID0gdXNlUmVxdWVzdFNwZWFrZXJzKDIwMDApO1xuXG4gIGlmIChoYXNFcnJvciA9PT0gdHJ1ZSlcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPlxuICAgICAgICBFUlJPUjogPGI+bG9hZGluZyBTcGVha2VyIERhdGEgRmFpbGVkIHtlcnJvcn08L2I+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gIC8vIGlmIChpc0xvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3BlYWtlcnMtbGlzdFwiPlxuICAgICAgPFJlYWN0UGxhY2Vob2xkZXJcbiAgICAgICAgdHlwZT1cIm1lZGlhXCJcbiAgICAgICAgcm93cz17MTV9XG4gICAgICAgIGNsYXNzTmFtZT1cInNwZWFrZXJzbGlzdC1wbGFjZWhvbGRlclwiXG4gICAgICAgIHJlYWR5PXshaXNMb2FkaW5nfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIHtzcGVha2Vyc0RhdGEubWFwKGZ1bmN0aW9uIChzcGVha2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8U3BlYWtlclxuICAgICAgICAgICAgICAgIGtleT17c3BlYWtlci5pZH1cbiAgICAgICAgICAgICAgICBzcGVha2VyPXtzcGVha2VyfVxuICAgICAgICAgICAgICAgIHNob3dTZXNzaW9ucz17c2hvd1Nlc3Npb25zfVxuICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGUoc3BlYWtlci5pZCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9SZWFjdFBsYWNlaG9sZGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTcGVha2Vyc0xpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3RQbGFjZWhvbGRlciIsIlNwZWFrZXIiLCJ1c2VSZXF1ZXN0U3BlYWtlcnMiLCJTcGVha2Vyc0xpc3QiLCJzaG93U2Vzc2lvbnMiLCJpc0xvYWRpbmciLCJoYXNFcnJvciIsImVycm9yIiwic3BlYWtlckRhdGEiLCJzcGVha2VycyIsImRpdiIsImNsYXNzTmFtZSIsImIiLCJ0eXBlIiwicm93cyIsInJlYWR5Iiwic3BlYWtlcnNEYXRhIiwibWFwIiwic3BlYWtlciIsIm9uRmF2b3JpdGVUb2dnbGUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SpeakersList.js\n"));

/***/ }),

/***/ "./src/hooks/useRequestSpeakers.js":
/*!*****************************************!*\
  !*** ./src/hooks/useRequestSpeakers.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _s = $RefreshSig$();\n\n\nfunction useRequestSpeakers() {\n    let delayTime = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1000;\n    _s();\n    const [speakersData, setSpeakersData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [hasError, setHasError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function delayFunc() {\n            try {\n                await delay(delayTime);\n                // throw \"Had Error\";\n                setIsLoading(false);\n                setSpeakersData(_SpeakerData__WEBPACK_IMPORTED_MODULE_0__.data);\n            } catch (error) {\n                setIsLoading(false);\n                setHasError(true);\n                setError(error);\n            }\n        }\n        delayFunc();\n    }, []);\n    function onFavoriteToggle(id) {\n        const speakersRecPrevious = speakersData.find(function(rec) {\n            return rec.id === id;\n        });\n        const speakerRecUpdated = {\n            ...speakersRecPrevious,\n            favorite: !speakersRecPrevious.favorite\n        };\n        const speakersDataNew = speakersData.map(function(rec) {\n            return rec.id === id ? speakerRecUpdated : rec;\n        });\n        setSpeakersData(speakersDataNew);\n    }\n    return {\n        isLoading,\n        hasError,\n        error,\n        speakersData,\n        onFavoriteToggle\n    };\n}\n_s(useRequestSpeakers, \"IpQ+Us2P4Xt7AGo/hSzSHhmxH+0=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useRequestSpeakers);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlUmVxdWVzdFNwZWFrZXJzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlDO0FBQ0c7QUFFNUMsU0FBU0c7UUFBbUJDLFlBQUFBLGlFQUFZOztJQUN0QyxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25ELE1BQU0sQ0FBQ00sV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNRLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDVSxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1ZLFFBQVEsQ0FBQ0MsS0FBTyxJQUFJQyxRQUFRLENBQUNDLFVBQVlDLFdBQVdELFNBQVNGO0lBQ25FWixnREFBU0EsQ0FBQztRQUNSLGVBQWVnQjtZQUNiLElBQUk7Z0JBQ0YsTUFBTUwsTUFBTVQ7Z0JBQ1oscUJBQXFCO2dCQUNyQkksYUFBYTtnQkFDYkYsZ0JBQWdCTiw4Q0FBSUE7WUFDdEIsRUFBRSxPQUFPVyxPQUFPO2dCQUNkSCxhQUFhO2dCQUNiRSxZQUFZO2dCQUNaRSxTQUFTRDtZQUNYO1FBQ0Y7UUFDQU87SUFDRixHQUFHLEVBQUU7SUFFTCxTQUFTQyxpQkFBaUJDLEVBQUU7UUFDMUIsTUFBTUMsc0JBQXNCaEIsYUFBYWlCLElBQUksQ0FBQyxTQUFVQyxHQUFHO1lBQ3pELE9BQU9BLElBQUlILEVBQUUsS0FBS0E7UUFDcEI7UUFDQSxNQUFNSSxvQkFBb0I7WUFDeEIsR0FBR0gsbUJBQW1CO1lBQ3RCSSxVQUFVLENBQUNKLG9CQUFvQkksUUFBUTtRQUN6QztRQUVBLE1BQU1DLGtCQUFrQnJCLGFBQWFzQixHQUFHLENBQUMsU0FBVUosR0FBRztZQUNwRCxPQUFPQSxJQUFJSCxFQUFFLEtBQUtBLEtBQUtJLG9CQUFvQkQ7UUFDN0M7UUFFQWpCLGdCQUFnQm9CO0lBQ2xCO0lBRUEsT0FBTztRQUFFbkI7UUFBV0U7UUFBVUU7UUFBT047UUFBY2M7SUFBaUI7QUFDdEU7R0F4Q1NoQjtBQTBDVCwrREFBZUEsa0JBQWtCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy91c2VSZXF1ZXN0U3BlYWtlcnMuanM/MDFjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uLy4uL1NwZWFrZXJEYXRhXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIHVzZVJlcXVlc3RTcGVha2VycyhkZWxheVRpbWUgPSAxMDAwKSB7XG4gIGNvbnN0IFtzcGVha2Vyc0RhdGEsIHNldFNwZWFrZXJzRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2hhc0Vycm9yLCBzZXRIYXNFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgZGVsYXkgPSAobXMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZGVsYXlGdW5jKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZGVsYXkoZGVsYXlUaW1lKTtcbiAgICAgICAgLy8gdGhyb3cgXCJIYWQgRXJyb3JcIjtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0U3BlYWtlcnNEYXRhKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0SGFzRXJyb3IodHJ1ZSk7XG4gICAgICAgIHNldEVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZGVsYXlGdW5jKCk7XG4gIH0sIFtdKTtcblxuICBmdW5jdGlvbiBvbkZhdm9yaXRlVG9nZ2xlKGlkKSB7XG4gICAgY29uc3Qgc3BlYWtlcnNSZWNQcmV2aW91cyA9IHNwZWFrZXJzRGF0YS5maW5kKGZ1bmN0aW9uIChyZWMpIHtcbiAgICAgIHJldHVybiByZWMuaWQgPT09IGlkO1xuICAgIH0pO1xuICAgIGNvbnN0IHNwZWFrZXJSZWNVcGRhdGVkID0ge1xuICAgICAgLi4uc3BlYWtlcnNSZWNQcmV2aW91cyxcbiAgICAgIGZhdm9yaXRlOiAhc3BlYWtlcnNSZWNQcmV2aW91cy5mYXZvcml0ZSxcbiAgICB9O1xuXG4gICAgY29uc3Qgc3BlYWtlcnNEYXRhTmV3ID0gc3BlYWtlcnNEYXRhLm1hcChmdW5jdGlvbiAocmVjKSB7XG4gICAgICByZXR1cm4gcmVjLmlkID09PSBpZCA/IHNwZWFrZXJSZWNVcGRhdGVkIDogcmVjO1xuICAgIH0pO1xuXG4gICAgc2V0U3BlYWtlcnNEYXRhKHNwZWFrZXJzRGF0YU5ldyk7XG4gIH1cblxuICByZXR1cm4geyBpc0xvYWRpbmcsIGhhc0Vycm9yLCBlcnJvciwgc3BlYWtlcnNEYXRhLCBvbkZhdm9yaXRlVG9nZ2xlIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlcXVlc3RTcGVha2VycztcbiJdLCJuYW1lcyI6WyJkYXRhIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZXF1ZXN0U3BlYWtlcnMiLCJkZWxheVRpbWUiLCJzcGVha2Vyc0RhdGEiLCJzZXRTcGVha2Vyc0RhdGEiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJoYXNFcnJvciIsInNldEhhc0Vycm9yIiwiZXJyb3IiLCJzZXRFcnJvciIsImRlbGF5IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJkZWxheUZ1bmMiLCJvbkZhdm9yaXRlVG9nZ2xlIiwiaWQiLCJzcGVha2Vyc1JlY1ByZXZpb3VzIiwiZmluZCIsInJlYyIsInNwZWFrZXJSZWNVcGRhdGVkIiwiZmF2b3JpdGUiLCJzcGVha2Vyc0RhdGFOZXciLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useRequestSpeakers.js\n"));

/***/ })

});