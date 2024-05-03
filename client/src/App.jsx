import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateFoodPage from './pages/CreateFoodPage';
import AllFoodPage from './pages/AllFoodPage';
import UpdateFoodPage from "./pages/UpdateFoodPage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/all-foods' element={<AllFoodPage/>}/>
        <Route path='/create-foods' element={<CreateFoodPage/>}/>
        <Route path='/update-foods/:id' element={<UpdateFoodPage/>}/>
      </Routes>
    </BrowserRouter>
      
    
    
  );
};

export default App;