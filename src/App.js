import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';


const HatsPage = () => (
  <div>
      <h1> Welcome to the HatsPage</h1>

  </div>

);
function App() {
  return (
    <div className="App">
      <Route exact ={true} path ='/'component={HomePage}/>
      <Route path ='/hats' component ={HatsPage}/>

    </div>
  );
}

export default App;
