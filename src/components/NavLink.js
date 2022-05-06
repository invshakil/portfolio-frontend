import Link from 'next/link'
import React from "react"

const NavLink = ({active = false, children, ...props}) => (
    <Link {...props}>
        <a
            className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out ${
                active && !props.drawer
                    ? 'border-indigo-400 text-gray-900 focus:border-indigo-700'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300'
            }`}>
            <a className={props.drawer && 'drawer-items'}>
                {children}
            </a>
        </a>
    </Link>
)

export default NavLink
