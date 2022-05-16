import React from "react";
import {useStateValue} from "@/states/StateProvider";
import Modal from "@/hooks/modal";
import useModal from "@/hooks/useModal";
import ProjectDescription from "@/components/cards/projectDescription";
import propTypes from "prop-types";

const PortfolioCard = ({tag, title, demo, description, image, service}) => {
    const [{theme}] = useStateValue()
    const {toggle, visible} = useModal();

    return (
        <div onClick={toggle} className='activateModal'>
            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${image}`}
                 alt={title}
            />
            {/*<img src={image} alt={title}/>*/}
            <h2 className={(theme === 'dark') ? 'projectName' : (theme === 'light') && 'projectNameLight'}>{title}</h2>

            <Modal
                visible={visible}
                toggle={toggle}
                className={(theme === 'dark') ? 'darkPortfolio' : (theme === 'light') && 'lightPortfolio'}
                component={
                    <ProjectDescription
                        tag={tag}
                        title={title}
                        demo={demo}
                        description={description}
                        service={service}
                    />
                }/>
        </div>
    )
}

export default PortfolioCard

PortfolioCard.propTypes = {
    tag: propTypes.string,
    tech: propTypes.string,
    title: propTypes.string,
    demo: propTypes.string,
    image: propTypes.string,
    description: propTypes.string,
    service: propTypes.string,
}
