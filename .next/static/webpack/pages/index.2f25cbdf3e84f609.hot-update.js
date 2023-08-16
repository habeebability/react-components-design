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

/***/ "./src/components/Speaker.js":
/*!***********************************!*\
  !*** ./src/components/Speaker.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Session(param) {\n    let { title, room } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"session w-100\",\n        children: [\n            title,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"Room: \",\n                    room\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/Speaker.js\",\n                lineNumber: 4,\n                columnNumber: 15\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/Speaker.js\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, this);\n}\n_c = Session;\nfunction Sessions(param) {\n    let { sessions } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sessionBox card h-250\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, {\n            title: sessions[0].title,\n            room: sessions[0].room.name\n        }, void 0, false, {\n            fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/Speaker.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/Speaker.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Sessions;\nfunction SpeakerImage(param) {\n    let { id, first, last } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"contain-fit\",\n            src: \"/images/speaker-\".concat(id, \".jpg\"),\n            width: \"300\",\n            alt: \"\".concat(first, \" \").concat(last)\n        }, void 0, false, {\n            fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/Speaker.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/Speaker.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_c2 = SpeakerImage;\nfunction SpeakerFavorite(param) {\n    let { favorite, onFavoriteToggle } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"action padB1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            onClick: onFavoriteToggle,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: favorite === true ? \"fa fa-star orange\" : \"fa fa-star-o orange\"\n                }, void 0, false, {\n                    fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/Speaker.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this),\n                \"Favorite\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/Speaker.js\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/Speaker.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_c3 = SpeakerFavorite;\nfunction SpeakerDemographics(param) {\n    let { first, last, bio, company, twitterHandle, favorite, onFavoriteToggle } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    children: [\n                        first,\n                        \" \",\n                        last\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/Speaker.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/Speaker.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerFavorite, {\n                favorite: favorite,\n                onFavoriteToggle: onFavoriteToggle\n            }, void 0, false, {\n                fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/Speaker.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-description\",\n                        children: bio\n                    }, void 0, false, {\n                        fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/Speaker.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"social d-flex flex-row mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"company\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Company\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/Speaker.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: company\n                                    }, void 0, false, {\n                                        fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/Speaker.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/Speaker.js\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"twitter\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Twitter\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/Speaker.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: twitterHandle\n                                    }, void 0, false, {\n                                        fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/Speaker.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/Speaker.js\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/Speaker.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/Speaker.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/Speaker.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_c4 = SpeakerDemographics;\nfunction Speaker(param) {\n    let { speaker, showSessions, onFavoriteToggle } = param;\n    const { id, first, last, sessions } = speaker;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card card-height p-4 mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerImage, {\n                        id: id,\n                        first: first,\n                        last: last\n                    }, void 0, false, {\n                        fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/Speaker.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerDemographics, {\n                        ...speaker,\n                        onFavoriteToggle: onFavoriteToggle\n                    }, void 0, false, {\n                        fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/Speaker.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/Speaker.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            showSessions === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {\n                sessions: sessions\n            }, void 0, false, {\n                fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/Speaker.js\",\n                lineNumber: 91,\n                columnNumber: 32\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/habeeb/Workspace/training-react/react-components-design/src/components/Speaker.js\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, this);\n}\n_c5 = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"SpeakerImage\");\n$RefreshReg$(_c3, \"SpeakerFavorite\");\n$RefreshReg$(_c4, \"SpeakerDemographics\");\n$RefreshReg$(_c5, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXIuanM/MjkyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBTZXNzaW9uKHsgdGl0bGUsIHJvb20gfSkge1xuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlc3Npb24gdy0xMDBcIj5cbiAgICAgIHt0aXRsZX0gPHN0cm9uZz5Sb29tOiB7cm9vbX08L3N0cm9uZz5cbiAgICA8L3NwYW4+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNlc3Npb25zKHsgc2Vzc2lvbnMgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbkJveCBjYXJkIGgtMjUwXCI+XG4gICAgICA8U2Vzc2lvbiB0aXRsZT17c2Vzc2lvbnNbMF0udGl0bGV9IHJvb209e3Nlc3Npb25zWzBdLnJvb20ubmFtZX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU3BlYWtlckltYWdlKHsgaWQsIGZpcnN0LCBsYXN0IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW1nIGQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTMwMFwiPlxuICAgICAgPGltZ1xuICAgICAgICBjbGFzc05hbWU9XCJjb250YWluLWZpdFwiXG4gICAgICAgIHNyYz17YC9pbWFnZXMvc3BlYWtlci0ke2lkfS5qcGdgfVxuICAgICAgICB3aWR0aD1cIjMwMFwiXG4gICAgICAgIGFsdD17YCR7Zmlyc3R9ICR7bGFzdH1gfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU3BlYWtlckZhdm9yaXRlKHsgZmF2b3JpdGUsIG9uRmF2b3JpdGVUb2dnbGUgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uIHBhZEIxXCI+XG4gICAgICA8c3BhbiBvbkNsaWNrPXtvbkZhdm9yaXRlVG9nZ2xlfT5cbiAgICAgICAgPGlcbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgZmF2b3JpdGUgPT09IHRydWUgPyBcImZhIGZhLXN0YXIgb3JhbmdlXCIgOiBcImZhIGZhLXN0YXItbyBvcmFuZ2VcIlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICAgRmF2b3JpdGVcbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU3BlYWtlckRlbW9ncmFwaGljcyh7XG4gIGZpcnN0LFxuICBsYXN0LFxuICBiaW8sXG4gIGNvbXBhbnksXG4gIHR3aXR0ZXJIYW5kbGUsXG4gIGZhdm9yaXRlLFxuICBvbkZhdm9yaXRlVG9nZ2xlLFxufSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbmZvXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlIHctMjAwXCI+XG4gICAgICAgICAge2ZpcnN0fSB7bGFzdH1cbiAgICAgICAgPC9oMz5cbiAgICAgIDwvZGl2PlxuICAgICAgPFNwZWFrZXJGYXZvcml0ZVxuICAgICAgICBmYXZvcml0ZT17ZmF2b3JpdGV9XG4gICAgICAgIG9uRmF2b3JpdGVUb2dnbGU9e29uRmF2b3JpdGVUb2dnbGV9XG4gICAgICAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC1kZXNjcmlwdGlvblwiPntiaW99PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbCBkLWZsZXggZmxleC1yb3cgbXQtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueVwiPlxuICAgICAgICAgICAgPGg1PkNvbXBhbnk8L2g1PlxuICAgICAgICAgICAgPGg2Pntjb21wYW55fTwvaDY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d2l0dGVyXCI+XG4gICAgICAgICAgICA8aDU+VHdpdHRlcjwvaDU+XG4gICAgICAgICAgICA8aDY+e3R3aXR0ZXJIYW5kbGV9PC9oNj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU3BlYWtlcih7IHNwZWFrZXIsIHNob3dTZXNzaW9ucywgb25GYXZvcml0ZVRvZ2dsZSB9KSB7XG4gIGNvbnN0IHsgaWQsIGZpcnN0LCBsYXN0LCBzZXNzaW9ucyB9ID0gc3BlYWtlcjtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtaGVpZ2h0IHAtNCBtdC00XCI+XG4gICAgICAgIHsvKiBzcGVha2VyIGltYWdlIGNvbXBvbmVudCAqL31cbiAgICAgICAgPFNwZWFrZXJJbWFnZSBpZD17aWR9IGZpcnN0PXtmaXJzdH0gbGFzdD17bGFzdH0gLz5cbiAgICAgICAgPFNwZWFrZXJEZW1vZ3JhcGhpY3Mgey4uLnNwZWFrZXJ9IG9uRmF2b3JpdGVUb2dnbGU9e29uRmF2b3JpdGVUb2dnbGV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzaG93U2Vzc2lvbnMgPT09IHRydWUgPyA8U2Vzc2lvbnMgc2Vzc2lvbnM9e3Nlc3Npb25zfSAvPiA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXI7XG4iXSwibmFtZXMiOlsiU2Vzc2lvbiIsInRpdGxlIiwicm9vbSIsInNwYW4iLCJjbGFzc05hbWUiLCJzdHJvbmciLCJTZXNzaW9ucyIsInNlc3Npb25zIiwiZGl2IiwibmFtZSIsIlNwZWFrZXJJbWFnZSIsImlkIiwiZmlyc3QiLCJsYXN0IiwiaW1nIiwic3JjIiwid2lkdGgiLCJhbHQiLCJTcGVha2VyRmF2b3JpdGUiLCJmYXZvcml0ZSIsIm9uRmF2b3JpdGVUb2dnbGUiLCJvbkNsaWNrIiwiaSIsIlNwZWFrZXJEZW1vZ3JhcGhpY3MiLCJiaW8iLCJjb21wYW55IiwidHdpdHRlckhhbmRsZSIsImgzIiwicCIsImg1IiwiaDYiLCJTcGVha2VyIiwic3BlYWtlciIsInNob3dTZXNzaW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Speaker.js\n"));

/***/ })

});