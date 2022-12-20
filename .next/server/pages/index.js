"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const About = ({ theme , data  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `px-8 py-3 mt-3 ${theme === "light" ? "bg-white" : "bg-dark"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "headerText pb-2",
                children: "About"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-justify font-extralight",
                children: data?.map((d)=>d.key === "about_me" && d.value)
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);


/***/ }),

/***/ 1:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _states_StateProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6575);
/* harmony import */ var _mostPopularBlogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2833);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4228);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6197);
/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6906);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7104);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9700);
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8547);
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_gr__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mostPopularBlogs__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_6__]);
([_mostPopularBlogs__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Blog = (props)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    const [{ theme  }] = (0,_states_StateProvider__WEBPACK_IMPORTED_MODULE_2__/* .useStateValue */ .K1)();
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: currentItems , 1: setCurrentItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: pageCount , 1: setPageCount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: itemOffset , 1: setItemOffset  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const perPage = 6;
    const { 0: filter , 1: setFilter  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        search: null,
        category: null,
        is_published: null
    });
    const query = qs__WEBPACK_IMPORTED_MODULE_8___default().stringify(filter, {
        encode: false,
        skipNulls: true
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setData(props.articles);
        filter.category && setItemOffset(0);
        _lib_axios__WEBPACK_IMPORTED_MODULE_7__/* ["default"].get */ .Z.get(`/articles?${query}`).then((response)=>{
            setData(response.data.all.original.data.data);
        });
    }, [
        filter
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        router.query && setFilter({
            category: router.query.category
        });
        console.log("types", props.articles);
    }, [
        props.articles
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const endOffset = itemOffset + perPage;
        setCurrentItems(data?.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data?.length / perPage));
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [
        itemOffset,
        perPage,
        data
    ]);
    const handlePageClick = (event)=>{
        const newOffset = event.selected * perPage % data?.length;
        setItemOffset(newOffset);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [
        pageCount
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-2xl py-5 text-tomato",
                children: "BLOGS"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid lg:grid-cols-2 sm:grid-cols-1 gap-1",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "search",
                                className: `lg:mr-1 text-tomato bg-transparent border ${theme === "light" ? "border-offWhite" : "border-bg-custom-dark"}`,
                                placeholder: "search...",
                                onChange: (e)=>setFilter({
                                        search: e.target.value
                                    })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                className: `text-tomato bg-transparent border ${theme === "light" ? "border-offWhite" : "border-bg-custom-dark"}`,
                                onChange: (e)=>e.target.value === "0" ? setFilter({
                                        category: null
                                    }) : setFilter({
                                        category: e.target.value
                                    }),
                                children: [
                                    router.query.category ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: router.query.category,
                                                children: router.query.category
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "0",
                                                children: "All"
                                            })
                                        ]
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "0",
                                        children: "All"
                                    }),
                                    props.types?.data.data.map((type)=>type.name !== router.query.category && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: type.name,
                                            children: type.name
                                        }, type.id))
                                ]
                            })
                        ]
                    }),
                    currentItems?.map((blog)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                            href: {
                                pathname: `/blog/${blog.title.replace(/\ /g, "-")}`
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
                                    initial: "hidden",
                                    animate: "visible",
                                    variants: _helpers_animation__WEBPACK_IMPORTED_MODULE_5__/* ["default"].crossFromLeft */ .Z.crossFromLeft,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `my-3 p-5 rounded-sm border ${theme === "light" ? "border-offWhite" : "border-bg-custom-dark"}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "text-lightGreen text-xl font-bold",
                                                children: blog.title
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "text-tomato font-extralight py-1",
                                                children: [
                                                    "by ",
                                                    blog.author.name,
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: `${"http://witballtech.com"}/${blog.image}`,
                                                alt: blog.title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "text-tomato",
                                                children: blog.categories[0].name
                                            })
                                        ]
                                    })
                                })
                            })
                        }, blog.id)),
                    data?.length > perPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_paginate__WEBPACK_IMPORTED_MODULE_9___default()), {
                            activeClassName: "activeCLass",
                            previousClassName: "prevClass",
                            nextClassName: "prevClass",
                            className: "paginate",
                            breakLabel: "...",
                            onPageChange: handlePageClick,
                            pageRangeDisplayed: 10,
                            pageCount: pageCount,
                            renderOnZeroPageCount: null,
                            nextLabel: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_10__.GrCaretNext, {
                                size: "22px"
                            }),
                            previousLabel: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_10__.GrCaretPrevious, {
                                size: "22px"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7327:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _states_StateProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6575);



const LinkedInCard = ()=>{
    const [{ theme  }] = useStateValue();
    return /*#__PURE__*/ _jsxs("div", {
        className: `w-full ${theme === "light" ? "bg-white" : "bg-dark"} pl-7`,
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "badge-base LI-profile-badge",
                "data-locale": "en_US",
                "data-size": "medium",
                "data-theme": "light",
                "data-type": "HORIZONTAL",
                "data-vanity": "syful-shakil",
                "data-version": "v1"
            }),
            /*#__PURE__*/ _jsx("script", {
                src: "https://platform.linkedin.com/badges/js/profile.js",
                async: true,
                defer: true,
                type: "text/javascript"
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (LinkedInCard)));


/***/ }),

/***/ 4607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ educations)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./src/components/cards/educationsCard.js



const EducationsCard = ({ result , session , institute , degree , subject , label  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "pb-5",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaGraduationCap, {
                        size: "35px"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-2xl pl-2 text-tomato",
                        children: institute
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "pl-11",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "font-light",
                        children: [
                            degree,
                            " ",
                            label !== "B" && ", " + subject
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-grey font-extralight pb-2",
                        children: session
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-sm",
                        children: result
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const educationsCard = (EducationsCard);

// EXTERNAL MODULE: ./src/lib/axios.js
var axios = __webpack_require__(6906);
;// CONCATENATED MODULE: ./src/components/educations.js




const Educations = ({ theme  })=>{
    let { 0: educations , 1: setEducations  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        axios/* default.get */.Z.get("educations").then((response)=>{
            setEducations(response.data.data.data);
            console.log("ed", response.data.data.data);
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `px-8 py-3 mt-3 ${theme === "light" ? "bg-white" : "bg-dark"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "headerText py-4",
                children: "Educations"
            }),
            educations?.map((ed)=>/*#__PURE__*/ jsx_runtime_.jsx(educationsCard, {
                    result: ed.result,
                    session: ed.session,
                    institute: ed.institute,
                    degree: ed.degree,
                    subject: ed.subject,
                    label: ed.label
                }, ed.id))
        ]
    });
};
/* harmony default export */ const educations = (Educations);


