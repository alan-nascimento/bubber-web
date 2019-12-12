import React from 'react';

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const Maps = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={18}
      defaultCenter={{ lat: props.dfLatC, lng: props.dfLngC }}
    >
      <Marker
        position={{ lat: props.dfLatC, lng: props.dfLngC }}
        title="Ismael"
        // disableDeafaultUI=true
        // animation={google.maps.Animation.DROP}
      />
      <Marker position={{ lat: props.mpLatC, lng: props.mpLngC }} />
    </GoogleMap>
  ))
);

export default Maps;

// import React, { Component } from "react";

// let google;

// class Maps extends Component {
//   map: {};

//   constructor() {
//     super();
//     this.state = {};
//   }

//   viewDidLoad = () => {
//     const position = new google.maps.latLng(-21, 763409, 43.349034);

//     const mapOptions = {
//       zoon: 18,
//       center: position,
//       disableDeafaultUI: true,
//       animation: google.maps.Animation.DROP //BOUNCE
//       // icon: 'assert/imgs/pessoa.png'
//     };

//     this.map = new google.maps.Map(document.getElementById("root"), mapOptions);
//   };
// }
