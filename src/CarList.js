import React from 'react';
import CarDomContent from './CarDomContent';

function CarList({carContent}){

    // console.log(carContent)

    //This is where a lot of the magic is happening. We've received a prop from our FormOne, and we wait for an option to be selected in the drop down selector, and then return the appropriate content onto the page. 

    //Since we have our prop (our data, the CAR array of Objects), we can map over the prop, and pass it the component we'd like it to send the data too. Inside of this component, we pass the props listed below and can use JSX to display it.

    const mappedCars = carContent.map((car) =>(
        <CarDomContent
        key={car.id}
        make={car.make}
        model={car.model}
        year={car.year}
        color={car.color}
        location={car.location}
        seller={car.seller}
        price={car.price}
        image={car.image}
        />
    ))

    //Remember to console log everything!

    // console.log(mappedCars)

    //If you call {mappedCars} in the return inside a div, it will return the <CarDomContent/> with all the mapped props!

    return(
        <div>
        {mappedCars}
        </div>

    )
}

export default CarList;