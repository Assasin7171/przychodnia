import SingleNews from "../Components/SingleNews.jsx";
import {Link} from "react-router-dom";

import '../Styles/News.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
// import required modules
import {Pagination, Navigation} from 'swiper/modules';

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
    const news = data.map(item => (
        <SwiperSlide key={item.id}>
            <SingleNews item={item}/>
        </SwiperSlide>
    ));

    return (
        <section className="container-md">
            <div className="row">
                <h2 className="text-center text-secondary rounded-2 bg-white shadow-sm my-5 slider-container p-3">
                    Aktualności
                </h2>
            </div>

            <div className="row">
                <Swiper spaceBetween={20}
                        grabCursor={true}
                        loop={true}
                        breakpoints={{
                            320: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}
                        // pagination={{
                        //     clickable: true,
                        //     dynamicBullets: true,
                        // }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper">
                    {news}
                </Swiper>
            </div>

            <div className="row mt-4">
                <div className="col-md text-center">
                    <Link className="btn btn-link text-uppercase text-decoration-none" to={"/"}>
                        wszystkie aktualnosci
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default News