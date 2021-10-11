import { useEffect } from "react";
import AboutUs from "../element/aboutUs";
import Clients from "../element/clients";
import Quote from "../element/quote";
import Service from "../element/service";
import Slider1 from "../element/slider-1";
import Footer from "../layout/footer";
import Header from "../layout/header";
function Home() {
  useEffect(() => {
    document.querySelector("body").setAttribute("color", "color_1");
  }, []);
  return (
    <>
      <Header />
      <div className="page-content bg-white" id="top">
        <Slider1 />
        <Clients />
        <Service />
        <AboutUs />
        <Quote />
      </div>
      <Footer />
    </>
  );
}

export default Home;
