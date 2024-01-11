import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import SearchedProducts from './pages/SearchedProducts';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import MyOrders from './pages/MyOrders';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/accounts/login' element={<Login />} />
      <Route path='/accounts/sign-up' element={<SignUp />} />
      <Route path='/shop/all-products' element={<Products />} />
      <Route path='/products/:id' element={<SingleProduct />} />
      <Route path="/search" element={<SearchedProducts />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} /> 
      <Route path='/orders/:id' element={<MyOrders />} />

    </Routes>
  );
}

export default App;
