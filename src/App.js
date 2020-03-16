import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import './sass/main.scss';

class App extends React.Component{
  render(){
    return(
      <div className="container">
        <LandingPage/>
      </div>
    )
  }
};

export default App;


