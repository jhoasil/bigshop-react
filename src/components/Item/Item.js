import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
export default function Item({
    key,
    product: { id, title, pictureUrl, price, description },
}) {
    let available = 5;
    const handleAdd = (counter) => {
        return (evt) => {
            evt.stopPropagation();
        };
    };

    return (
        <div>
            <div>
                <img src={pictureUrl} alt={title} width="250" height="250" />
            </div>
            <Link to={"/item/" + id}>
                <h2>{title}</h2>
            </Link>
            <hr />
            <h2>${price}</h2>
            <ItemCount onAdd={handleAdd} {...{ available }} initial={1} />
        </div>
    );
}
