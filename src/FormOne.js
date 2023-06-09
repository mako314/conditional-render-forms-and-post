import React, {useState} from 'react';

function FormOne(){
    const [selectedCategory, setSelectedCategory] = useState(" ")
    console.log(selectedCategory)

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