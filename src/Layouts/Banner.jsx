import img1 from "../Assets/1.jpg"
import img2 from "../Assets/2.jpg"
import img3 from "../Assets/3.jpg"
import img4 from "../Assets/4.jpg"
import lekarz from "../Assets/lekarz.jpg"
import lekarz2 from "../Assets/lekarz2.jpg"

import "../Styles/Banner.css"
import {Component} from "react";
import {Link} from "react-router-dom";

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

    render() {
        return (
            <div className={"slider"} style={{
                backgroundImage: `url(${this.state.image})`,
            }}>
                {/*<button onClick={this.handleGoBack} className={"btn-slider-nav"}>{"<"}</button>*/}
                {/*<button onClick={this.handleGoUp} className={"btn-slider-nav"}>{">"}</button>*/}
                <div className="more-info-about-us">
                    <div className="info-left">
                        <div className="left">
                            <img src={lekarz2} style={{
                                marginRight: "-12px",
                                zIndex: 1
                            }} alt="lekarz"/>
                            <img src={lekarz} alt="lekarz"/>
                        </div>
                        <div className="right">
                            <h2 className="primary-text">Kim jesteśmy?</h2>
                            <span>Świadczymy szeroką gamę usług medycznych z zakresu Podstawowej Opieki Zdrowotnej. Ambulatoryjnej Opieki Spocjalistycznej, Stomatologii, Diagnostyki laboratoryjnej i obrazowej.</span>
                            <Link to="/about-us" className="secondary-color font-heavy" style={{
                                textTransform: "uppercase",
                            }}>Dowiedz się więcej</Link>
                        </div>
                    </div>
                    <div className="middle-hr-container">
                        <div></div>
                    </div>
                    <div className="info-right">
                        <table>
                            <tbody>
                            <tr>
                                <td className="bigText work-hours font-heavy">
                                    <i className="fa fa-calendar"></i>
                                    PN - PT
                                </td>
                                <td className="font-heavy">7:30 - 20:00</td>
                            </tr>
                            <tr style={{
                                height: "8px"
                            }}>

                            </tr>
                            <tr>
                                <td className="font-heavy">
                                    <i className="fa fa-phone"></i>
                                    REJESTRACJA
                                </td>
                                <td className="secondary-color font-heavy">46 222 44 44</td>
                            </tr>
                            <tr>
                                <td>Centrala telefoniczna</td>
                            </tr>
                            <tr>
                                <td>Stomatologia</td>
                                <td className="secondary-color font-heavy">222-222-222</td>
                            </tr>
                            <tr>
                                <td>Ginekologia</td>
                                <td className="secondary-color font-heavy">222-222-222</td>
                            </tr>
                            <tr>
                                <td>Rehabilitacja</td>
                                <td className="secondary-color font-heavy">222-222-222</td>
                            </tr>
                            <tr style={{
                                height: "8px"
                            }}>

                            </tr>
                            <tr>
                                <td className="secondary-color">
                                    <i className="fa fa-mailchimp"
                                    style={{width: "20px", fontSize: "20px"}}></i>
                                    rejestracja@email.com
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }

    getImageIndex = () => {
        let index = Math.floor(Math.random() * this.images.length);

        return index
    }

    handleGoBack = () => {
        this.setState({image: img1});
    }
    handleGoUp = () => {

    }
}

export default Banner