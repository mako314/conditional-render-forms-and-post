import React from "react";

function HomeDomContent({home, bed, bath, sqFt, built, price, location, realtor}){

    return(

        <div id="home">
     
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