import {Link} from "react-router-dom";
import 'bootstrap/js/src/dropdown.js';
import 'bootstrap/js/src/collapse.js';

const Header = () => {
    return (
        <div className="container-fluid bg-white sticky-top shadow-sm">
            <div className="container-md px-0">
                <nav className="navbar navbar-expand-lg bg-white  lead text-uppercase">
                    <div className="container-fluid">
                        <Link to="/przychodnia">
                            <img src="https://placehold.co/80x80" className="img-fluid" alt="logo"/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button"
                                       data-bs-toggle="dropdown"
                                       aria-expanded="false">
                                        Usługi
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">E-Rejestracja</a></li>
                                        <li><a className="dropdown-item" href="#">Poradnie specjalistyczne</a></li>
                                        <li><a className="dropdown-item" href="#">Nasze oddziały</a></li>
                                        <li><a className="dropdown-item" href="#">Stomatologia</a></li>
                                        <li><a className="dropdown-item" href="#">Rehabilitacja</a></li>
                                        <li><a className="dropdown-item" href="#">Badania diagnostyczne</a></li>
                                        <li><a className="dropdown-item" href="#">Badania kliniczne</a></li>
                                        <li><a className="dropdown-item" href="#">E-Wyniki</a></li>
                                    </ul>

                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/aktualnosci">Aktualności</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/przychodnia/o-nas">O nas</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/przychodnia/kontakt">Kontakt</Link>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Szukaj"
                                       aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Szukaj</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header