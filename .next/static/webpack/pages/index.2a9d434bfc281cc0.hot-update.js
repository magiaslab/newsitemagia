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

/***/ "./pages/components/Navbar/Navbar.tsx":
/*!********************************************!*\
  !*** ./pages/components/Navbar/Navbar.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @headlessui/react */ \"./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/24/outline */ \"./node_modules/@heroicons/react/24/outline/index.js\");\n/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Drawer */ \"./pages/components/Navbar/Drawer.tsx\");\n/* harmony import */ var _Drawerdata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Drawerdata */ \"./pages/components/Navbar/Drawerdata.tsx\");\n/* harmony import */ var _Contactus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Contactus */ \"./pages/components/Navbar/Contactus.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst navigation = [\n    {\n        name: \"Chi siamo\",\n        href: \"#aboutus-section\",\n        current: false\n    },\n    {\n        name: \"Servizi\",\n        href: \"#services-section\",\n        current: false\n    },\n    {\n        name: \"FAQ\",\n        href: \"#faq-section\",\n        current: false\n    },\n    {\n        name: \"Blog\",\n        href: \"#blog-section\",\n        current: false\n    },\n    {\n        name: \"Testimonial\",\n        href: \"#testimonial-section\",\n        current: false\n    }\n];\nfunction classNames() {\n    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){\n        classes[_key] = arguments[_key];\n    }\n    return classes.filter(Boolean).join(\" \");\n}\nconst Navbar = ()=>{\n    _s();\n    const [isOpen, setIsOpen] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Disclosure, {\n        as: \"nav\",\n        className: \"navbar\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-3 mx-auto max-w-7xl md:p-6 lg:px-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative flex items-center h-12 sm:h-20\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center flex-1 sm:justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center flex-shrink-0 border-right\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/\",\n                                        className: \"text-2xl font-semibold text-black sm:text-4xl\",\n                                        children: \"Magiaslab\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/acipriani/Documents/GitHub/newsitemagia/pages/components/Navbar/Navbar.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/acipriani/Documents/GitHub/newsitemagia/pages/components/Navbar/Navbar.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"items-center hidden lg:flex border-right \",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-end space-x-4\",\n                                        children: navigation.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                href: item.href,\n                                                className: classNames(item.current ? \"bg-gray-900\" : \"navlinks hover:text-black\", \"px-3 py-4 rounded-md text-lg font-normal\"),\n                                                \"aria-current\": item.href ? \"page\" : undefined,\n                                                children: item.name\n                                            }, item.name, false, {\n                                                fileName: \"/Users/acipriani/Documents/GitHub/newsitemagia/pages/components/Navbar/Navbar.tsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 41\n                                            }, undefined))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/acipriani/Documents/GitHub/newsitemagia/pages/components/Navbar/Navbar.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/acipriani/Documents/GitHub/newsitemagia/pages/components/Navbar/Navbar.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Contactus__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/acipriani/Documents/GitHub/newsitemagia/pages/components/Navbar/Navbar.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/acipriani/Documents/GitHub/newsitemagia/pages/components/Navbar/Navbar.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"block lg:hidden\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__.Bars3Icon, {\n                                className: \"block w-6 h-6\",\n                                \"aria-hidden\": \"true\",\n                                onClick: ()=>setIsOpen(true)\n                            }, void 0, false, {\n                                fileName: \"/Users/acipriani/Documents/GitHub/newsitemagia/pages/components/Navbar/Navbar.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/acipriani/Documents/GitHub/newsitemagia/pages/components/Navbar/Navbar.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Drawer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            isOpen: isOpen,\n                            setIsOpen: setIsOpen,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Drawerdata__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/acipriani/Documents/GitHub/newsitemagia/pages/components/Navbar/Navbar.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/acipriani/Documents/GitHub/newsitemagia/pages/components/Navbar/Navbar.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/acipriani/Documents/GitHub/newsitemagia/pages/components/Navbar/Navbar.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/acipriani/Documents/GitHub/newsitemagia/pages/components/Navbar/Navbar.tsx\",\n                lineNumber: 34,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false)\n    }, void 0, false, {\n        fileName: \"/Users/acipriani/Documents/GitHub/newsitemagia/pages/components/Navbar/Navbar.tsx\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Navbar, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL05hdmJhci9OYXZiYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ2xCO0FBQ0g7QUFDOEI7QUFDMUI7QUFDUTtBQUNFO0FBUXhDLE1BQU1PLGFBQStCO0lBQ2pDO1FBQUVDLE1BQU07UUFBYUMsTUFBTTtRQUFvQkMsU0FBUyxLQUFLO0lBQUM7SUFDOUQ7UUFBRUYsTUFBTTtRQUFXQyxNQUFNO1FBQXFCQyxTQUFTLEtBQUs7SUFBQztJQUM3RDtRQUFFRixNQUFNO1FBQU9DLE1BQU07UUFBZ0JDLFNBQVMsS0FBSztJQUFDO0lBQ3BEO1FBQUVGLE1BQU07UUFBUUMsTUFBTTtRQUFpQkMsU0FBUyxLQUFLO0lBQUM7SUFDdEQ7UUFBRUYsTUFBTTtRQUFlQyxNQUFNO1FBQXdCQyxTQUFTLEtBQUs7SUFBQztDQUN2RTtBQUVELFNBQVNDLGFBQWlDO0lBQXRCO1FBQUdDLFFBQUgsdUJBQW9CO0lBQUQ7SUFDbkMsT0FBT0EsUUFBUUMsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7QUFDeEM7QUFFQSxNQUFNQyxTQUFTLElBQU07O0lBRWpCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHaEIscURBQWMsQ0FBQyxLQUFLO0lBRWhELHFCQUNJLDhEQUFDRix5REFBVUE7UUFBQ29CLElBQUc7UUFBTUMsV0FBVTtrQkFDM0I7c0JBQ0ksNEVBQUNDO2dCQUFJRCxXQUFVOzBCQUNYLDRFQUFDQztvQkFBSUQsV0FBVTs7c0NBQ1gsOERBQUNDOzRCQUFJRCxXQUFVOzs4Q0FJWCw4REFBQ0M7b0NBQUlELFdBQVU7OENBQ1gsNEVBQUNwQixrREFBSUE7d0NBQUNRLE1BQUs7d0NBQUlZLFdBQVU7a0RBQWdEOzs7Ozs7Ozs7Ozs4Q0FPN0UsOERBQUNDO29DQUFJRCxXQUFVOzhDQUNYLDRFQUFDQzt3Q0FBSUQsV0FBVTtrREFDVmQsV0FBV2dCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDYiw4REFBQ3ZCLGtEQUFJQTtnREFFRFEsTUFBTWUsS0FBS2YsSUFBSTtnREFDZlksV0FBV1YsV0FDUGEsS0FBS2QsT0FBTyxHQUFHLGdCQUFnQiwyQkFBMkIsRUFDMUQ7Z0RBRUplLGdCQUFjRCxLQUFLZixJQUFJLEdBQUcsU0FBU2lCLFNBQVM7MERBRTNDRixLQUFLaEIsSUFBSTsrQ0FSTGdCLEtBQUtoQixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OENBZTlCLDhEQUFDRixrREFBYUE7Ozs7Ozs7Ozs7O3NDQVFsQiw4REFBQ2dCOzRCQUFJRCxXQUFVO3NDQUNYLDRFQUFDbEIsa0VBQVNBO2dDQUFDa0IsV0FBVTtnQ0FBZ0JNLGVBQVk7Z0NBQU9DLFNBQVMsSUFBTVYsVUFBVSxJQUFJOzs7Ozs7Ozs7OztzQ0FLekYsOERBQUNkLCtDQUFNQTs0QkFBQ2EsUUFBUUE7NEJBQVFDLFdBQVdBO3NDQUMvQiw0RUFBQ2IsbURBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdkM7R0EvRE1XO0tBQUFBO0FBaUVOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhci50c3g/MTVhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXNjbG9zdXJlIH0gZnJvbSAnQGhlYWRsZXNzdWkvcmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCYXJzM0ljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmUnO1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gXCIuL0RyYXdlclwiO1xyXG5pbXBvcnQgRHJhd2VyZGF0YSBmcm9tIFwiLi9EcmF3ZXJkYXRhXCI7XHJcbmltcG9ydCBDb250YWN0dXNmb3JtIGZyb20gJy4vQ29udGFjdHVzJztcclxuXHJcbmludGVyZmFjZSBOYXZpZ2F0aW9uSXRlbSB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBocmVmOiBzdHJpbmc7XHJcbiAgICBjdXJyZW50OiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBuYXZpZ2F0aW9uOiBOYXZpZ2F0aW9uSXRlbVtdID0gW1xyXG4gICAgeyBuYW1lOiAnQ2hpIHNpYW1vJywgaHJlZjogJyNhYm91dHVzLXNlY3Rpb24nLCBjdXJyZW50OiBmYWxzZSB9LFxyXG4gICAgeyBuYW1lOiAnU2Vydml6aScsIGhyZWY6ICcjc2VydmljZXMtc2VjdGlvbicsIGN1cnJlbnQ6IGZhbHNlIH0sXHJcbiAgICB7IG5hbWU6ICdGQVEnLCBocmVmOiAnI2ZhcS1zZWN0aW9uJywgY3VycmVudDogZmFsc2UgfSxcclxuICAgIHsgbmFtZTogJ0Jsb2cnLCBocmVmOiAnI2Jsb2ctc2VjdGlvbicsIGN1cnJlbnQ6IGZhbHNlIH0sXHJcbiAgICB7IG5hbWU6ICdUZXN0aW1vbmlhbCcsIGhyZWY6ICcjdGVzdGltb25pYWwtc2VjdGlvbicsIGN1cnJlbnQ6IGZhbHNlIH0sXHJcbl1cclxuXHJcbmZ1bmN0aW9uIGNsYXNzTmFtZXMoLi4uY2xhc3Nlczogc3RyaW5nW10pIHtcclxuICAgIHJldHVybiBjbGFzc2VzLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJylcclxufVxyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RGlzY2xvc3VyZSBhcz1cIm5hdlwiIGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgbXgtYXV0byBtYXgtdy03eGwgbWQ6cC02IGxnOnB4LThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIGgtMTIgc206aC0yMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGZsZXgtMSBzbTpqdXN0aWZ5LWJldHdlZW5cIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogTE9HTyAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGZsZXgtc2hyaW5rLTAgYm9yZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9J3RleHQtMnhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ibGFjayBzbTp0ZXh0LTR4bCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hZ2lhc2xhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBMSU5LUyAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciBoaWRkZW4gbGc6ZmxleCBib3JkZXItcmlnaHQgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIHNwYWNlLXgtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmF2aWdhdGlvbi5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jdXJyZW50ID8gJ2JnLWdyYXktOTAwJyA6ICduYXZsaW5rcyBob3Zlcjp0ZXh0LWJsYWNrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3B4LTMgcHktNCByb3VuZGVkLW1kIHRleHQtbGcgZm9udC1ub3JtYWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWN1cnJlbnQ9e2l0ZW0uaHJlZiA/ICdwYWdlJyA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT0nanVzdGlmeS1lbmQgaGlkZGVuIHB4LTYgcHktNCB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgYmctdHJhbnNwYXJlbnQgcm91bmRlZC1mdWxsIGxnOmZsZXggbGc6cHgtMTIgbmF2YnV0dG9uIGhvdmVyOmJnLW5hdnlibHVlIGhvdmVyOnRleHQtd2hpdGUnPkNvbnRhY3QgdXM8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFjdHVzZm9ybSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogRFJBV0VSIEZPUiBNT0JJTEUgVklFVyAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBEUkFXRVIgSUNPTiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9jayBsZzpoaWRkZW4nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhcnMzSWNvbiBjbGFzc05hbWU9XCJibG9jayB3LTYgaC02XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKHRydWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBEUkFXRVIgTElOS1MgREFUQSAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcmF3ZXIgaXNPcGVuPXtpc09wZW59IHNldElzT3Blbj17c2V0SXNPcGVufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcmF3ZXJkYXRhIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhd2VyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICA8L0Rpc2Nsb3N1cmU+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl0sIm5hbWVzIjpbIkRpc2Nsb3N1cmUiLCJMaW5rIiwiUmVhY3QiLCJCYXJzM0ljb24iLCJEcmF3ZXIiLCJEcmF3ZXJkYXRhIiwiQ29udGFjdHVzZm9ybSIsIm5hdmlnYXRpb24iLCJuYW1lIiwiaHJlZiIsImN1cnJlbnQiLCJjbGFzc05hbWVzIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiTmF2YmFyIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidXNlU3RhdGUiLCJhcyIsImNsYXNzTmFtZSIsImRpdiIsIm1hcCIsIml0ZW0iLCJhcmlhLWN1cnJlbnQiLCJ1bmRlZmluZWQiLCJhcmlhLWhpZGRlbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/Navbar/Navbar.tsx\n"));

/***/ })

});