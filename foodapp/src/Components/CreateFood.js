import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
// document.body.style = 'background: pink;';


class CreateFood extends Component {

  
  

  
  constructor() {
    super();
    
    this.state = {
      
      name:'',
      calories:'',
    
    };
  }

  
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
  
      name: this.state.name,
      calories: this.state.calories,
      
    };

    
    axios
      .post(`http://localhost:4000/foods`, data)
      
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

  render() {

    return (
    
      <div className="CreateFood">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
            
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  <h2>Go to the home of Food App</h2>
              </Link>
            </div>

            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center"> <h2>Add Food</h2> </h1>
              <p className="lead text-center">
                 <h3>Create new food</h3> 
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                
                
                <br/>

              

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='name'
                    name='name'
                    className='form-control'
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='calories'
                    name='calories'
                    className='form-control'
                    value={this.state.calories}
                    onChange={this.onChange}
                  />
                </div>
                

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateFood;