import {CartItemType} from '../Menu/Menu';
import {Wrapper} from './Checkout.styles';
import Container from '@material-ui/core/Container';
import EmptyCheckout from './EmptyCheckout';


const Checkout: React.FC<CartItemType[]> = (cartItems) => {
    console.log(cartItems);
    return(
        <Wrapper>
            <Container>
                {cartItems.length === 0 ? <EmptyCheckout/> : <h3>Your Order Details</h3>}
            </Container>
        </Wrapper>
    );

}
export default Checkout;