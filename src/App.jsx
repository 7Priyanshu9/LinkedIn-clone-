import Login from './Components/Login'
import Home from './Components/Home'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
// here in place of Switch we are using Routes as its deprecated  in ES6
function App() {
  return (
    <>
    <div className='App'>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path='/home' element = {<Home/>} />
      </Routes>
    </Router>
    </div>
     
    </>
  )
}

export default App
