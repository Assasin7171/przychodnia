import "bootstrap/js/src/carousel.js";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";

const Slider = ({bgImages}) => {
    const slides = bgImages.map((image) => (
        <SwiperSlide key={image} className="c-item">
            <img src={image.toString()} className="c-img img-fluid" alt="zdjęcie"/>
        </SwiperSlide>
    ))
    return (
        <div className="container-fluid mt-2">
            <Swiper spaceBetween={30}
                    autoplay={true}
                    grabCursor={true}
                    loop={true}
                    watchSlidesProgress={true}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 2 },
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper">
                {slides}
            </Swiper>
        </div>

    )
}

export default Slider;