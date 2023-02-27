import logo from './logo.svg';
import './App.css';
import {Home} from './components/Home';
import {Product} from './components/Product';
import {Customer} from './components/Customer';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className='d-flex justify-content-center m-3'>
        Ecommerce Admin
      </h3>

      <nav className='navbar navbar-expand-sm bg-light navbar-dark'>
        <ul className='navbar-nav'>
          <li className='nav-item m-1' >
            <NavLink className="btn btn-light btn-outline-primary" to="/home">
              Home
            </NavLink>
          </li>
          <li className='nav-item m-1' >
            <NavLink className="btn btn-light btn-outline-primary" to="/product">
              Product
            </NavLink>
          </li>
          <li className='nav-item m-1' >
            <NavLink className="btn btn-light btn-outline-primary" to="/customer">
              Customer
            </NavLink>
          </li>
        </ul>


      </nav>

      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/customer' element={<Customer/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
