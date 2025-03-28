﻿import {Link} from "react-router-dom";
import "../Styles/Header.css";
import {useState} from "react";

const Header = () => {
    const [showDropdownMenu, setShowDropdownMenu] = useState({
        "display": "none",
    });
    const handleShowDropdownMenu = () => {
        setShowDropdownMenu({"display": "flex"});
    };


    const handleHideDropdownMenu = () => {
        setShowDropdownMenu({"display": "none",})
    };
    return (
        <header className="header"
                onMouseLeave={handleHideDropdownMenu}>
            <div className="header-details">
                <div className="logo">
                    tu będzie logo
                </div>
                <div className="nav-links">
                    <div className="links">
                        <button onMouseOver={handleShowDropdownMenu}>
                            usługi
                        </button>
                        <Link onMouseOver={handleHideDropdownMenu} to={"/news"}>aktualności</Link>
                        <Link onMouseOver={handleHideDropdownMenu} to={"/about-us"}>o nas</Link>
                        <Link onMouseOver={handleHideDropdownMenu} to={"/contact"}>kontakt</Link>
                    </div>
                </div>

                <div className="nav-links-dropdown-menu"
                     onMouseOver={handleShowDropdownMenu}
                     onMouseLeave={handleHideDropdownMenu}
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
                        <svg focusable="false" aria-label="Search" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 24 24"
                             width="24px">
                            <path
                                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                        </svg>
                    </div>
                    <div>
                        <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"
                             width="24" height="24"
                             fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier"> <style type="text/css">  .st0fill:#000000;  </style>
                                <g> <path className="st0"
                                          d="M147.57,320.188c-0.078-0.797-0.328-1.531-0.328-2.328v-6.828c0-3.25,0.531-6.453,1.594-9.5 c0,0,17.016-22.781,25.063-49.547c-8.813-18.594-16.813-41.734-16.813-64.672c0-5.328,0.391-10.484,0.938-15.563 c-11.484-12.031-27-18.844-44.141-18.844c-35.391,0-64.109,28.875-64.109,73.75c0,35.906,29.219,74.875,29.219,74.875 c1.031,3.047,1.563,6.25,1.563,9.5v6.828c0,8.516-4.969,16.266-12.719,19.813l-46.391,18.953 C10.664,361.594,2.992,371.5,0.852,383.156l-0.797,10.203c-0.406,5.313,1.406,10.547,5.031,14.438 c3.609,3.922,8.688,6.125,14.016,6.125H94.93l3.109-39.953l0.203-1.078c3.797-20.953,17.641-38.766,36.984-47.672L147.57,320.188z"></path>
                                    <path className="st0"
                                          d="M511.148,383.156c-2.125-11.656-9.797-21.563-20.578-26.531l-46.422-18.953 c-7.75-3.547-12.688-11.297-12.688-19.813v-6.828c0-3.25,0.516-6.453,1.578-9.5c0,0,29.203-38.969,29.203-74.875 c0-44.875-28.703-73.75-64.156-73.75c-17.109,0-32.625,6.813-44.141,18.875c0.563,5.063,0.953,10.203,0.953,15.531 c0,22.922-7.984,46.063-16.781,64.656c8.031,26.766,25.078,49.563,25.078,49.563c1.031,3.047,1.578,6.25,1.578,9.5v6.828 c0,0.797-0.266,1.531-0.344,2.328l11.5,4.688c20.156,9.219,34,27.031,37.844,47.984l0.188,1.094l3.094,39.969h75.859 c5.328,0,10.406-2.203,14-6.125c3.625-3.891,5.438-9.125,5.031-14.438L511.148,383.156z"></path>
                                    <path className="st0"
                                          d="M367.867,344.609l-56.156-22.953c-9.375-4.313-15.359-13.688-15.359-23.969v-8.281 c0-3.906,0.625-7.797,1.922-11.5c0,0,35.313-47.125,35.313-90.594c0-54.313-34.734-89.234-77.594-89.234 c-42.844,0-77.594,34.922-77.594,89.234c0,43.469,35.344,90.594,35.344,90.594c1.266,3.703,1.922,7.594,1.922,11.5v8.281 c0,10.281-6.031,19.656-15.391,23.969l-56.156,22.953c-13.047,5.984-22.344,17.984-24.906,32.109l-2.891,37.203h139.672h139.672 l-2.859-37.203C390.211,362.594,380.914,350.594,367.867,344.609z"></path> </g> </g></svg>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header