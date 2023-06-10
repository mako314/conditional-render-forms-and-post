import React, {useState} from 'react';
import HomeList from "./HomeList";
import CarList from './CarList.js';

function FormOne({homeContent, setHomeContent, setCarContent, carContent}){
    
    //Watch where you declare state variables! This need to be made available for the entire form!

    const [selectedCategory, setSelectedCategory] = useState(" ")

    function handleSubmit(e){
        e.preventDefault()                      //IF YOU FORGET TO CALL THIS, THE WHOLE PAGE WILL RE-LOAD UPON SUBMISSION!

    // console.log(selectedCategory)

    //Take the state variable that holds the selected form category you chose, and put it into an IF statement. We'll use this if statement to find out where we'll be posting the information!

    // In this case, we first compare what's held inside our selectedCategory stateVariable, with a string that holds the word "cars". To find where we got this from, simply look at our return and check what we named our options!

    //PLEASE, take note how we declare our new object, "newCar", INSIDE of the if. If it's declared outside, be it in the function handleSubmit, or the component function FormOne, anytime you fire off a post, it will take the FIRST new object it sees! Meaning if the data inputs you're inputting don't match, you will come up with errors!

    if(selectedCategory === "cars"){
        const newCar = {
            image: e.target.image.value,
            make:e.target.make.value ,
            model:e.target.model.value ,
            year:e.target.year.value ,
            color:e.target.color.value ,
            location:e.target.location.value ,
            seller:e.target.seller.value ,
            price:e.target.price.value ,
        }
      fetch('http://localhost:3000/cars', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(newCar)
    })
    .then(resp => resp.json())
    .then(newCar => setCarContent([...carContent, newCar]))

    // In this case, we compare what's held inside our selectedCategory stateVariable, with a string that holds the word "homes". To find where we got this from, simply look at our return and check what we named our options!

    } else if(selectedCategory === "homes") {
        const newHome = {
            image:e.target.image.value ,
            home:e.target.home.value ,
            bed:e.target.bed.value ,
            bath:e.target.bath.value ,
            sqFt:e.target.sqFt.value ,
            built:e.target.built.value ,
            price:e.target.price.value ,
            location:e.target.location.value ,
            realtor:e.target.realtor.value ,
        }

      fetch('http://localhost:3000/homes', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(newHome)
    })
    .then(resp => resp.json())
    .then(newHome => setHomeContent([...homeContent, newHome]))

    }}

    // This variable will create help create our CAR HTML form.

    const carForm = (
    
        //Instead of wrapping this form in a div, to avoid DIV-ception, we'll use a react fragment.
        <>
        <label>
            Make: 
            <input type="text" name="make"/>
        </label>

        <label>
            Model: 
            <input type="text" name="model"/>
        </label>

        <label>
            Year: 
            <input type="text" name="year"/>
        </label>
        
        <label>
            Color: 
            <input type="text" name="color"/>
        </label>
        
        <label>
            Selling Location: 
            <input type="text" name="location"/>
        </label>
        
        <label>
            Seller: 
            <input type="text" name="seller"/>
        </label>
        
        <label>
            Price: 
            <input type="text" name="price"/>
        </label>

        <label>
            Image: 
            <input type="text" name="image" placeholder="Image Link"/>
        </label>

        <br/>

        <button className="button" type="submit"> Submit Button </button>
        </>
    )


    // This variable will create help create our HOME HTML form.

    const homeForm = (
        <>
        <label>
            Home Type: 
            <input type="text" name="home"/>
        </label>

        <label>
            Beds: 
            <input type="text" name="bed"/>
        </label>

        <label>
            Bathrooms: 
            <input type="text" name="bath"/>
        </label>

        <label>
            Square Footage: 
            <input type="text" name="sqFt"/>
        </label>

        <label>
            Year Built:
            <input type="text" name="built"/>
        </label>

        <label>
            Asking Price: 
            <input type="text" name="price"/>
        </label>

        <label>
            Selling Location: 
            <input type="text" name="location"/>
        </label>

        <label>
            Realtor: 
            <input type="text" name="realtor"/>
        </label>

        <label>
            Image: 
            <input type="text" name="image" placeholder="Image Link"/>
        </label>

        <br/>

        <button className="button" type="submit"> Submit Button </button>
        </>
    )





    return(

        // Wrap everything in a div!

        <div id="formDiv">

            {/* Call handleSubmit on the form, by calling the eventListener onSubmit and setting it equal to the function we declared above. It's a good practice to name your functions exactly what you want them to do! */}

            <form className = "form" onSubmit={handleSubmit}>

                {/* We include a default option to start in the select so that a form doesn't automatically appear on the page! */}

                <select onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="select"> Please Select an Option Below </option>
                    <option value="cars"> Cars</option>
                    <option value="homes"> Home </option>
                </select>

                {/* Conditionally render either the carForm variable we have (with the HTML elements) or the homeForm (with the HTML elements), note that this is all wrapped in a <form> element.*/}

                {selectedCategory === "cars" ? carForm : "" }
                {selectedCategory === "homes" ? homeForm : "" }
            </form>

                {/* We'll call our list components here, which have the actual domDisplayComponents inside of them. These will ONLY APPEAR after you have selected a category! 
                They'll need a prop to render our data, so lets pass the data (the getter variable, not the setter) we received from app!*/}

            {selectedCategory === "homes" ? <HomeList homeContent={homeContent}/> : "" }
            {selectedCategory === "cars" ? <CarList carContent={carContent}/> : "" }

        </div>
        
    )
}

export default FormOne;