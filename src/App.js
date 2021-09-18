import React, { useState } from 'react';

import './styles/App.scss';

import Aside from './Aside.js'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    return (
      <div>
         <Aside
             collapsed={false}
             toggled={false}
         />
         <main>
         <div>
          <Map google={this.props.google}
              onClick={this.onMapClicked}>
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow>
          </Map>
          </div>
          </main>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDV4L_eM1ETmSrOsMmFksP8bjdp_s0wIdg')
})(MapContainer)
