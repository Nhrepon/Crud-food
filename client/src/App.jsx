import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MasterLayout from './components/MasterLayout';
import HomePage from './pages/HomePage';
import CreateFoodPage from './pages/CreateFoodPage';
import AllFoodPage from './pages/AllFoodPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/all-foods' element={<AllFoodPage/>}/>
        <Route path='/create-foods' element={<CreateFoodPage/>}/>
      </Routes>
    </BrowserRouter>
      
    
    
  );
};

export default App;