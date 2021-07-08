import { ShoppingCart } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Badge } from "@material-ui/core";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
const CartWidget = () => {
    const useStyles = makeStyles({});
    const { cantItems } = useCartContext();

    return (
        <IconButton edge="start" color="inherit" aria-label="home">
            <Badge badgeContent={cantItems} color="secondary">
                <Link to="/cart" style={{ color: '#FFF' }}>
                    <ShoppingCart fontSize="large" />
                </Link>
            </Badge>
        </IconButton>
    );
};

export default CartWidget;
