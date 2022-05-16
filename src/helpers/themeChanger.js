import React, {useEffect, useState} from 'react';
import {useTheme} from 'next-themes';
import {MoonIcon, SunIcon} from "@heroicons/react/solid";
import {useStateValue} from "@/states/StateProvider";

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
                <SunIcon className="w-10 h-10 text-yellow-500 " role="button" onClick={() => setTheme('light')}/>
            )
        } else {
            return (
                <MoonIcon className="w-10 h-10 text-gray-900 " role="button" onClick={() => setTheme('dark')}/>
            )
        }
    };

    return (
        <div>
            <header className="h-15 dark:border-gray-700">
                <div className="container  px-4 sm:px-6 py-4 flex justify-between items-center">
                    {renderThemeChanger()}
                </div>
            </header>
        </div>
    );
};

export default ThemeChanger;
