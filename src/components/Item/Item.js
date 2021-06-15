import React from 'react';

const Item = ({ id, name, photo, price }) => {

    return 
        <div>
            <div >
                <img src={photo} alt={name} width="250" height="250" />
            </div>
            <h2 >{name}</h2>
            <hr />
            <h2 >${price}</h2>
            <span>Añadir al carro</span>
        </div>
}

export default Item;


