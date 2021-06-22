import React, { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    
    const { categoryId = "all" } = useParams();
    const useStyles = makeStyles({});
    console.log(categoryId);

    return (
        <div>
            <div>
                <ItemList categoryId={categoryId} />
            </div>
        </div>
    );
};

export default ItemListContainer;
