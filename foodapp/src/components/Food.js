import React from "react";
import axios from "axios"

export default class Food extends React.Component{
  state ={
    foods:[]
     
  }


componentDidMount() {
  axios.get( `http://localhost:4000/foods`)


  .then( res =>{
    this.setState({foods:res.data})
    console.log(this.state.foods)

  })
  .catch(err =>{
    console.log("some error is there--");
  })
} 

render(){
  return (
    <ul>
      {<div>
    <h2>Food</h2>
    These all things are avilable.
    <br/>
    1. Breakfastry 
    2. Lunch
    3. Snacks
    4. Dinner
  </div> }
    
      { this.state.foods.map((food,id) => <a key={id}>  {food.name}</a>)}
    </ul>

  
  )
}
}