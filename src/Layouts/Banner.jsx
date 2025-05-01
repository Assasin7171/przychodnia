import img1 from "../Assets/1.jpg"
import img2 from "../Assets/2.jpg"
import img3 from "../Assets/3.jpg"
import img4 from "../Assets/4.jpg"
import lekarz from "../Assets/lekarz.jpg"
import lekarz2 from "../Assets/lekarz2.jpg"

import "../Styles/Banner.css"
import {Component} from "react";
import "bootstrap/js/dist/carousel.js"
import Slider from "../Components/Slider.jsx";
import AboutUs from "../Components/AboutUs.jsx";
import AboutUsTile from "../Components/AboutUsTile.jsx";
import OpeningTimes from "../Components/OpeningTimes.jsx";
import {Link} from "react-router-dom";

class Banner extends Component {

    render() {
        return (
            <div className="container-fluid mx-0 px-0">
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active c-item">
                            <img src={img1} className="d-block c-img w-100" alt="..."/>
                            <div className="carousel-indicators mb-0">
                                <div className="row bg-white rounded-top p-5">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <img src={lekarz2} className="img-fluid rounded-circle" alt=""/>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <img src={lekarz} className="img-fluid rounded-circle" alt=""/>
                                                    </div>
                                                </div>


                                            </div>
                                            <div className="col-sm-8">
                                                <h2>Kim jesteśmy?</h2>
                                                <p>Świadczymy szeroką gamę usług medycznych z zakresu Podstawowej Opieki Zdrowotnej. Ambulatoryjnej Opieki Specjalistycznej, Stomatologii, Diagnostyki laboratoryjnej i obrazowej.</p>
                                                <Link className="link-success text-decoration-none " to="/o-nas">Dowiedz się więcej</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item c-item">
                            <img src={img2} className="d-block c-img w-100" alt="..."/>
                        </div>
                        <div className="carousel-item c-item">
                            <img src={img3} className="d-block c-img w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        )
    }

}

export default Banner