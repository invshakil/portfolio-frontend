import React, from 'react'
import GoogleMapReact from 'google-map-react'
import {ImLocation} from 'react-icons/im'

const AnyReactComponent = ({text}) => <div>{text}</div>

const SimpleMap = ({latitude, longitude}) => {

    const props = {
        center: {
            lat: latitude,
            lng: longitude
        },
        zoom: 16
    }

    return (
        <div style={{height: '100%', width: '100%'}}>
            <GoogleMapReact
                bootstrapURLKeys={"k0-kbUrCYF3_DiHzYupAq9G9"}
                defaultCenter={props.center}
                defaultZoom={props.zoom}
                yesIWantToUseGoogleMapApiInternals
            >
                <AnyReactComponent
                    lat={latitude}
                    lng={longitude}
                    text=<ImLocation size="40px" color="green"/>
                />
            </GoogleMapReact>
        </div>
    )
}

export default SimpleMap
