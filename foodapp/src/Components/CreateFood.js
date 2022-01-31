import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateFood extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      calories:''
      
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      name: this.state.title,
      calories: this.state.isbn,
      
    };

    axios
      .post('http://localhost:4000/foods', data)
      .then(res => {
        this.setState({
          name: '',
          calories:'',
          
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateFood!");
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
                  Show Food List
              </Link>
            </div>


            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Food</h1>
              <p className="lead text-center">
                  Create new Food
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                
                <br />

                

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Foodname'
                    name='Foodname'
                    className='form-control'
                    value={this.state.author}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='calories of food'
                    name='calories of food'
                    className='form-control'
                    value={this.state.description}
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