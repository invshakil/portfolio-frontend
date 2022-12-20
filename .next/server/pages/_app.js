(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2654:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8890);
/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _states_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2604);
/* harmony import */ var _states_StateProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6575);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_6__]);
react_toastify__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






















const App = ({ Component , pageProps  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_themes__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {
        attribute: "class",
        forcedTheme: Component.theme || null,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((nextjs_progressbar__WEBPACK_IMPORTED_MODULE_2___default()), {
                color: "tomato"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_3___default().StrictMode), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_states_StateProvider__WEBPACK_IMPORTED_MODULE_5__/* .StateProvider */ .X9, {
                    initialState: _states_reducer__WEBPACK_IMPORTED_MODULE_4__/* .initialState */ .E,
                    reducer: _states_reducer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_6__.ToastContainer, {})
                    ]
                })
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ }),

/***/ 2604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ initialState),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const initialState = {
    user: {},
    theme: "",
    state: false
};
const reducer = (state, action)=>{
    console.log(action);
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.item
            };
        case "SET_THEME":
            return {
                ...state,
                theme: action.item
            };
        case "SET_STATE":
            return {
                ...state,
                state: action.item
            };
        default:
            return state;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);


/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 1162:
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ 8890:
/***/ ((module) => {

"use strict";
module.exports = require("nextjs-progressbar");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2654));
module.exports = __webpack_exports__;

})();