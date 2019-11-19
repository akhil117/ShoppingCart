import React from 'react';
import './App.css';
import {Route , Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import Shop_Page from './pages/shop/shop.component';
import Header from './Components/Head/header.component'




function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact ={true} path ='/'component={HomePage}/>
        <Route path ='/shop' component ={Shop_Page}/>
      </Switch>
    </div>
  );
}

export default App;
