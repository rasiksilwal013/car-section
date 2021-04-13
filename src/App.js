import React from 'react'
import './App.css';
import './App.scss';
import Footer from './components/footer';
import Header from './components/header';
import MianContent from './components/mainContent';

function App() {
  return (
    <div className="container">
      <Header />
      <MianContent />
      <Footer />


    </div>
  );
}

export default App;
