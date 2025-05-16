import "../Styles/ErrorPage.css"
import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center px-3">
            <div className="p-4 shadow bg-white rounded">
                <h1 className="display-4 text-primary mb-3">🔧 Strona w budowie</h1>
                <p className="lead mb-4">
                    Pracujemy nad tą stroną. Wkrótce będzie dostępna!
                </p>
                <Link to="/przychodnia" className="btn btn-primary">
                    Wróć na stronę główną
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage