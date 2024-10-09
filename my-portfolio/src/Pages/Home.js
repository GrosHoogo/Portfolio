import React from 'react';
import Navbar from '../Components/Navbar'; // Ta barre de navigation existante
import TextComponent from '../Components/TextComponent';

function App() {
  return (
    <>
      <Navbar />  {/* Navigation */}
      <TextComponent />  {/* Ancien contenu avec le texte et l'image */}
    </>
  );
}

export default App;
