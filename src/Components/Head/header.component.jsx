import React from 'react';
import './header.style.scss';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase-utils/firebase'

import { ReactComponent as Logo } from '../../assets/crown.svg';


const Header = ({ currentUser }) => (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>

            {console.log('checking the user')}
           { console.log(currentUser)}
        
        {currentUser ? (
          <Link className='option' to='/auth' onClick={()=>{
              auth.signOut();
          }}>
            SIGN OUT
          </Link>
        ) : (
          <Link className='option' to='/auth'>
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
export default Header;

