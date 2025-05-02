import img1 from "../Assets/1.jpg"
import img2 from "../Assets/2.jpg"
import img3 from "../Assets/3.jpg"
import img4 from "../Assets/4.jpg"
// import lekarz from "../Assets/lekarz.jpg"
// import lekarz2 from "../Assets/lekarz2.jpg"

import "../Styles/Banner.css"
import {Component} from "react";
import Slider from "../Components/Slider.jsx";
import AboutUs from "../Components/AboutUs.jsx";

class Banner extends Component {
    images = [img1, img2, img3, img4]

    render() {
        return (
            <div className="container-fluid px-0 slider-container">
                <Slider bgImages={this.images}/>
                <AboutUs/>
            </div>

        )
    }

}

export default Banner