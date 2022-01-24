import {useState} from 'react';
import {useQuery} from 'react-query';
//Components
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import Cart from '../Cart/Cart';
import {ReactComponent as Pizza} from '../img/pizza.svg';
import Container from '@material-ui/core/Container';
//Styles
import {Wrapper,StyledButton} from '../Menu/Menu.styles';
import Item from '../Item/Item';
//Types
export type CartItemType = {
  recipeId: number;
  recipeName: string;
  recipeImgSrc: string;
  recipePrice: number;
  amount: number;
}


const getProducts = async ():Promise<CartItemType[]> => 
  await(await fetch('https://localhost:44382/Pizza/GetRecipes')).json();

const Menu = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'recipes',
    getProducts
    );
  
  const getTotalItems = (items: CartItemType[]) =>   items.reduce((tot: number, item) => tot + item.amount, 0);
  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.recipeId === clickedItem.recipeId)

      if(isItemInCart) {
        return prev.map(item => 
          item.recipeId === clickedItem.recipeId
          ? {...item, amount: item.amount + 1 }
          : item
        );
      }

      return [...prev, {...clickedItem, amount: 1 }];
    })
  };
  const handleRemoveFromCart = (recipeId:number) => {
    setCartItems(prev => 
      prev.reduce((tot,item) => {
        if(item.recipeId === recipeId) {
          if(item.amount === 1) return tot;
          return [...tot, {...item, amount: item.amount -1}];
        } else {
          return [...tot, item];
        }
      },[] as CartItemType[])
    );
  };
  if(isLoading) return <LinearProgress/>
  if(error) return <div>Something went wrong...</div>
  return (
  <div className='App'>
    <Wrapper>

      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart 
        cartItems={cartItems} 
        addToCart={handleAddToCart}
        removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <Pizza width="50px" height="50px"/>
        </Badge>
      </StyledButton>
      
      <Container maxWidth="lg">
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.recipeId} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart}/>
          </Grid>



        ))}
      </Grid>
      </Container>
    </Wrapper>
    </div>
  );
}
export default Menu;