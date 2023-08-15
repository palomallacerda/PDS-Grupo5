import React from 'react'; //identificação jsx
import './App.css'

function App () {
  return(
   <div className='App'>
    <header>
      <nav id="navbar">
          <div className="container">
              <h1 className="logo"> 
                  <a href="index.html">Magi Casper</a>
              </h1>
              <ul>
                  <li><a href="home.html">Home</a></li>
                  <li><a href="./pages/perfil.html">Perfil</a></li>
                  <li><a href="/pages/materias.html">Materias</a></li>
                  {/* <li> <img src="./img/config-icon.png"></img></li> */}
              </ul>
          </div>
      </nav>
  </header>  
   </div>
  );
}

export default App;
