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
    
      { this.state.foods.map((food,id) => <a key={id}>  {food.name}</a>)}
      { this.state.foods.map((food,id) => <a key={id}>  {food.calories}</a>)}

    </ul>
    
  )
}
}