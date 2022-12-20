"use strict";
exports.id = 346;
exports.ids = [346];
exports.modules = {

/***/ 6807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layouts_GuestLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
// EXTERNAL MODULE: ./src/states/StateProvider.js
var StateProvider = __webpack_require__(6575);
// EXTERNAL MODULE: ./src/lib/axios.js
var axios = __webpack_require__(6906);
;// CONCATENATED MODULE: ./src/components/Layouts/FooterSection.js






const Footer = ()=>{
    const { 0: data , 1: setData  } = (0,external_react_.useState)();
    const [{ theme  }] = (0,StateProvider/* useStateValue */.K1)();
    const { 0: fbLink , 1: setFbLink  } = (0,external_react_.useState)("");
    const { 0: twitterLink , 1: setTwitterLink  } = (0,external_react_.useState)("");
    const { 0: gitLink , 1: setGitLink  } = (0,external_react_.useState)("");
    const { 0: linkedInLink , 1: setLinkedInLink  } = (0,external_react_.useState)("");
    const { 0: ytLink , 1: setYtLink  } = (0,external_react_.useState)("");
    const { 0: skypeLink , 1: setSkypeLink  } = (0,external_react_.useState)("");
    (0,external_react_.useEffect)(()=>{
        axios/* default.get */.Z.get(`/about-me`).then((response)=>{
            setData(response.data.data);
            let fb = response.data.data.filter((d)=>d.key === "facebook" && d.value);
            setFbLink(fb[0].value);
            let ttr = response.data.data.filter((d)=>d.key === "twitter" && d.value);
            setTwitterLink(ttr[0].value);
            let git = response.data.data.filter((d)=>d.key === "github" && d.value);
            setGitLink(git[0].value);
            let linked = response.data.data.filter((d)=>d.key === "linkedin" && d.value);
            setLinkedInLink(linked[0].value);
            let yt = response.data.data.filter((d)=>d.key === "youtube" && d.value);
            setYtLink(yt[0].value);
            let sk = response.data.data.filter((d)=>d.key === "skype" && d.value);
            setSkypeLink(sk[0].value);
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: theme === "dark" ? "footerContainer" : theme === "light" && "footerContainerLight",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "footerIcons",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: fbLink,
                        target: "_blank",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaFacebook, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: twitterLink,
                        target: "_blank",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaTwitter, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: fbLink,
                        target: "_blank",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiFillMail, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: gitLink,
                        target: "_blank",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiFillGithub, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: linkedInLink,
                        target: "_blank",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaLinkedin, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: ytLink,
                        target: "_blank",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaYoutube, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: skypeLink,
                        target: "_blank",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaSkype, {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "middleSection",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        children: "SITEMAP"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "|"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        children: "PRIVACY POLICY"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "|"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        children: "ROBOTS"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: "copyWrite",
                children: [
                    " Shakil's Blog \xa92017-\xa9",
                    new Date().getFullYear(),
                    "   All Rights Reserved"
                ]
            })
        ]
    });
};
/* harmony default export */ const FooterSection = (Footer);

// EXTERNAL MODULE: external "react-tsparticles"
var external_react_tsparticles_ = __webpack_require__(4753);
var external_react_tsparticles_default = /*#__PURE__*/__webpack_require__.n(external_react_tsparticles_);
// EXTERNAL MODULE: external "tsparticles"
var external_tsparticles_ = __webpack_require__(3047);
;// CONCATENATED MODULE: ./src/helpers/particles.js




const ParticlesComponent = ()=>{
    const particlesInit = async (main)=>{
        await (0,external_tsparticles_.loadFull)(main);
    };
    const [{ theme  }] = (0,StateProvider/* useStateValue */.K1)();
    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_tsparticles_default()), {
        id: "tsParticles",
        init: particlesInit,
        options: {
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: false
                    },
                    onHover: {
                        enable: false
                    },
                    resize: false
                },
                modes: {
                    push: {
                        quantity: 5
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    }
                }
            },
            particles: {
                color: {
                    value: theme === "dark" ? "#ffffff" : "#3d3d3d"
                },
                links: {
                    color: theme === "dark" ? "#19b275" : "rgba(0,0,0,0.42)",
                    distance: 140,
                    enable: true,
                    opacity: 0.4,
                    width: 1
                },
                collisions: {
                    enable: true
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce"
                    },
                    random: false,
                    speed: 1,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        area: 800
                    },
                    value: 20
                },
                opacity: {
                    value: 0.4
                },
                shape: {
                    type: "circle"
                },
                size: {
                    value: {
                        min: 1,
                        max: 3
                    }
                }
            },
            detectRetina: true
        }
    });
};
/* harmony default export */ const particles = (ParticlesComponent);

