
import './App.css';
import Home from './components/Home';
import Navbar from './Navbar';
import { Switch,Route } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';

function App(product) {
 
  return (
   <>
    <Navbar/>
   <Switch>
   <Route exact path="/" component={Home}/>
   <Route exact path="/products" component={Products}/>
   <Route exact path="/products/:id" component={Product}/>
   <Route exact path="/carts" component={Cart} product={product}/>
   <Route exact path="/about" component={About} />
   <Route exact path="/contact" component={Contact} />
   
    
    <Home/>
    </Switch>
    </>
    
    
  );
}

export default App;
