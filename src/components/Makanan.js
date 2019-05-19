import React from 'react';


const Makanan = () => {
var state = {
    menu1 : 'Rendang',
    menu2 : 'Ayam Kalasan',
}
  return (
    <div className="home">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">ini Makanan</h1>
          <p class="lead">{state.menu1}</p>
          <p class="lead">{state.menu2}</p>
        </div>
      </div>
    </div>
  );
}

export default Makanan;
