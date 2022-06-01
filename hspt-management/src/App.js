import './App.css';
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from './Components/Home';
import Selectfields from './Components/Selectfields'; 
import Registration from './Components/Registration';
import Reports from './Components/reports';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path = "/" element={ <Registration/> } />
            <Route path = "/report" element={ <Reports/> } />
            <Route path = "/home" element={ <Home/> } />
            <Route path = "/select" element={ <Selectfields/> } />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
