import {Link} from "react-router-dom";
import "./Styles/SingleNews.css";

const SingleNews = (props) => {
    return (
        // <div className="news">
        //     <img src={props.item.image} alt=""/>
        //     <span className="dateOfCreate">{props.item.dateOfCreate}</span>
        //     <span className="title-news font-heavy">{props.item.title}</span>
        //     <Link className="secondary-color" to={props.item.link}>Czytaj więcej</Link>
        // </div>
        <div className="col-md-3 p-0" style={{width: '18rem'} }>
            <div className="card h-100 p-2">
                <img src={props.item.image} className="card-img-top news-img" alt="..."/>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{props.item.dateOfCreate}</li>
                </ul>
                <div className="card-body">
                    <h5 className="card-title lead">{props.item.title}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <Link to={props.item.link} className="btn btn-link">Czytaj więcej</Link>
                </ul>
            </div>
        </div>


    )
}

export default SingleNews;