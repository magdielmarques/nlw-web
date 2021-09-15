import React from 'react';
import './App.css';
import Routes from './routes';

function App() {
  fetch(process.env.REACT_APP_API_URL || 'http://localhost:3333')
    .then(() => console.log('DEU CERTO'))
    .catch(() => console.log('DEU ERRO'))
  return (
    <Routes />
  );
}

export default App;
