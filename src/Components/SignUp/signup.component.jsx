import React from 'react';
import './signup.style.scss';
import FormInput from '../../Components/form-input/forminput.component';
import CustomButton from '../../Components/custom-button/custom.button.component';
import {auth, createUserProfileDocument} from '../../firebase-utils/firebase'





class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            cpassword: ''
        }
    }
    handleChange =  (event) =>{
        const {value,name} = event.target;
        this.setState({[name]: value })
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        if(this.state.cpassword !== this.state.password){
            alert('passwords don\'t match');
            return;
        }
        try{
                const {user} = await auth.createUserWithEmailAndPassword(this.state.email,this.state.password);
                
                createUserProfileDocument(user,this.state.displayName);
                this.setState({
                    displayName: '',
                    email: '',
                    password: '',
                    cpassword: ''
                })
        }catch(error){
                console.log('error',error);
        }
    }
    render(){
        return(
            <div className='sign-up'>
                <h2 className='title'> New to Cart?? Create Account</h2>
                <span>Sign-Up with your mail and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput  label='UserName' name ='displayName' type='text' value ={this.state.displayName} required handleChange={this.handleChange}/>
                    <FormInput  label='email' name ='email' type='email' value ={this.state.email} required handleChange={this.handleChange}/>
                    <FormInput  label='password' name ='password' type='password' value ={this.state.password} required handleChange={this.handleChange}/>
                    <FormInput  label='confirm password' name ='cpassword' type='password' value ={this.state.cpassword} required handleChange={this.handleChange}/>
                    <div className='custom-buttons'>
                                            <CustomButton  type='submit' value='Submit Form'> Sign-Up </CustomButton>
                    </div>



                </form>
            </div>
        );
    }


}

export default SignUp;


