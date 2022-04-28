import 'tailwindcss/tailwind.css'
import '../styles/navbar.scss'
import '../styles/landingPage.scss'
import '../styles/footer.scss'
import '../styles/skills.scss'
import '../styles/careerInfo.scss'
import '../styles/services.scss'
import '../styles/global.css'
import '../styles/portfolio.scss'
import {ThemeProvider} from "next-themes"
import NextNProgress from 'nextjs-progressbar';

const App = ({Component, pageProps}) =>
    <ThemeProvider
        enableSystem={false}
        attribute="class"
        defaultTheme="dark"
    >
        <NextNProgress color='#5e00ff'/>
        <Component {...pageProps} />
    </ThemeProvider>

export default App