;// CONCATENATED MODULE: ./src/components/ApplicationLogo.js

const ApplicationLogo = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 316 316",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M305.8 81.125C305.77 80.995 305.69 80.885 305.65 80.755C305.56 80.525 305.49 80.285 305.37 80.075C305.29 79.935 305.17 79.815 305.07 79.685C304.94 79.515 304.83 79.325 304.68 79.175C304.55 79.045 304.39 78.955 304.25 78.845C304.09 78.715 303.95 78.575 303.77 78.475L251.32 48.275C249.97 47.495 248.31 47.495 246.96 48.275L194.51 78.475C194.33 78.575 194.19 78.725 194.03 78.845C193.89 78.955 193.73 79.045 193.6 79.175C193.45 79.325 193.34 79.515 193.21 79.685C193.11 79.815 192.99 79.935 192.91 80.075C192.79 80.285 192.71 80.525 192.63 80.755C192.58 80.875 192.51 80.995 192.48 81.125C192.38 81.495 192.33 81.875 192.33 82.265V139.625L148.62 164.795V52.575C148.62 52.185 148.57 51.805 148.47 51.435C148.44 51.305 148.36 51.195 148.32 51.065C148.23 50.835 148.16 50.595 148.04 50.385C147.96 50.245 147.84 50.125 147.74 49.995C147.61 49.825 147.5 49.635 147.35 49.485C147.22 49.355 147.06 49.265 146.92 49.155C146.76 49.025 146.62 48.885 146.44 48.785L93.99 18.585C92.64 17.805 90.98 17.805 89.63 18.585L37.18 48.785C37 48.885 36.86 49.035 36.7 49.155C36.56 49.265 36.4 49.355 36.27 49.485C36.12 49.635 36.01 49.825 35.88 49.995C35.78 50.125 35.66 50.245 35.58 50.385C35.46 50.595 35.38 50.835 35.3 51.065C35.25 51.185 35.18 51.305 35.15 51.435C35.05 51.805 35 52.185 35 52.575V232.235C35 233.795 35.84 235.245 37.19 236.025L142.1 296.425C142.33 296.555 142.58 296.635 142.82 296.725C142.93 296.765 143.04 296.835 143.16 296.865C143.53 296.965 143.9 297.015 144.28 297.015C144.66 297.015 145.03 296.965 145.4 296.865C145.5 296.835 145.59 296.775 145.69 296.745C145.95 296.655 146.21 296.565 146.45 296.435L251.36 236.035C252.72 235.255 253.55 233.815 253.55 232.245V174.885L303.81 145.945C305.17 145.165 306 143.725 306 142.155V82.265C305.95 81.875 305.89 81.495 305.8 81.125ZM144.2 227.205L100.57 202.515L146.39 176.135L196.66 147.195L240.33 172.335L208.29 190.625L144.2 227.205ZM244.75 114.995V164.795L226.39 154.225L201.03 139.625V89.825L219.39 100.395L244.75 114.995ZM249.12 57.105L292.81 82.265L249.12 107.425L205.43 82.265L249.12 57.105ZM114.49 184.425L96.13 194.995V85.305L121.49 70.705L139.85 60.135V169.815L114.49 184.425ZM91.76 27.425L135.45 52.585L91.76 77.745L48.07 52.585L91.76 27.425ZM43.67 60.135L62.03 70.705L87.39 85.305V202.545V202.555V202.565C87.39 202.735 87.44 202.895 87.46 203.055C87.49 203.265 87.49 203.485 87.55 203.695V203.705C87.6 203.875 87.69 204.035 87.76 204.195C87.84 204.375 87.89 204.575 87.99 204.745C87.99 204.745 87.99 204.755 88 204.755C88.09 204.905 88.22 205.035 88.33 205.175C88.45 205.335 88.55 205.495 88.69 205.635L88.7 205.645C88.82 205.765 88.98 205.855 89.12 205.965C89.28 206.085 89.42 206.225 89.59 206.325C89.6 206.325 89.6 206.325 89.61 206.335C89.62 206.335 89.62 206.345 89.63 206.345L139.87 234.775V285.065L43.67 229.705V60.135ZM244.75 229.705L148.58 285.075V234.775L219.8 194.115L244.75 179.875V229.705ZM297.2 139.625L253.49 164.795V114.995L278.85 100.395L297.21 89.825V139.625H297.2Z"
        })
    });
