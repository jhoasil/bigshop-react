
import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';

import { makeStyles } from "@material-ui/core/styles";

const ItemListContainer = () => {  
    let available = 5;
    const useStyles = makeStyles({});

    const handleAdd = (counter) => {
      return (evt) => {
          evt.stopPropagation();
      }
    }

    return (
      <ItemCount onAdd={handleAdd} {...{ available }} initial={1} />
      );
};

export default ItemListContainer;

