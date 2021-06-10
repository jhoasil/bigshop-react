import React, { useState } from 'react';

function ItemCount({ onAdd, initial, available }) {
    const [items, setItems] = useState(initial);

    const handleClick = (op) => {
        return () => {
            if (op && items < available) {
                setItems(items + 1);
            }
            else if (!op && items > 1) {
                setItems(items - 1);
            }
        }
    }

    return <div >
        <div >
            <button onClick={handleClick(false)} >-</button>
            <p className="cantItems">{items}</p>
            <button onClick={handleClick(true)} >+</button>
        </div>
        <div>
            <button onClick={onAdd(items)} >Agregar</button>
        </div>
    </div>
}

export default ItemCount;