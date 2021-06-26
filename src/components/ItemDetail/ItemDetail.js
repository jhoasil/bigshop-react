import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

function ItemDetail({
    product: { id, title, productType, pictureUrl, price, description },
}) {
    let available = 5;

    const [cart, setCart] = useState(0);

    const handleAdd = (counter) => {
        return (evt) => {
            setCart(counter);
            evt.stopPropagation();
        };
    };

    return (
        <div>
            <h5>{title}</h5>
            <hr />
            <p>{productType}</p>
            <div>$ {price}</div>
            <hr />
            <div>
                <img src={pictureUrl} height={500} width={500} />
            </div>
            <hr />
            <div>
                <p>{description}</p>
            </div>
            {cart == 0 && (
                <ItemCount
                    onAdd={handleAdd}
                    {...{ available }}
                    {...{ cart }}
                    initial={1}
                />
            )}

            {cart > 0 && (
                <div>
                    <Link to="/cart">
                        <button>Terminar Compra</button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default ItemDetail;
