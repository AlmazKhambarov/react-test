/** @format */

import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Index from "./pages/Modals/Index";
import './App.scss'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/form" element={<Index/>}/>

      </Routes>
    </div>
  );
}

export default App;
