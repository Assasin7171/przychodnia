import "bootstrap/js/src/carousel.js";

const Slider = ({bgImages}) => {
    return (<div id="carouselExample" className="carousel slide">
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
            <div className="carousel-item c-item">
                <img src={bgImages[3]} className="d-block c-img w-100" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon rounded-circle" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>)
}

export default Slider;