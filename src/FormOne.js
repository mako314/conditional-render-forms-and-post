import React, {useState} from 'react';

function FormOne(){
    const [selectedCategory, setSelectedCategory] = useState(" ")
    console.log(selectedCategory)

    const carForm = (
        <>
        <label>
            <input type="text" name="make"> </input>
        </label>

        <label>
            <input type="text" name="model"> </input>
        </label>

        <label>
            <input type="text" name="year"> </input>
        </label>
        
        <label>
            <input type="text" name="color"> </input>
        </label>
        
        <label>
            <input type="text" name="sellingLocation"> </input>
        </label>
        
        <label>
            <input type="text" name="seller"> </input>
        </label>
        
        <label>
            <input type="text" name="price"> </input>
        </label>
        </>
    )

    const homeForm = (
        <>
        <label>
            <input type="text" name="homeType"> </input>
        </label>

        <label>
            <input type="text" name="bed"> </input>
        </label>

        <label>
            <input type="text" name="bath"> </input>
        </label>

        <label>
            <input type="text" name="sqFt"> </input>
        </label>

        <label>
            <input type="text" name="yearBuilt"> </input>
        </label>

        <label>
            <input type="text" name="askingPrice"> </input>
        </label>

        <label>
            <input type="text" name="sellingLocation"> </input>
        </label>

        <label>
            <input type="text" name="realtor"> </input>
        </label>
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
        </div>
    )
}

export default FormOne;