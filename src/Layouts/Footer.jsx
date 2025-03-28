import "../Styles/Footer.css";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-container-content">
                    <div className="col1">
                        <span className="upperCaseText small-text">jak nas znależć?</span>
                        <span>Przychodnia Rawka</span>
                        <span>ul. Stanisława Domarasiewicza 3/5, 96-100 Skierniewice</span>
                        <span>tel: (46) 555 55 55</span>
                        <span>rejestracja@mail.pl</span>
                        <span>biuro@mail.pl</span>
                    </div>
                    <div className="col2">
                        <span className="upperCaseText small-text">nasze placówki</span>
                    </div>
                    <div className="col3">
                        <span className="upperCaseText small-text">menu</span>
                        <Link className={"secondary-color upperCaseText small-text"}
                              to={"/"}>umów wizyte</Link>
                        <Link className={"secondary-color upperCaseText small-text"}
                              to={"/"}>wynik online</Link>
                        <Link className={"secondary-color upperCaseText small-text"}
                              to={"/"}>specjalistyki</Link>
                        <Link className={"secondary-color upperCaseText small-text"}
                              to={"/"}>aktualności</Link>
                        <Link className={"secondary-color upperCaseText small-text"}
                              to={"/"}>kontakt</Link>
                        <Link className={"secondary-color upperCaseText small-text"}
                              to={"/"}>o nas</Link>
                    </div>
                    <div className="col4">
                        <span>nazwa</span>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <div className="copyright-content">
                    <h5>Copyright @ 2025</h5>

                    <div className="socials">socjale</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer