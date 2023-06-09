import React, {useState} from 'react';
import HomeList from "./HomeList";
import CarList from './CarList.js';

function FormOne({homeContent, carContent}){
    const [selectedCategory, setSelectedCategory] = useState(" ")
    // console.log(selectedCategory)

    const carForm = (
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
            <input type="text" name="sellingLocation"/>
        </label>
        
        <label>
            Seller: 
            <input type="text" name="seller"/>
        </label>
        
        <label>
            Price :
            <input type="text" name="price"/>
        </label>

        <br/>

        <button className="button" type="submit"> Submit Button </button>
        </>
    )

    const homeForm = (
        <>
        <label>
            Home Type: 
            <input type="text" name="homeType"/>
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
            <input type="text" name="yearBuilt"/>
        </label>

        <label>
            Asking Price: 
            <input type="text" name="askingPrice"/>
        </label>

        <label>
            Selling Location: 
            <input type="text" name="sellingLocation"/>
        </label>

        <label>
            Realtor: 
            <input type="text" name="realtor"/>
        </label>

        <br/>

        <button className="button" type="submit"> Submit Button </button>
        </>
    )





    return(

        <div id="formDiv">
            <form className = "form" onChange={(e) => setSelectedCategory(e.target.value)} >

                <select>
                    <option value="select"> Please Select an Option Below </option>
                    <option value="cars"> Cars</option>
                    <option value="homes"> Home </option>
                </select>


                {selectedCategory === "cars" ? carForm : "" }
                {selectedCategory === "homes" ? homeForm : "" }
            </form>

            {selectedCategory === "homes" ? <HomeList homeContent={homeContent}/> : "" }
            {selectedCategory === "cars" ? <CarList carContent={carContent}/> : "" }

        </div>
        
    )
}

export default FormOne;