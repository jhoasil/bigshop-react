import { ShoppingCart } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import {
    IconButton,
    Badge
  } from "@material-ui/core";


const CartWidget = () => {  

    const useStyles = makeStyles({});
    
    return (
        <IconButton edge="start" color="inherit" aria-label="home">
            <Badge badgeContent={2} color='secondary'>
                <ShoppingCart fontSize='large' />
            </Badge>
        </IconButton>
      );
};

export default CartWidget;

