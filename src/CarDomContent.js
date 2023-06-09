import React from "react";

function CarDomContent({make, model, year, color, location, seller, price}){
   
    return(

        <div id="cars">
        
        <p>{make}</p>
        <p>{model}</p>
        <p>{year}</p>
        <p>{color}</p>
        <p>{seller}</p>
        <p>{price}</p>
        <p>{location}</p>

        </div>

    )
}

export default CarDomContent;