
import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';

import { makeStyles } from "@material-ui/core/styles";

const ItemListContainer = () => {  
    let available = 5;
    const useStyles = makeStyles({});
    const itemCollection = db.collection("items");
    const handleAdd = (counter) => {
      return (evt) => {
          evt.stopPropagation();
      }
    }

    return (
      <div>
        <ItemCount onAdd={handleAdd} {...{ available }} initial={1} />
        <div >
          <ItemList {...{ items }}></ItemList>
        </div>
      </div>
      );
};

export default ItemListContainer;

