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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Home 3\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PICHAU\\\\Documents\\\\meusprojetos\\\\workspace\\\\ideia-unica\\\\ideia-unica\\\\pages\\\\index.js\",\n                lineNumber: 6,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Contador, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PICHAU\\\\Documents\\\\meusprojetos\\\\workspace\\\\ideia-unica\\\\ideia-unica\\\\pages\\\\index.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"teste\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PICHAU\\\\Documents\\\\meusprojetos\\\\workspace\\\\ideia-unica\\\\ideia-unica\\\\pages\\\\index.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PICHAU\\\\Documents\\\\meusprojetos\\\\workspace\\\\ideia-unica\\\\ideia-unica\\\\pages\\\\index.js\",\n        lineNumber: 5,\n        columnNumber: 11\n    }, this);\n}\n_c = Home;\nfunction Contador() {\n    var adicionarContador = //contador será variavel que guarda o estado atual, set contador a função que soma essea variavel \n    //-------------------------------------------------------------------------\n    function adicionarContador() {\n        setContador(contador + 1); //vai somar\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), contador = ref[0], setContador = ref[1]; //1 representa que a primeiro indice do array servira de estado\n    //parte visual a ser retornada\n    //exibe o valor da variavel \n    //toda vez que for clicado vai chamar a função de somar,que tem uma fuunção que soma a variavel de estado\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: contador\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PICHAU\\\\Documents\\\\meusprojetos\\\\workspace\\\\ideia-unica\\\\ideia-unica\\\\pages\\\\index.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: adicionarContador,\n                children: \" adicionar \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PICHAU\\\\Documents\\\\meusprojetos\\\\workspace\\\\ideia-unica\\\\ideia-unica\\\\pages\\\\index.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PICHAU\\\\Documents\\\\meusprojetos\\\\workspace\\\\ideia-unica\\\\ideia-unica\\\\pages\\\\index.js\",\n        lineNumber: 30,\n        columnNumber: 13\n    }, this);\n}\n_s(Contador, \"vpR6s6c+pWN9iYRRE4XhvQBqRwA=\");\n_c1 = Contador;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"Contador\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkI7O1NBRXBCQyxJQUFJLEdBQ2IsQ0FBQztJQUNHLE1BQU0sNkVBQUNDLENBQUc7O3dGQUNUQyxDQUFFOzBCQUFDLENBQU07Ozs7Ozt3RkFDREMsUUFBUTs7Ozs7d0ZBQ1JGLENBQUc7MEJBQUMsQ0FBSzs7Ozs7Ozs7Ozs7O0FBRXRCLENBQUM7S0FQUUQsSUFBSTtTQVdKRyxRQUFRLEdBQUcsQ0FBQztRQUtKQyxpQkFBaUIsR0FIOUIsRUFBcUc7SUFFckcsRUFBMkU7SUFDdkUsUUFBUSxDQUFDQSxpQkFBaUIsR0FDMUIsQ0FBQztRQUNHQyxXQUFXLENBQUNDLFFBQVEsR0FBRSxDQUFDLENBQUMsQ0FBQyxHQUFXO0lBQ3hDLENBQUM7O0lBUEwsR0FBSyxDQUEwQlAsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsR0FBbENPLFFBQVEsR0FBZ0JQLEdBQVcsS0FBMUJNLFdBQVcsR0FBSU4sR0FBVyxLQUFDLEVBQStEO0lBV3RHLEVBQThCO0lBQzdCLEVBQTRCO0lBQzVCLEVBQXlHO0lBQzFHLE1BQU0sNkVBQ0RFLENBQUc7O3dGQUNIQSxDQUFHOzBCQUFFSyxRQUFROzs7Ozs7d0ZBRWJDLENBQU07Z0JBQUNDLE9BQU8sRUFBRUosaUJBQWlCOzBCQUFFLENBQVc7Ozs7Ozs7Ozs7OztBQUczRCxDQUFDO0dBdEJRRCxRQUFRO01BQVJBLFFBQVE7QUF1QmpCLCtEQUFlSCxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0e3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBIb21lKClcclxue1xyXG4gICAgcmV0dXJuPGRpdj5cclxuICAgIDxoMT5Ib21lIDM8L2gxPlxyXG4gICAgICAgICAgICA8Q29udGFkb3IvPlxyXG4gICAgICAgICAgICA8ZGl2PnRlc3RlPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiBcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBDb250YWRvcigpIHtcclxuICAgIGNvbnN0IFtjb250YWRvcixzZXRDb250YWRvcl0gPSB1c2VTdGF0ZSgxKTsvLzEgcmVwcmVzZW50YSBxdWUgYSBwcmltZWlybyBpbmRpY2UgZG8gYXJyYXkgc2VydmlyYSBkZSBlc3RhZG9cclxuICAgIC8vY29udGFkb3Igc2Vyw6EgdmFyaWF2ZWwgcXVlIGd1YXJkYSBvIGVzdGFkbyBhdHVhbCwgc2V0IGNvbnRhZG9yIGEgZnVuw6fDo28gcXVlIHNvbWEgZXNzZWEgdmFyaWF2ZWwgXHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgZnVuY3Rpb24gYWRpY2lvbmFyQ29udGFkb3IoKS8vZnVuw6fDo28gcXVlIHNlcsOhIGNoYWFkYSBubyBldmVudG8gZG8gYm90w6NvIGNsaWNrXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXRDb250YWRvcihjb250YWRvciArMSk7Ly92YWkgc29tYXJcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy9wYXJ0ZSB2aXN1YWwgYSBzZXIgcmV0b3JuYWRhXHJcbiAgICAgICAgIC8vZXhpYmUgbyB2YWxvciBkYSB2YXJpYXZlbCBcclxuICAgICAgICAgLy90b2RhIHZleiBxdWUgZm9yIGNsaWNhZG8gdmFpIGNoYW1hciBhIGZ1bsOnw6NvIGRlIHNvbWFyLHF1ZSB0ZW0gdW1hIGZ1dW7Dp8OjbyBxdWUgc29tYSBhIHZhcmlhdmVsIGRlIGVzdGFkb1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj57Y29udGFkb3J9PC9kaXY+IFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkaWNpb25hckNvbnRhZG9yfT4gYWRpY2lvbmFyIDwvYnV0dG9uPiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxufSAgXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSG9tZSIsImRpdiIsImgxIiwiQ29udGFkb3IiLCJhZGljaW9uYXJDb250YWRvciIsInNldENvbnRhZG9yIiwiY29udGFkb3IiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});