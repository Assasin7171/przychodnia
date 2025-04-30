import {Link} from "react-router-dom";
import "../Styles/Categories.css";
import Tile from "../Components/Tile.jsx";

const tiles = [
    {
        id: 0,
        header: "E - Rejestracja",
        body: "Umów się na wizyte"
    }, {
        id: 1,
        header: "E - Rejestracja",
        body: "Umów się na wizyte"
    }, {
        id: 3,
        header: "E - Rejestracja",
        body: "Umów się na wizyte"
    }, {
        id: 4,
        header: "E - Rejestracja",
        body: "Umów się na wizyte"
    }, {
        id: 5,
        header: "E - Rejestracja",
        body: "Umów się na wizyte"
    }, {
        id: 6,
        header: "E - Rejestracja",
        body: "Umów się na wizyte"
    }
]
const Categories = () => {
    return (
        <section className="links-container">
            <nav className="link-categories">
                {tiles.map((tile) => (<Tile key={tile.id} header={tile.header} body={tile.body}/>))}
            </nav>
        </section>

    )
}

export default Categories