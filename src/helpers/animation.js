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
                type: "tween"
            }
        },
    },
    slideIn: {
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
                delay: .4
            }
        },
    },

}

export default variants
