import ClientSlider from "./../component/clientSlider";

function Clients() {
    return (
        <>
            <div className="content-inner-2">
                <div className="container">
                <div className="section-head style-1 text-center">
                    <div className="clients-carousel owl-none owl-carousel owl-loaded owl-drag">
                    <h6 className="sub-title bgl-primary m-b20 text-primary">Clients</h6>
                    </div>
                    <ClientSlider />
                </div>
            </div>
        </div>

        </>
    );
}

export default Clients;
