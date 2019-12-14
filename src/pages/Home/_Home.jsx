import React, { Component } from 'react';
import Travel from '../../components/Travel/Travel.jsx';
import api from '~/services/api';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Home extends Component {
  state = {
    travels: [],
  };
  
  async componentDidMount(){
    const travels = await axios.get('excursions');
    console.log("xablau", travels);
    
    this.updateTravelState(travels);
  }

 updateTravelState(travelsArray) {
    this.setState({ travels: travelsArray })
  }

  listTravels = () => {
    return this.state.travels.map((travel) => {
      return (
        <li key={travel.id}>
          <Link to={`/home/${travel.id}`}>
            <Travel 
            class="shazam"
              title={this.state.title} 
              destiny={this.state.destiny}
              image_bg = { this.state.image_bg }
              date_start={this.state.departure_date}
              place_start={this.state.departure_address}
              date_end={this.state.return_date}
              place_end={this.state.departure_name}
              togo={this.state.togo}>
            </Travel>
          </Link>
        </li>
      );
    });
  }

  render(){
    return(
      <div className="home-container">
        <h1>Bem vindo!</h1>
        {this.listTravels()}
      </div>
    );
  }
}

export default Home;

