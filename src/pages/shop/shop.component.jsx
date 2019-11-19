import React from 'react'

import  SHOP_DATA from './shop.data'

import CollectionPreview from '../../Components/CollectionPreview/collection.preview.component'




class ShopPage extends React.Component{
    constructor(){
        super();
        this.state ={
            collections: SHOP_DATA
        }
    }


    render(){
        const {collections} = this.state;

        return(

            <div className='shop-page'>
                {collections.map(({id, ...otherData})=> <CollectionPreview key={id} {...otherData}/>)}
            </div>
        );
    }





} 

export default ShopPage;