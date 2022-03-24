"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Home() {\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: selectedFile , 1: setSelectedFile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const videoUpload = async ()=>{\n        const formData = new FormData();\n        console.log(selectedFile);\n        formData.append(\"fileName\", selectedFile, selectedFile.name);\n        setLoading(true);\n        const response = await fetch('http://localhost:3001/upload', {\n            method: \"POST\",\n            body: formData,\n            mode: \"cors\"\n        });\n        const data = await response.json();\n        setLoading(false);\n        console.log(data);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            loading ? \"Loading...\" : \"\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                onChange: (e)=>setSelectedFile(e.target.files[0])\n            }, void 0, false, {\n                fileName: \"/Users/drewhoang/Desktop/livepeer-video-nft-tutorial/video-nft/video-nft-dapp/pages/index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: videoUpload,\n                children: \"Upload!\"\n            }, void 0, false, {\n                fileName: \"/Users/drewhoang/Desktop/livepeer-video-nft-tutorial/video-nft/video-nft-dapp/pages/index.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/drewhoang/Desktop/livepeer-video-nft-tutorial/video-nft/video-nft-dapp/pages/index.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDdUM7QUFFeEIsUUFBUSxDQUFDRSxJQUFJLEdBQUcsQ0FBQztJQUM5QixLQUFLLE1BQUVDLE9BQU8sTUFBRUMsVUFBVSxNQUFJSCwrQ0FBUSxDQUFDLEtBQUs7SUFDNUMsS0FBSyxNQUFFSSxZQUFZLE1BQUVDLGVBQWUsTUFBSUwsK0NBQVEsQ0FBQyxDQUFFO0lBQ25ELEtBQUssTUFBRU0sSUFBSSxNQUFFQyxPQUFPLE1BQUlQLCtDQUFRLENBQUMsQ0FBRTtJQUVuQyxLQUFLLENBQUNRLFdBQVcsYUFBZSxDQUFDO1FBQy9CLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLEdBQUcsQ0FBQ0MsUUFBUTtRQUM3QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNSLFlBQVk7UUFDeEJLLFFBQVEsQ0FBQ0ksTUFBTSxDQUNiLENBQVUsV0FDVlQsWUFBWSxFQUNaQSxZQUFZLENBQUNFLElBQUk7UUFFbkJILFVBQVUsQ0FBQyxJQUFJO1FBQ2YsS0FBSyxDQUFDVyxRQUFRLEdBQUcsS0FBSyxDQUFDQyxLQUFLLENBQUMsQ0FBOEIsK0JBQUUsQ0FBQztZQUFDQyxNQUFNLEVBQUUsQ0FBTTtZQUFFQyxJQUFJLEVBQUVSLFFBQVE7WUFBRVMsSUFBSSxFQUFFLENBQU07UUFBQyxDQUFDO1FBQzdHLEtBQUssQ0FBQ0MsSUFBSSxHQUFHLEtBQUssQ0FBQ0wsUUFBUSxDQUFDTSxJQUFJO1FBQ2hDakIsVUFBVSxDQUFDLEtBQUs7UUFDaEJRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTyxJQUFJO0lBQ2xCLENBQUM7SUFFRCxNQUFNLDZFQUNIRSxDQUFHOztZQUNEbkIsT0FBTyxHQUFHLENBQVksY0FBRSxDQUFFO3dGQUMxQm9CLENBQUs7Z0JBQ0pDLElBQUksRUFBQyxDQUFNO2dCQUNYQyxRQUFRLEdBQUdDLENBQUMsR0FBS3BCLGVBQWUsQ0FBQ29CLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBQzs7Ozs7O3dGQUVsREMsQ0FBTTtnQkFBQ0MsT0FBTyxFQUFFckIsV0FBVzswQkFBRSxDQUU5Qjs7Ozs7Ozs7Ozs7O0FBR04sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpZGVvLW5mdC1hcHAvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlbGVjdGVkRmlsZSwgc2V0U2VsZWN0ZWRGaWxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCB2aWRlb1VwbG9hZCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkRmlsZSlcbiAgICBmb3JtRGF0YS5hcHBlbmQoXG4gICAgICBcImZpbGVOYW1lXCIsXG4gICAgICBzZWxlY3RlZEZpbGUsXG4gICAgICBzZWxlY3RlZEZpbGUubmFtZVxuICAgICk7XG4gICAgc2V0TG9hZGluZyh0cnVlKVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS91cGxvYWQnLCB7IG1ldGhvZDogXCJQT1NUXCIsIGJvZHk6IGZvcm1EYXRhLCBtb2RlOiBcImNvcnNcIiB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7bG9hZGluZyA/IFwiTG9hZGluZy4uLlwiOiBcIlwifVxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWxlY3RlZEZpbGUoZS50YXJnZXQuZmlsZXNbMF0pfVxuICAgICAgLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17dmlkZW9VcGxvYWR9PlxuICAgICAgICBVcGxvYWQhXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJIb21lIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZWxlY3RlZEZpbGUiLCJzZXRTZWxlY3RlZEZpbGUiLCJuYW1lIiwic2V0TmFtZSIsInZpZGVvVXBsb2FkIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJhcHBlbmQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIm1vZGUiLCJkYXRhIiwianNvbiIsImRpdiIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImZpbGVzIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();