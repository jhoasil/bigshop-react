import React, { useState, useEffect } from "react";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
    console.log("hola")
    console.log(products);

    useEffect(() => {}, []);

    return (
        <div>
            {products.map((product) => {
                return <Item product={product} />;
            })}
        </div>
    );
};

export default ItemList;
