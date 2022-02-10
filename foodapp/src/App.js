import './App.css';
import React from "react"
import Food from "./Components/Food"
import CreateFood from "./Components/CreateFood"
import UpdateFood  from './Components/UpdateFood';
import Edit from "./Components/Edit"


import { BrowserRouter as Router,Routes ,Link, Route} from "react-router-dom"


document.body.style = 'background: lightgreen;';

 function App() {
  
  return (
    
    
    
    <div className="App">
       

      
      
      <Link to="food_list" target="_blank"><h2>food_list</h2></Link>
      
      <Link to ="Create_food" target="_blank"> <h2>Create_food</h2></Link>
      
      <Link to ="Update_food" target="_blank"><h2>Update_food</h2></Link>
      {/* <Link to ="Edit" target="_blank"><h2>Edit</h2></Link> */}
      <Link to={{state: { fromDashboard: true } }}/>
     

      


      <Routes> 
        <Route path ="/food_list" element={<Food/>} /> 
        <Route path = "/Create_food" element={ <CreateFood/>}/>
        <Route  path = "/food_list/:id" element={ <UpdateFood/>}/>
        {/* <Route path ="edit" element ={<Edit/>}/> */}

      </Routes>

    </div>


    
  );
};

export default App;
