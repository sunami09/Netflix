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

/***/ "./components/Banner.tsx":
/*!*******************************!*\
  !*** ./components/Banner.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constants_movie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/movie */ \"./constants/movie.ts\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Banner(param) {\n    var netflixOriginals = param.netflixOriginals;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), movie = ref[0], setMovie = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]);\n    }, [\n        netflixOriginals\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-0 left-0 h-[95vh] w-screen -z-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: \"\".concat(_constants_movie__WEBPACK_IMPORTED_MODULE_3__.baseUrl).concat((movie === null || movie === void 0 ? void 0 : movie.backdrop_path) || (movie === null || movie === void 0 ? void 0 : movie.poster_path)),\n                    layout: \"fill\",\n                    objectFit: \"cover\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sunam\\\\Desktop\\\\NetFilx1\\\\Netflix\\\\components\\\\Banner.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sunam\\\\Desktop\\\\NetFilx1\\\\Netflix\\\\components\\\\Banner.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold md:txet-4xl lg:text-5xl pt-16\",\n                children: (movie === null || movie === void 0 ? void 0 : movie.title) || (movie === null || movie === void 0 ? void 0 : movie.name) || (movie === null || movie === void 0 ? void 0 : movie.original_name)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sunam\\\\Desktop\\\\NetFilx1\\\\Netflix\\\\components\\\\Banner.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl pt-3\",\n                children: movie === null || movie === void 0 ? void 0 : movie.overview\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sunam\\\\Desktop\\\\NetFilx1\\\\Netflix\\\\components\\\\Banner.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bannerButton bg-white text-black\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaPlay, {\n                                className: \"h-4 w-4 text-black md:h-7 md:w-7\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sunam\\\\Desktop\\\\NetFilx1\\\\Netflix\\\\components\\\\Banner.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 21\n                            }, this),\n                            \"Play\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sunam\\\\Desktop\\\\NetFilx1\\\\Netflix\\\\components\\\\Banner.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bannerButton bg-[gray]/70\",\n                        children: [\n                            \"More Info \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__.InformationCircleIcon, {\n                                className: \"h-5 w-5 md:h-8 md:w-8\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sunam\\\\Desktop\\\\NetFilx1\\\\Netflix\\\\components\\\\Banner.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 73\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sunam\\\\Desktop\\\\NetFilx1\\\\Netflix\\\\components\\\\Banner.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sunam\\\\Desktop\\\\NetFilx1\\\\Netflix\\\\components\\\\Banner.tsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sunam\\\\Desktop\\\\NetFilx1\\\\Netflix\\\\components\\\\Banner.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\n_s(Banner, \"guVkFVVSew6hH2g/XBdZM40Ur3I=\");\n_c = Banner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Banner);\nvar _c;\n$RefreshReg$(_c, \"Banner\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jhbm5lci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQThCO0FBQ2M7QUFDQztBQUVOO0FBQ3dCOztBQU8vRCxTQUFTTSxNQUFNLENBQUUsS0FBMkIsRUFBRTtRQUE3QixnQkFBa0IsR0FBbEIsS0FBMkIsQ0FBekJDLGdCQUFnQjs7SUFFL0IsSUFBMEJMLEdBQTRCLEdBQTVCQSwrQ0FBUSxDQUFlLElBQUksQ0FBQyxFQWQxRCxLQWNnQixHQUFjQSxHQUE0QixHQUExQyxFQWRoQixRQWMwQixHQUFJQSxHQUE0QixHQUFoQztJQUV0QkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ1pRLFFBQVEsQ0FBQ0YsZ0JBQWdCLENBQUNHLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sRUFBRSxHQUFHTCxnQkFBZ0IsQ0FBQ00sTUFBTSxDQUFDLENBQUMsQ0FBQztLQUNsRixFQUFDO1FBQUNOLGdCQUFnQjtLQUFDLENBQUM7SUFFckIscUJBQ0ksOERBQUNPLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGdGQUFnRjs7MEJBRTNGLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsK0NBQStDOzBCQUMxRCw0RUFBQ2YsbURBQUs7b0JBQUNnQixHQUFHLEVBQUUsRUFBQyxDQUFZUixNQUEwQyxDQUFwREwscURBQU8sQ0FBOEMsUUFBM0NLLENBQUFBLEtBQUssYUFBTEEsS0FBSyxXQUFlLEdBQXBCQSxLQUFBQSxDQUFvQixHQUFwQkEsS0FBSyxDQUFFUyxhQUFhLEtBQUlULENBQUFBLEtBQUssYUFBTEEsS0FBSyxXQUFhLEdBQWxCQSxLQUFBQSxDQUFrQixHQUFsQkEsS0FBSyxDQUFFVSxXQUFXLEVBQUU7b0JBQ3JFQyxNQUFNLEVBQUMsTUFBTTtvQkFDYkMsU0FBUyxFQUFDLE9BQU87Ozs7O3dCQUNmOzs7OztvQkFDQTswQkFFTiw4REFBQ0MsSUFBRTtnQkFBQ04sU0FBUyxFQUFDLGtEQUFrRDswQkFBRVAsQ0FBQUEsS0FBSyxhQUFMQSxLQUFLLFdBQU8sR0FBWkEsS0FBQUEsQ0FBWSxHQUFaQSxLQUFLLENBQUVjLEtBQUssS0FBSWQsQ0FBQUEsS0FBSyxhQUFMQSxLQUFLLFdBQU0sR0FBWEEsS0FBQUEsQ0FBVyxHQUFYQSxLQUFLLENBQUVlLElBQUksS0FBSWYsQ0FBQUEsS0FBSyxhQUFMQSxLQUFLLFdBQWUsR0FBcEJBLEtBQUFBLENBQW9CLEdBQXBCQSxLQUFLLENBQUVnQixhQUFhOzs7OztvQkFBTTswQkFFM0gsOERBQUNDLEdBQUM7Z0JBQUNWLFNBQVMsRUFBQyxzRkFBc0Y7MEJBQUVQLEtBQUssYUFBTEEsS0FBSyxXQUFVLEdBQWZBLEtBQUFBLENBQWUsR0FBZkEsS0FBSyxDQUFFa0IsUUFBUTs7Ozs7b0JBQUs7MEJBRXpILDhEQUFDWixLQUFHO2dCQUFDQyxTQUFTLEVBQUMsZ0JBQWdCOztrQ0FDM0IsOERBQUNZLFFBQU07d0JBQUNaLFNBQVMsRUFBQyxrQ0FBa0M7OzBDQUNoRCw4REFBQ1gsa0RBQU07Z0NBQUNXLFNBQVMsRUFBQyxrQ0FBa0M7Ozs7O29DQUFFOzRCQUFBLE1BQ2xEOzs7Ozs7NEJBQVM7a0NBQ2pCLDhEQUFDWSxRQUFNO3dCQUFDWixTQUFTLEVBQUMsMkJBQTJCOzs0QkFBQyxZQUFVOzBDQUFBLDhEQUFDVix5RUFBcUI7Z0NBQzlFVSxTQUFTLEVBQUMsdUJBQXVCOzs7OztvQ0FBRzs7Ozs7OzRCQUFTOzs7Ozs7b0JBQzNDOzs7Ozs7WUFFSixDQUNUO0NBQ0o7R0FoQ1FULE1BQU07QUFBTkEsS0FBQUEsTUFBTTtBQWtDZiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Jhbm5lci50c3g/YWM3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBiYXNlVXJsIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9tb3ZpZVwiO1xyXG5pbXBvcnQgeyBNb3ZpZSB9IGZyb20gXCIuLi90eXBpbmdzXCJcclxuaW1wb3J0IHsgRmFQbGF5IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCJcclxuaW1wb3J0IHsgSW5mb3JtYXRpb25DaXJjbGVJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIjtcclxuXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgbmV0ZmxpeE9yaWdpbmFscyA6IE1vdmllW11cclxufVxyXG5cclxuZnVuY3Rpb24gQmFubmVyKCB7IG5ldGZsaXhPcmlnaW5hbHMgfTogUHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBbbW92aWUsIHNldE1vdmllXSA9IHVzZVN0YXRlPE1vdmllIHwgbnVsbD4obnVsbClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldE1vdmllKG5ldGZsaXhPcmlnaW5hbHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV0ZmxpeE9yaWdpbmFscy5sZW5ndGgpXSlcclxuICAgIH0sW25ldGZsaXhPcmlnaW5hbHNdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktMiBweS0xNiBtZDpzcGFjZS15LTQgbGc6aC1bNjV2aF0gbGc6anVzdGlmeS1lbmQgbGc6cGItMTJcIj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGgtWzk1dmhdIHctc2NyZWVuIC16LTEwXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtgJHtiYXNlVXJsfSR7bW92aWU/LmJhY2tkcm9wX3BhdGggfHwgbW92aWU/LnBvc3Rlcl9wYXRofWB9IFxyXG4gICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWQ6dHhldC00eGwgbGc6dGV4dC01eGwgcHQtMTZcIj57bW92aWU/LnRpdGxlIHx8IG1vdmllPy5uYW1lIHx8IG1vdmllPy5vcmlnaW5hbF9uYW1lfTwvaDE+XHJcblxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYXgtdy14cyB0ZXh0LXNoYWRvdy1tZCB0ZXh0LXhzIG1kOm1heC13LWxnIG1kOnRleHQtbGcgbGc6bWF4LXctMnhsIGxnOnRleHQtMnhsIHB0LTNcIj57bW92aWU/Lm92ZXJ2aWV3fTwvcD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmFubmVyQnV0dG9uIGJnLXdoaXRlIHRleHQtYmxhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RmFQbGF5IGNsYXNzTmFtZT1cImgtNCB3LTQgdGV4dC1ibGFjayBtZDpoLTcgbWQ6dy03XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIFBsYXk8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmFubmVyQnV0dG9uIGJnLVtncmF5XS83MFwiPk1vcmUgSW5mbyA8SW5mb3JtYXRpb25DaXJjbGVJY29uIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC01IHctNSBtZDpoLTggbWQ6dy04XCIgLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYW5uZXIiXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImJhc2VVcmwiLCJGYVBsYXkiLCJJbmZvcm1hdGlvbkNpcmNsZUljb24iLCJCYW5uZXIiLCJuZXRmbGl4T3JpZ2luYWxzIiwibW92aWUiLCJzZXRNb3ZpZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImJhY2tkcm9wX3BhdGgiLCJwb3N0ZXJfcGF0aCIsImxheW91dCIsIm9iamVjdEZpdCIsImgxIiwidGl0bGUiLCJuYW1lIiwib3JpZ2luYWxfbmFtZSIsInAiLCJvdmVydmlldyIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Banner.tsx\n");

/***/ })

});