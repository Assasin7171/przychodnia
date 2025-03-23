import {Link} from "react-router-dom";

const SingleNews = (props) => {
    return (
        <div className="news">
            <img src={props.item.image} alt=""/>
            <span className="dateOfCreate">{props.item.dateOfCreate}</span>
            <span className="title-news">{props.item.title}</span>
            <Link to={props.link}>Czytaj więcej</Link>
        </div>
    )
}

export default SingleNews;