// src/Pages/Home.js
import React from 'react';
import Navbar from '../Components/Navbar';
import '../Styles/Home.css';

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <div className="background-image">
        {/* Vous pouvez ajouter du contenu supplémentaire ici si nécessaire */}
      </div>
    </div>
  );
};

export default Home;