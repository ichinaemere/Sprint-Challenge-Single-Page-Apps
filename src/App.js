import React from 'react';
import Header from './components/Header.js';
import AppRouter from './components/Router.js';
import CharacterCard from './components/CharacterCard.js';


export default function App() {
  return <main>
    <Header />
    <AppRouter />
    <CharacterCard />

  </main>
}