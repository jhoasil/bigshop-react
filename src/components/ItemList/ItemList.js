import React, { useState, useEffect } from "react";
import Item from "../Item/Item";

import products from "../../data/products-data";

const ItemList = ({ categoryId }) => {
    console.log(products);
    console.log(categoryId);

    useEffect(() => {}, []);

    return (
        <div>
            {products.map((product) => {
                if (categoryId == "all" || product.category == categoryId)
                    return <Item product={product} />;
            })}
        </div>
    );
};

export default ItemList;
