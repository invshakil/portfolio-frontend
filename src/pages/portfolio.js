import React, {useEffect, useState} from "react"
import GuestLayout from "@/components/Layouts/GuestLayout"
import PortfolioCard from "@/components/cards/portfolioCard";
import filterPortfolioData from "@/dummyData/filterPortfolioData";
import PortfolioData from "@/dummyData/portfolioData";
import {motion} from "framer-motion"
import variants from "@/helpers/animation";
import {useStateValue} from "@/states/StateProvider";
import Api from "@/lib/axios"

const Portfolio = () => {
    const [filter, setFilter] = useState('All')
    const [data, setData] = useState([])
    const [service, setService] = useState([])
    const [{theme}] = useStateValue()

    useEffect(() => {
        Api.get(`/projects`)
            .then(response =>{
                console.log('projects',response.data.data.data)
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

        Api.get(`/services`)
            .then(response =>{
                console.log('projects',response.data.data.data)
                setService(response.data.data.data)
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
                            service?.map(item => (
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
                    data.length ?
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
