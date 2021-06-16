
import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'

import Error404 from './errors/e404'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
          <Route path="*" element={<Error404/>}/>
          </Routes>
  
        </BrowserRouter>
    </div>
  );
}

export default App;
