import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
  // Pages and components
import Home from './pages/Home';
import Navbar from './components/navbar';
import Leaders from './pages/Leaders';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useAuthContext } from './hooks/useAuthContext';
import PickDetails from './components/PickDetails';
import Pickem from './pages/Pickem';


function App() {

  const {user} = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
      < Navbar />
        <div className='pages'>
            <Routes>
                <Route
                path = '/'
                element = {user ? < Home /> : <Navigate to='/login'/>}
                />
                <Route path='/picker' 
                element= {user ? <Leaders /> : <Navigate to={'/login'} />}
                />

                <Route 
                path = '/leaders'
                element ={user ? <Leaders/> : <Navigate to={'/login'}/>}
                 />
                  <Route 
                path = '/login'
                element ={user ? <Navigate to={'/'} />  :<Login/>}
                 />
                  <Route 
                path = '/signup'
                element ={user? <Navigate to={'/'} /> :<Signup/>}
                 />

            </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
  
}

export default App;
