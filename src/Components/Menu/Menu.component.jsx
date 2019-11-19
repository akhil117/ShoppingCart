import React from 'react'
import './menu.style.scss'
import {withRouter } from 'react-router-dom'


const Menu = ({title, imageUrl,size, link,match,history,location}) => (

    <div className = {` ${size} menuItem`} onClick = {() => {history.push(`${match.url}${link}`)}}>

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
export default withRouter(Menu);
