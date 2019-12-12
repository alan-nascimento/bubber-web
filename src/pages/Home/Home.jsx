import React, { Component } from 'react';
import Travel from '../../components/Travel/Travel.jsx';

class Home extends Component{
  constructor(){
    super();
    this.state = {
      title: 'Beto Carrero World',
      destiny: 'Rodovia Beto Carrero World - Praia de Armação do Itapocorói, Penha - SC, 88385-000',
      image_bg: 'https://casadoturista.com.br/wp-content/uploads/2014/11/dwn_grande_71.jpg',
      date_start_month: 'Nov',
      date_start_day: '25',
      date_start_week: 'Sábado',
      date_start_hour: '08:05',
      date_end_month: 'Nov',
      date_end_day: '27',
      date_end_week: 'Segunda',
      date_end_hour: '08:05',
      togo: '36'
    }
  }
  render(){
    return(
      <div className="home-container">
        <h1>Bem vindo!</h1>

        <Travel 
          title={this.state.title} 
          destiny={this.state.destiny}
          image_bg = { this.state.image_bg }
          date_start_month={this.state.date_start_month}
          date_start_day={this.state.date_start_day}
          date_start_week={this.state.date_start_week}
          date_start_hour={this.state.date_start_hour}
          date_end_month={this.state.date_end_month}
          date_end_day={this.state.date_end_day}
          date_end_week={this.state.date_end_week}
          date_end_hour={this.state.date_end_hour}
          togo={this.state.togo}>
        </Travel>
      </div>
    );
  }
}

export default Home;

