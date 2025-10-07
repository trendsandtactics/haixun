"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="main-slider main-slider-one" aria-label="Moltech main hero slider">
      <Swiper
        className="swiper-container thm-swiper__slider"
        slidesPerView={1}
        loop
        effect="fade"
        pagination={{
          el: "#main-slider-pagination",
          type: "bullets",
          clickable: true,
        }}
        navigation={{
          nextEl: "#main-slider__swiper-button-next",
          prevEl: "#main-slider__swiper-button-prev",
        }}
        autoplay={{ delay: 7000 }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
      >
        <div className="swiper-wrapper">
          {/* Slide 01 — TRUST */}
          <SwiperSlide className="swiper-slide">
            <div
              className="image-layer"
              style={{
                // Replace with your preferred background if needed
                backgroundImage: "url(/img/slider/slider-v1-img1.jpg)",
              }}
              role="img"
              aria-label="Partners collaborating with confidence"
            />
            <div className="big-title">
              <h2>Trust</h2>
            </div>
            <div className="img-box">
              <img src="/img/slider/slider-v1-img4.png" alt="" />
            </div>
            <div className="icon-one">
              <img src="/img/icon/slider-v1-icon1.png" alt="" />
            </div>
            <div className="icon-two">
              <img src="/img/icon/slider-v1-icon2.png" alt="" />
            </div>
            <div className="container">
              <div className="main-slider-one__single padding">
                <div className="main-slider-one__content">
                  <h3>
                    <span>01.</span> Trust
                  </h3>
                  <h2>
                    We treat partners like <br />
                    a <span>team</span>
                  </h2>
                  <p>
                    Exchange of ideas, open communication, and full transparency — backed by strong work
                    ethics and strict quality control — make <strong>Moltech</strong> one of the most
                    trusted partners in trade.
                  </p>
                  <div className="btn-box">
                    <Link className="thm-btn" href="/about">
                      <span className="txt">Learn More</span>
                      <i className="icon-right-arrow" aria-hidden="true"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 02 — TRACKING */}
          <SwiperSlide className="swiper-slide">
            <div
              className="image-layer"
              style={{
                backgroundImage: "url(/img/slider/slider-v1-img2.jpg)",
              }}
              role="img"
              aria-label="Shipment tracking interface"
            />
            <div className="big-title">
              <h2>Tracking</h2>
            </div>
            <div className="img-box">
              <img src="/img/slider/slider-v1-img4.png" alt="" />
            </div>
            <div className="icon-one">
              <img src="/img/icon/slider-v1-icon1.png" alt="" />
            </div>
            <div className="icon-two">
              <img src="/img/icon/slider-v1-icon2.png" alt="" />
            </div>
            <div className="container">
              <div className="main-slider-one__single padding">
                <div className="main-slider-one__content">
                  <h3>
                    <span>02.</span> Tracking
                  </h3>
                  <h2>
                    Real-time <span>visibility</span> <br />
                    for every shipment
                  </h2>
                  <p>
                    Stay informed at every step with real-time status, proactive notifications, and clear
                    milestones — so your operations run on time, every time.
                  </p>
                  <div className="btn-box">
                    <Link className="thm-btn" href="/tracking">
                      <span className="txt">Track Shipment</span>
                      <i className="icon-right-arrow" aria-hidden="true"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* (Optional) Slide 03 — QUALITY (kept for symmetry; remove if not needed) */}
          <SwiperSlide className="swiper-slide">
            <div
              className="image-layer"
              style={{
                backgroundImage: "url(/img/slider/slider-v1-img3.jpg)",
              }}
              role="img"
              aria-label="Quality control and inspection"
            />
            <div className="big-title">
              <h2>Quality</h2>
            </div>
            <div className="img-box">
              <img src="/img/slider/slider-v1-img4.png" alt="" />
            </div>
            <div className="icon-one">
              <img src="/img/icon/slider-v1-icon1.png" alt="" />
            </div>
            <div className="icon-two">
              <img src="/img/icon/slider-v1-icon2.png" alt="" />
            </div>
            <div className="container">
              <div className="main-slider-one__single padding">
                <div className="main-slider-one__content">
                  <h3>
                    <span>03.</span> Quality
                  </h3>
                  <h2>
                    Strict <span>QC</span> and <br />
                    compliance standards
                  </h2>
                  <p>
                    From sourcing to delivery, Moltech enforces rigorous quality checks to ensure
                    consistency, safety, and confidence in every trade.
                  </p>
                  <div className="btn-box">
                    <Link className="thm-btn" href="/quality">
                      <span className="txt">Our Standards</span>
                      <i className="icon-right-arrow" aria-hidden="true"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>

        {/* Pagination & Nav */}
        <div className="swiper-pagination" id="main-slider-pagination" aria-label="Slide pagination"></div>
        <div className="main-slider__nav" aria-label="Slide navigation">
          <button
            className="swiper-button-prev"
            id="main-slider__swiper-button-prev"
            aria-label="Previous slide"
          >
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </button>
          <button
            className="swiper-button-next"
            id="main-slider__swiper-button-next"
            aria-label="Next slide"
          >
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </button>
        </div>
      </Swiper>
    </section>
  );
};

export default Hero;
