import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext, CartContext } from "../../context/CartContext";

function ItemDetail({ product}) {
    let available = 5;
    console.log(product)

    const { addItemCart, cart, clearCart } = useCartContext();
    console.log(cart);
    const handleAdd = (counter) => {
        return (evt) => {
            evt.stopPropagation();

            console.log(counter);
            if (counter <= available && counter > 0) {
                addItemCart(product, counter);
            }
        };
    };

    return (
        <div>
            <h5>{product.title}</h5>
            <hr />
            <p>{product.productType}</p>
            <div>$ {product.price}</div>
            <hr />
            <div>
                <img src={product.pictureUrl} height={500} width={500} />
            </div>
            <hr />
            <div>
                <p>{product.description}</p>
            </div>

            {cart.length == 0 && (
                <ItemCount
                    onAdd={handleAdd}
                    {...{ available }}
                    {...{ cart }}
                    initial={1}
                />
            )}

            {cart.length > 0 && (
                <div>
                    <Link to="/cart">
                        <button>Terminar Compra</button>
                    </Link>
                    <button onClick={clearCart}>Vaciar Carrito</button>
                </div>
            )}
        </div>
    );
}

export default ItemDetail;
