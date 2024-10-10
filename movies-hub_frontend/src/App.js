import { BrowserRouter , Router, Route, Routes } from 'react-router-dom';
import Protection_Company from './components/ProtectionEntry';
function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
          <Route path='/production' element={<Protection_Company/>}></Route>
          
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
