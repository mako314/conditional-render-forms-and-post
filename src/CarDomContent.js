import React from "react";

function CarDomContent({make, model, year, color, location, seller, price, image}){
   

    // In this component, we are simply returning mapped over data. We wrap all this data below in a <div>, we pass props that come from the List component that matches this one.
    // These props are using dot notation to access data inside of our db.json, after the server has both been launched, and the data fetched by using useEffect in App.js


    return(

        <div id="cars">

        <img src={image}/>
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