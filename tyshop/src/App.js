import React from 'react';
import Main from './component/MainComponent'
import {BrowserRouter} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Main></Main>
    </BrowserRouter>
    
  );
}

export default App;
