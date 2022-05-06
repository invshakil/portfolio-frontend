import ApplicationLogo from '@/components/ApplicationLogo'
import Link from 'next/link'
import NavLink from '@/components/NavLink'
import ResponsiveNavLink from '@/components/ResponsiveNavLink'
import {useRouter} from 'next/router'
import React, {useEffect, useState} from 'react'
import Routes from "@/routes/routes"
import ThemeChanger from "@/helpers/themeChanger";
import {useStateValue} from "@/states/StateProvider";
import {useAuth} from "@/hooks/auth"
import {DropdownButton} from "@/components/DropdownLink"
import Dropdown from "@/components/Dropdown"
import AdminRoutes from "@/routes/adminRoutes"


const Navigation = ({user,drawer}) => {
    const router = useRouter()
    const {logout } = useAuth()
    const [open, setOpen] = useState(false)
    const [routes, setRoute] = useState([])
    const [{theme}] = useStateValue()
    const adminPath=router.pathname.includes('admin')

    useEffect(() => {
        if(!adminPath){
            setRoute(Routes)
        }
        else{
            setRoute(AdminRoutes)
        }
    }, [adminPath])


    return (
        <nav className={drawer? 'drawerNav':(theme === 'light') ? 'navBar' :(theme === 'dark') && 'darkNavBar'}>
            {/* Primary Navigation Menu */}
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex justify-between h-16">
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
                        <div className={drawer?'hidden space-x-15 xl:-my-px xl:ml-8 xl:flex flex-col drawer':'hidden space-x-5 xl:-my-px xl:ml-10 xl:flex'} style={!drawer?{minWidth:'95vw'}:null}>
                             {/*Logo */}
                            <div className="flex-shrink-0 flex items-center" style={drawer?{marginBottom:'.5rem'}:{display:'none'}}>
                                <Link href="/">
                                    <a>
                                        <ApplicationLogo className="block h-10 w-auto fill-current text-gray-600"/>
                                    </a>
                                </Link>
                            </div>
                            <hr/>
                            {
                                routes.map(route => (
                                    <NavLink
                                        key={route.id}
                                        href={route.path}
                                        active={router.pathname === route.path}
                                        drawer={drawer}
                                    >
                                        <h1 className='title'>
                                            <span style={drawer?{paddingRight: '35px'}:{paddingRight: '5px'}}>{route.icon}</span>
                                            {route.name}
                                        </h1>
                                    </NavLink>
                                ))
                            }
                            <hr/>
                            {!drawer && <ThemeChanger/>}
                        </div>
                    </div>
                    {/* Settings Dropdown */}
                    <div className={!adminPath?'hidden' :'sm:flex sm:items-center sm:ml-6'}>
                        {
                            adminPath && user &&
                            <Dropdown
                                align="right"
                                width="48"
                                trigger={
                                    <button className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out">
                                        <div>{user?.name}</div>

                                        <div className="ml-1">
                                            <svg
                                                className="fill-current h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </button>
                                }>
                                {/* Authentication */}

                                <DropdownButton  onClick={logout}>
                                    Logout
                                </DropdownButton>

                            </Dropdown>
                        }

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
                    <div className={!drawer?'pt-2 pb-3 space-y-1' :'drawer'}>
                        {
                            Routes.map(route => (
                                <ResponsiveNavLink
                                    key={route.id}
                                    href={route.path}
                                    active={router.pathname === route.path}
                                    drawer={drawer}
                                >
                                    <h1 className='title'>
                                        <span style={{paddingRight: '5px'}}>{route.icon}</span>
                                        {route.name}
                                    </h1>
                                </ResponsiveNavLink>
                            ))
                        }
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navigation