/* harmony default export */ const components_ApplicationLogo = (ApplicationLogo);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/NavLink.js


const NavLink = ({ active =false , children , ...props })=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out ${active ? "border-indigo-400 text-gray-900 focus:border-indigo-700" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"}`,
            children: children
        })
    });
/* harmony default export */ const components_NavLink = (NavLink);

;// CONCATENATED MODULE: ./src/components/ResponsiveNavLink.js


const ResponsiveNavLink = ({ active =false , children , ...props })=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: `block pl-3 pr-4 py-2 border-l-4 text-base font-medium leading-5 focus:outline-none transition duration-150 ease-in-out ${active ? "border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700" : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"}`,
            children: children
        })
    });
const ResponsiveNavButton = (props)=>/*#__PURE__*/ _jsx("button", {
        className: "block w-full pl-3 pr-4 py-2 border-l-4 text-left text-base font-medium leading-5 focus:outline-none transition duration-150 ease-in-out border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300",
        ...props
    });
/* harmony default export */ const components_ResponsiveNavLink = (ResponsiveNavLink);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-icons/gi"
var gi_ = __webpack_require__(8866);
// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(4041);
// EXTERNAL MODULE: external "react-icons/im"
var im_ = __webpack_require__(924);
// EXTERNAL MODULE: external "react-icons/si"
var si_ = __webpack_require__(764);
;// CONCATENATED MODULE: ./src/routes/routes.js







const Routes = [
    {
        id: 0,
        name: "ABOUT ME",
        path: "/",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineUser, {})
    },
    {
        id: 1,
        name: "SKILL SET",
        path: "/skills",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(gi_.GiSkills, {})
    },
    {
        id: 2,
        name: "EDUCATION",
        path: "/education",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(gi_.GiGraduateCap, {})
    },
    {
        id: 3,
        name: "EXPERIENCE",
        path: "/experience",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdWorkOutline, {})
    },
    {
        id: 4,
        name: "SERVICES",
        path: "/services",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdMiscellaneousServices, {})
    },
    {
        id: 5,
        name: "PORTFOLIO",
        path: "/portfolio",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(si_.SiPolywork, {})
    },
    {
        id: 6,
        name: "BLOG",
        path: "/blog",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(im_.ImBlogger2, {})
    },
    {
        id: 7,
        name: "CONTACT",
        path: "/contact",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineMail, {})
    }
];
/* harmony default export */ const routes = (Routes);

// EXTERNAL MODULE: ./src/helpers/themeChanger.js
var themeChanger = __webpack_require__(9887);
;// CONCATENATED MODULE: ./src/components/Layouts/Navigation.js










const Navigation = ()=>{
    const router = (0,router_.useRouter)();
    const { 0: open , 1: setOpen  } = (0,external_react_.useState)(false);
    const [{ theme  }] = (0,StateProvider/* useStateValue */.K1)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: theme === "light" ? "navBar" : theme === "dark" && "darkNavBar",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "max-w-8xl mx-auto px-4 sm:px-6 lg:px-12",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex justify-evenly h-16",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex-shrink-0 flex items-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_ApplicationLogo, {
                                        className: "block h-10 w-auto fill-current text-gray-600"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "hidden space-x-6 xl:-my-px xl:ml-10 xl:flex",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                                    routes.map((route)=>/*#__PURE__*/ jsx_runtime_.jsx(components_NavLink, {
                                            href: route.path,
                                            active: router.pathname === route.path,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                                className: "title",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        style: {
                                                            paddingRight: "5px"
                                                        },
                                                        children: route.icon
                                                    }),
                                                    route.name
                                                ]
                                            })
                                        }, route.id)),
                                    /*#__PURE__*/ jsx_runtime_.jsx(themeChanger/* default */.Z, {})
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "-mr-2 flex items-center xl:hidden",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: ()=>setOpen((open)=>!open),
                                className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    className: "h-6 w-6",
                                    stroke: "currentColor",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    children: open ? /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        className: "inline-flex",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M6 18L18 6M6 6l12 12"
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        className: "inline-flex",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M4 6h16M4 12h16M4 18h16"
                                    })
                                })
                            })
                        })
                    ]
                })
            }),
            open && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "block xl:hidden",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "pt-2 pb-3 space-y-1",
                    children: [
                        routes.map((route)=>/*#__PURE__*/ jsx_runtime_.jsx(components_ResponsiveNavLink, {
                                href: route.path,
                                active: router.pathname === route.path,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                    className: "title",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            style: {
                                                paddingRight: "5px"
                                            },
                                            children: route.icon
                                        }),
                                        route.name
                                    ]
                                })
                            }, route.id)),
                        /*#__PURE__*/ jsx_runtime_.jsx(themeChanger/* default */.Z, {})
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const Layouts_Navigation = (Navigation);

