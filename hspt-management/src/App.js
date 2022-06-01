import logo from './logo.svg';
import './App.css';
import { Route, Link, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Registration from './Components/Registration';

function App() {
  return (
        <div>
          <BrowserRouter>
              <Routes>
                <Route path = "/" element={ <Registration /> } />
              </Routes>
          </BrowserRouter>
        </div>
  
  );
}

export default App;
