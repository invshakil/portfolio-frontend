import React, {useEffect, useState} from "react"
import GuestLayout from "@/components/Layouts/GuestLayout"
import PortfolioCard from "@/components/cards/portfolioCard";
import {motion} from "framer-motion"
import variants from "@/helpers/animation";
import {useStateValue} from "@/states/StateProvider";
import Api from "@/lib/axios"

const Portfolio = (props) => {
    const [filter, setFilter] = useState('All')
    const [data, setData] = useState([])
    const [{theme}] = useStateValue()

    useEffect(() => {

        setData(props?.projects)

        filter&&
        Api.get(`/projects`)
            .then(response =>{
                setData(response.data.data.data)
                let updatedItems = response.data.data.data.filter((curElem) => {
                    return curElem.service.name === filter;
                });

                if (filter === 'All') {
                    setData(response.data.data.data);
                } else {
                    setData(updatedItems);
                }
            })

    }, [filter]);

    function filterSelect(e) {
        setFilter(e.target.textContent)
    }

    return (
        <GuestLayout>
            <div className='portfolioContainer'>
                <h1> MY PORTFOLIO</h1>
                <br/>

                <div className={(theme === 'dark') ? 'filterPortfolio' : (theme === 'light') && 'filterPortfolioLight'}>
                    <ul>
                        <div className={filter === 'All' ? 'activeHr' : 'inActiveHr'}>
                        <li className={filter === 'All' ? 'active' : 'inActive'}
                            onClick={filterSelect}
                        >
                            All
                        </li>
                        <hr/>
                        </div>
                        {
                            props.services?.map(item => (
                                <div
                                    className={filter === item.name ? 'activeHr' : 'inActiveHr'}
                                    key={item.id}
                                >
                                    <li
                                        className={filter === item.name ? 'active' : 'inActive'}
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
                    data?
                        <div className='portfolio'>
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

    await Api.get(`/projects`)
        .then(response => {
            projects = response.data.data.data
        })

    await Api.get(`/services`)
        .then(response => {
            services = response.data.data.data
        })

    return {
        props: {projects,services},
    }
}
