import './App.css';
import React from "react"
import Food from "./Components/Food"
import CreateFood from "./Components/CreateFood"
import { BrowserRouter as Router,Routes ,Link, Route} from "react-router-dom"

function App() {


  return (
    
    <div className="App">
      <Link to="food_list" target="_blank">food_list</Link>
      <br>
      
      </br>
      <Link to ="Create_food" target="_blank"> Create_food</Link>
      <Routes> 


        
        <Route path ="/food_list" element={<Food/>} /> 
        
        <Route path = "/Create_food" element={ <CreateFood/>}/>
      

        
      </Routes>

    </div>
  );
}
export default App;
;