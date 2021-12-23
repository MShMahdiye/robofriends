import React from "react";
import Card from "./Card";

const CardList = ({robots,showModal}) => {
    const cardArray = robots.map((user,i) => {
        const deepClone = obj => JSON.parse(JSON.stringify(obj))
        const obj = deepClone(robots)
        const geo =obj[i].address.geo
        return (
            <Card  key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} geo={geo} showModal={showModal} />
            
        );
    });
    return(
        <div>
            {cardArray}
        </div>
        
    );
}
// [robots[i].geo.lat,robots[i].geo.lng]
export default CardList;