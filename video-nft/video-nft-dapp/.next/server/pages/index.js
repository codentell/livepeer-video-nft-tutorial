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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Home() {\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: selectedFile , 1: setSelectedFile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: video , 1: setVideo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const videoUpload = async ()=>{\n        const formData = new FormData();\n        console.log(selectedFile);\n        formData.append(\"fileName\", selectedFile, selectedFile.name);\n        setLoading(true);\n        const response = await fetch('http://localhost:3001/upload', {\n            method: \"POST\",\n            body: formData,\n            mode: \"cors\"\n        });\n        const data = await response.json();\n        setLoading(false);\n        console.log(data);\n        const ipfs = await fetch(`https://ipfs.io/${data.data.replace(\":\", \"\")}`);\n        const nftMetadata = await ipfs.json();\n        console.log(nftMetadata);\n        setVideo(`https://ipfs.io/${nftMetadata.properties.video.replace(\":\", \"\")}`);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            loading ? \"Loading...\" : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                    width: \"320\",\n                    height: \"320\",\n                    controls: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                        src: video\n                    }, void 0, false, {\n                        fileName: \"/Users/drewhoang/Desktop/livepeer-video-nft-tutorial/video-nft/video-nft-dapp/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/drewhoang/Desktop/livepeer-video-nft-tutorial/video-nft/video-nft-dapp/pages/index.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/drewhoang/Desktop/livepeer-video-nft-tutorial/video-nft/video-nft-dapp/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 33\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                onChange: (e)=>setSelectedFile(e.target.files[0])\n            }, void 0, false, {\n                fileName: \"/Users/drewhoang/Desktop/livepeer-video-nft-tutorial/video-nft/video-nft-dapp/pages/index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: videoUpload,\n                children: \"Upload!\"\n            }, void 0, false, {\n                fileName: \"/Users/drewhoang/Desktop/livepeer-video-nft-tutorial/video-nft/video-nft-dapp/pages/index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/drewhoang/Desktop/livepeer-video-nft-tutorial/video-nft/video-nft-dapp/pages/index.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDdUM7QUFFeEIsUUFBUSxDQUFDRSxJQUFJLEdBQUcsQ0FBQztJQUM5QixLQUFLLE1BQUVDLE9BQU8sTUFBRUMsVUFBVSxNQUFJSCwrQ0FBUSxDQUFDLEtBQUs7SUFDNUMsS0FBSyxNQUFFSSxZQUFZLE1BQUVDLGVBQWUsTUFBSUwsK0NBQVEsQ0FBQyxDQUFFO0lBQ25ELEtBQUssTUFBRU0sS0FBSyxNQUFFQyxRQUFRLE1BQUlQLCtDQUFRLENBQUMsQ0FBRTtJQUVyQyxLQUFLLENBQUNRLFdBQVcsYUFBZSxDQUFDO1FBQy9CLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLEdBQUcsQ0FBQ0MsUUFBUTtRQUM3QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNSLFlBQVk7UUFDeEJLLFFBQVEsQ0FBQ0ksTUFBTSxDQUNiLENBQVUsV0FDVlQsWUFBWSxFQUNaQSxZQUFZLENBQUNVLElBQUk7UUFFbkJYLFVBQVUsQ0FBQyxJQUFJO1FBQ2YsS0FBSyxDQUFDWSxRQUFRLEdBQUcsS0FBSyxDQUFDQyxLQUFLLENBQUMsQ0FBOEIsK0JBQUUsQ0FBQztZQUFDQyxNQUFNLEVBQUUsQ0FBTTtZQUFFQyxJQUFJLEVBQUVULFFBQVE7WUFBRVUsSUFBSSxFQUFFLENBQU07UUFBQyxDQUFDO1FBQzdHLEtBQUssQ0FBQ0MsSUFBSSxHQUFHLEtBQUssQ0FBQ0wsUUFBUSxDQUFDTSxJQUFJO1FBQ2hDbEIsVUFBVSxDQUFDLEtBQUs7UUFFaEJRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUSxJQUFJO1FBQ2hCLEtBQUssQ0FBQ0UsSUFBSSxHQUFHLEtBQUssQ0FBQ04sS0FBSyxFQUFFLGdCQUFnQixFQUFFSSxJQUFJLENBQUNBLElBQUksQ0FBQ0csT0FBTyxDQUFDLENBQUcsSUFBRSxDQUFFO1FBQ3JFLEtBQUssQ0FBQ0MsV0FBVyxHQUFHLEtBQUssQ0FBQ0YsSUFBSSxDQUFDRCxJQUFJO1FBQ25DVixPQUFPLENBQUNDLEdBQUcsQ0FBQ1ksV0FBVztRQUN2QmpCLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRWlCLFdBQVcsQ0FBQ0MsVUFBVSxDQUFDbkIsS0FBSyxDQUFDaUIsT0FBTyxDQUFDLENBQUcsSUFBRSxDQUFFO0lBRTFFLENBQUM7SUFFRCxNQUFNLDZFQUNIRyxDQUFHOztZQUNEeEIsT0FBTyxHQUFHLENBQVksMEZBQUl3QixDQUFHO3NHQUMzQnBCLENBQUs7b0JBQUNxQixLQUFLLEVBQUMsQ0FBSztvQkFBQ0MsTUFBTSxFQUFDLENBQUs7b0JBQUNDLFFBQVE7MEdBQ3ZDQyxDQUFNO3dCQUFDQyxHQUFHLEVBQUV6QixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7O3dGQUluQjBCLENBQUs7Z0JBQ0pDLElBQUksRUFBQyxDQUFNO2dCQUNYQyxRQUFRLEdBQUdDLENBQUMsR0FBSzlCLGVBQWUsQ0FBQzhCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBQzs7Ozs7O3dGQUVsREMsQ0FBTTtnQkFBQ0MsT0FBTyxFQUFFL0IsV0FBVzswQkFBRSxDQUU5Qjs7Ozs7Ozs7Ozs7O0FBR04sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpZGVvLW5mdC1hcHAvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlbGVjdGVkRmlsZSwgc2V0U2VsZWN0ZWRGaWxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdmlkZW8sIHNldFZpZGVvXSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgY29uc3QgdmlkZW9VcGxvYWQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZEZpbGUpXG4gICAgZm9ybURhdGEuYXBwZW5kKFxuICAgICAgXCJmaWxlTmFtZVwiLFxuICAgICAgc2VsZWN0ZWRGaWxlLFxuICAgICAgc2VsZWN0ZWRGaWxlLm5hbWVcbiAgICApO1xuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvdXBsb2FkJywgeyBtZXRob2Q6IFwiUE9TVFwiLCBib2R5OiBmb3JtRGF0YSwgbW9kZTogXCJjb3JzXCIgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxuXG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgY29uc3QgaXBmcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2lwZnMuaW8vJHtkYXRhLmRhdGEucmVwbGFjZShcIjpcIiwgXCJcIil9YCk7XG4gICAgY29uc3QgbmZ0TWV0YWRhdGEgPSBhd2FpdCBpcGZzLmpzb24oKVxuICAgIGNvbnNvbGUubG9nKG5mdE1ldGFkYXRhKTtcbiAgICBzZXRWaWRlbyhgaHR0cHM6Ly9pcGZzLmlvLyR7bmZ0TWV0YWRhdGEucHJvcGVydGllcy52aWRlby5yZXBsYWNlKFwiOlwiLCBcIlwiKX1gKVxuICAgIFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge2xvYWRpbmcgPyBcIkxvYWRpbmcuLi5cIiA6IDxkaXY+XG4gICAgICAgIDx2aWRlbyB3aWR0aD0nMzIwJyBoZWlnaHQ9JzMyMCcgY29udHJvbHM+XG4gICAgICAgIDxzb3VyY2Ugc3JjPXt2aWRlb30+PC9zb3VyY2U+XG4gICAgICAgIDwvdmlkZW8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlbGVjdGVkRmlsZShlLnRhcmdldC5maWxlc1swXSl9XG4gICAgICAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt2aWRlb1VwbG9hZH0+XG4gICAgICAgIFVwbG9hZCFcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNlbGVjdGVkRmlsZSIsInNldFNlbGVjdGVkRmlsZSIsInZpZGVvIiwic2V0VmlkZW8iLCJ2aWRlb1VwbG9hZCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJjb25zb2xlIiwibG9nIiwiYXBwZW5kIiwibmFtZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwibW9kZSIsImRhdGEiLCJqc29uIiwiaXBmcyIsInJlcGxhY2UiLCJuZnRNZXRhZGF0YSIsInByb3BlcnRpZXMiLCJkaXYiLCJ3aWR0aCIsImhlaWdodCIsImNvbnRyb2xzIiwic291cmNlIiwic3JjIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZmlsZXMiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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