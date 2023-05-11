import './App.scss';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Cart from './Pages/Cart/Cart';
import Navbar from './Components/Navbar/Navbar';
import ProductDetails from './Pages/ProductDetails/ProductDetails';

function App() {

  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path='productDetail/:id' element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
