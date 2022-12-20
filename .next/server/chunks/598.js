"use strict";
exports.id = 598;
exports.ids = [598];
exports.modules = {

/***/ 660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ experience)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/si"
var si_ = __webpack_require__(764);
;// CONCATENATED MODULE: ./src/components/cards/experienceCard.js



const ExperienceCard = ({ from , to , desc , company , designation , lang  })=>{
    const { 0: From , 1: setFrom  } = (0,external_react_.useState)(from);
    const { 0: To , 1: setTo  } = (0,external_react_.useState)(to);
    const { 0: diff , 1: setDiff  } = (0,external_react_.useState)("");
    (0,external_react_.useEffect)(()=>{
        setFrom(new Date(from).toLocaleString("default", {
            month: "long",
            year: "numeric"
        }));
        setTo(new Date(to).toLocaleString("default", {
            month: "long",
            year: "numeric"
        }));
        setDiff(getMonthDifference(new Date(from), new Date(to)));
    }, [
        from,
        to
    ]);
    function getMonthDifference(startDate, endDate) {
        return endDate.getMonth() - startDate.getMonth() + 12 * (endDate.getFullYear() - startDate.getFullYear());
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "pb-5",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(si_.SiWorkplace, {
                        size: "35px"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-2xl pl-2 text-tomato",
                        children: designation
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "pl-11",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "font-light",
                        children: company
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-grey font-extralight pb-2",
                        children: [
                            From,
                            " - ",
                            To,
                            " . ",
                            diff,
                            " mo"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-sm",
                        children: desc
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const experienceCard = (ExperienceCard);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(4041);
;// CONCATENATED MODULE: ./src/components/experience.js





const Experience = ({ theme , workplaces  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `px-8 py-3 mt-3 ${theme === "light" ? "bg-white" : "bg-dark"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${workplaces.length === 3 && "hidden"} cursor-pointer`,
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: {
                        pathname: `/`
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdKeyboardBackspace, {
                        size: "3rem"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "headerText py-4",
                children: "Experience"
            }),
            workplaces?.map((wp)=>/*#__PURE__*/ jsx_runtime_.jsx(experienceCard, {
                    from: wp.from,
                    to: wp.to,
                    company: wp.company_name,
                    designation: wp.designation,
                    desc: wp.description,
                    lang: wp.language
                }, wp.id)),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${workplaces.length > 3 && "hidden"}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: {
                        pathname: `/experience`
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "flex m-auto bg-lightGreen px-3 py-1 rounded-sm text-offWhite text-sm",
                        children: "Show All"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const experience = (Experience);


/***/ })

};
;