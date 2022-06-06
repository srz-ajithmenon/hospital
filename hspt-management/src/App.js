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
import ModalHome from './Components/Pages/Home';
import Navigation from './Components/Navigation/Navigation';
import SecondModal from './Components/TabbedForms/SecondForm'

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
        <Navigation/>
          <div className='main'>
            <Routes>
              <Route exact path='/' element={<PrivateRoute isAuth={isAuth}/>}>
                <Route exact path='/report' element={<Reports/>}/>
              </Route>
              <Route path = "/login" element={ <Login handleAuth= {authenticate}/> } />
              <Route path = "/register" element={ <Registration/> } />
              <Route exact path = "/home" element={ <Home/> } />
              {/* <Route path = "/modal" element={ <ModalHome /> } /> */}
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
