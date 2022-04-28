import React from "react";

const PortfolioCard = ({tag,tech,title,demo,description,image,service}) => {
    return (
        <div>
            <img src={image} alt={title}/>
            <h2>{title}</h2>
        </div>
    )
}

export default PortfolioCard
