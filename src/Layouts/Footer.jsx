import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="container-md mt-5">
            <footer className="row border-top pt-4">
                <div className="col-md-3 custom-border p-3 border-top-0 border-2">
                    <p className="h5 text-uppercase mb-4">Jak nas znaleźć?</p>
                    <div className="tresc">
                        <p>Przychodnia Rawka</p>
                        <p>Stanisława Domarasiewicza 3/5, 96-100</p>
                        <p>Skierniewice</p>
                    </div>

                    <div className="telefony">
                        <p><a href="tel:(46) 111 11 11" className="link-info nav-link text-primary">tel: (46) 111 11
                            11</a></p>
                    </div>
                    <div className="emaile">
                        <p><a href="mailto:rejestracja@test1.pl"
                              className="link-info nav-link text-primary">rejestracja@test1.pl</a></p>
                        <p><a href="mailto:rejestracja@test2.pl"
                              className="link-info nav-link text-primary">rejestracja@test2.pl</a></p>
                        <br/>
                        <p>
                            <a href="https://pacjent.gov.pl/internetowe-konto-pacjenta" target="_blank" rel="noopener"
                               title="IKP - Internetowe Konto Pacjenta">
                                <img loading="lazy" decoding="async"
                                     className="img-fluid"
                                     src="https://centrumogrodowa.pl/wp-content/uploads/2023/05/IKP.svg"
                                     alt="IKP - Internetowe Konto Pacjenta"
                                     width="300" height="300"/>
                            </a>
                        </p>
                    </div>

                </div>
                <div className="col-md-3 custom-border p-3 border-2">
                    <span className="h5 text-uppercase">Nasze placówki</span>
                    <div className="d-flex flex-column mt-4 gap-1">
                        <Link className="link-info nav-link text-primary" to="">Lorem ipsum</Link>
                        <Link className="link-info nav-link text-primary" to="">Lorem ipsum</Link>
                        <Link className="link-info nav-link text-primary" to="">Lorem ipsum</Link>
                        <Link className="link-info nav-link text-primary" to="">Lorem ipsum</Link>
                        <Link className="link-info nav-link text-primary" to="">Lorem ipsum</Link>
                        <Link className="link-info nav-link text-primary" to="">Lorem ipsum</Link>
                        <Link className="link-info nav-link text-primary" to="">Lorem ipsum</Link>
                        <Link className="link-info nav-link text-primary" to="">Lorem ipsum</Link>
                    </div>
                </div>
                <div className="col-md-3 custom-border p-3 border-2">
                    <span className="h5 text-uppercase">Menu</span>
                    <div className="footer-menu mt-4 gap-1 d-flex flex-column">
                        <Link className="link-info nav-link text-primary text-uppercase" to="">umów wizyte</Link>
                        <Link className="link-info nav-link text-primary text-uppercase" to="">umów wizyte</Link>
                        <Link className="link-info nav-link text-primary text-uppercase" to="">umów wizyte</Link>
                        <Link className="link-info nav-link text-primary text-uppercase" to="">umów wizyte</Link>
                        <Link className="link-info nav-link text-primary text-uppercase" to="">umów wizyte</Link>
                        <Link className="link-info nav-link text-primary text-uppercase" to="">umów wizyte</Link>
                    </div>
                </div>
                <div className="col-md-3 custom-border p-3 border-end-0 border-2">
                    <span className="h5 text-uppercase">Menu</span>
                    <div className="footer-menu mt-4 gap-1 d-flex flex-column">
                        <Link className="link-info nav-link text-primary text-uppercase" to="">umów wizyte</Link>
                        <Link className="link-info nav-link text-primary text-uppercase" to="">umów wizyte</Link>
                        <Link className="link-info nav-link text-primary text-uppercase" to="">umów wizyte</Link>
                        <Link className="link-info nav-link text-primary text-uppercase" to="">umów wizyte</Link>
                        <Link className="link-info nav-link text-primary text-uppercase" to="">umów wizyte</Link>
                        <Link className="link-info nav-link text-primary text-uppercase" to="">umów wizyte</Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer