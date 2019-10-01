import React, {useState} from 'react';
import { GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import * as nonprofitsData from '../../data/nonprofits.json';

 

export default function Map() {
    const [selectedOrg, setSelectedOrg] = useState(null);

    return (<GoogleMap 
                defaultZoom={10} 
                defaultCenter={{lat: 40.851800, lng: -73.937230}}
             >
                {nonprofitsData.features.map((nonprofit) => (
                    <Marker key={nonprofit.properties.ORG_ID} position={{
                        lat: nonprofit.geometry.coordinates[1],
                        lng: nonprofit.geometry.coordinates[0]
                    }}
                    onClick={() => {
                            setSelectedOrg(nonprofit);
                        }}
                        icon= {{
                            url: '/ngo.svg',
                            scaledSize: new window.google.maps.Size(25, 25)
                        }}
                      />
                    ))}

                    {selectedOrg && (
                        <InfoWindow
                            position={{
                                lat: selectedOrg.geometry.coordinates[1],
                                lng: selectedOrg.geometry.coordinates[0],
                            }}
                            onCloseClick={() => {
                                setSelectedOrg(null);
                            }}
                            >
                            <div> 
                                <h2>{selectedOrg.properties.Name}</h2>
                                <h3>{selectedOrg.properties.ADDRESS}</h3>
                                <p>{selectedOrg.properties.DESCRIPTION}</p>
                                <h4><a href='{selectedOrg.properties.URL}' onClick={(e) => { e.preventDefault();window.open(selectedOrg.properties.URL)}}>{selectedOrg.properties.URL}</a></h4>
                            </div>
                        </InfoWindow>
                    )}
                    
                </GoogleMap>
  )
};

