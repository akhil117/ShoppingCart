import React from 'react';

import './signInAndSignUp.style.scss';
import SignIn from '../../Components/SignIn/SignIn.Component'
import SignUp from '../../Components/SignUp/signup.component'



const SignInAndSignUp = () => (

    <div className='sign-in-and-sign-up'>
        <SignIn></SignIn>
        <SignUp></SignUp>
    </div>

);


export default SignInAndSignUp;

