import CartItem from '../CartItem/CartItem';
import Button from '@material-ui/core/Button';
//Styles
import { Wrapper } from './Cart.styles';
//Types
import {CartItemType} from '../Menu/Menu';

type Props ={
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (recipeId: number) => void;
}

const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart}) =>{
    const calculateTotal = (items: CartItemType[]) => 
        items.reduce((tot:number,item) => tot+item.amount*item.recipePrice,0)
    return(
        <Wrapper>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? <p>No items in cart</p> : null}
            {cartItems.map(item => (
                <CartItem
                    key={item.recipeId}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
            {cartItems.length === 0 ? null : (
            <div>
                <h3>SubTotal: ${calculateTotal(cartItems).toFixed(2)}</h3>
                <h4>GST: ${(calculateTotal(cartItems)*0.05).toFixed(2)}</h4>
                <h2>Total: ${(calculateTotal(cartItems)*1.05).toFixed(2)}</h2>
                <Button />
            </div>
            )}
        </Wrapper>
    )
}

export default Cart;