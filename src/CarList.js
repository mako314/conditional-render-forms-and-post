import React from 'react';
import CarDomContent from './CarDomContent';

function CarList({carContent}){

    // console.log(carContent)

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
        />
    ))

    // console.log(mappedCars)

    return(
        <div>
        {mappedCars}
        </div>

    )
}

export default CarList;