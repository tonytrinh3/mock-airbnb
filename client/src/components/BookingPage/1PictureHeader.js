import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


class PictureHeader extends React.Component {
    //console.log(Object.values(imgs));
 

    updateImg(){
    
        const {
            imgs,
            id
        } = this.props;

        // const imgs=["img-1","img-1","img-1","img-1"];
        // const id = 3;

        if(window.innerWidth <= 1100){ //1100px
           return (
            <Carousel autoPlay className="picture-header__carousel">
                {Object.values(imgs).map((img,i)=>{
                    return (
                        <div key = {i}>
                            <img src={require(`../../img/booking-page/listing-${id}/${img}.jpg`)} alt= {`img_${i}`}  key ={`img_${i}`}/>
                        </div>
                    )
                })}
            </Carousel> 
           );
        } else {
            return (
                Object.values(imgs).map((img,i) =>{
                    //console.log(img);
                    return <img src={require(`../../img/booking-page/listing-${id}/${img}.jpg`)} alt= {`img_${i}`} className={`picture-header__img picture-header__img--${i}`} key ={`img_${i}`}/>
                })
            );
        }
    }

    componentDidMount(){
        this.updateImg(); 
        window.addEventListener("resize", this.updateImg.bind(this)); 
        //https://www.hawatel.com/blog/handle-window-resize-in-react/
        //window.addEventListener("resize", this.updateMonth.bind(this));
    }

    render(){
        // console.log(Object.values(imgs));
        return (
            <div className="picture-header margin-bottom-large">
                {this.updateImg()}
            </div>
        )

    }

};

export default PictureHeader;

