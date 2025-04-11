import {Link} from "react-router-dom";
import "../Styles/Header.css";
import {useState} from "react";

const Header = () => {
    const [showDropdownMenu, setShowDropdownMenu] = useState({
        "display": "none",
    });

    const [showDropdownMenuMobile, setShowDropdownMenuMobile] = useState({
        "display": "none",
    });

    const [showBackMenuButton, setShowBackMenuButton] = useState(false);
    const handleShowDropdownMenu = (type) => {
        if (type === "desktop") {
            setShowDropdownMenu({"display": "flex"});
        }
    };


    const handleHideDropdownMenu = (type) => {
        if (type === "desktop") {
            setShowDropdownMenu({"display": "none"});
        }
    };


    const handleShowDropdownMenuMobile = () => {
        if(!showBackMenuButton){
            setShowDropdownMenuMobile({"display": "flex"});
            setShowBackMenuButton(true);
        } else {
            setShowBackMenuButton(false);
            setShowDropdownMenuMobile({"display": "none"});
        }

    };


    return (
        <header className="header"
                onMouseLeave={handleHideDropdownMenu}>
            <div className="header-details">
                <div className="header-mobile-menu"
                     onClick={() => handleShowDropdownMenuMobile()}>
                    {showBackMenuButton ?
                        <i className="fa fa-arrow-alt-circle-left"></i> :
                        <i className="fa fa-bars"></i>}
                </div>
                <div className="logo">
                    tu będzie logo
                </div>
                <div className="nav-links">
                    <div className="links">
                        <button onMouseOver={() => handleShowDropdownMenu("desktop")}>
                            usługi
                        </button>
                        <Link onMouseOver={handleHideDropdownMenu} to={"/news"}>aktualności</Link>
                        <Link onMouseOver={handleHideDropdownMenu} to={"/about-us"}>o nas</Link>
                        <Link onMouseOver={handleHideDropdownMenu} to={"/contact"}>kontakt</Link>
                    </div>
                </div>

                <div className="nav-links-dropdown-menu"
                     onMouseOver={() => handleShowDropdownMenu("desktop")}
                     onMouseLeave={() => handleHideDropdownMenu("desktop")}
                     style={showDropdownMenu}>
                    <Link to={"/"}>e - rejestracja</Link>
                    <Link to={"/"}>poradnie specjalistyczne</Link>
                    <Link to={"/"}>nasze oddziały</Link>
                    <Link to={"/"}>rehabilitacja</Link>
                    <Link to={"/"}>badania diagnostyczne</Link>
                    <Link to={"/"}>badania klicznie</Link>
                    <Link to={"/"}>e-wyniki</Link>
                </div>

                <div className="right-menu">
                    <div>
                        <i className="fa fa-search"/>
                    </div>
                    <div>
                        <i className="fa fa-users"/>
                    </div>
                </div>
            </div>

            <div className="nav-links-dropdown-menu-mobile"
                 onMouseOver={() => handleShowDropdownMenu("mobile")}
                 onMouseLeave={() => handleHideDropdownMenu("mobile")}
                 style={showDropdownMenuMobile}>
                <p>Usługi</p>
                <div className="dropdown-menu-mobile-container">
                    <Link to={"/"}>e - rejestracja</Link>
                    <Link to={"/"}>poradnie specjalistyczne</Link>
                    <Link to={"/"}>nasze oddziały</Link>
                    <Link to={"/"}>rehabilitacja</Link>
                    <Link to={"/"}>badania diagnostyczne</Link>
                    <Link to={"/"}>badania klicznie</Link>
                    <Link to={"/"}>e-wyniki</Link>
                </div>
                <div className="main-links">
                    <Link className="border-bottom-links" to={"/"}>aktualności</Link>
                    <Link className="border-bottom-links" to={"/"}>o nas</Link>
                    <Link to={"/"}>kontakt</Link>
                </div>
            </div>
        </header>

    )
}

export default Header