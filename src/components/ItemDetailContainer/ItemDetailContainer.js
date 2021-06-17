import ItemDetail from "../ItemDetail/ItemDetail";
import product from "../../data/product-data";

const ItemDetailContainer = () => {
    console.log(product);
    return (
        <div>
            <ItemDetail product={product}/>
        </div>
    );
};

export default ItemDetailContainer;
