import './App.css';
import React from "react"
import Hello from "./components/Hello"
import Food from "./components/Food"
import Welcome from"./components/Welcome"
import { BrowserRouter as Router,Routes ,Link, Route} from "react-router-dom"

function App() {
  return (
    
    <div className="App">
      <Hello/>

      <Welcome/>
      <Link to ="/food" >food</Link>
    
      <Routes> 


        
        <Route path="/food" element={<Food />} />

        
      </Routes>

    </div>
  );
}
export default App;

