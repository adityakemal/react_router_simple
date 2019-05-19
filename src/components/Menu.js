import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

const Menu = ({match}) => {
  console.log(match.url);
  return (
    <div className="home">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">MENU</h1>
          <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          <Link to={`${match.url}/makanan`}>
            <span class="badge badge-success mr-5">Makanan</span>
          </Link>
          <Link to={`${match.url}/minuman`}>
            <span class="badge badge-info ">Minuman</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
