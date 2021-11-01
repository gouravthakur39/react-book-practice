import React from 'react'
import Item from './Item'

const List = (props) => {
    const { items } = props
    
    return (
        
        <div>
        {items.map((items,index)=>{
           return <Item
            key={index}
            title={items.title}
            summary={items.summary}
            author={items.author}
            />
        })} 
       </div>
        
    )
    
}

export default List
