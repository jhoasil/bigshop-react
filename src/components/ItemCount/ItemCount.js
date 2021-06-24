import React, { useState } from "react";
import { Link } from "react-router-dom";

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
            {cart == 0 && (
                <div>
                    <button onClick={handleClick(false)}>-</button>
                    <p className="cantItems">{items}</p>
                    <button onClick={handleClick(true)}>+</button>

                    <button onClick={onAdd(items)}>Agregar producto</button>
                </div>
            )}
            {cart > 0 && (
                <div>
                    <Link to="/cart">
                        <button onClick={onAdd(items)}>Terminar Compra</button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default ItemCount;
