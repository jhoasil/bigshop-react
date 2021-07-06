import ItemDetail from "../ItemDetail/ItemDetail";
import products from "../../data/products-data";
import { useParams } from "react-router-dom";
import { useState } from "react";

const ItemDetailContainer = () => {
    const { itemId } = useParams();

    return (
        <div>
            {products.map((product) => {
                if (product.id == itemId)
                    return <ItemDetail product={product} />;
            })}
        </div>
    );
};

export default ItemDetailContainer;
