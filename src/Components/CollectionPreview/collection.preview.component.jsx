import React from 'react';
import './collection.style.scss';
import  CollectionItem  from  '../CollectionItem/collectionItem';







const CollectionPreview = ({title,items}) =>(

    <div className = 'collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>            
            <div className='preview'>
                {items.filter((item,index)=>index<4).map(({id, ...otherItems})=>(<CollectionItem key={id} {...otherItems}/>))}
            </div>
    </div>
);

/*
const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);










*/

export default CollectionPreview;
