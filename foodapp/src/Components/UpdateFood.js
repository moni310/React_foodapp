
import React, { Component } from 'react';  
import axios from 'axios';
import PropTypes from 'prop-types';  
class App extends React.Component {  
   constructor(props) {  
      super(props);  

      this.state = { 
        name:'',
        calories:''
            
      };  
      console.log(props,"oiuyt")
      this.updateSetState = this.updateSetState.bind(this)
      const data = {
  
        name: this.state.name,
        calories: this.state.calories,
        
      };

      axios
      .get(`http://localhost:4000/foods`, data)
      
      .then(res => {
        this.setState({
          
          name:'',
          calories:'',
          
        })
        let data =this.props.history.push('foods')
        
       
      })
      .catch(err => {
        console.log(data);
        
      })
  };

      
   
   updateSetState() 
   {  
       this.setState({  
          msg:"The data has updated"  
       });  
   }  
   render() 
   {  
     return (  
        
         <div> 
           <input
                    type='text'
                    placeholder='name'
                    name='name'
                    className='form-control'
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                  <br/>
           <input
                    type='text'
                    placeholder='calories'
                    name='calories'
                    className='form-control'
                    value={this.state.calories}
                    onChange={this.onChange}
                  />


             <h1>{this.state.msg}</h1>  
             <button onClick = {this.updateSetState}>Update</button>  
         </div>  
      );  
   }  
}  
export default App;  