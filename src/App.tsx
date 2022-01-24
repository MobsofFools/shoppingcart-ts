import {Route} from 'react-router';
import Menu from './Menu/Menu';
import Home from './Home/Home';
import NavBar from './NavBar/NavBar';
import Checkout from './Checkout/Checkout';

const navigation = {
  brand: {name: "FakePizza", to: "/" },
  links: [
    {name: "Menu", to: "/menu"},
    {name: "Orders", to: "/Orders"}
  ]
};

function App() {
  const {brand, links} = navigation;

  return(
    <>
    <NavBar brand={brand} links ={links}/>
    <Route exact path='/' component={Home} />
    <Route path='/menu' component={Menu}/>
    <Route path='/checkout' 
    component={Checkout} 

    />
    </>
  );
}
export default App;
