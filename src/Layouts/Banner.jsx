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

class Banner extends Component {
    state = {
        image: img1,
    }

    images = [img1, img2, img3, img4];
    index = 0;
    intervalIndex;

    componentDidMount() {
        this.intervalIndex = setInterval(() => {
            this.index = this.getImageIndex();
            let image = this.images[this.index];

            this.setState({image});

        }, 10000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalIndex);
    }

    aboutUsComponentDesktop = window.innerWidth > 1023 ?
        <AboutUs>
            <AboutUsTile images={[lekarz, lekarz2]}/>

            <div className="middle-hr-container">
                <div></div>
            </div>

            <OpeningTimes/>
        </AboutUs> : null;

    aboutUsComponentMobile = window.innerWidth < 1023 ?
        <AboutUs>
            <AboutUsTile images={[lekarz, lekarz2]}/>

            <div className="middle-hr-container">
                <div></div>
            </div>

            <OpeningTimes/>
        </AboutUs> : null;

    render() {
        return (
            <>
                <Slider bgImage={this.state.image}>
                    {/*<button onClick={this.handleGoBack} className={"btn-slider-nav"}>{"<"}</button>*/}
                    {/*<button onClick={this.handleGoUp} className={"btn-slider-nav"}>{">"}</button>*/}
                    {this.aboutUsComponentDesktop}
                </Slider>
                {this.aboutUsComponentMobile}
            </>
        )
    }

    getImageIndex = () => {
        return Math.floor(Math.random() * this.images.length);
    }

    handleGoBack = () => {
        this.setState({image: img1});
    }
    handleGoUp = () => {

    }
}

export default Banner