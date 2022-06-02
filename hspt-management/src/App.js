import './App.css';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Home from './Components/Home';
import Selectfields from './Components/Selectfields'; 
import Registration from './Components/Registration';
import Reports from './Components/reports';
import Login from './Components/login';

function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <div>
            <Routes>
              <Route path = "/" element={ <Login/> } />
              <Route path = "/register" element={ <Registration/> } />
              <Route path = "/report" element={ <Reports/> } />
              <Route path = "/home" element={ <Home/> } />
              <Route path = "/select" element={ <Selectfields/> } />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </Provider>  
  );
}

export default App;
