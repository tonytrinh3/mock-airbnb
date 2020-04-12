import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import BookingPage from './components/BookingPage/BookingPage';
import EditPage from './components/BookingPage/EditPage';
import { Router, Route } from 'react-router-dom';
import './sass/main.scss';
import history from './history';



class App extends React.Component{
  render(){
    return(
      //changed from BrowseRouter to Router so you can control the history object 
      <Router history = {history}>
        <div className="container">
          <Route path = "/" exact component ={ LandingPage} />
          <Route path = "/booking" exact component ={ BookingPage} />
          <Route path = "/booking/edit/:id" exact component ={ EditPage} />
        </div>
      </Router>

    )
  }
};

export default App;


