"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/saf-planing",{

/***/ "./pages/campaigns/saf-planing/index.js":
/*!**********************************************!*\
  !*** ./pages/campaigns/saf-planing/index.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dropdown */ \"./pages/campaigns/saf-planing/Dropdown.js\");\n/* harmony import */ var _SpeciesContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SpeciesContext */ \"./pages/campaigns/saf-planing/SpeciesContext.js\");\n/* harmony import */ var _PlaningView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PlaningView */ \"./pages/campaigns/saf-planing/PlaningView.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_images_Tempo_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/images/Tempo.jpeg */ \"./pages/public/images/Tempo.jpeg\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction SafPlaning() {\n    var _this = this;\n    var handleSpeciesSelection = function handleSpeciesSelection(stratumName, timePeriod, species) {\n        setSelectedSpecies(function(prev) {\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({}, prev), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])({}, stratumName, (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({}, prev[stratumName]), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])({}, timePeriod, species))));\n        });\n    };\n    var handleSave = function handleSave() {\n        setSavedData(selectedSpecies);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), selectedSpecies = ref[0], setSelectedSpecies = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), savedData = ref1[0], setSavedData = ref1[1];\n    var stratumNames = [\n        \"Emergente\",\n        \"Alto\",\n        \"M\\xe9dio\",\n        \"Baixo\"\n    ];\n    var timePeriods = [\n        \"0-6 meses\",\n        \"6-18 meses\",\n        \"2-10 anos\",\n        \"10-30 anos\"\n    ]; // Corrigindo o valor de '2-10 years'\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Planejamento de SAF\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Develop\\\\GrowEcosystems\\\\web3-saf-design\\\\pages\\\\campaigns\\\\saf-planing\\\\index.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeciesContext__WEBPACK_IMPORTED_MODULE_4__.SpeciesProvider, {\n                value: {\n                    selectedSpecies: selectedSpecies,\n                    setSelectedSpecies: setSelectedSpecies\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: styles.container,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                            src: _public_images_Tempo_jpeg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                            alt: \"Descri\\xe7\\xe3o da imagem\",\n                            style: {\n                                width: \"69%\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Develop\\\\GrowEcosystems\\\\web3-saf-design\\\\pages\\\\campaigns\\\\saf-planing\\\\index.js\",\n                            lineNumber: 36,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                            style: styles.table,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                children: \"Estratos\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Develop\\\\GrowEcosystems\\\\web3-saf-design\\\\pages\\\\campaigns\\\\saf-planing\\\\index.js\",\n                                                lineNumber: 40,\n                                                columnNumber: 15\n                                            }, this),\n                                            timePeriods.map(function(timePeriod) {\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    children: timePeriod\n                                                }, timePeriod, false, {\n                                                    fileName: \"C:\\\\Develop\\\\GrowEcosystems\\\\web3-saf-design\\\\pages\\\\campaigns\\\\saf-planing\\\\index.js\",\n                                                    lineNumber: 42,\n                                                    columnNumber: 17\n                                                }, _this);\n                                            })\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Develop\\\\GrowEcosystems\\\\web3-saf-design\\\\pages\\\\campaigns\\\\saf-planing\\\\index.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Develop\\\\GrowEcosystems\\\\web3-saf-design\\\\pages\\\\campaigns\\\\saf-planing\\\\index.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                    children: stratumNames.map(function(stratumName) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    children: stratumName\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Develop\\\\GrowEcosystems\\\\web3-saf-design\\\\pages\\\\campaigns\\\\saf-planing\\\\index.js\",\n                                                    lineNumber: 49,\n                                                    columnNumber: 17\n                                                }, _this),\n                                                timePeriods.map(function(timePeriod) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Dropdown__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                            selected: selectedSpecies[stratumName] ? selectedSpecies[stratumName][timePeriod] : null,\n                                                            onSelect: function(species) {\n                                                                return handleSpeciesSelection(stratumName, timePeriod, species);\n                                                            }\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Develop\\\\GrowEcosystems\\\\web3-saf-design\\\\pages\\\\campaigns\\\\saf-planing\\\\index.js\",\n                                                            lineNumber: 52,\n                                                            columnNumber: 21\n                                                        }, _this)\n                                                    }, timePeriod, false, {\n                                                        fileName: \"C:\\\\Develop\\\\GrowEcosystems\\\\web3-saf-design\\\\pages\\\\campaigns\\\\saf-planing\\\\index.js\",\n                                                        lineNumber: 51,\n                                                        columnNumber: 19\n                                                    }, _this);\n                                                })\n                                            ]\n                                        }, stratumName, true, {\n                                            fileName: \"C:\\\\Develop\\\\GrowEcosystems\\\\web3-saf-design\\\\pages\\\\campaigns\\\\saf-planing\\\\index.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 15\n                                        }, _this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Develop\\\\GrowEcosystems\\\\web3-saf-design\\\\pages\\\\campaigns\\\\saf-planing\\\\index.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Develop\\\\GrowEcosystems\\\\web3-saf-design\\\\pages\\\\campaigns\\\\saf-planing\\\\index.js\",\n                            lineNumber: 37,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Button, {\n                            onClick: handleSave,\n                            color: \"green\",\n                            style: {\n                                marginTop: \"10px\"\n                            },\n                            children: \"Salvar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Develop\\\\GrowEcosystems\\\\web3-saf-design\\\\pages\\\\campaigns\\\\saf-planing\\\\index.js\",\n                            lineNumber: 68,\n                            columnNumber: 9\n                        }, this),\n                        savedData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlaningView__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            savedData: savedData,\n                            stratumNames: stratumNames,\n                            timePeriods: timePeriods,\n                            style: {\n                                marginBottom: \"50px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Develop\\\\GrowEcosystems\\\\web3-saf-design\\\\pages\\\\campaigns\\\\saf-planing\\\\index.js\",\n                            lineNumber: 71,\n                            columnNumber: 23\n                        }, this),\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Develop\\\\GrowEcosystems\\\\web3-saf-design\\\\pages\\\\campaigns\\\\saf-planing\\\\index.js\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Develop\\\\GrowEcosystems\\\\web3-saf-design\\\\pages\\\\campaigns\\\\saf-planing\\\\index.js\",\n                lineNumber: 34,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Develop\\\\GrowEcosystems\\\\web3-saf-design\\\\pages\\\\campaigns\\\\saf-planing\\\\index.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(SafPlaning, \"HFvN/xwrALJ8hvrxoCUCVkklOoA=\");\n_c = SafPlaning;\nvar styles = {\n    container: {\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"center\",\n        marginTop: \"10px\",\n        marginBottom: \"40px\" // Ajuste a margem conforme necessário\n    },\n    table: {\n        borderCollapse: \"collapse\",\n        width: \"50%\"\n    },\n    button: {\n        marginTop: \"10px\"\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SafPlaning);\nvar _c;\n$RefreshReg$(_c, \"SafPlaning\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvc2FmLXBsYW5pbmcvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUF3QztBQUNRO0FBQ0w7QUFDVDtBQUNpQjtBQUNYO0FBQ1Q7QUFDNEI7QUFFM0QsU0FBU1MsVUFBVSxHQUFHOztRQU9YQyxzQkFBc0IsR0FBL0IsU0FBU0Esc0JBQXNCLENBQUNDLFdBQVcsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUU7UUFDaEVDLGtCQUFrQixDQUFDLFNBQUNDLElBQUk7bUJBQU0sd0tBQ3pCQSxJQUFJLEdBQ1Asc0ZBQUNKLFdBQVcsRUFBRyx3S0FDVkksSUFBSSxDQUFDSixXQUFXLENBQUMsR0FDcEIsc0ZBQUNDLFVBQVUsRUFBR0MsT0FBTyxFQUN0QixFQUNGO1NBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztRQUVRRyxVQUFVLEdBQW5CLFNBQVNBLFVBQVUsR0FBRztRQUNwQkMsWUFBWSxDQUFDQyxlQUFlLENBQUMsQ0FBQztJQUNoQyxDQUFDOztJQWxCRCxJQUE4Q2pCLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBbkRpQixlQUFlLEdBQXdCakIsR0FBWSxHQUFwQyxFQUFFYSxrQkFBa0IsR0FBSWIsR0FBWSxHQUFoQjtJQUMxQyxJQUFrQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUF2Q2tCLFNBQVMsR0FBa0JsQixJQUFZLEdBQTlCLEVBQUVnQixZQUFZLEdBQUloQixJQUFZLEdBQWhCO0lBRTlCLElBQU1tQixZQUFZLEdBQUc7UUFBQyxXQUFXO1FBQUUsTUFBTTtRQUFFLFVBQU87UUFBRSxPQUFPO0tBQUM7SUFDNUQsSUFBTUMsV0FBVyxHQUFHO1FBQUMsV0FBVztRQUFFLFlBQVk7UUFBRSxXQUFXO1FBQUUsWUFBWTtLQUFDLEVBQUUscUNBQXFDO0lBZ0JqSCxxQkFDRSw4REFBQ25CLDBEQUFNOzswQkFDTCw4REFBQ29CLElBQUU7MEJBQUMscUJBQW1COzs7OztvQkFBSzswQkFDOUIsOERBQUNqQiw0REFBZTtnQkFBQ2tCLEtBQUssRUFBRTtvQkFBRUwsZUFBZSxFQUFmQSxlQUFlO29CQUFFSixrQkFBa0IsRUFBbEJBLGtCQUFrQjtpQkFBRTswQkFDN0QsNEVBQUNVLEtBQUc7b0JBQUNDLEtBQUssRUFBRUMsTUFBTSxDQUFDQyxTQUFTOztzQ0FDMUIsOERBQUNwQixtREFBSzs0QkFBQ3FCLEdBQUcsRUFBRXBCLGlFQUFhOzRCQUFFcUIsR0FBRyxFQUFDLDJCQUFxQjs0QkFBQ0osS0FBSyxFQUFFO2dDQUFFSyxLQUFLLEVBQUUsS0FBSzs2QkFBRTs7Ozs7Z0NBQUc7c0NBQy9FLDhEQUFDQyxPQUFLOzRCQUFDTixLQUFLLEVBQUVDLE1BQU0sQ0FBQ0ssS0FBSzs7OENBQ3hCLDhEQUFDQyxPQUFLOzhDQUNKLDRFQUFDQyxJQUFFOzswREFDRCw4REFBQ0MsSUFBRTswREFBQyxVQUFROzs7OztvREFBSzs0Q0FDaEJiLFdBQVcsQ0FBQ2MsR0FBRyxDQUFDLFNBQUN2QixVQUFVO3FFQUMxQiw4REFBQ3NCLElBQUU7OERBQW1CdEIsVUFBVTttREFBdkJBLFVBQVU7Ozs7eURBQW1COzZDQUN2QyxDQUFDOzs7Ozs7NENBQ0M7Ozs7O3dDQUNDOzhDQUNSLDhEQUFDd0IsT0FBSzs4Q0FDSGhCLFlBQVksQ0FBQ2UsR0FBRyxDQUFDLFNBQUN4QixXQUFXOzZEQUM1Qiw4REFBQ3NCLElBQUU7OzhEQUNELDhEQUFDSSxJQUFFOzhEQUFFMUIsV0FBVzs7Ozs7eURBQU07Z0RBQ3JCVSxXQUFXLENBQUNjLEdBQUcsQ0FBQyxTQUFDdkIsVUFBVTt5RUFDMUIsOERBQUN5QixJQUFFO2tFQUNELDRFQUFDakMsaURBQVE7NERBQ1BrQyxRQUFRLEVBQ05wQixlQUFlLENBQUNQLFdBQVcsQ0FBQyxHQUN4Qk8sZUFBZSxDQUFDUCxXQUFXLENBQUMsQ0FBQ0MsVUFBVSxDQUFDLEdBQ3hDLElBQUk7NERBRVYyQixRQUFRLEVBQUUsU0FBQzFCLE9BQU87dUVBQ2hCSCxzQkFBc0IsQ0FBQ0MsV0FBVyxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sQ0FBQzs2REFBQTs7Ozs7aUVBRTFEO3VEQVZLRCxVQUFVOzs7OzZEQVdkO2lEQUNOLENBQUM7OzJDQWZLRCxXQUFXOzs7O2lEQWdCZjtxQ0FDTixDQUFDOzs7Ozt3Q0FDSTs7Ozs7O2dDQUNGO3NDQUNSLDhEQUFDUixzREFBTTs0QkFBQ3FDLE9BQU8sRUFBRXhCLFVBQVU7NEJBQUV5QixLQUFLLEVBQUMsT0FBTzs0QkFBQ2hCLEtBQUssRUFBRTtnQ0FBRWlCLFNBQVMsRUFBRSxNQUFNOzZCQUFFO3NDQUFFLFFBRXpFOzs7OztnQ0FBUzt3QkFDUnZCLFNBQVMsa0JBQUksOERBQUNiLG9EQUFXOzRCQUFDYSxTQUFTLEVBQUVBLFNBQVM7NEJBQUVDLFlBQVksRUFBRUEsWUFBWTs0QkFBRUMsV0FBVyxFQUFFQSxXQUFXOzRCQUFFSSxLQUFLLEVBQUU7Z0NBQUVrQixZQUFZLEVBQUUsTUFBTTs2QkFBRTs7Ozs7Z0NBQUk7d0JBQUMsR0FBQzs7Ozs7O3dCQUN4STs7Ozs7b0JBQ1U7Ozs7OztZQUNULENBQ1Q7QUFDSixDQUFDO0dBbEVRbEMsVUFBVTtBQUFWQSxLQUFBQSxVQUFVO0FBb0VuQixJQUFNaUIsTUFBTSxHQUFHO0lBQ2JDLFNBQVMsRUFBRTtRQUNUaUIsT0FBTyxFQUFFLE1BQU07UUFDZkMsYUFBYSxFQUFFLFFBQVE7UUFDdkJDLFVBQVUsRUFBRSxRQUFRO1FBQ3BCSixTQUFTLEVBQUUsTUFBTTtRQUNqQkMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxzQ0FBc0M7S0FDNUQ7SUFDRFosS0FBSyxFQUFFO1FBQ0xnQixjQUFjLEVBQUUsVUFBVTtRQUMxQmpCLEtBQUssRUFBRSxLQUFLO0tBQ2I7SUFDRGtCLE1BQU0sRUFBRTtRQUNOTixTQUFTLEVBQUUsTUFBTTtLQUNsQjtDQUNGO0FBRUQsK0RBQWVqQyxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3NhZi1wbGFuaW5nL2luZGV4LmpzPzFlNWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9Ecm9wZG93bic7XHJcbmltcG9ydCB7IFNwZWNpZXNQcm92aWRlciB9IGZyb20gJy4vU3BlY2llc0NvbnRleHQnO1xyXG5pbXBvcnQgUGxhbmluZ1ZpZXcgZnJvbSAnLi9QbGFuaW5nVmlldyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IGltYWdlU3VjZXNzYW8gZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlcy9UZW1wby5qcGVnJztcclxuXHJcbmZ1bmN0aW9uIFNhZlBsYW5pbmcoKSB7XHJcbiAgY29uc3QgW3NlbGVjdGVkU3BlY2llcywgc2V0U2VsZWN0ZWRTcGVjaWVzXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbc2F2ZWREYXRhLCBzZXRTYXZlZERhdGFdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICBjb25zdCBzdHJhdHVtTmFtZXMgPSBbXCJFbWVyZ2VudGVcIiwgXCJBbHRvXCIsIFwiTcOpZGlvXCIsIFwiQmFpeG9cIl07XHJcbiAgY29uc3QgdGltZVBlcmlvZHMgPSBbJzAtNiBtZXNlcycsICc2LTE4IG1lc2VzJywgJzItMTAgYW5vcycsICcxMC0zMCBhbm9zJ107IC8vIENvcnJpZ2luZG8gbyB2YWxvciBkZSAnMi0xMCB5ZWFycydcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU3BlY2llc1NlbGVjdGlvbihzdHJhdHVtTmFtZSwgdGltZVBlcmlvZCwgc3BlY2llcykge1xyXG4gICAgc2V0U2VsZWN0ZWRTcGVjaWVzKChwcmV2KSA9PiAoe1xyXG4gICAgICAuLi5wcmV2LFxyXG4gICAgICBbc3RyYXR1bU5hbWVdOiB7XHJcbiAgICAgICAgLi4ucHJldltzdHJhdHVtTmFtZV0sXHJcbiAgICAgICAgW3RpbWVQZXJpb2RdOiBzcGVjaWVzLFxyXG4gICAgICB9LFxyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU2F2ZSgpIHtcclxuICAgIHNldFNhdmVkRGF0YShzZWxlY3RlZFNwZWNpZXMpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxoMz5QbGFuZWphbWVudG8gZGUgU0FGPC9oMz5cclxuICAgIDxTcGVjaWVzUHJvdmlkZXIgdmFsdWU9e3sgc2VsZWN0ZWRTcGVjaWVzLCBzZXRTZWxlY3RlZFNwZWNpZXMgfX0+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlU3VjZXNzYW99IGFsdD1cIkRlc2NyacOnw6NvIGRhIGltYWdlbVwiIHN0eWxlPXt7IHdpZHRoOiAnNjklJyB9fS8+ICAgICBcclxuICAgICAgICA8dGFibGUgc3R5bGU9e3N0eWxlcy50YWJsZX0+XHJcbiAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGg+RXN0cmF0b3M8L3RoPlxyXG4gICAgICAgICAgICAgIHt0aW1lUGVyaW9kcy5tYXAoKHRpbWVQZXJpb2QpID0+IChcclxuICAgICAgICAgICAgICAgIDx0aCBrZXk9e3RpbWVQZXJpb2R9Pnt0aW1lUGVyaW9kfTwvdGg+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7c3RyYXR1bU5hbWVzLm1hcCgoc3RyYXR1bU5hbWUpID0+IChcclxuICAgICAgICAgICAgICA8dHIga2V5PXtzdHJhdHVtTmFtZX0+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3N0cmF0dW1OYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICB7dGltZVBlcmlvZHMubWFwKCh0aW1lUGVyaW9kKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e3RpbWVQZXJpb2R9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFNwZWNpZXNbc3RyYXR1bU5hbWVdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzZWxlY3RlZFNwZWNpZXNbc3RyYXR1bU5hbWVdW3RpbWVQZXJpb2RdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17KHNwZWNpZXMpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVNwZWNpZXNTZWxlY3Rpb24oc3RyYXR1bU5hbWUsIHRpbWVQZXJpb2QsIHNwZWNpZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU2F2ZX0gY29sb3I9J2dyZWVuJyBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuICAgICAgICAgIFNhbHZhclxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIHtzYXZlZERhdGEgJiYgPFBsYW5pbmdWaWV3IHNhdmVkRGF0YT17c2F2ZWREYXRhfSBzdHJhdHVtTmFtZXM9e3N0cmF0dW1OYW1lc30gdGltZVBlcmlvZHM9e3RpbWVQZXJpb2RzfSBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICc1MHB4JyB9fSAvPn0gey8qIEFkaWNpb25hbmRvIHRpbWVQZXJpb2RzIGNvbW8gcHJvcHJpZWRhZGUgKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9TcGVjaWVzUHJvdmlkZXI+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgbWFyZ2luVG9wOiAnMTBweCcsXHJcbiAgICBtYXJnaW5Cb3R0b206ICc0MHB4JyAvLyBBanVzdGUgYSBtYXJnZW0gY29uZm9ybWUgbmVjZXNzw6FyaW9cclxuICB9LFxyXG4gIHRhYmxlOiB7XHJcbiAgICBib3JkZXJDb2xsYXBzZTogJ2NvbGxhcHNlJyxcclxuICAgIHdpZHRoOiAnNTAlJywgLy8gQWp1c3RlIGEgbGFyZ3VyYSBjb25mb3JtZSBuZWNlc3PDoXJpb1xyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICBtYXJnaW5Ub3A6ICcxMHB4JyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2FmUGxhbmluZztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMYXlvdXQiLCJCdXR0b24iLCJEcm9wZG93biIsIlNwZWNpZXNQcm92aWRlciIsIlBsYW5pbmdWaWV3IiwiSW1hZ2UiLCJpbWFnZVN1Y2Vzc2FvIiwiU2FmUGxhbmluZyIsImhhbmRsZVNwZWNpZXNTZWxlY3Rpb24iLCJzdHJhdHVtTmFtZSIsInRpbWVQZXJpb2QiLCJzcGVjaWVzIiwic2V0U2VsZWN0ZWRTcGVjaWVzIiwicHJldiIsImhhbmRsZVNhdmUiLCJzZXRTYXZlZERhdGEiLCJzZWxlY3RlZFNwZWNpZXMiLCJzYXZlZERhdGEiLCJzdHJhdHVtTmFtZXMiLCJ0aW1lUGVyaW9kcyIsImgzIiwidmFsdWUiLCJkaXYiLCJzdHlsZSIsInN0eWxlcyIsImNvbnRhaW5lciIsInNyYyIsImFsdCIsIndpZHRoIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJtYXAiLCJ0Ym9keSIsInRkIiwic2VsZWN0ZWQiLCJvblNlbGVjdCIsIm9uQ2xpY2siLCJjb2xvciIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImJvcmRlckNvbGxhcHNlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/campaigns/saf-planing/index.js\n"));

/***/ })

});