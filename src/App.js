import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Headwer/Header';

import Register from './components/Register/Register';
import Order from './components/Order/Order';
import Product from './components/Product/Product';
import LogIn from './components/LogInn/login';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">

      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/product' element={<RequireAuth><Product></Product></RequireAuth>} ></Route>
        <Route path='/orders'
          element={<RequireAuth> <Order></Order></RequireAuth>} >
        </Route>
        <Route path='/register' element={<Register></Register>} ></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
      </Routes>


    </div>
  );
}

export default App;
