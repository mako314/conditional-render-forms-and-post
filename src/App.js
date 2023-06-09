import React, {useState, useEffect} from "react";
import FormOne from "./FormOne";

function App() {
  const [carContent, setCarContent] = useState([])
  const [homeContent, setHomeContent] = useState([])

  useEffect(() =>{
    fetch("http://localhost:3000/cars")
    .then(resp => resp.json())
    .then(data => setCarContent(data))
  },[])

  useEffect(() =>{
    fetch("http://localhost:3000/homes")
    .then(resp => resp.json())
    .then(data => setHomeContent(data))
  },[])

  console.log(carContent)
  console.log(homeContent)


  return (
    <div className="content">
      <FormOne homeContent={homeContent} carContent={carContent}/>
    </div>
  );
}

export default App;
