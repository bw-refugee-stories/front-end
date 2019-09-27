import React from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { api_key } from '../../data/data';
import CurrentLocation from './Map';



// function MapContainer({showingInfoWindow, activeMarker, selectedPlace, locations}) {
//   const [state, setState]
// }

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      locations: [],
      showingName: false
    };
  }



  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    },
    );

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
        <Marker onClick={this.onMarkerClick} name={'current location'} name/>
        <Marker name={'Human Rights First'}
            position={{lat: 40.70462347898018, lng: -74.0114164352417}} />
        <Marker name={'Human Rights Watch'}
            position={{lat: 40.74841927463572, lng: -73.98565918207169}} />
          <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow} onClose={this.onClose}>
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
      </CurrentLocation>
    );
  }
}
  
  export default GoogleApiWrapper({
    apiKey: `${api_key}`,
    libraries: []
  })(MapContainer);