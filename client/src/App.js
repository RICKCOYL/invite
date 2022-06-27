import {useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom"
import jwt_decode from "jwt-decode"
import Form from './components/AuthForm/Form'
import Invites from './components/invites/Invites'
import NavBar from './components/NavBar/NavBar'

const App = () => {
  const token = localStorage.getItem('token')
  
  
  useEffect(() => {
    
    if(token) {
      const decoded = jwt_decode(token)
      if(decoded.exp < Date.now() / 1000) {
        localStorage.removeItem('token')
        return <Navigate replace to="/" />
      }
     console.log(decoded,"######")
    }
  }, [token])
  
  return (
    <Router>
    <main className="App">
      <NavBar />
      <Routes>
         <Route path="/" exact element={<Form token={token} />} />
         <Route path="/login" element={<Form />} />
         <Route path="/invites" element={<Invites token={token}/>} />
      </Routes>
    </main>
    </Router>
  );
}

export default App;
