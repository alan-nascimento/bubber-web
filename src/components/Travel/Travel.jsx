import React from 'react';
import { iArrival, iDeparture } from '~/assets';

import './Travel.css';

const Travel = ( props ) => {
  return(
    <div className="travel-container">
      <div className="travel-description">
        <h1 className="title">{ props.title }Beto Carrero World</h1>
        <span className="address">{ props.destiny }Rodovia Beto Carrero World - Praia de Armação do Itapocorói, Penha - SC, 88385-000</span>
      </div>
      <div className="travel-info">
        <div className="departure">
          <img src={iDeparture} alt="departure" className="travel-icon"/>
          <div className="text-departure">
            <p>Partida</p>
            <div className="container-dateTime">
              <div className="travel-dates">
                <span>{props.date_start}Nov</span><span>{props.date_start}23</span>
              </div>
              <div className="travel-time">
                <span>{props.date_start}Sábado</span><span>{props.hours_start}08:05</span>
              </div>
            </div>
          </div>
        </div>
       <div className="arrival">
          <img src={iArrival} alt="arrival" className="travel-icon"/>
          <div className="text-arrival">
            <p>Partida</p>
            <div className="container-dateTime">
              <div className="travel-dates">
                <span>{props.date_back}Nov</span><span>{props.date_back}23</span>
              </div>
              <div className="travel-time">
                <span>{props.date_back}Sábado</span><span>{props.hours_back}08:05</span>
              </div>
            </div>
          </div>
        </div>
        <div className="togo">
          <span></span>
          <span>99 h</span>
        </div>
      </div>
    </div>
  );
}

export default Travel;
