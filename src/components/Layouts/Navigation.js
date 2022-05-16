import ApplicationLogo from '@/components/ApplicationLogo'
import Link from 'next/link'
import NavLink from '@/components/NavLink'
import ResponsiveNavLink from '@/components/ResponsiveNavLink'
import {useRouter} from 'next/router'
import React, {useState} from 'react'
import Routes from "@/routes/routes"
import ThemeChanger from "@/helpers/themeChanger"
import {useStateValue} from "@/states/StateProvider"


const Navigation = () => {
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const [{theme}] = useStateValue()

    return (
        <nav className={(theme === 'light') ? 'navBar' : (theme === 'dark') && 'darkNavBar'}>
            {/* Primary Navigation Menu */}
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex justify-evenly h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/">
                            <a>
                                <ApplicationLogo className="block h-10 w-auto fill-current text-gray-600"/>
                            </a>
                        </Link>
                    </div>
                    <div className="flex">
                        {/* Navigation Links */}
                        <div className="hidden space-x-6 xl:-my-px xl:ml-10 xl:flex">
                            <hr/>
                            {
                                Routes.map(route => (
                                    <NavLink
                                        key={route.id}
                                        href={route.path}
                                        active={router.pathname === route.path}
                                    >
                                        <h1 className="title">
                                            <span style={{paddingRight: '5px'}}>{route.icon}</span>
                                            {route.name}
                                        </h1>
                                    </NavLink>
                                ))
                            }
                            <ThemeChanger/>
                        </div>
                    </div>
                    {/* Hamburger */}
                    <div className="-mr-2 flex items-center xl:hidden">
                        <button
                            onClick={() => setOpen(open => !open)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24">
                                {open ? (
                                    <path
                                        className="inline-flex"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        className="inline-flex"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Responsive Navigation Menu */}
            {open && (
                <div className="block xl:hidden">
                    <div className="pt-2 pb-3 space-y-1">
                        {
                            Routes.map(route => (
                                <ResponsiveNavLink
                                    key={route.id}
                                    href={route.path}
                                    active={router.pathname === route.path}
                                >
                                    <h1 className="title">
                                        <span style={{paddingRight: '5px'}}>{route.icon}</span>
                                        {route.name}
                                    </h1>
                                </ResponsiveNavLink>
                            ))
                        }
                        <ThemeChanger/>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navigation
