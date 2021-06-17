import React, { useState, useEffect } from "react";
import Item from "../Item/Item";

import products from "../../data/products-data";

const ItemList = () => {
    console.log(products);

    useEffect(() => {}, []);

    return (
        <div>
            {products.map((product) => (
                <Item product={product} />
            ))}
        </div>
    );
};

export default ItemList;
