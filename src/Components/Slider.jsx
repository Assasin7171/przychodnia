import "bootstrap/js/src/carousel.js";

const Slider = ({bgImages}) => {
    // const sliderStyles = {
    //     backgroundImage: `url(${props.bgImage})`,
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'cover',
    // }

    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item c-item active">
                    <img src={bgImages[0]} className="d-block c-img w-100" alt="..."/>
                </div>
                <div className="carousel-item c-item">
                    <img src={bgImages[1]} className="d-block c-img w-100" alt="..."/>
                </div>
                <div className="carousel-item c-item">
                    <img src={bgImages[2]} className="d-block c-img w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev w-auto h-auto" type="button" data-bs-target="#carouselExample"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">{"<"}</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon btn btn-success rounded-circle p-4" aria-hidden="true"></span>
                <span className="visually-hidden">{">"}</span>
            </button>
        </div>
    )
}

export default Slider;