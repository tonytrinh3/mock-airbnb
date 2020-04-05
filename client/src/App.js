import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import BookingPage from './components/BookingPage/BookingPage';
import { BrowserRouter, Route } from 'react-router-dom';
import './sass/main.scss';



class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <div className="container">
          <Route path = "/" exact component ={ LandingPage} />
          <Route path = "/booking" component ={ BookingPage} />
        </div>
      </BrowserRouter>

    )
  }
};

export default App;


