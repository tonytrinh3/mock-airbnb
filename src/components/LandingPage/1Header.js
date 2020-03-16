import React from 'react';
import Navigation from '../Navigation';
import Forms from '../Forms';

const Header=()=>{
    return (
        <header className="header">
         
            <Navigation/>
            <Forms/>

            <div className="header__caption">Over 300 unique places <br/> to stay in Hong Kong</div>


        </header>
    )
};

export default Header;