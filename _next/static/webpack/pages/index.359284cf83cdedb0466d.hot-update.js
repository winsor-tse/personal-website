self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Hero2/Hero2.js":
/*!***************************************!*\
  !*** ./src/components/Hero2/Hero2.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _HeroStyles2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeroStyles2 */ "./src/components/Hero2/HeroStyles2.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Winsor Tse\\Desktop\\react projects\\portfolio_website-STARTER\\src\\components\\Hero2\\Hero2.js",
    _this = undefined;





var ReactReveal = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ "vendors-node_modules_react-reveal_index_js").then(__webpack_require__.bind(__webpack_require__, /*! react-reveal */ "./node_modules/react-reveal/index.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-reveal */ "./node_modules/react-reveal/index.js")];
    },
    modules: ["..\\components\\Hero2\\Hero2.js -> " + 'react-reveal']
  }
});
_c2 = ReactReveal;

var Hero = function Hero(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
      row: true,
      nopadding: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroStyles2__WEBPACK_IMPORTED_MODULE_3__.LeftSection, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("video", {
          loop: true,
          autoPlay: true,
          muted: true,
          style: {
            width: "50%",
            height: "100%"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("source", {
            src: "images/waterFall.mp4",
            type: "video/mp4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 7
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, _this)
  }, void 0, false);
};

_c3 = Hero;
/* harmony default export */ __webpack_exports__["default"] = (Hero);

var _c, _c2, _c3;

$RefreshReg$(_c, "ReactReveal$dynamic");
$RefreshReg$(_c2, "ReactReveal");
$RefreshReg$(_c3, "Hero");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVybzIvSGVybzIuanMiXSwibmFtZXMiOlsiUmVhY3RSZXZlYWwiLCJkeW5hbWljIiwic3NyIiwiSGVybyIsInByb3BzIiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sbU1BQU47QUFBQSxDQUFELEVBQStCO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQUFqQiwwREFBaUI7QUFBQTtBQUFBLHNEQUFqQixjQUFpQjtBQUFBO0FBQUEsQ0FBL0IsQ0FBM0I7TUFBTUYsVzs7QUFFTixJQUFNRyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFEO0FBQUEsc0JBQ1g7QUFBQSwyQkFDRSw4REFBQyw2REFBRDtBQUFTLFNBQUcsTUFBWjtBQUFhLGVBQVMsTUFBdEI7QUFBQSw2QkFDRSw4REFBQyxxREFBRDtBQUFBLCtCQUNBO0FBQU8sY0FBSSxNQUFYO0FBQVksa0JBQVEsTUFBcEI7QUFBcUIsZUFBSyxNQUExQjtBQUEyQixlQUFLLEVBQUU7QUFBQ0MsaUJBQUssRUFBQyxLQUFQO0FBQWNDLGtCQUFNLEVBQUM7QUFBckIsV0FBbEM7QUFBQSxpQ0FDQTtBQUFRLGVBQUcsRUFBQyxzQkFBWjtBQUFtQyxnQkFBSSxFQUFDO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFEVztBQUFBLENBQWI7O01BQU1ILEk7QUFrQk4sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzU5Mjg0Y2Y4M2NkZWRiMDQ2NmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTZWN0aW9uLCBTZWN0aW9uVGV4dCwgU2VjdGlvblRpdGxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xuaW1wb3J0IHsgTGVmdFNlY3Rpb24sIFJpZ2h0U2VjdGlvbiB9IGZyb20gJy4vSGVyb1N0eWxlczInO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuXG5jb25zdCBSZWFjdFJldmVhbCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1yZXZlYWwnKSwgeyBzc3I6IGZhbHNlfSkgXG5cbmNvbnN0IEhlcm8gPSAocHJvcHMpID0+IChcbiAgPD5cbiAgICA8U2VjdGlvbiByb3cgbm9wYWRkaW5nPlxuICAgICAgPExlZnRTZWN0aW9uPlxuICAgICAgPHZpZGVvIGxvb3AgYXV0b1BsYXkgbXV0ZWQgc3R5bGU9e3t3aWR0aDpcIjUwJVwiLCBoZWlnaHQ6XCIxMDAlXCJ9fT5cbiAgICAgIDxzb3VyY2Ugc3JjPSdpbWFnZXMvd2F0ZXJGYWxsLm1wNCcgdHlwZT1cInZpZGVvL21wNFwiLz5cbiAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgPC9MZWZ0U2VjdGlvbj5cbiAgICAgIHsvKiA8dmlkZW8gbG9vcCBhdXRvUGxheSBtdXRlZD5cbiAgICAgIDxzb3VyY2Ugc3JjPSdpbWFnZXMvd2F0ZXJGYWxsLm1wNCcgdHlwZT1cInZpZGVvL21wNFwiICAgICAgICAgd2lkdGg9ezQ4MH1cbiAgICAgICAgaGVpZ2h0PXsyNzJ9Lz5cbiAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgICovfVxuICAgIDwvU2VjdGlvbj5cbiAgPC8+XG4pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IEhlcm87Il0sInNvdXJjZVJvb3QiOiIifQ==