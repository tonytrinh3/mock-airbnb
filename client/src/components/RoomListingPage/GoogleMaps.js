import React from 'react';

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


class GoogleMaps extends React.Component{



    containerStyle = {
        width: '50vw',
        height: '50vh'
    }

    render(){
        return (
            <Map
               className = {"google-map"}
                google={this.props.google}
                zoom={12}
                containerStyle={this.containerStyle}
               
                initialCenter={{ lat: 37.7749, lng: -122.176}}
            >
                <Marker position={{ lat: 37.7749, lng: -122.4194}} />
                <Marker position={{ lat: 37.7749, lng: -122.4194}} onClick ={()=>console.log("aewf")}/>
            </Map>
        )
    
    }

}

// export default GoogleMaps;

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDkBI_xF0Tu2Guc_S05gho2ADcmSd_k7_E'
  })(GoogleMaps);