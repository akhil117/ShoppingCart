import React from 'react';
import './SignIn.style.scss';
import FormInput from '../../Components/form-input/forminput.component';
import CustomButton from '../../Components/custom-button/custom.button.component';
import {signInWithGoogle}  from '../../firebase-utils/firebase';

class SignIn extends React.Component {
        constructor(){
            super();
            this.state ={
                email: "",
                password: ""
            }
        }


handleSubmit = (event) =>{
    event.preventDefault();
    this.setState({
        email: "",
        password: ""   
    });
}

handleChange = (event) =>{
    console.log(event.target);
    const {value,name} = event.target;
    this.setState({[name]: value })
}
        render(){
            return(
                <div className='sign-in'>
                 <h2>Already have an account</h2>
                 <span>Sign with your mail and password</span>
                <form onSubmit ={this.handleSubmit}>
                <FormInput  label='email' name ='email' type='email' value ={this.state.email} required handleChange={this.handleChange}/>
                <FormInput  label='password' name ='password' type='password' value ={this.state.password} required handleChange={this.handleChange}/>

                <div className='custom-buttons'>
                    <CustomButton  type='submit' value='Submit Form'> Sign-In </CustomButton>
                    <CustomButton onClick={signInWithGoogle}  isGoogleSignIn='isGoogleSignIn' >Sign in with Google</CustomButton>
                </div>
              

                </form>

                </div>

            );
        }
}

export default SignIn;
