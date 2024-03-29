import React, {useEffect, useState} from 'react';
import {useTheme} from 'next-themes';
import {MoonIcon, SunIcon} from "@heroicons/react/solid";
import {useStateValue} from "../states/StateProvider";

const ThemeChanger = () => {

    const {systemTheme, theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);
    const [{}, dispatch] = useStateValue()

    useEffect(() => {
        setMounted(true)
        dispatch({
            type: 'SET_THEME',
            item: localStorage.theme
        })
    }, [theme]);

    if (!mounted) return null;

    const renderThemeChanger = () => {
        const currentTheme = theme === "system" ? systemTheme : theme;
        if (currentTheme === "dark") {
            return (
                <SunIcon className="w-8 h-8 text-whiteLight " role="button" onClick={() => setTheme('light')}/>
            )
        } else {
            return (
                <MoonIcon className="w-8 h-8 text-gray-900 " role="button" onClick={() => setTheme('dark')}/>
            )
        }
    };

    return (
        <div>
            <header className="dark:border-gray-700">
                <div className="container  lg:px-0 sm:px-6 flex justify-between items-center">
                    {renderThemeChanger()}
                </div>
            </header>
        </div>
    );
};

export default ThemeChanger;
