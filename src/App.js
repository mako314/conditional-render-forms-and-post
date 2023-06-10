import React, {useState, useEffect} from "react";
import FormOne from "./FormOne";

function App() {


  //We'll need a few things before we even start to code everything. We'll need to import useState, and useEffect. 

  //We'll use useState to re-render, and hold our data dynamically / responsively. 

  //useFetch is used with an empty dependent array so it goes off upon the page being launched or loaded. In the second .then, we pass the SETTER of our stateVariable. setCarContent() and setHomeContent().

  //At this moment, we'll only need to import one component, our FormOne.

  //CONSOLE LOG EVERYTHING!!!


  const [carContent, setCarContent] = useState([])
  const [homeContent, setHomeContent] = useState([])

  useEffect(() =>{
    fetch("http://localhost:3000/cars")
    .then(resp => resp.json())
    .then(data => setCarContent(data))
  },[])

  //We need two useEffects because we have two arrays of objects we need to fetch!

  useEffect(() =>{
    fetch("http://localhost:3000/homes")
    .then(resp => resp.json())
    .then(data => setHomeContent(data))
  },[])

  // console.log(carContent)
  // console.log(homeContent)

  // It's always a good recommendation to console log your data to make sure you're grabbing the right thing!

  
  //We'll be making things extra responsive. So we'll pass all of our stateVariable variables to FormOne.
  //Do not miss this step! Or else you will run into errors!

  return (
    <div className="content">
      <FormOne setHomeContent={setHomeContent} homeContent={homeContent} setCarContent={setCarContent} carContent={carContent}/>
    </div>
  );
}

export default App;
