import React from 'react';
import HomeDomContent from './HomeDomContent';

function HomeList({homeContent}){

    // console.log(homeContent)

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
        />
    ))

    console.log(mappedHomes)

    return(
        <div>
        {mappedHomes}
        </div>
        
        
    )
}

export default HomeList;