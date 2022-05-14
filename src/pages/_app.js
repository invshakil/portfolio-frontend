import 'tailwindcss/tailwind.css'
import '../styles/navbar.scss'
import '../styles/landingPage.scss'
import '../styles/footer.scss'
import '../styles/skills.scss'
import '../styles/careerInfo.scss'
import '../styles/services.scss'
import '../styles/global.css'
import '../styles/portfolio.scss'
import '../styles/modal.scss'
import '../styles/contact.scss'
import '../styles/blog.scss'
import '../styles/singleBlog.scss'
import '../styles/admin/dashboard.scss'
import {ThemeProvider} from "next-themes"
import NextNProgress from 'nextjs-progressbar';
import React from 'react';
import reducer, {initialState} from "@/states/reducer";
import {StateProvider} from "@/states/StateProvider";

const App = ({Component, pageProps}) =>
    <ThemeProvider
        attribute="class"
        forcedTheme={Component.theme || null}
    >
        <NextNProgress color='tomato'/>
        <React.StrictMode>
            <StateProvider initialState={initialState} reducer={reducer}>
                <Component {...pageProps} />
            </StateProvider>
        </React.StrictMode>
    </ThemeProvider>

export default App
