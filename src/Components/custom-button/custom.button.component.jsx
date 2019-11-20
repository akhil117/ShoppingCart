import React from 'react';
import './custom.button.style.scss';




const CustomButton = ({children, isGoogleSignIn, ...otherprops}) => (

    <button className={`${isGoogleSignIn?isGoogleSignIn:''} custom-button`} {...otherprops}>
        {children}
    </button>
    
);

export default CustomButton;


