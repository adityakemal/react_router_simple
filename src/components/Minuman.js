import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

const Minuman = () => {
var state = {
    menu1 : 'jus jeruk',
    menu2 : 'jus tomat',
}
  return (
    <div className="minuman">
    <Link to='/menu'>
      <span class="badge badge-danger ">Back</span>
    </Link>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">ini Minuman</h1>
          <p class="lead">{state.menu1}</p>
          <p class="lead">{state.menu2}</p>
        </div>
      </div>
    </div>
  );
}

export default Minuman;
