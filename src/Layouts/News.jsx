import "../Styles/News.css";
import SingleNews from "../Components/SingleNews.jsx";


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
    let newsList = data.slice(0, 4).map(item => (
        <SingleNews key={item.id} item={item}/>))

    const visableNews = 4;

    const changeNews = (type) => {
        if (type === "back") {
            newsList = data.slice(visableNews, (visableNews - visableNews)).map(item => (
                <SingleNews key={item.id} item={item}/>));
        } else if (type === "next") {
            newsList = data.slice(visableNews, (visableNews + visableNews)).map(item => (
                <SingleNews key={item.id} item={item}/>));
        }
    };

    return (
        <section className="section-news-container">
            <div className="section-news">
                <span className="secondary-color upperCaseText font-heavy section-news-title">Aktualności</span>
                <div className="container">
                    <button onClick={() => changeNews("back")} className="btn-slider-news">{"<"}</button>
                    {newsList}
                    <button onClick={() => changeNews("next")} className="btn-slider-news">{">"}</button>
                </div>
            </div>
        </section>
    )
}

export default News