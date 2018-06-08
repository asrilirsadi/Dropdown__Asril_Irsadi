import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends Component 
{
  render() 
  {
    return (
             <div className="dropdown">
             
                <button className="btn btn-success dropdown-toggle" type="button" data-toggle="dropdown">Pilih Jenjang
                <span className="caret"></span></button>
                
                  <ul className="dropdown-menu">
                    <li><a href="#">Pendidikan Pra Sekolah</a></li>
                    <li><a href="#">Pendidikan Dasar</a></li>
                    <li><a href="#">Pendidikan Menengah</a></li>
                    <li><a href="#">Pendidikan Tinggi</a></li>
                  </ul>
                
              
              </div>
            );
  }
}

export default App;
