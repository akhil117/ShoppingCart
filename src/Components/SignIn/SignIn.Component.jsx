import React from 'react';
import './SignIn.style.scss';
import FormInput from '../../Components/form-input/forminput.component';
import CustomButton from '../../Components/custom-button/custom.button.component';
import {signInWithGoogle, auth}  from '../../firebase-utils/firebase';

class SignIn extends React.Component {
        constructor(){
            super();
            this.state ={
                email: "",
                password: ""
            }
        }


handleSubmit = async (event) =>{
    event.preventDefault();
    try{
            await auth.signInWithEmailAndPassword(this.state.email,this.state.password);
        this.setState({
            email: "",
            password: ""   
        });
    }catch(error){
        console.log(error);
    }
    
}

handleChange = (event) =>{
    const {value,name} = event.target;
    this.setState({[name]: value })
}
        render(){
            return(
                <div className='sign-in'>
                 <h2 className='title'>Already have an account</h2>
                 <span>Sign-In with your mail and password</span>
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
