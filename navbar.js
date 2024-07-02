import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
function Navbar() {


    const {logout} = useLogout()
    const {user} = useAuthContext()
    

    const handleClick = () => {
        logout()
    }

  return (
    <header>
        <div className='container'>
            <Link to={'/'}>
                <h1>Fight Archives</h1>
            </Link>
            <Link to={'/picker'}>
                <h1>Pick Em</h1>
            </Link>
            {/* <Link to={'/leaders'}>
                <h1>Leader Board</h1>
            </Link> */}
            <nav>
                {user && (
                <div>
                    <span>{user.email.split("@")[0]}</span>
                    <button onClick={handleClick}>Log Out</button>
                </div>
                )}
                {!user && (
                <div>
                    <Link to={'/login'}>
                        Log In 
                    </Link>
                    <Link to={'/signup'}>
                        Signup
                    </Link>
                </div>
                )}
            </nav>
        </div>
    </header>
  )
}

export default Navbar