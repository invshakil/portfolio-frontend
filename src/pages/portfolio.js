import React, {useEffect, useState} from "react"
import GuestLayout from "@/components/Layouts/GuestLayout"
import PortfolioCard from "@/components/cards/portfolioCard";
import filterPortfolioData from "@/dummyData/filterPortfolioData";
import PortfolioData from "@/dummyData/portfolioData";
import {motion} from "framer-motion"
import variants from "@/helpers/animation";
import {useStateValue} from "@/states/StateProvider";

const Portfolio = () => {
    const [filter, setFilter] = useState('All')
    const [data, setData] = useState(PortfolioData)
    const [{theme}] = useStateValue()

    useEffect(() => {
        let updatedItems = PortfolioData.filter((curElem) => {
            return curElem.Service === filter;
        });
        if (filter === 'All') {
            setData(PortfolioData);
        } else {
            setData(updatedItems);
        }
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
                        {
                            filterPortfolioData.map(item => (
                                <div
                                    className={filter === item.title ? 'activeHr' : 'inActiveHr'}
                                    key={item.id}
                                >
                                    <li
                                        className={filter === item.title ? 'active' : 'inActive'}
                                        onClick={filterSelect}
                                    >
                                        {item.title}
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
                                data.map(item => (
                                    <motion.div
                                        key={item.id}
                                        initial="hidden"
                                        animate="visible"
                                        variants={variants.fadeIn}
                                    >
                                        <PortfolioCard
                                            title={item.title}
                                            image={item.image}
                                            service={item.Service}
                                            description={item.description}
                                            tag={item.tag}
                                            tech={item.tech}
                                            demo={item.demo}
                                            list={item.list}
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
