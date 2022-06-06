import './App.css';

import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Home from './components/home';
import Registration from './components/registration';
import Reports from './components/reports';
import Login from './components/login/login';
import { PrivateRoute } from './components/privateRoute';

function App() {
  const [isAuth,setAuth] = React.useState(false);
  
  const authenticate = (isAuthUser) =>{
      setAuth(isAuthUser)
      console.log(isAuthUser)
  }
  
  return (
    <Provider store={store}>
      <div>
        {console.log(isAuth)}
        <BrowserRouter>
          <div>
            <Routes>
              <Route exact path='/' element={<PrivateRoute isAuth={isAuth}/>}>
                <Route exact path='/report' element={<Reports/>}/>
              </Route>
              <Route path = "/login" element={ <Login handleAuth= {authenticate}/> } />
              <Route path = "/register" element={ <Registration/> } />
              <Route exact path = "/home" element={ <Home/> } />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </Provider>  
  );
}

export default App;