/***/ }),

/***/ 2524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Featured = ({ theme , featured  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `px-8 py-3 mt-3 ${theme === "light" ? "bg-white" : "bg-dark"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "headerText pb-2",
                children: "Featured"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `grid lg:grid-cols-3 sm:grid-cols-1 gap-1`,
                children: featured.map((f)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `border ${theme === "light" ? "border-offWhite" : "border-bg-custom-dark"} p-4`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: "w-full max-h-60 object-cover mb-4",
                                src: `${"http://witballtech.com"}/${f.image}`,
                                alt: "cover"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                className: "text-left text-sm featuredDescription",
                                dangerouslySetInnerHTML: {
                                    __html: f.description
                                }
                            })
                        ]
                    }))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Featured);


/***/ }),

/***/ 7393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ introduction)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
;// CONCATENATED MODULE: external "react-icons/ri"
const ri_namespaceObject = require("react-icons/ri");
// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(4041);
// EXTERNAL MODULE: ./src/helpers/themeChanger.js
var themeChanger = __webpack_require__(9887);
;// CONCATENATED MODULE: ./src/helpers/mailToButton.js


const ButtonMailto = ({ mailto , label  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        className: "pl-1.5",
        href: "#",
        onClick: (e)=>{
            window.location.href = mailto;
            e.preventDefault();
        },
        children: label
    });
};
/* harmony default export */ const mailToButton = (ButtonMailto);

;// CONCATENATED MODULE: ./src/components/introduction.js







const Introduction = ({ theme , data , img , email  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `px-8 py-3 ${theme === "light" ? "bg-white" : "bg-dark"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                className: "w-screen max-h-48 object-cover",
                src: "assets/cover.jpg",
                alt: "cover"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                className: "w-screen h-44 w-44 rounded-full object-cover relative -mt-32 ml-6",
                src: `${"http://witballtech.com"}${img}`,
                alt: "propic"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex justify-between",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "pt-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-lightGreen font-bold text-3xl",
                            children: data?.map((d)=>d.key === "name" && d.value)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-tomato pb-2",
                            children: data?.map((d)=>d.key === "designation" && d.value)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                            className: `border ${theme !== "dark" ? "border-offWhite" : "border-bg-custom-dark"}`
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "pt-2 flex justify-between",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "font-extralight w-2/4 text-justify",
                                    children: data?.map((d)=>d.key === "about_me" && d.value)
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "px-9 pt-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(ri_namespaceObject.RiComputerLine, {
                                                    color: "#327c7a",
                                                    size: "1.7rem"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "ml-2",
                                                    children: "Workplace"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                            className: "flex items-center mt-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(md_.MdOutlineSchool, {
                                                    color: "#327c7a",
                                                    size: "1.7rem"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "ml-2",
                                                    children: " Education (last)"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "bg-lightGreen rounded-sm text-white px-3 py-2 mt-4",
                                    children: "+ Follow"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "ml-3 rounded-sm bg-lightGreen text-white px-3 py-2 mt-4",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineMail, {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx(mailToButton, {
                                                label: "Contact",
                                                mailto: `mailto:${email}`
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(themeChanger/* default */.Z, {})
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const introduction = (Introduction);


/***/ }),

/***/ 2713:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Sidebar = ({ theme  })=>{
    return /*#__PURE__*/ _jsx("div", {
        className: "badge-base LI-profile-badge",
        "data-locale": "en_US",
        "data-size": "medium",
        "data-theme": "dark",
        datatype: "HORIZONTAL",
        "data-vanity": "syful-shakil",
        "data-version": "v1",
        children: /*#__PURE__*/ _jsx("script", {
            src: "https://platform.linkedin.com/badges/js/profile.js",
            async: true,
            defer: true,
            type: "text/javascript"
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Sidebar)));


/***/ }),

/***/ 5324:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layouts_GuestLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6807);
/* harmony import */ var _dummyData_reviewsData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8369);
/* harmony import */ var _helpers_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4228);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_5__]);
framer_motion__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Skills = (props)=>{
    return /*#__PURE__*/ _jsx(GuestLayout, {
        children: /*#__PURE__*/ _jsxs("div", {
            className: "skillsContainer",
            children: [
                /*#__PURE__*/ _jsx("h1", {
                    children: "SKILL SET"
                }),
                /*#__PURE__*/ _jsx("br", {}),
                /*#__PURE__*/ _jsxs(motion.div, {
                    initial: "hidden",
                    animate: "visible",
                    variants: variants.crossFromLeft,
                    children: [
                        /*#__PURE__*/ _jsx("section", {
                            dangerouslySetInnerHTML: {
                                __html: props.skills
                            }
                        }),
                        /*#__PURE__*/ _jsx("h1", {
                            children: "REVIEWS"
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "reviews",
                            children: ReviewsData.map((review)=>/*#__PURE__*/ _jsx("img", {
                                    src: review.image,
                                    alt: "review"
                                }, review.id))
                        })
                    ]
                })
            ]
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Skills)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8369:
/***/ (() => {

const ReviewsData = [
    {
        id: 0,
        image: "../assets/review-fiverr-1.png"
    },
    {
        id: 1,
        image: "../assets/review-upwork-1.png"
    },
    {
        id: 2,
        image: "../assets/review-upwork-2.png"
    },
    {
        id: 3,
        image: "../assets/review-upwork-3.png"
    }, 
];
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ReviewsData)));


/***/ }),

/***/ 3486:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layouts_GuestLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6807);
/* harmony import */ var _states_StateProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6575);
/* harmony import */ var _helpers_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4228);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6906);
/* harmony import */ var _components_metaTags__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8914);
/* harmony import */ var _components_introduction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7393);
/* harmony import */ var _components_featured__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2524);
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7599);
/* harmony import */ var _components_experience__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(660);
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2713);
/* harmony import */ var _components_blog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7104);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_cards_linkedInCard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7327);
/* harmony import */ var _components_skills__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5324);
/* harmony import */ var _components_educations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4607);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_5__, _components_blog__WEBPACK_IMPORTED_MODULE_14__, _components_skills__WEBPACK_IMPORTED_MODULE_17__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_5__, _components_blog__WEBPACK_IMPORTED_MODULE_14__, _components_skills__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















