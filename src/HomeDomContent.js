import React from "react";

function HomeDomContent({home, bed, bath, sqFt, built, price, location, realtor, image}){

    // In this component, we are simply returning mapped over data. We wrap all this data below in a <div>, we pass props that come from the List component that matches this one.
    // These props are using dot notation to access data inside of our db.json, after the server has both been launched, and the data fetched by using useEffect in App.js

    return(

        <div id="home">

        <img src={image}/>
        <p>{home}</p>
        <p>{bed}</p>
        <p>{bath}</p>
        <p>{sqFt}</p>
        <p>{built}</p>
        <p>{price}</p>
        <p>{location}</p>
        <p>{realtor}</p>
        
        
        </div>

    )
}

export default HomeDomContent;