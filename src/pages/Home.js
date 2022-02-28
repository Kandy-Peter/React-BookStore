import React from 'react';
import Navbar from '../components/Navbar';
import Books from '../components/Books';

const Home = () => (
  <div>
    <Navbar />
    <div className="home-container">
      <Books />
    </div>
  </div>
);

export default Home;
