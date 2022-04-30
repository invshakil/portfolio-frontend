const variants = {
    fadeIn: {
        hidden: {
            opacity: 0,
            scale: .7,
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: .4,
                duration: 1,
                type: "tween",
                ease: "easeInOut"
            }
        },
    },
    slideInLeft: {
        hidden: {
            x: -300,
            opacity: 0,
            scale: .7,
        },
        visible: {
            x: 0,
            scale: 1,
            opacity: 1,
            transition: {
                delay: .5,
                ease: "easeInOut"
            }
        },
    },
    slideInRight: {
        hidden: {
            x: 300,
            opacity: 0,
            scale: .7,
        },
        visible: {
            x: 0,
            scale: 1,
            opacity: 1,
            transition: {
                delay: .7,
                ease: "easeInOut"
            }
        },
    },
    crossFromRight: {
        hidden: {
            x: 800,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: .6,
                ease: "easeInOut"
            }
        },
    },
    crossFromLeft: {
        hidden: {
            x: -800,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: .5,
                ease: "easeInOut"
            }
        },
    },

}

export default variants
