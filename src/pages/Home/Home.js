import React, { Component } from 'react';
import Travel from '../../components/Travel/Travel.jsx';
import api from '~/services/api';
import { Link } from 'react-router-dom';

class Home extends Component{
  constructor(){
    super();
    this.state = {
      dados: []
    };
    this.getExcursions();
  }
  getExcursions = async () => {
    const { data } = await api.get('excursions');
    this.setState({dados: data});
    console.log('xablau', this.state);
  };

  listTravels = () => {
    
    return this.state.dados.map((travel) => {
      return (
        <Link key={travel._id} to={`/travelDetail/${travel._id}`}>
          <Travel 
            title={travel.title} 
            destiny={travel.destiny}
            image_bg = { travel.image_bg }
            date_start={travel.departure_date}
            place_start={travel.departure_address}
            date_end={travel.return_date}
            place_end={travel.departure_name}
            togo={travel.togo}>
          </Travel>
        </Link>
      );
    });
  }
  render(){
    return(


      <div className="home-container">
        <h1>Bem vindo!</h1>
        { 
          this.listTravels()
        }
        
      </div>
    );
  }
}

export default Home;

