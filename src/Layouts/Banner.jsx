import img1 from "../Assets/1.jpg"
import img2 from "../Assets/2.jpg"
import img3 from "../Assets/3.jpg"
import img4 from "../Assets/4.jpg"
import lekarz from "../Assets/lekarz.jpg"
import lekarz2 from "../Assets/lekarz2.jpg"

import "../Styles/Banner.css"
import {Component} from "react";
import Slider from "../Components/Slider.jsx";
import AboutUs from "../Components/AboutUs.jsx";
import AboutUsTile from "../Components/AboutUsTile.jsx";
import OpeningTimes from "../Components/OpeningTimes.jsx";
import {Link} from "react-router-dom";

class Banner extends Component {

    render() {
        return (
            <Slider bgImage={img1}>
                <div className="row h-100">
                    <div className="col-md-2 d-flex justify-content-start align-items-center">
                        <button className="mx-3">Previous</button>
                    </div>
                    <div className="col-md-8 d-flex justify-content-start align-items-end">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <img src="https://placehold.co/80x80" className="img-fluid rounded-circle" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-end align-items-center">
                        <button className="mx-3">Next</button>
                    </div>
                </div>
            </Slider>
        )
    }

}

export default Banner