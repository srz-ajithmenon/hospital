import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Login from './Components/login/login';
import { PrivateRoute } from './Components/privateRoute';
import Home from './Components/Home';
import Registration from './Components/Registration';
import Reports from './Components/reports';
import Logout from './Components/Logout/Logout';
import Visitor from './Components/Visitor/Visitor';

function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <div className='main'>
            <Routes>
              <Route path = "/login" element={ <Login /> } />
              <Route exact path='/' element={<PrivateRoute />}>
                  <Route exact path='/report' element={<Reports/>}/>
                  <Route exact path = "/register" element={ <Registration/> } />
                  <Route exact path = "/home" element={ <Home/> } />
                  <Route path= '/logout' element= { <Logout />} />
              </Route>
              <Route path="/visitors" element= { <Visitor/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
