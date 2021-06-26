import React, { useState } from "react";

function ItemCount({ onAdd, initial, available, cart, setCart }) {
    const [items, setItems] = useState(initial);

    const handleClick = (op) => {
        return () => {
            if (op && items < available) {
                setItems(items + 1);
            } else if (!op && items > 1) {
                setItems(items - 1);
            }
        };
    };

    return (
        <div>
            <div>
                <button onClick={handleClick(false)}>-</button>
                <p className="cantItems">{items}</p>
                <button onClick={handleClick(true)}>+</button>
                <br/>
                <button onClick={onAdd(items)}>Agregar producto</button>
            </div>
        </div>
    );
}

export default ItemCount;
