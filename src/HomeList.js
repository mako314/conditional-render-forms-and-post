import React from 'react';
import HomeDomContent from './HomeDomContent';

function HomeList({homeContent}){

    // console.log(homeContent)

    //This is where a lot of the magic is happening. We've received a prop from our FormOne, and we wait for an option to be selected in the drop down selector, and then return the appropriate content onto the page. 

    //Since we have our prop (our data, the HOME array of Objects), we can map over the prop, and pass it the component we'd like it to send the data too. Inside of this component, we pass the props listed below and can use JSX to display it.

    const mappedHomes = homeContent.map((home) =>(
        <HomeDomContent
        key={home.id}
        home={home.home}
        bed={home.bed}
        bath={home.bath}
        sqFt={home.sqFt}
        built={home.built}
        price={home.price}
        location={home.location}
        realtor={home.realtor}
        image={home.image}
        />
    ))

    //Remember to console log everything!

    // console.log(mappedHomes)

    //If you call {mappedHomes} in the return inside a div, it will return the <HomeDomContent/> with all the mapped props!


    return(
        <div>
        {mappedHomes}
        </div>
        
        
    )
}

export default HomeList;