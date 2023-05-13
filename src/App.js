import './App.scss';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ShopContextProvider from './context/shopContext';

const Navbar = React.lazy(() => import('./Components/Navbar/Navbar'));
const ProductDetails = React.lazy(() => import('./Pages/ProductDetails/ProductDetails'));
const Cart = React.lazy(() => import('./Pages/Cart/Cart'));
const Home = React.lazy(() => import('./Pages/Home/Home'));

function App() {

  return (
    <div className="App">
      <ShopContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Home />
            </Suspense>
          } />
          <Route path='cart' element={<Suspense fallback={<h1>Loading...</h1>}>
            <Cart />
          </Suspense>} />
          <Route path='productDetail/:id' element={<Suspense fallback={<h1>Loading...</h1>}>
            <ProductDetails />
          </Suspense>} />
        </Routes>
      </ShopContextProvider>
    </div>
  );
}

export default App;
