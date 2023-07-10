import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import Cart from './components/Cart/Cart';
import Login from './pages/SignIn/SignIn';
import Register from './pages/SignIn/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <AppProvider>
    <div style={{
      //  display: 'flex',justifyContent: 'center', alignItems: 'center',
    }}>
      <BrowserRouter>
        <Routes>

          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </BrowserRouter>
    </div>
  </AppProvider >

);