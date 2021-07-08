import React from "react";
import { useCartContext, CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Item from "../Item/Item";

const Cart = () => {
    const { removeItem, clearCart, cart } = useCartContext();
    let total = 0;
    let subtotal = 0;
    console.log(cart);

    return (
        <>
            {cart.length === 0 && <h4>Sin productos</h4>}
            {cart.length > 0 && (
                <div className="cart-container">
                    {cart.map((obj) => (
                        <div>
                            <Item product={obj.item}></Item>

                            <h4>Cantidad: {obj.cant}</h4>
                            <h4>Sub total: ${obj.cant * obj.item.price}</h4>
                            <button
                                onClick={() =>
                                    removeItem(obj.item.id, obj.cant)
                                }
                            >
                                Eliminar producto
                            </button>

                            <hr />
                        </div>
                    ))}
                    <hr />
                    {cart.map((obj) => {
                        total = obj.item.price * obj.cant + total;
                    })}

                    <h4>Total: ${total}</h4>
                    <hr />

                    <button onClick={clearCart}>Vaciar Carrito</button>
                </div>
            )}
        </>
    );
};

export default Cart;
