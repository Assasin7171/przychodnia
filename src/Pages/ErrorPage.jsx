import "../Styles/ErrorPage.css"
import {Link} from "react-router-dom";


const ErrorPage = () => {
    return (
        <div
            className="vh-100 d-flex align-items-center bg-secondary justify-content-center text-white"
            style={{
                padding: "1rem",
            }}
        >
            <style>{`
        .construction-box {
          background-color: rgba(0, 0, 0, 0.75);
          padding: 3rem;
          border-radius: 1rem;
          box-shadow: 0 0 20px rgba(0,0,0,0.3);
          text-align: center;
        }

        .wrench-emoji {
          display: inline-block;
          font-size: 3rem;
          animation: shake 1s infinite;
        }

        @keyframes shake {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(-20deg); }
          50% { transform: rotate(0deg); }
          75% { transform: rotate(20deg); }
          100% { transform: rotate(0deg); }
        }

        .btn-custom {
          border: 2px solid #fff;
          color: #fff;
          padding: 0.75rem 1.5rem;
          font-size: 1.1rem;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          margin-top: 1.5rem;
        }

        .btn-custom:hover {
          background-color: #fff;
          color: #0d6efd;
        }
      `}</style>

            <div className="construction-box">
                <div className="wrench-emoji">🔧</div>
                <h1 className="mt-3 mb-3 fw-bold">Strona w budowie</h1>
                <p className="lead">
                    Pracuje nad tą sekcją. Wróć do nas wkrótce! 🛠️
                </p>
                <Link to="/" className="btn-custom">
                    Wróć na stronę główną
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage