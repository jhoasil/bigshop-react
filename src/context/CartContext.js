import React, { useContext, useState, useEffect } from "react";

export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

export default function CartProvider({ children, defaultCart }) {
    const [cart, setCart] = useState([]);
    const [cantItems, setcantItems] = useState(0);

    function addItemCart(item, qnt) {
        if (cart.length !== 0) {
            let aux = cart.findIndex((obj) => {
                return obj.item.id === item.id;
            });

            if (isInCart(item.id)) {
                console.log("hola");
                const newCart = cart;
                newCart[aux].cant = newCart[aux].cant + qnt;
                setCart(newCart);
            } else setCart([...cart, { item, cant: qnt }]);
        } else setCart([{ item, cant: qnt }]);

        setcantItems(cantItems + qnt);
    }

    function removeItem(itemID, qnt) {
        setCart(cart.filter((obj) => obj.item.id !== itemID));
        setcantItems(cantItems - qnt);
    }

    function clearCart() {
        setCart(defaultCart);
        setcantItems(0);
    }

    function isInCart(id) {
        let aux = cart.findIndex((obj) => {
            return obj.item.id === id;
        });

        let response = aux !== -1 ? true : false;
        return response;
    }

    return (
        <CartContext.Provider
            value={{ cart, cantItems, addItemCart, removeItem, clearCart }}
        >
            {" "}
            {children}
        </CartContext.Provider>
    );
}
