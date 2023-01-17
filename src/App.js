import React from "react";
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import Cart from "./components/Cart";
import { FormBuyContainer } from "./components/FormBuyContainer";
import { Grid } from '@material-ui/core';

import CartCustomProvider from './context/CartContext';

const URL_PUBLIC = process.env.REACT_APP_API_URL

function App() {   
  return (
    <CartCustomProvider>
      <Grid container direction="column" style={{backgroundColor: "#ebebeb"}}>
        <Router basename={URL_PUBLIC}>
          <NavBar/>
            <Routes>
              <Route path="/" element={<ItemListContainer/>} />
              <Route path="/category/:categoryId" element={<ItemListContainer/>} />
              <Route path="/products/:productoId" element={<ItemDetailContainer/>} />  
              <Route path="/cart" element={<Cart/>} />
              <Route path="/formBuy" element={<FormBuyContainer/>} />
                

            </Routes>
          <Footer/> 
        </Router>
      </Grid>
    </CartCustomProvider>
  );
}

export default App;
