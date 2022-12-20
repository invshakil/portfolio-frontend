"use strict";
exports.id = 82;
exports.ids = [82];
exports.modules = {

/***/ 6906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const Api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: `${"http://witballtech.com/api/v1"}`,
    headers: {
        "X-Requested-With": "XMLHttpRequest"
    },
    withCredentials: false
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Api);


/***/ }),

/***/ 6575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K1": () => (/* binding */ useStateValue),
/* harmony export */   "X9": () => (/* binding */ StateProvider)
/* harmony export */ });
/* unused harmony export StateContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const StateContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const StateProvider = ({ reducer , initialState , children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StateContext.Provider, {
        value: (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState),
        children: children
    });
const useStateValue = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(StateContext);


/***/ })

};
;