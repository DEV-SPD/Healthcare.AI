// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home';
import { Works } from './Pages/Works';
import { Input } from './Pages/Input';
import { About } from './Pages/About';
import { Offer } from './Pages/Offer';
import { Technology } from './Pages/Technology';

import { useState } from 'react';
import { Result } from './Pages/Result';

function App() {
  const [result, setResult] = useState({});
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/works' element={<Works />} />
        <Route path='/liver' element={<Input path="liver" setResult={setResult} />} />
        <Route path='/diabetes' element={<Input path="diabetes" setResult={setResult} />} />
        <Route path="/heart" element={<Input path="heart" setResult={setResult} />} />
        <Route path="/kidney" element={<Input path="kidney" setResult={setResult} />} />
        <Route path='/about' element={<About />} />
        <Route path='/offer' element={<Offer />} />
        <Route path='/tech' element={<Technology />} />
        <Route path='/Result' element={<Result result={result} />} />
      </Routes>
    </>
  );
}

export default App;
