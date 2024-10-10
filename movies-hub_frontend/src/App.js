import { BrowserRouter , Router, Route, Routes } from 'react-router-dom';
import ProtectionCompany from './components/ProtectionEntry';
function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
          <Route path='/production' element={<ProtectionCompany/>}></Route>
          
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
