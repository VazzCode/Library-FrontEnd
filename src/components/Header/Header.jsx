import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar />
        <div className='header-content flex flex-c text-center text-white'>
          <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
          <p className='header-text fs-18 fw-3'> We are dedicated to providing a wide range of resources and services to meet the needs of our 
          diverse community of readers and learners.

            </p>
            <p className='header-text fs-18 fw-3'>
            Explore our extensive collection of books, spanning various genres, subjects, and formats. From bestsellers to classics, 
            non-fiction to fiction, we have something for everyone. Our online catalog 
            allows you to easily search and reserve books, ensuring that you can always find what you're looking for
            </p>
          <SearchForm />
        </div>
      </header>
    </div>
  )
}

export default Header