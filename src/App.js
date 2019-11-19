import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import Shop_Page from './pages/shop/shop.component'




function App() {
  return (
    <div className="App">
      <Route exact ={true} path ='/'component={HomePage}/>
      <Route path ='/shop' component ={Shop_Page}/>

    </div>
  );
}

export default App;
