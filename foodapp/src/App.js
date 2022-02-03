import './App.css';
import React from "react"
import Food from "./Components/Food"
import CreateFood from "./Components/CreateFood"
import UpdateFood  from './Components/UpdateFood';
import { BrowserRouter as Router,Routes ,Link, Route} from "react-router-dom"
function App() {
  
  


  return (
  
    
    <div className="App">
      
      
        <Link to="food_list" target="_blank">food_list</Link>
      <br/>
      <Link to ="Create_food" target="_blank"> Create_food</Link>
      <br/>
      <Link to ="Update_food" target="_blank"> Update_food</Link>
      


      <Routes> 
        <Route path ="/food_list" element={<Food/>} /> 
        <Route path = "/Create_food" element={ <CreateFood/>}/>
        <Route path = "/Update_food" element={ <UpdateFood/>}/>
        </Routes>

    </div>
  );
}
export default App;
;