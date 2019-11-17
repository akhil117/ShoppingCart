import React from 'react'
import './menu.style.scss'



const Menu = ({title, imageUrl,size}) => (

    <div className = {` ${size} menuItem`}>

    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className ='subtitle '>Shop Now</span>
        </div>
    </div>

);
export default Menu;
