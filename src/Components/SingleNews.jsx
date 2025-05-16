import { Link } from "react-router-dom";
import './Styles/SingleNews.css';

const SingleNews = ({ item }) => {
    return (
        <div className="news-card">
            <div className="news-card-inner">
                <img src={item.image} className="news-image" alt="Zdjęcie" />

                <div className="news-date">{item.dateOfCreate}</div>

                <div className="news-body">
                    <h5 className="news-title">{item.title}</h5>
                </div>

                <div className="news-footer">
                    <Link to={item.link} className="news-link">Czytaj więcej</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleNews;
