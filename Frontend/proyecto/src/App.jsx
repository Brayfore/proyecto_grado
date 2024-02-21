import React from 'react';
import Axios from 'axios';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import vocabulary from './pages/vocabularys'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={vocabulary}></Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
