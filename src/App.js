// import Vector from './Vector.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import SignIn from './component/Sign in & Login/SignIn';
// import SignIn from './component/Sign in & Login/Login';
import Container from './component/Container';
import Login from './component/Sign in & Login/Login';
import ResetPassword from './component/Sign in & Login/ResetPassword';

 
 

function App() {
  return (
    <div className="App ">
        
       <> 
       <Routes>
         <Route path='/' element={<Container></Container>}></Route>
         <Route path='SignIn' element={<SignIn></SignIn>}></Route>
         <Route path='Login' element={<Login></Login>}></Route>
         <Route path='ResetPassword' element={<ResetPassword></ResetPassword>}></Route>

       </Routes>
       </>
    </div>

  )
}

export default App;
