import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Login from './Login';
import Signup from './Signup';
import Header_logout from './HeaderName';
function App() {
  return (

    <Routes>

<Route path='/' element ={<Header />} />
<Route path='/login' element={<Login/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path='/header_logout' element={<Header_logout/>}/>

    </Routes>
  );
}

export default App;