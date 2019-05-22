import React,{Component} from 'react';
import Slider from "react-slick";
import slide_one from '../../resources/1.1.jpg';
import img1 from '../../resources/2.jpg';
import img2 from '../../resources/3.jpg';
import img3 from '../../resources/4.jpg';
import img4 from '../../resources/5.jpg';
import img5 from '../../resources/6.jpg';
import  './carrousel.css';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" ,marginRight:'50px',top:'200px'}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",color:'#fff',left:'25%',zIndex:'111',width:'20px',height:'20px',top:'200px' }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrowResponsive(props){
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",color:'#fff',left:'50px',zIndex:'111',width:'20px',height:'20px',top:'200px' }}
      onClick={onClick}
    />
  );
}

function SampleNextArrowResponsive(props){
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",color:'#fff',right:'50px',zIndex:'111',width:'20px',height:'20px',top:'200px' }}
      onClick={onClick}
    />
  );
}

class  Carrousel extends Component {

   
      render(){
        const settings = {
          dots:true,
         arrow:true,
         rows:1,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [{
              breakpoint: 991,
              settings: {
                arrow:true,
                  nextArrow:<SampleNextArrowResponsive/>,
                  prevArrow:<SamplePrevArrowResponsive/>,
                }
          }],
          appendDots: dots => (
            <div
              style={{
                
                marginLeft:'10%'
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          )
          };
    return (
      <div>

        <div 
            
            style={{
                   
               
                marginTop:'85px'
              
                
            }}
        >
        
            <Slider {...settings}>
          <div>
            <img src={slide_one} alt="img1" height="100%" width="100%" style={{backgroundSize:'cover' }}/>
          </div>
          
          <div>
         <img src={img1} alt="img2" height="100%" style={{backgroundSize:'cover'}} width="100%" />
          </div>
          <div>
            <img src={img2} alt="img3" height="100%" style={{backgroundSize:'cover'}} width="100%"/>
          </div>
          <div>
            <img src={img3}  alt="img4" height="100%" style={{backgroundSize:'cover'}}  width="100%"/>
          </div>
          <div>
            <img src={img4} alt="img3" height="100%" style={{backgroundSize:'cover'}} width="100%"/>
          </div>
          <div>
            <img src={img5}  alt="img4" height="100%" style={{backgroundSize:'cover'}}  width="100%"/>
          </div>
        </Slider>
            
        </div>
      </div>
    );
          }
};

export default Carrousel;