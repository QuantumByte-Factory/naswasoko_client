import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Login from './pages/Login';
import SignUp from './pages/Signup';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/accounts/login' element={<Login />} />
      <Route path='/accounts/sign-up' element={<SignUp />} />
      <Route path='/shop/all-products' element={<Products />} />
      <Route path='/products/:id/view-details' element={<SingleProduct />} />
    </Routes>
  );
}

export default App;
