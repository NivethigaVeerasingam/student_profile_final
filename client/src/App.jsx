// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './Login';
import Home from './Home';
import Signup from './Signup';
import User from './Users';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Users" element={<User />} />
        <Route path = '/create' element={<CreateUser/>}></Route>
        <Route path = '/update/:id' element={<UpdateUser/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
