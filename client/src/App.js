import React, { useState } from 'react';
import './App.css';
// import { Login } from './pages/Login';
import { Register } from './pages/Register';
import Music from './pages/Music';

function App() {
    return (
    <div className="App">
       <Register />  
       <Music url={['https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3']} />
    </div>
  );
}

export default App;
