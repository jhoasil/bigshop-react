import { Link } from "react-router-dom";
export default function Item({
    key,
    product: { id, title, pictureUrl, price, description },
}) {

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
        </div>
    );
}
