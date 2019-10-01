import React from 'react';
import { GoogleApiWrapper,  Marker } from 'google-maps-react';
import { api_key } from '../../data/data';
import CurrentLocation from './Map';
import * as nonprofitsData from '../../data/nonprofits.json';


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



  onClick = ( marker, e, selectedOrg) =>
    this.setState({
      selectedPlace: null,
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
       {nonprofitsData.features.map((nonprofit) => (
                    <Marker key={nonprofit.properties.ORG_ID} position={{
                        lat: nonprofit.geometry.coordinates[1],
                        lng: nonprofit.geometry.coordinates[0]
                    }}
                    // onClick={() => {
                    //         this.setState(nonprofit);
                    //     }}
                        icon= {{
                            url: '/ngo.svg',
                            scaledSize: new window.google.maps.Size(25, 25)
                        }}
                      />
                    ))}
              {/* <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow} onClose={this.onClose} /> */}
                            {/* <div> 
                                <h2>{nonprofit.properties.Name}</h2>
                                <h3>{nonprofit.properties.ADDRESS}</h3>
                                <p>{nonprofit.properties.DESCRIPTION}</p>
                                <h4><a href='{nonprofit.properties.URL}' onClick={(e) => { e.preventDefault();window.open(selectedOrg.properties.URL, '_blank')}}>{selectedOrg.properties.URL}</a></h4>
                            </div> */}
             
        
      </CurrentLocation>
    );
  }
}
  
  export default GoogleApiWrapper({
    apiKey: `${api_key}`,
    libraries: []
  })(MapContainer);