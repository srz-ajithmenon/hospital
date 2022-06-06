import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './Components/Home';
import Registration from './Components/Registration';
import Reports from './Components/reports';
import Navigation from './Components/Navigation/Navigation';

function App() {
  return (
    <div>
      <BrowserRouter>
      <div>
        <Navigation/>
        </div>
         <div className='main'>
          <Routes>
            <Route path = "/register" element={ <Registration/> } />
            <Route path = "/report" element={ <Reports/> } />
            <Route path = "/home" element={ <Home/> } />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
