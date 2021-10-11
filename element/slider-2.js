import Slider from "react-slick";

function Slider2() {

  var settings = {
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		adaptiveHeight: "50vh",
		speed: 2000,
		autoplaySpeed: 2000,
		cssEase: "linear",
		
	  };
  return (
      <div >
        <Slider {...settings}>
				<div className="banner-inner" style={{height: '40vh'}}>
				<img src="images/main-slider/slider1/slide4.png" alt=""/>
				</div>
				<div className="item">
				<img src="images/main-slider/slider1/slide3.png" alt=""/>
				</div>
				<div className="item">
				<img src="images/main-slider/slider1/slide2.png" alt=""/>
				</div>
				<div className="item">
				<img src="images/main-slider/slider1/slide1.png" alt=""/>
				</div>
				<div className="item">
				<img src="images/main-slider/slider1/slide5.png" alt=""/>
				</div>
			</Slider>
        </div>
  );
}

export default Slider2;
