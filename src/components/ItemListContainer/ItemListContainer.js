import React, { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import products from "../../data/products-data";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase/firebase";

const ItemListContainer = () => {
    const useStyles = makeStyles({});
    const { categoryId = "all" } = useParams();
    const [items, setItems] = useState([]);
    console.log(categoryId);
    
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("item");
        console.log(categoryId);
        if (categoryId == "all") {
            itemCollection.get().then((querySnapshot) => {
                let data = [];
                if (querySnapshot.size === 0) {
                    console.log("no results");
                } else {
                    console.log(querySnapshot.docs.map((doc) => doc.data()));
                    querySnapshot.docs.map((doc) =>
                        data.push({ id: doc.id, ...doc.data() })
                    );
                    setItems(data);
                }
            });

            console.log(items);
        } else {
            let categoryItems = itemCollection.where(
                "category",
                "==",
                categoryId
            );
            categoryItems.get().then((querySnapshot) => {
                let data = [];
                if (querySnapshot.size === 0) {
                    console.log("no results");
                } else {
                    querySnapshot.docs.map((doc) =>
                        data.push({ id: doc.id, ...doc.data() })
                    );
                    setItems(data);
                }
            });
        }
    }, [categoryId]);

    return (
        <div>
            <div>
                <ItemList categoryId={categoryId} products={items} />
            </div>
        </div>
    );
};

export default ItemListContainer;
