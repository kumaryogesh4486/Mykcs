import Slider from "react-slick";

function ClientSlider() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        arrows: true,
		responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				
			  }
			},	
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				
			  }
			},
		]
    };
    return (
        <>
            <Slider {...settings}>
				<div className="item">
				<img
							className="logo-main"
							src="images/logo/c1.png"
							alt=""
						/>
				</div>
				<div className="item">
				<img
							className="logo-main"
							src="images/logo/c2.png"
							alt=""
						/>
				</div>
				<div className="item">
				<img
							className="logo-main"
							src="images/logo/c3.png"
							alt=""
						/>
				</div>
				<div className="item">
				<img
							className="logo-main"
							src="images/logo/c4.png"
							alt=""
						/>
				</div>
				<div className="item">
				<img
							className="logo-main"
							src="images/logo/c5.png"
							alt=""
						/>
				</div>
				<div className="item">
				<img
							className="logo-main"
							src="images/logo/c6.png"
							alt=""
						/>
				</div>
				<div className="item">
				<img
							className="logo-main"
							src="images/logo/c7.png"
							alt=""
						/>
				</div>
			</Slider>
        </>
    );
}

export default ClientSlider;
