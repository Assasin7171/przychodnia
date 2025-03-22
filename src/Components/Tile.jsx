import {Link} from "react-router-dom";

const Tile = (props) => {
    return (
        <Link to="/rejestracja" className="link-tile">
            <div className="tile">
                <span className="tile-header">{props.header}</span>
                <span className="tile-body">{props.body}</span>
            </div>
        </Link>
    )
}

export default Tile