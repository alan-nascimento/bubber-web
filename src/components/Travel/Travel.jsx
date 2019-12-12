import React from 'react';
import { idArrival, idDeparture } from '~/assets';
import './Travel.css';

const Travel = ( props ) => {
  return(
    <div className="travel-container">
      <div className="travel-description">
        <h1 className="title">{ props.title }</h1>
        <span className="address">{ props.destiny }</span>
        <div className="gradient-bg"></div>
        <img src={ props.image_bg } alt="" class="travel-background-image"/>
      </div>
      <div className="travel-info">
        <div className="departure">
          <img src={ idDeparture } alt="departure" className="travel-icon"/>
          <div className="text-departure">
            <p>Partida</p>
            <div className="container-dateTime">
              <div className="travel-dates">
                <span>{ props.date_start_month }</span><span>{ props.date_start_day }</span>
              </div>
              <div className="travel-time">
                <span>{ props.date_start_week }</span><span>{ props.date_start_hour }</span>
              </div>
            </div>
          </div>
        </div>
       <div className="arrival">
          <img src={idArrival} alt="arrival" className="travel-icon"/>
          <div className="text-arrival">
            <p>Partida</p>
            <div className="container-dateTime">
              <div className="travel-dates">
                <span>{ props.date_end_month }</span><span>{ props.date_end_day }</span>
              </div>
              <div className="travel-time">
                <span>{ props.date_end_week }</span><span>{ props.date_end_hour }</span>
              </div>
            </div>
          </div>
        </div>
        <div className="togo">
          <span>{ props.togo } h</span>
        </div>
      </div>
    </div>
  );
}

export default Travel;
