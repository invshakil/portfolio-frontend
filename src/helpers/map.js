import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {ImLocation} from 'react-icons/im'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat:23.750580436828898,
            lng: 90.43303717316357
        },
        zoom: 16
    };
    render() {

        const handleApiLoaded = (map, maps) => {
           console.log('map',map,maps)
        };

        return (
            <div style={{ height: '100%', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={"k0-kbUrCYF3_DiHzYupAq9G9"}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                >
                    <AnyReactComponent
                        lat={23.750580436828898}
                        lng={90.43303717316357}
                        text=<ImLocation size='40px' color='green'/>
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;
