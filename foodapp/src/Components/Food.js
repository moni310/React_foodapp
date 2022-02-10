import React from "react";
import axios from "axios"
import {Link} from "react-router-dom"


class Food extends React.Component{
 state ={
    foods:[]
    
 }
 componentDidMount() {
  document.body.style.backgroundColor = "skyblue"
  
  axios.get( `http://localhost:4000/foods`)
  


  .then( res =>{
    this.setState({foods:res.data})
    console.log(this.state.foods)
    

  })
  .catch(err =>{
    console.log("some error is there--");
    console.log(err)
  })
} 

render(){
  
  return (
    <ul>
      <pre>
     { this.state.foods.map((foods,_id) => <li key={_id}> "Food Name" :{foods.name} ,  Calories:  {foods.calories},  <Link to ={`/food_list/${foods._id}`}> ,<button> Edit</button> , <button> Delete</button></Link></li>)}
     
     </pre>

    </ul>
    
)
}
}




export default Food