import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Login from './components/login'
import SignUp from './components/SignUp'
import SignUp2 from './components/SignUp2'

function App() {
  return (
    <Router>

      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-up2" element={<SignUp2 />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}


// function App() {
//   return (
//     <div className='App'>
//       <SignUp />
//     </div>
//   )
// }
export default App