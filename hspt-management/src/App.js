import { Route, Link, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from './Components/Home';
import Selectfields from './Components/Selectfields'; 

function App() {
  return (
    <div className="App">
    <BrowserRouter>

<div>
 <Routes>
    <Route path = "/home" element={ <Home /> } />
    <Route path = "/select" element={ <Selectfields/> } />
</Routes>
</div>
  </BrowserRouter>
  </div>
  );
}

export default App;
