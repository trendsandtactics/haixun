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
            />
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
                    We reduce greenhouse gas emissions through products that build a balanced ecosystem.
                    Full traceability is enabled with technology in line with EU sustainability directives.
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
                      <i className="icon-right-arrow" />
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
            />
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
                    We originate sustainable feedstocks using technology, skilled manpower, and a global
                    logistics platform. Collected used cooking oil is processed and routed to bio-refineries
                    to become clean biofuel.
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
                      <i className="icon-right-arrow" />
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
            />
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
                    We treat trading partners as a team—open communication, transparency, strong work
                    ethics, and strict quality control—making Moltech a trusted partner worldwide.
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
                      <i className="icon-right-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>

        {/* Pagination & Nav (no TS cast here) */}
        <div
          className="swiper-pagination"
          id="main-slider-pagination"
          style={{
            ["--swiper-pagination-color"]: COLORS.teal,
            ["--swiper-pagination-bullet-inactive-color"]: "#ccc",
          }}
        />
        <div className="main-slider__nav">
          <div
            className="swiper-button-prev"
            id="main-slider__swiper-button-prev"
            style={{ color: COLORS.teal }}
          >
            <i className="fa fa-angle-left" aria-hidden="true" />
          </div>
          <div
            className="swiper-button-next"
            id="main-slider__swiper-button-next"
            style={{ color: COLORS.teal }}
          >
            <i className="fa fa-angle-right" aria-hidden="true" />
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default Hero;
