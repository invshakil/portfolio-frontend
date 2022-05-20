import React, {useEffect, useState} from "react"
import GuestLayout from "@/components/Layouts/GuestLayout"
import PortfolioCard from "@/components/cards/portfolioCard"
import {motion} from "framer-motion"
import variants from "@/helpers/animation"
import {useStateValue} from "@/states/StateProvider"
import Api from "@/lib/axios"
import MetaSection from "@/components/metaTags"
import qs from "qs"

const Portfolio = (props) => {
    const [data, setData] = useState([])
    const [Filter, setFilterData] = useState('All')
    const [{theme}] = useStateValue()
    const [filter, setFilter] = useState(
        {
            search: null,
            service: null,
        })
    const query = qs.stringify(filter, {encode: false, skipNulls: true})

    useEffect(() => {
        if(filter.service){
            Api.get(`/projects?${query}`)
                .then(response => {
                    setData(response.data.data.data)
                })
        }
        else{
            setData(props.projects)
        }
    }, [filter])

    function filterSelect(e) {
        if (e.target.textContent === 'All'){
            setFilter({service: null})
            setFilterData('All')
        }
        else{
            setFilter({service: e.target.textContent})
            setFilterData('')
        }
    }

    return (
        <GuestLayout>
            <MetaSection
                title={`My Projects - ${process.env.NEXT_PUBLIC_APP_NAME}`}
                keywords={props.projects.map(p => p.tags)}
                description={props.aboutMe[0].value}
            />
            <div className="portfolioContainer">
                <h1> MY PORTFOLIO</h1>
                <br/>

                <div className={(theme === 'dark') ? 'filterPortfolio' : (theme === 'light') && 'filterPortfolioLight'}>
                    <ul>
                        <div className={Filter === 'All' ? 'activeHr' : 'inActiveHr'}>
                            <li className={Filter === 'All' ? 'active' : 'inActive'}
                                onClick={filterSelect}
                            >
                                All
                            </li>
                            <hr/>
                        </div>
                        {
                            props.services?.map(item => (
                                <div
                                    className={filter.service === item.name ? 'activeHr' : 'inActiveHr'}
                                    key={item.id}
                                >
                                    <li
                                        className={filter.service === item.name ? 'active' : 'inActive'}
                                        onClick={filterSelect}
                                    >
                                        {item.name}
                                    </li>
                                    <hr/>
                                </div>
                            ))
                        }
                    </ul>
                </div>

                {
                    data?.length>0?
                        <div className="portfolio">
                            {
                                data?.map(item => (
                                    <motion.div
                                        key={item.id}
                                        initial="hidden"
                                        animate="visible"
                                        variants={variants.fadeIn}
                                    >
                                        <PortfolioCard
                                            title={item.name}
                                            image={item.image}
                                            service={item.service_id}
                                            description={item.description}
                                            tag={item.tags}
                                            demo={item.demo_link}
                                        />
                                    </motion.div>
                                ))
                            }
                        </div>
                        :
                        <div>
                            <h3>!!! No Projects Available</h3>
                        </div>
                }

            </div>
        </GuestLayout>
    )
}

export default Portfolio

export const getServerSideProps = async () => {

    let projects = []
    let services = []
    let aboutMe = ''

    await Api.get(`/projects`)
        .then(response => {
            projects = response.data.data.data
        })

    await Api.get(`/services`)
        .then(response => {
            services = response.data.data.data
        })

    await Api.get(`/about-me`)
        .then(response => {
            aboutMe = response.data.data.filter(d => d.key === 'about_me' && d.value)
        })

    return {
        props: {projects, services, aboutMe},
    }
}
