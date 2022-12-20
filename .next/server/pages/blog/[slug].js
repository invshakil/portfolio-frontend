"use strict";
(() => {
var exports = {};
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 7711:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layouts_GuestLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6807);
/* harmony import */ var _components_mostPopularBlogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2833);
/* harmony import */ var _states_StateProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6575);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6197);
/* harmony import */ var _helpers_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4228);
/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1527);
/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(disqus_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6906);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8866);
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_icons_gi__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_metaTags__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8914);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_mostPopularBlogs__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_5__]);
([_components_mostPopularBlogs__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const BlogDetails = (props)=>{
    const [{ theme  }] = (0,_states_StateProvider__WEBPACK_IMPORTED_MODULE_4__/* .useStateValue */ .K1)();
    const disqusShortname = "portfolio-5auSOa4qCa";
    const disqusConfig = {
        url: `https://portfolio-5auSOa4qCa.disqus.com/${props.slug}`,
        identifier: props.article?.id,
        title: props.slug,
        theme: theme
    };
    const color = theme === "dark" ? "#b8c1d2" : "#282828";
    const size = "18px";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layouts_GuestLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_metaTags__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                title: `${props.article?.title} - Shakil's Blog`,
                description: props.article?.meta_description,
                keywords: props.article?.tags.map((t)=>t.name)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "singleBlogContainer",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_14___default()), {
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "cursor-pointer",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_16__.BiArrowBack, {
                                size: "2rem"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "singleBlogFlex",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: theme === "dark" ? "blogEntry" : theme === "light" && "blogEntryLight",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                                    initial: "hidden",
                                    animate: "visible",
                                    variants: _helpers_animation__WEBPACK_IMPORTED_MODULE_6__/* ["default"].slideInLeft */ .Z.slideInLeft,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "blogTitle",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                                children: [
                                                    props.article?.title,
                                                    " "
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "blogBody",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                                    className: "spanIcon",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_gi__WEBPACK_IMPORTED_MODULE_11__.GiBottomRight3DArrow, {
                                                            style: {
                                                                marginRight: "10px"
                                                            },
                                                            color: color,
                                                            size: size
                                                        }),
                                                        props.article.categories.map((category)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                                    href: {
                                                                        pathname: `/blog`,
                                                                        query: {
                                                                            category: category.name
                                                                        }
                                                                    },
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "border px-4 text-xs",
                                                                            children: category.name
                                                                        })
                                                                    })
                                                                })
                                                            }, category.id))
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                                    className: "spanIcon",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_10__.MdDateRange, {
                                                            style: {
                                                                marginRight: "10px"
                                                            },
                                                            color: color,
                                                            size: size
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "date",
                                                            children: new Date(props.article.author.created_at).toDateString()
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                                    className: "spanIcon",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__.FaUserAlt, {
                                                            style: {
                                                                marginRight: "10px"
                                                            },
                                                            color: color,
                                                            size: size
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            children: [
                                                                " ",
                                                                props.article.author.name
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                                    className: "blogDescription",
                                                    dangerouslySetInnerHTML: {
                                                        __html: props.article?.description
                                                    }
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                                    className: "spanIcon",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_12__.BsEyeFill, {
                                                            style: {
                                                                marginRight: "10px"
                                                            },
                                                            color: color,
                                                            size: size
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            children: [
                                                                " ",
                                                                props.article.hit_count,
                                                                " Views"
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "spanIcon",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_13__.AiFillTags, {
                                                            color: color,
                                                            size: size
                                                        }),
                                                        props.article.tags.map((tag)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                    className: "border px-3",
                                                                    children: [
                                                                        " ",
                                                                        tag.name
                                                                    ]
                                                                })
                                                            }, tag.id))
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mostRead",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_mostPopularBlogs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    data: props.popular
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mx-12 p-10 comments",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(disqus_react__WEBPACK_IMPORTED_MODULE_7__.DiscussionEmbed, {
                    shortname: disqusShortname,
                    config: disqusConfig
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogDetails);
const getServerSideProps = async (context)=>{
    let article = {};
    await _lib_axios__WEBPACK_IMPORTED_MODULE_8__/* ["default"].get */ .Z.get(`/articles/show/${context.params.slug.replace(/\-/g, " ")}`).then((response)=>{
        article = response.data;
    });
    let popular = [];
    await _lib_axios__WEBPACK_IMPORTED_MODULE_8__/* ["default"].get */ .Z.get(`/articles`).then((response)=>{
        popular = response.data.popular.original.data;
    });
    const slug = context.params.slug;
    return {
        props: {
            article,
            slug,
            popular
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1143:
/***/ ((module) => {

module.exports = require("@heroicons/react/solid");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1527:
/***/ ((module) => {

module.exports = require("disqus-react");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 6652:
/***/ ((module) => {

module.exports = require("react-icons/bi");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 8866:
/***/ ((module) => {

module.exports = require("react-icons/gi");

/***/ }),

/***/ 924:
/***/ ((module) => {

module.exports = require("react-icons/im");

/***/ }),

/***/ 4041:
/***/ ((module) => {

module.exports = require("react-icons/md");

/***/ }),

/***/ 764:
/***/ ((module) => {

module.exports = require("react-icons/si");

/***/ }),

/***/ 4753:
/***/ ((module) => {

module.exports = require("react-tsparticles");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3047:
/***/ ((module) => {

module.exports = require("tsparticles");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,82,346], () => (__webpack_exec__(7711)));
module.exports = __webpack_exports__;

})();