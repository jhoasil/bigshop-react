import React from "react";

export default function Item({
    key,
    product: { id, title, pictureUrl, price, description },
}) {
    return (
        <div>
            <div>
                <img src={pictureUrl} alt={title} width="250" height="250" />
            </div>
            <h2>{title}</h2>
            <hr />
            <h2>${price}</h2>
            <span>Añadir al carro</span>
        </div>
    );
}
