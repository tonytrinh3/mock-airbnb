import React from 'react';
import Navigation from '../Navigation';
import PictureHeader from './1PictureHeader';
import BookingCard from '../BookingCard';
import Footer from '../Footer';

const BookingPage = () =>{
    return(
        <div className="booking-page">
            
            <Navigation/>
            <PictureHeader/>
            <BookingCard/>
            <Footer/>
        </div>
    )
};

export default BookingPage;