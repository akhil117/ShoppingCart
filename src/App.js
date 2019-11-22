import React from 'react';
import './App.css';
import {Route , Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import Shop_Page from './pages/shop/shop.component';
import Header from './Components/Head/header.component'
import SignInAndSignUp from './pages/AuthenticationPage/signInAndSignUpPage';
import {auth, createUserProfileDocument} from './firebase-utils/firebase'



class App extends React.Component {

  constructor(){
    super();
    this.state ={
         currentUser: null 
    };
  }

  unsubscribe = null;
  componentDidMount(){
      this.unsubscribe = auth.onAuthStateChanged(async (user)=> {
        //this.setState({currentUser :user});
        //console.log(user);
        if(user){
                const val = await  createUserProfileDocument(user);
                  val.onSnapshot(snapshot =>{
                     this.setState({
                      currentUser: {
                        id: snapshot.id,
                        ...snapshot.data()
                      }
                     }, () =>  (console.log(this.state)))
                  });
        }

      });
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  render(){
    return (
      <div>
        {console.log('calling.........')}
        {console.log(this.state.currentUser)}
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
