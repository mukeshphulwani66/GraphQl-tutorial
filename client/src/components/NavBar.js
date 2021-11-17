import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <nav>
        <div className="nav-wrapper #673ab7 deep-purple">
          <Link to="/" className="brand-logo left">Quote App</Link>
          <ul id="nav-mobile" className="right">
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/create">Create</Link></li>
          </ul>
        </div>
      </nav>
    )
}
