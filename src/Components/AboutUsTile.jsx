import {Link} from "react-router-dom";

const AboutUsTile = (props) => {
    return (
        <div className="info-left">
            <div className="left">
                <img src={props.images[1]} style={{
                    marginRight: "-12px",
                    zIndex: 1
                }} alt="lekarz"/>
                <img src={props.images[0]} alt="lekarz"/>
            </div>
            <div className="right">
                <h2 className="primary-text">Kim jesteśmy?</h2>
                <span>Świadczymy szeroką gamę usług medycznych z zakresu Podstawowej Opieki Zdrowotnej. Ambulatoryjnej Opieki Spocjalistycznej, Stomatologii, Diagnostyki laboratoryjnej i obrazowej.</span>
                <Link to="/about-us" className="secondary-color font-heavy" style={{
                    textTransform: "uppercase",
                }}>Dowiedz się więcej</Link>
            </div>
        </div>
    )
}

export default AboutUsTile