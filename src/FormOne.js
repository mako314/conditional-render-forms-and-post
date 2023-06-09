import React, {useState} from 'react';

function FormOne(){
    const [selectedCategory, setSelectedCategory] = useState(" ")
    console.log(selectedCategory)

    const carForm = (
        <>
        <label>
            <input type="text"> </input>
        </label>

        <label>
            <input type="text"> </input>
        </label>

        <label>
            <input type="text"> </input>
        </label>
        
        <label>
            <input type="text"> </input>
        </label>
        
        <label>
            <input type="text"> </input>
        </label>
        
        <label>
            <input type="text"> </input>
        </label>
        
        <label>
            <input type="text"> </input>
        </label>
        </>
    )

    const homeForm = (
        <>
        <label>
            <input type="text"> </input>
        </label>

        <label>
            <input type="text"> </input>
        </label>

        <label>
            <input type="text"> </input>
        </label>

        <label>
            <input type="text"> </input>
        </label>

        <label>
            <input type="text"> </input>
        </label>

        <label>
            <input type="text"> </input>
        </label>

        <label>
            <input type="text"> </input>
        </label>

        <label>
            <input type="text"> </input>
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

            </form>
        </div>
    )
}

export default FormOne;