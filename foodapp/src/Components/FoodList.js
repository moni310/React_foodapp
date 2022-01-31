import React from "react"

import { Link} from "react-router-dom"
import Food from "../Components/Food";

function FoodList(){
    
        
    return (
    
        <div className="App">
          <Food/>

          <Link to="food_list" target="_blank">food_list</Link>
          
    
    
        </div>
        
      );
    

}
export default FoodList

