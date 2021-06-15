import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';

const ItemList = ({ items }) => {

    useEffect(() => {
        console.log(items);
    }, []);

    return 
    <div>
        <div >
            <div >
                <h1>{titulo}</h1>
            </div>
            <div >
                {items.map(item => <Item key={item.id} id={item.id} name={item.name} photo={item.photo} price={item.price}></Item>)}
            </div>
        </div>
    </div>
}


export default ItemList;