;// CONCATENATED MODULE: ./src/components/Layouts/GuestLayout.js







const GuestLayout = ({ children , info  })=>{
    (0,external_react_.useEffect)(()=>{
        axios/* default.get */.Z.get("/hit").then((res)=>{
            res.status;
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hidden",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Layouts_Navigation, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "font-sans text-gray-900 antialiased",
                children: [
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(particles, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FooterSection, {})
        ]
    });
};
/* harmony default export */ const Layouts_GuestLayout = (GuestLayout);


/***/ }),

/***/ 8914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6906);




const MetaSection = ({ title , keywords , description  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "keywords",
                content: keywords
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:description",
                content: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:keywords",
                content: keywords
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:url",
                content: "http://next.3d-club.org"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "csrf-token",
                content: "{{ csrf_token() }}"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MetaSection);


/***/ }),

/***/ 2833:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4228);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6197);
/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6906);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_5__]);
framer_motion__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const MostPopularBlogs = ({ data  })=>{
    const [{ theme  }] = (0,_states_StateProvider__WEBPACK_IMPORTED_MODULE_2__/* .useStateValue */ .K1)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "MOST POPULAR BLOGS"
            }),
            data?.map((blog)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: {
                        pathname: `/blog/${blog.title.replace(/\ /g, "-")}`
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                            initial: "hidden",
                            animate: "visible",
                            variants: _helpers_animation__WEBPACK_IMPORTED_MODULE_4__/* ["default"].slideInRight */ .Z.slideInRight,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: theme === "dark" ? "popularBlogs" : theme === "light" && "popularBlogsLight",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${"http://witballtech.com"}/${blog.image}`,
                                        alt: blog.title
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "popularBlogInfo",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                children: blog.title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: blog.title
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                }, blog.id))
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MostPopularBlogs);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const variants = {
    fadeIn: {
        hidden: {
            opacity: 0,
            scale: .7
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: .1,
                duration: 1,
                type: "tween",
                ease: "easeInOut"
            }
        }
    },
    slideInLeft: {
        hidden: {
            x: -300,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: .3,
                ease: "easeInOut"
            }
        }
    },
    slideInRight: {
        hidden: {
            x: 300,
            opacity: 0,
            scale: .7
        },
        visible: {
            x: 0,
            scale: 1,
            opacity: 1,
            transition: {
                delay: .5,
                ease: "easeInOut"
            }
        }
    },
    crossFromRight: {
        hidden: {
            x: 800,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: .4,
                ease: "easeInOut"
            }
        }
    },
    crossFromLeft: {
        hidden: {
            x: -800,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: .3,
                ease: "easeInOut"
            }
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (variants);


/***/ }),

/***/ 9887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _states_StateProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6575);





const ThemeChanger = ()=>{
    const { systemTheme , theme , setTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const { 0: mounted , 1: setMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [{}, dispatch] = (0,_states_StateProvider__WEBPACK_IMPORTED_MODULE_4__/* .useStateValue */ .K1)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setMounted(true);
        dispatch({
            type: "SET_THEME",
            item: localStorage.theme
        });
    }, [
        theme
    ]);
    if (!mounted) return null;
    const renderThemeChanger = ()=>{
        const currentTheme = theme === "system" ? systemTheme : theme;
        if (currentTheme === "dark") {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.SunIcon, {
                className: "w-10 h-10 text-yellow-500 ",
                role: "button",
                onClick: ()=>setTheme("light")
            });
        } else {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.MoonIcon, {
                className: "w-10 h-10 text-gray-900 ",
                role: "button",
                onClick: ()=>setTheme("dark")
            });
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
            className: "h-10 dark:border-gray-700",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container px-4 sm:px-6 py-4 flex justify-between items-center",
                children: renderThemeChanger()
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeChanger);


/***/ })

};
;