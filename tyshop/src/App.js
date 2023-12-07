import React from 'react';
import Main from './component/MainComponent'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {ConfigureStore} from './redux/ConfigureStore'

import './App.css';
import './css/product.css'
import './css/mainMenu.css'

const store = ConfigureStore()

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main></Main>
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
