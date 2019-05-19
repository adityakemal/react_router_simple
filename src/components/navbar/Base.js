import React from 'react'

import Home from '../Home.js'
import Profile from '../Profile.js'
import Menu from '../Menu.js'
import Makanan from '../Makanan.js'
import Minuman from '../Minuman.js'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

const Base = (url) => {
  console.log(url);
    return(
      <Router>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link to='/'>
              <a className="nav-link active" href="#">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/profile'>
              <a className="nav-link active" href="#">Profile</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/menu'>
              <a className="nav-link active" href="#">Menu</a>
            </Link>
          </li>
        </ul>
      <div>
      <hr />
      <Route path='/' exact component={Home} />
      <Route path='/profile' component={Profile} />
      <Route path='/menu'exact component={Menu} />
      <Route path='/menu/makanan' component={Makanan} />
      <Route path='/menu/minuman' component={Minuman} />

      </div>
      </Router>
    )
}

export default Base
