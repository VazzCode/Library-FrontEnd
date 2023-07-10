import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet, Routes, Route, BrowserRouter } from 'react-router-dom';
import About from "../About/About";
import BookList from "../../components/BookList/BookList";
import BookDetails from "../../components/BookDetails/BookDetails";
import Cart from '../../components/Cart/Cart';

const Home = () => {
  return (
    <main>
      <Header />
     
      <Outlet />
    </main>
  )
}

export default Home
