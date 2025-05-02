import {Link} from "react-router-dom";

const Tile = (props) => {
    return (
        // <Link to="/rejestracja" className="link-tile">
        //     <div className="tile">
        //         <span className="tile-header"></span>
        //         <span className="tile-body">{props.body}</span>
        //     </div>
        // </Link>

    <div class="card border-primary mb-3 col-6 col-sm-3 col-lg-auto flex-grow-1">
        <div class="card-body text-primary">
            <h5 class="card-title">{props.header}</h5>
            <p class="card-text">{props.body}</p>
        </div>
    </div>
    )
}

export default Tile