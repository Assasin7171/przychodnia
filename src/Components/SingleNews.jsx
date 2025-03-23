import {Link} from "react-router-dom";
import "./Styles/SingleNews.css";

const SingleNews = (props) => {
    return (
        <div className="news">
            <img src={props.item.image} alt=""/>
            <span className="dateOfCreate">{props.item.dateOfCreate}</span>
            <span className="title-news font-heavy">{props.item.title}</span>
            <Link className="secondary-color" to={props.item.link}>Czytaj więcej</Link>
        </div>
    )
}

export default SingleNews;