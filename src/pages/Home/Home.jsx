import React, { Component } from 'react';
import Travel from '../../components/Travel/Travel.jsx'

class Home extends Component{
  render(){
    return(
      <div className="home-container">
        <h1>Teste</h1>
        <Travel/>
        <Travel/>
        <Travel/>
        <Travel/>
        <Travel/>
        <Travel/>
        
      </div>
    );
  }
}

export default Home;
