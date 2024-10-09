import React from "react";
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Protection_Company from "./components/ProtectionEntry";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/protection' element={<Protection_Company/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
