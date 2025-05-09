import SingleNews from "../Components/SingleNews.jsx";
import {Link} from "react-router-dom";
import '../Styles/News.css';
import {useEffect, useState} from "react";

const data = [
    {
        id: 0,
        dateOfCreate: "2024-03-01",
        title: "Poszukujemy lekarzy",
        link: "/test",
        image: "https://picsum.photos/150/150"
    },
    {
        id: 1,
        dateOfCreate: "2024-03-05",
        title: "Nowa oferta pracy dla pielęgniarek",
        link: "/",
        image: "https://picsum.photos/150/150"
    },
    {
        id: 2,
        dateOfCreate: "2024-03-10",
        title: "Zmiana godzin otwarcia przychodni",
        link: "/",
        image: "https://picsum.photos/150/150"
    },
    {
        id: 3,
        dateOfCreate: "2024-03-15",
        title: "Bezpłatne badania profilaktyczne",
        link: "/",
        image: "https://picsum.photos/150/150"
    },
    {
        id: 4,
        dateOfCreate: "2024-03-20",
        title: "Rekrutacja na stanowisko recepcjonisty",
        link: "/",
        image: "https://picsum.photos/150/150"
    },
    {
        id: 5,
        dateOfCreate: "2024-03-25",
        title: "Nowy oddział kardiologii otwarty",
        link: "/",
        image: "https://picsum.photos/150/150"
    },
    {
        id: 6,
        dateOfCreate: "2024-03-30",
        title: "Zapraszamy na dni otwarte szpitala",
        link: "/",
        image: "https://picsum.photos/150/150"
    },
    {
        id: 7,
        dateOfCreate: "2024-04-01",
        title: "Szczepienia przeciwko grypie - terminy",
        link: "/",
        image: "https://picsum.photos/150/150"
    },
    {
        id: 8,
        dateOfCreate: "2024-04-05",
        title: "Nowoczesne metody leczenia w naszej placówce",
        link: "/",
        image: "https://picsum.photos/150/150"
    },
    {
        id: 9,
        dateOfCreate: "2024-04-10",
        title: "Bezpłatne konsultacje dietetyczne",
        link: "/",
        image: "https://picsum.photos/150/150"
    }
];

const News = () => {
    const itemsPerPage = 4
    const [newsToDisplay, setNewsToDisplay] = useState([])

    useEffect(() => {
        changeNews("next");
    }, []);

    const changeNews = (direction) => {
        const dataLenght = data.length;
        let tempData = [];

        if (direction === "next") {
            for (let i = 0; i < 4; i++) {
                tempData.push(data[i])
            }

            setNewsToDisplay(tempData);
        }
    }

    // wyświetlamy aktualne 4 elementy
    const newsList = newsToDisplay.map(item => <SingleNews key={item.id} item={item}/>)

    return (
        <section className="container-md position-relative">
            <div className="row">
                <h2 className="text-center text-secondary rounded-2 bg-white shadow-sm my-5 slider-container p-3">Aktualności</h2>
            </div>

            <div className="row">
                <div className="col gap-2 d-flex justify-content-center overflow-hidden">
                    {newsList}
                </div>
            </div>

            <div className="row news-btn" id="news-btns">
                <div className="col d-flex justify-content-between">
                    <button className="btn btn-primary rounded-circle news-btn" onClick={() => changeNews("prev")}>
                        <i className="bi bi-arrow-left-circle text-res"></i>
                    </button>
                    <button className="btn btn-primary rounded-circle news-btn" onClick={() => changeNews("next")}>
                        <i className="bi bi-arrow-right-circle text-res"></i>
                    </button>
                </div>
            </div>

            <div className="row">
                <div className="col-md text-center">
                    <Link className="btn btn-link text-uppercase text-decoration-none" to={"/"}>wszystkie
                        aktualnosci</Link>
                </div>
            </div>

        </section>
    )
}

export default News