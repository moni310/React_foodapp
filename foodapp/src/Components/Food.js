import React from "react";
import axios from "axios"


class Food extends React.Component{
 

  state ={
    foods:[]
    
     
  }
  

componentDidMount() {
  document.body.style.backgroundColor = "pink"
  
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
        
    
      { this.state.foods.map((foods,id) => <li key={id}> "Food Name"  :{foods.name} ,  Calories:  {foods.calories}</li>)}
      </pre>
      

    </ul>
    

    
  )
}
}


export default Food