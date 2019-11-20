import React from 'react';
import './App.css';
import {Route , Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import Shop_Page from './pages/shop/shop.component';
import Header from './Components/Head/header.component'
import SignInAndSignUp from './pages/AuthenticationPage/signInAndSignUpPage';
import {auth} from './firebase-utils/firebase'



class App extends React.Component {

  constructor(){
    super();
    this.state ={
         currentUser: null 
    };
  }

  unsubscribe = null;
  componentDidMount(){
      this.unsubscribe = auth.onAuthStateChanged((user)=> {
        this.setState({currentUser :user});
        console.log(user);

      });
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact ={true} path ='/'component={HomePage}/>
          <Route path ='/shop' component ={Shop_Page}/>
          <Route path ='/auth' component ={SignInAndSignUp}/>
        </Switch>
      </div>
    );
  }

}

export default App;
