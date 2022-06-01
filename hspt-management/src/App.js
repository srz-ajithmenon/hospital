import { Route, Link, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';

import Home from './Components/Pages/Home';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path = "/" element={ <Home /> } />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
