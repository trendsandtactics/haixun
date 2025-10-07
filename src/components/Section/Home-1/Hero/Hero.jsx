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
  overlay: "rgba(10,12,30,0.45)",
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
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
      >
        <div className="swiper-wrapper">

          {/* Slide 01 — DRIVING SUSTAINABILITY */}
          <SwiperSlide className="swiper-slide">
            <div className="image-layer" style={{ backgroundImage: "url(/tank.jpg)" }} />
            <div className="scrim" />
            <div className="container">
              <div className="content">
                <p className="eyebrow" style={{ color: COLORS.teal }}>
                  <span>01.</span> Driving Sustainability
                </p>
                <h2 className="title">
                  Building a <span className="accent">balanced</span> eco system
                </h2>
                <p className="subtitle">
                  We reduce carbon footprint and greenhouse gas emissions with products that create a
                  balanced ecosystem. Full traceability powered by technology — aligned with EU sustainability
                  directives.
                </p>
                <div className="actions">
                  <Link className="btn btn-primary" href="/tracking">
                    Tracking
                    <i className="icon-right-arrow" />
                  </Link>
                  <Link className="btn btn-ghost" href="/about">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 02 — BIODIESEL FEEDSTOCK */}
          <SwiperSlide className="swiper-slide">
            <div className="image-layer" style={{ backgroundImage: "url(/)" }} />
            <div className="scrim" />
            <div className="container">
              <div className="content">
                <p className="eyebrow" style={{ color: COLORS.teal }}>
                  <span>02.</span> Biodiesel Feedstock
                </p>
                <h2 className="title">
                  Origination with <span className="accent">technology</span> & expertise
                </h2>
                <p className="subtitle">
                  Sustainable feedstock origination using advanced technology, skilled manpower, and our
                  in-house global logistics platform makes Moltech a preferred partner. Collected used
                  cooking oil is processed and delivered to bio-refineries for renewable biofuel.
                </p>
                <div className="actions">
                  <Link className="btn btn-primary" href="/tracking">
                    Tracking
                    <i className="icon-right-arrow" />
                  </Link>
                  <Link className="btn btn-ghost" href="/quality">
                    Our Standards
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 03 — TRUST */}
          <SwiperSlide className="swiper-slide">
            <div className="image-layer" style={{ backgroundImage: "url(/trust.jpg)" }} />
            <div className="scrim" />
            <div className="container">
              <div className="content">
                <p className="eyebrow" style={{ color: COLORS.teal }}>
                  <span>03.</span> Trust
                </p>
                <h2 className="title">
                  Strong <span className="accent">partnerships</span> built on integrity
                </h2>
                <p className="subtitle">
                  We treat trading partners as a team — open communication, transparency, strong work ethics,
                  and strict quality control. These principles make Moltech a trusted global partner.
                </p>
                <div className="actions">
                  <Link className="btn btn-primary" href="/contact">
                    Work With Us
                    <i className="icon-right-arrow" />
                  </Link>
                  <Link className="btn btn-ghost" href="/about">
                    About Moltech
                  </Link>
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
            ["--swiper-pagination-color"]: COLORS.teal,
            ["--swiper-pagination-bullet-inactive-color"]: "rgba(255,255,255,0.6)",
          }}
        />
        <div className="main-slider__nav">
          <button
            className="swiper-button-prev"
            id="main-slider__swiper-button-prev"
            aria-label="Previous slide"
          >
            <i className="fa fa-angle-left" aria-hidden="true" />
          </button>
          <button
            className="swiper-button-next"
            id="main-slider__swiper-button-next"
            aria-label="Next slide"
          >
            <i className="fa fa-angle-right" aria-hidden="true" />
          </button>
        </div>
      </Swiper>

      {/* Component-scoped styling */}
      <style jsx>{`
        .main-slider-one {
          position: relative;
          overflow: hidden;
        }
        .swiper-slide {
          position: relative;
          min-height: clamp(60vh, 70vh, 88vh);
        }
        .image-layer {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transform: scale(1.02);
          will-change: transform;
        }
        /* soft dark overlay for readability */
        .scrim {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(10,12,30,0.65) 0%, rgba(10,12,30,0.35) 45%, rgba(10,12,30,0.1) 100%),
            radial-gradient(80% 80% at 20% 50%, rgba(10,12,30,0.35), transparent 60%);
          pointer-events: none;
        }
        .container {
          position: relative;
          z-index: 2;
          height: 100%;
          display: grid;
          align-items: center;
          padding: clamp(16px, 4vw, 48px);
        }
        .content {
          max-width: 920px;
          margin-left: 0;
          color: ${COLORS.white};
          text-align: left;
          backdrop-filter: saturate(110%);
        }
        /* Mobile centers the text */
        @media (max-width: 768px) {
          .content {
            text-align: center;
            margin: 0 auto;
          }
        }
        .eyebrow {
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin: 0 0 0.5rem;
          font-size: clamp(0.8rem, 1.2vw, 1rem);
        }
        .eyebrow span { opacity: 0.9; margin-right: 0.35rem; }
        .title {
          font-weight: 800;
          line-height: 1.05;
          margin: 0 0 0.75rem;
          font-size: clamp(1.8rem, 4.2vw, 3.5rem);
          text-shadow: 0 10px 30px rgba(0,0,0,0.35);
        }
        .title .accent {
          color: ${COLORS.teal};
        }
        .subtitle {
          max-width: 60ch;
          margin: 0 0 1.25rem;
          font-size: clamp(0.95rem, 1.5vw, 1.1rem);
          line-height: 1.6;
          opacity: 0.95;
        }
        .actions {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          justify-content: flex-start;
        }
        @media (max-width: 768px) {
          .actions { justify-content: center; }
        }
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 1.15rem;
          border-radius: 999px;
          font-weight: 700;
          font-size: 0.95rem;
          transition: transform .2s ease, box-shadow .2s ease, background .3s ease, color .2s ease;
          border: 2px solid transparent;
          text-decoration: none;
          will-change: transform;
        }
        .btn-primary {
          background: linear-gradient(90deg, ${COLORS.teal}, ${COLORS.green});
          color: ${COLORS.white};
          box-shadow: 0 8px 24px rgba(37,180,230,0.35);
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(37,180,230,0.45);
        }
        .btn-ghost {
          background: rgba(255,255,255,0.06);
          color: ${COLORS.white};
          border-color: rgba(255,255,255,0.18);
        }
        .btn-ghost:hover {
          background: rgba(255,255,255,0.12);
          transform: translateY(-2px);
        }
        /* Swiper controls */
        :global(.swiper-button-prev), :global(.swiper-button-next) {
          color: ${COLORS.teal};
          width: 44px;
          height: 44px;
          border-radius: 999px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(4px);
          transition: transform .2s ease, background .2s ease;
        }
        :global(.swiper-button-prev:hover), :global(.swiper-button-next:hover) {
          background: rgba(255,255,255,0.25);
          transform: translateY(-2px);
        }
        :global(.swiper-pagination-bullet) {
          width: 10px; height: 10px;
          opacity: .8;
          background: ${COLORS.teal};
        }
        :global(.swiper-pagination-bullet-active) {
          background: ${COLORS.teal};
          transform: scale(1.08);
        }
      `}</style>
    </section>
  );
};

export default Hero;
