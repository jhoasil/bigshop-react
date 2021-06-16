import React, { useState, useEffect } from "react";
import Item from "../Item/Item";

import products from "../../data/product-data";

const ItemList = () => {
    console.log(products);

    useEffect(() => {}, []);

    return (
        <div>
            {products.map((product) => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ItemList;
