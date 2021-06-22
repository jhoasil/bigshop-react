function ItemDetail({
    product: { id, title, productType, pictureUrl, price, description },
}) {
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
        </div>
    );
}

export default ItemDetail;
