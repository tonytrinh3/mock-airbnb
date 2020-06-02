import React from 'react';

import { Map, GoogleApiWrapper, Marker,InfoWindow } from 'google-maps-react';


class GoogleMaps extends React.Component{
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      };
   
    onMarkerClick = (props, marker) =>{
    //   console.log(props);
    //   console.log(marker);
    this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
    });
    }

//   Civic Center Views from a Contemporary City Pad and Parking
//   37.780963, -122.420412
//   Downtown SF Studio Apartment Near Civic Center
//   37.781362, -122.417644
//   Private, Remodeled Home Close to Golden Gate Park
//   37.762404, -122.505071
//   Private, modern Central Sunset suite
//   37.748355, -122.476957


    

    onMapClicked = () => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };
 
    containerStyle = {
        width: '50vw',
        height: '80vh'
    }

    renderMarker(){
       return this.props.bookings.map((booking,i)=>{
            console.log(booking.lng);
          
            return <Marker 
                    onClick={this.onMarkerClick} 
                    name={booking.title} 
                    position={{ lat: booking.lat, lng: booking.lng}}
                    key = {i} 
                />

            
        })
    }

    render(){
        // console.log(this.props.google)
        console.log(this.props.bookings);
    
        return (
            <Map
               className = {"google-map"}
                google={this.props.google}
                zoom={13.5}
                containerStyle={this.containerStyle}
                initialCenter={{ lat: 37.783148, lng:  -122.430797}}
                onClick={this.onMapClicked}
            >
                 {/* <Marker 
                    onClick={this.onMarkerClick} 
                    title={'The marker`s title will appear as a tooltip.'} 
                    name={'SOMA'} 
                    position={{ lat:  37.780963, lng: -122.420412}}
                    key = {1} 
                /> */}
                
                {this.renderMarker()}
 
                <InfoWindow
              
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                >
                    <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        )
    
    }

}

// export default GoogleMaps;

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDkBI_xF0Tu2Guc_S05gho2ADcmSd_k7_E'
  })(GoogleMaps);