const Home = (props)=>{
    const [{ theme  }] = (0,_states_StateProvider__WEBPACK_IMPORTED_MODULE_3__/* .useStateValue */ .K1)();
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);
    const { 0: resumeLink , 1: setResumeLink  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("");
    const { 0: dob , 1: setDob  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("");
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        setData(props.info);
        _lib_axios__WEBPACK_IMPORTED_MODULE_7__/* ["default"].get */ .Z.get(`/about-me`).then((response)=>{
            setData(response.data.data);
            let resume = response.data.data.filter((d)=>d.key === "resume_link" && d.value);
            setResumeLink(resume[0].value);
            let bd = response.data.data.filter((d)=>d.key === "d_o_b" && d.value);
            let bDay = getAge(bd[0].value);
            setDob(bDay);
            let mail = response.data.data.filter((d)=>d.key === "email" && d.value);
            setEmail(mail[0].value);
        });
    }, []);
    const getAge = (bd)=>{
        let today = new Date();
        let birthDate = new Date(bd);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
            age--;
        }
        return age;
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layouts_GuestLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_metaTags__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                title: `Introduction - ${"Shakil's Blog"}`,
                description: props.aboutMe[0].value,
                keywords: props.tags.map((t)=>t.name)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `mx-10 mb-5 min-h-screen lg:flex lg:justify-between sm:grid sm:grid-cols-1 ${theme === "dark" ? " opacity-80" : "opacity-90"}`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "rounded-xl mr-2 pb-8 lg:w-8/12 sm:w-screen",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_introduction__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                theme: theme,
                                data: data,
                                img: props.img[0].value,
                                email: email
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_about__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                theme: theme,
                                data: data
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_featured__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                theme: theme,
                                featured: props.featured.slice(0, Number(props.featuredCount[0].value))
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_experience__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                theme: theme,
                                workplaces: props.workplaces.slice(0, 3)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_educations__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                theme: theme
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `ml-2 rounded-xl pb-8 pt-3 px-8 lg:w-4/12 sm:w-screen ${theme === "light" ? "bg-white" : "bg-dark"}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_blog__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            articles: props.articles,
                            types: props.types,
                            popular: props.popular
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
const getServerSideProps = async ()=>{
    let info = [];
    let tags = [];
    let img = "";
    let aboutMe = "";
    let featuredCount = "";
    let articles = [];
    let popular = [];
    let types = [];
    let skills = [];
    let featured = [];
    let workplaces = [];
    await _lib_axios__WEBPACK_IMPORTED_MODULE_7__/* ["default"].get */ .Z.get(`/about-me`).then((response)=>{
        info = response.data.data;
        img = response.data.data.filter((d)=>d.key === "user_image" && d.value);
        aboutMe = response.data.data.filter((d)=>d.key === "about_me" && d.value);
        featuredCount = response.data.data.filter((d)=>d.key === "featuredCount" && d.value);
    });
    await _lib_axios__WEBPACK_IMPORTED_MODULE_7__/* ["default"].get */ .Z.get(`/articles`).then((response)=>{
        articles = response.data.all.original.data.data;
        popular = response.data.popular.original.data;
    });
    await _lib_axios__WEBPACK_IMPORTED_MODULE_7__/* ["default"].get */ .Z.get(`/categories`).then((response)=>{
        types = response.data;
    });
    await _lib_axios__WEBPACK_IMPORTED_MODULE_7__/* ["default"].get */ .Z.get(`/allTags`).then((response)=>{
        tags = response.data.data;
    });
    await _lib_axios__WEBPACK_IMPORTED_MODULE_7__/* ["default"].get */ .Z.get(`/skills`).then((response)=>{
        skills = response.data.data.data;
    });
    await _lib_axios__WEBPACK_IMPORTED_MODULE_7__/* ["default"].get */ .Z.get(`/workplaces`).then((response)=>{
        workplaces = response.data.data.data;
    });
    await _lib_axios__WEBPACK_IMPORTED_MODULE_7__/* ["default"].get */ .Z.get(`/fetch-all-published-news`).then((response)=>{
        featured = response.data.data.news;
    });
    return {
        props: {
            info,
            img,
            aboutMe,
            tags,
            articles,
            types,
            popular,
            skills,
            workplaces,
            featured,
            featuredCount
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

/***/ 7104:
/***/ ((module) => {

module.exports = require("qs");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 8866:
/***/ ((module) => {

module.exports = require("react-icons/gi");

/***/ }),

/***/ 8547:
/***/ ((module) => {

module.exports = require("react-icons/gr");

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

/***/ 9700:
/***/ ((module) => {

module.exports = require("react-paginate");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,82,346,598], () => (__webpack_exec__(3486)));
module.exports = __webpack_exports__;

})();