
import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';

import { makeStyles } from "@material-ui/core/styles";

const ItemListContainer = () => {  
    let available = 5;
    const items = [];
    const useStyles = makeStyles({});
    const handleAdd = (counter) => {
      return (evt) => {
          evt.stopPropagation();
      }
    }

    return (
      <div>
        <ItemCount onAdd={handleAdd} {...{ available }} initial={1} />
        <div >
          <ItemList/>
        </div>
      </div>
      );
};

export default ItemListContainer;

