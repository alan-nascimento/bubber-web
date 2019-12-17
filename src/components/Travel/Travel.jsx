import React from 'react';
import { idArrival, idDeparture } from '~/assets';
import { formatDate } from '~/utils/date';
import './Travel.css';

const Travel = props => {
  return (
    <div className="travel-container">
      <div className="travel-description">
        <h1 className="title">{props.title}</h1>
        <span className="address">{props.destiny}</span>
        <div className="gradient-bg"></div>
        <img src={props.image_bg} alt="" className="travel-background-image" />
      </div>
      <div className="travel-info">
        <div className="departure">
          <img src={idDeparture} alt="departure" className="travel-icon" />
          <div className="text-departure">
            <p>Partida</p>
            <div className="container-dateTime">
              <div className="travel-dates">
                <span>{formatDate(props.date_start)}</span>
                <span>{props.place_start}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="arrival">
          <img src={idArrival} alt="arrival" className="travel-icon" />
          <div className="text-arrival">
            <p>Chegada</p>
            <div className="container-dateTime">
              <div className="travel-dates">
              <div className="travel-dates">
                <span>{formatDate(props.date_end)}</span>
                <span>{props.place_end}</span>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
