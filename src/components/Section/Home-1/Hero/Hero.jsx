"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const COLORS = {
  teal: "#25B4E6",
  green: "#28C58C",
  violet: "#493FAD",
  white: "#FFFFFF",
};

const Hero = () => {
  return (
    <section className="main-slider main-slider-one">
      <Swiper
        className="swiper-container thm-swiper__slider"
        slidesPerView={1}
        loop
        effect="fade"
        pagination={{
          el: "#main-slider-pagination",
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
          {/* 01 — Driving Sustainability */}
          <SwiperSlide className="swiper-slide">
            <div
              className="image-layer"
              style={{ backgroundImage: "url(/img/slider/sustainability.jpg)" }}
            ></div>
            <div className="big-title">
              <h2 style={{ color: COLORS.violet }}>Driving Sustainability</h2>
            </div>
            <div className="container">
              <div className="main-slider-one__single padding">
                <div className="main-slider-one__content">
                  <h3 style={{ color: COLORS.teal }}>
                    <span>01.</span> Driving Sustainability
                  </h3>
                  <h2>
                    Reduce <span style={{ color: COLORS.teal }}>carbon footprint</span> <br />
                    with smart innovation
                  </h2>
                  <p>
                    We strive to reduce greenhouse gas emissions through products that build a balanced ecosystem.
                    Our advanced technology enables full traceability — fully compliant with EU sustainability directives.
                  </p>
                  <div className="btn-box">
                    <Link
                      className="thm-btn"
                      href="/tracking"
                      style={{
                        background: `linear-gradient(90deg, ${COLORS.teal}, ${COLORS.green})`,
                        color: COLORS.white,
                      }}
                    >
                      <span className="txt">Tracking</span>
                      <i className="icon-right-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* 02 — Biodiesel Feedstock */}
          <SwiperSlide className="swiper-slide">
            <div
              className="image-layer"
              style={{ backgroundImage: "url(/img/slider/feedstock.jpg)" }}
            ></div>
            <div className="big-title">
              <h2 style={{ color: COLORS.violet }}>Biodiesel Feedstock</h2>
            </div>
            <div className="container">
              <div className="main-slider-one__single padding">
                <div className="main-slider-one__content">
                  <h3 style={{ color: COLORS.teal }}>
                    <span>02.</span> Biodiesel Feedstock
                  </h3>
                  <h2>
                    Turning waste into <br />
                    <span style={{ color: COLORS.teal }}>renewable energy</span>
                  </h2>
                  <p>
                    We originate sustainable feedstocks using cutting-edge technology, skilled manpower,
                    and a global logistics platform. Collected used cooking oil is processed and refined into
                    high-quality biodiesel for greener energy solutions.
                  </p>
                  <div className="btn-box">
                    <Link
                      className="thm-btn"
                      href="/tracking"
                      style={{
                        background: `linear-gradient(90deg, ${COLORS.teal}, ${COLORS.green})`,
                        color: COLORS.white,
                      }}
                    >
                      <span className="txt">Tracking</span>
                      <i className="icon-right-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* 03 — Trust */}
          <SwiperSlide className="swiper-slide">
            <div
              className="image-layer"
              style={{ backgroundImage: "url(/img/slider/trust.jpg)" }}
            ></div>
            <div className="big-title">
              <h2 style={{ color: COLORS.violet }}>Trust</h2>
            </div>
            <div className="container">
              <div className="main-slider-one__single padding">
                <div className="main-slider-one__content">
                  <h3 style={{ color: COLORS.teal }}>
                    <span>03.</span> Trust
                  </h3>
                  <h2>
                    Built on <span style={{ color: COLORS.teal }}>integrity</span> <br />
                    and strong partnerships
                  </h2>
                  <p>
                    At Moltech, we treat our trading partners as a team — promoting collaboration,
                    transparency, and strict quality control. Our ethics and reliability make us a
                    globally trusted partner.
                  </p>
                  <div className="btn-box">
                    <Link
                      className="thm-btn"
                      href="/about"
                      style={{
                        background: `linear-gradient(90deg, ${COLORS.teal}, ${COLORS.green})`,
                        color: COLORS.white,
                      }}
                    >
                      <span className="txt">Learn More</span>
                      <i className="icon-right-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>

        {/* Pagination & Nav */}
        <div
          className="swiper-pagination"
          id="main-slider-pagination"
          style={{
            "--swiper-pagination-color": COLORS.teal,
            "--swiper-pagination-bullet-inactive-color": "#ccc",
          } as React.CSSProperties}
        ></div>
        <div className="main-slider__nav">
          <div
            className="swiper-button-prev"
            id="main-slider__swiper-button-prev"
            style={{ color: COLORS.teal }}
          >
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </div>
          <div
            className="swiper-button-next"
            id="main-slider__swiper-button-next"
            style={{ color: COLORS.teal }}
          >
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default Hero;
