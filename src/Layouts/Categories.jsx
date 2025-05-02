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
        <section>
            <div className="container-md px-3">
                <div className="row gap-1">
                    {tiles.map((tile) => (<Tile key={tile.id} header={tile.header} body={tile.body}/>))}
                </div>
            </div>
        </section>


        // <nav className="link-categories">
        //     {tiles.map((tile) => (<Tile key={tile.id} header={tile.header} body={tile.body}/>))}
        // </nav>


    )
}

export default Categories