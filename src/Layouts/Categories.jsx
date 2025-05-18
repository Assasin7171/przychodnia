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
        <section className="container-fluid px-0">
            <div className="container-md">
                <div className="row">
                    <h2 className="text-center text-secondary rounded-2 bg-white shadow-sm my-5 p-3">Szybki dostęp do usług</h2>
                </div>
                <div className="row gap-3">
                    {tiles.map((tile) => (<Tile key={tile.id} header={tile.header} body={tile.body}/>))}
                </div>
            </div>
        </section>
    )
}

export default Categories