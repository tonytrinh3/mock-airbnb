import React from 'react';
// import pic_1 from "../../img/booking-page/listing-1/home-1.jpg"
// import pic_2 from "../../img/booking-page/listing-1/home-2.jpg"
// import pic_3 from "../../img/booking-page/listing-1/home-3.jpg"
// import pic_4 from "../../img/booking-page/listing-1/home-4.jpg"
// import pic_5 from "../../img/booking-page/listing-1/home-5.jpg"

const PictureHeader = ({imgs,id}) =>{
    //console.log(Object.values(imgs));
    return (
        <div className="picture-header margin-bottom-large">
        {Object.values(imgs).map((img,i) =>{
            //console.log(img);
            return <img src={require(`../../img/booking-page/listing-${id}/${img}.jpg`)} alt= {`img_${i}`} className={`picture-header__img picture-header__img--${i}`} key ={`img_${i}`}/>
        })}

            {/* <img src={require("../../img/booking-page/listing-1/home-1.jpg")} alt="pic 1" className="picture-header__img picture-header__img--1"/>
            <img src={pic_2} alt="pic 2" className="picture-header__img picture-header__img--2"/>
            <img src={pic_3} alt="pic 3" className="picture-header__img picture-header__img--3"/>
            <img src={pic_4} alt="pic 4" className="picture-header__img picture-header__img--4"/>
            <img src={pic_5} alt="pic 5" className="picture-header__img picture-header__img--5"/>  */}
            
        </div>
    )
};

export default PictureHeader;

