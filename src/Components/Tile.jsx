import {Link} from "react-router-dom";

const Tile = (props) => {
    return (
        <Link to="/rejestracja" className="card col-sm-4 col-lg-3 link_card flex-grow-1 text-decoration-none">
            <div className="card-body d-flex flex-column justify-content-between link_card_body text-primary">
                <h5 className="card-title">{props.header}</h5>
                <p className="card-text text-uppercase">{props.body}</p>
            </div>
        </Link>
    )
}

export default Tile