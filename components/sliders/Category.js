import Link from "next/link";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation]);

const data = [
    {
        img: "img-big1.png",
        title: "MasterClasses",
        count: 3
    },
    {
        img: "img-big2.png",
        title: "WorkShops",
        count: 35
    },
    {
        img: "img-big3.png",
        title: "Courses",
        count: 20
    },
    {
        img: "img-big1.png",
        title: "Hackathon",
        count: 15
    },
    {
        img: "img-big2.png",
        title: "Fellowships",
        count: 10
    }
];

const CategorySlider4 = () => {
    return (
        <>
            <div className="swiper-container swiper-group-3-explore mh-none swiper">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next"
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 30
                        },
                        575: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        767: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        991: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        1199: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }
                    }}
                    className="swiper-wrapper pb-70 pt-5"
                >
                    {data.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="swiper-slide hover-up">
                                <div className="card-grid-5 card-category hover-up" style={{ backgroundImage: `url(assets/imgs/page/homepage2/${item.img})` }}>
                                    <Link legacyBehavior href="/learn">
                                        <a>
                                            <div className="box-cover-img">
                                                <div className="content-bottom">
                                                    <h6 className="color-white mb-5">{item.title}</h6>
                                                    <p className="color-white font-xs">
                                                        <span>{item.count}</span>
                                                        <span> Available</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
        </>
    );
};

export default CategorySlider4;
