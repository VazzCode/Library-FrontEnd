import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const About = () => {
  const navigate = useNavigate()
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/home")}>
          <FaArrowLeft size={22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button> <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Welcome to our Library, where knowledge comes alive and reading opens new worlds.

Discover a library experience like no other, with seamless authentication options and integration with social media platforms.

Explore our vast collection of books with a simple search, and find the perfect read that sparks your imagination.

Our website offers a sleek and intuitive user interface, ensuring a smooth and enjoyable browsing experience.
.</p>
            <p className='fs-17'>
Add your favorite books to your virtual cart with just a click, making it convenient to manage your reading list.

Step into the world of our Library and let your curiosity guide you on a journey of exploration and learning</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
