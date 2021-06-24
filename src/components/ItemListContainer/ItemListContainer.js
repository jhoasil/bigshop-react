import React, { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import products from "../../data/products-data";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const { categoryId = "all" } = useParams();
    const useStyles = makeStyles({});
    console.log(categoryId);
    let data = [];

    if (categoryId == "all") {
        data = products;
    } else if (true) {
        products.map((product) => {
            if (product.category == categoryId) {
                data.push(product);
            }
        });
    }

    console.log(data);

    return (
        <div>
            <div>
                <ItemList categoryId={categoryId} products={data} />
            </div>
        </div>
    );
};

export default ItemListContainer;
