"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navlink from "./Navlink";
import { usePathname } from "next/navigation";

const BRAND = {
  teal: "#26B6E0",
  green: "#2DBB7A",
  purple: "#4B3DBB",
  dark: "#0E0F2C",
};

const HeaderFour = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [home, setHome] = useState(false);
  const [service, setService] = useState(false);
  const [page, setPage] = useState(false);
  const [blog, setBlog] = useState(false);
  const [isOverlayActive, setIsOverlayActive] = useState(false);

  const mobileMenuOpen = () => {
    setMobileMenu(true);
    setIsOverlayActive(true);
    if (typeof document !== "undefined") document.body.classList.add("disable-scroll");
  };
  const mobileMenuClose = () => {
    setMobileMenu(false);
    setIsOverlayActive(false);
    if (typeof document !== "undefined") document.body.classList.remove("disable-scroll");
  };
  const serviceHandler = () => setService((v) => !v);
  const pageHandler = () => setPage((v) => !v);

  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState<string | null>(null);
  useEffect(() => setCurrentPath(pathname ?? null), [pathname]);

  const [scrollClassName, setScrollClassName] = useState("");
  useEffect(() => {
    const handleScroll = () => setScrollClassName(window.scrollY > 100 ? "sticky-menu" : "");
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const QUOTE_NUMBER = "+70 264 566 579";

  return (
    <header className="main-header main-header-two style4">
      <div id="sticky-header" className={`menu-area ${scrollClassName}`}>
        <div className="main-header-two__outer">
          {/* Logo */}
          <div className="logo-box-two" style={{ paddingRight: 16, display: "flex", alignItems: "center" }}>
            <Link href="/" aria-label="Home">
              <img
                src="/img/resource/logo-6.png"
                alt="Translo"
                style={{ height: 56, width: "auto", maxHeight: "8vh" }}
              />
            </Link>
          </div>

          <div className="menu-area__inner">
            <div className="mobile-nav-toggler" onClick={mobileMenuOpen}>
              <i className="fas fa-bars" />
            </div>

            <div className="menu-wrap" style={{ width: "100%" }}>
              <nav className="menu-nav" style={{ width: "100%" }}>
                <div className="main-header-two__inner" style={{ width: "100%" }}>
                  {/* NAVBAR (clean, always has purple diagonal ribbon under it) */}
                  <div className="main-header-two__bottom navbar-surface">
                    {/* The ribbon sits absolutely behind these two sides */}
                    <div className="navbar-ribbon" aria-hidden="true" />

                    <div className="main-header-two__bottom-left">
                      <div className="navbar-wrap main-menu">
                        <ul className="navigation">
                          <li className={currentPath === "/" ? "active" : ""}>
                            <Link href="/">Home</Link>
                          </li>

                          <Navlink activeClasses="active" text="About" href="/about" />

                          <li
                            className={
                              currentPath === "/services" ||
                              currentPath === "/road-transport" ||
                              currentPath === "/air-transport" ||
                              currentPath === "/cargo-transport" ||
                              currentPath === "/ocean-freight" ||
                              currentPath === "/rail-transport" ||
                              currentPath === "/warehousing"
                                ? "active menu-item-has-children"
                                : "menu-item-has-children"
                            }
                          >
                            <Link href="#">Services</Link>
                            <ul className="sub-menu">
                              <li>
                                <Link href="/services" className={currentPath === "/services" ? "active" : ""}>
                                  Services
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/road-transport"
                                  className={currentPath === "/road-transport" ? "active" : ""}
                                >
                                  Road Transport
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/air-transport"
                                  className={currentPath === "/air-transport" ? "active" : ""}
                                >
                                  Air Transport
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/cargo-transport"
                                  className={currentPath === "/cargo-transport" ? "active" : ""}
                                >
                                  Cargo Transport
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/ocean-freight"
                                  className={currentPath === "/ocean-freight" ? "active" : ""}
                                >
                                  Ocean Freight
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/rail-transport"
                                  className={currentPath === "/rail-transport" ? "active" : ""}
                                >
                                  Rail Transport
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/warehousing"
                                  className={currentPath === "/warehousing" ? "active" : ""}
                                >
                                  Warehousing
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li
                            className={
                              currentPath &&
                              (currentPath.startsWith("/team") ||
                                currentPath.startsWith("/projects") ||
                                currentPath.startsWith("/error"))
                                ? "active menu-item-has-children"
                                : "menu-item-has-children"
                            }
                          >
                            <Link href="#">Pages</Link>
                            <ul className="sub-menu">
                              <li>
                                <Link href="/team" className={currentPath === "/team" ? "active" : ""}>
                                  Team
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/team-details"
                                  className={currentPath === "/team-details" ? "active" : ""}
                                >
                                  Team Details
                                </Link>
                              </li>
                              <li>
                                <Link href="/projects" className={currentPath === "/projects" ? "active" : ""}>
                                  Projects
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/project-details"
                                  className={currentPath === "/project-details" ? "active" : ""}
                                >
                                  Project Details
                                </Link>
                              </li>
                              <li>
                                <Link href="/error" className={currentPath === "/error" ? "active" : ""}>
                                  404
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li
                            className={
                              currentPath && currentPath.startsWith("/blog")
                                ? "active menu-item-has-children"
                                : "menu-item-has-children"
                            }
                          >
                            <Link href="#">Blog</Link>
                            <ul className="sub-menu">
                              <li>
                                <Link href="/blog" className={currentPath === "/blog" ? "active" : ""}>
                                  Blog
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/blog-standard"
                                  className={currentPath === "/blog-standard" ? "active" : ""}
                                >
                                  Blog standard
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/blog-details"
                                  className={currentPath === "/blog-details" ? "active" : ""}
                                >
                                  Blog Details
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <Navlink activeClasses="active" text="Contact" href="/contact" />
                        </ul>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="main-header-two__bottom-right" style={{ gap: 14 }}>
                      <Link
                        href="tel:+70264566579"
                        className="btn-box quote-btn"
                      >
                        Get a Free Quote: {QUOTE_NUMBER}
                        <span className="icon-right-arrow" style={{ marginLeft: 8 }} />
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`mobile-menu ${mobileMenu ? "mobile-menu-open" : ""}`}>
            <nav className="menu-box">
              <div className={`close-btn ${mobileMenu ? "rotate" : ""}`} onClick={mobileMenuClose}>
                <i className="fas fa-times" />
              </div>
              <div className="nav-logo" style={{ display: "flex", alignItems: "center" }}>
                <Link href="/" aria-label="Home">
                  <img
                    src="/img/resource/mobile-menu-logo3.png"
                    alt="Translo Mobile"
                    style={{ height: 54, width: "auto" }}
                  />
                </Link>
              </div>
              <div className="menu-outer">
                <ul className="navigation">
                  <li className="menu-item-has-children">
                    <Link href="#">Home</Link>
                    <ul className={`sub-menu ${home ? "sub-menu-visible test" : "sub-menu-hidden"}`}>
                      <li style={{ borderTop: "1px solid #0000001a" }}>
                        <Link href="/">Home One</Link>
                      </li>
                      <li style={{ borderTop: "1px solid #0000001a" }}>
                        <Link href="home-2">Home Two</Link>
                      </li>
                      <li style={{ borderTop: "1px solid #0000001a" }}>
                        <Link href="home-3">Home Three</Link>
                      </li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => setHome((v) => !v)}>
                      <span className="fas fa-angle-down" />
                    </div>
                  </li>

                  <li style={{ marginTop: home ? "0px" : "-134px", zIndex: home ? 999 : undefined, transition: "0.3s linear" }}>
                    <Link href="about">About</Link>
                  </li>

                  <li className="menu-item-has-children">
                    <Link href="#">Services</Link>
                    <ul className="sub-menu">
                      <li><Link href="services">Services</Link></li>
                      <li><Link href="road-transport">Road Transport</Link></li>
                      <li><Link href="air-transport">Air Transport</Link></li>
                      <li><Link href="cargo-transport">Cargo Transport</Link></li>
                      <li><Link href="ocean-freight">Ocean Freight</Link></li>
                      <li><Link href="rail-transport">Rail Transport</Link></li>
                      <li><Link href="warehousing">Warehousing</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={serviceHandler}>
                      <span className="fas fa-angle-down" />
                    </div>
                  </li>

                  <li
                    className="menu-item-has-children"
                    style={{ marginTop: service ? "0px" : "-314px", zIndex: service ? 0 : 999, transition: "0.3s linear" }}
                  >
                    <Link href="#">Pages</Link>
                    <ul className="sub-menu">
                      <li><Link href="team">Team</Link></li>
                      <li><Link href="team-details">Team Details</Link></li>
                      <li><Link href="projects">Projects</Link></li>
                      <li><Link href="project-details">Project Details</Link></li>
                      <li><Link href="error">404</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={pageHandler}>
                      <span className="fas fa-angle-down" />
                    </div>
                  </li>

                  <li
                    className="menu-item-has-children"
                    style={{ marginTop: page ? "0px" : "-224px", zIndex: page ? 0 : 99999, transition: "0.3s linear" }}
                  >
                    <Link href="#">Blog</Link>
                    <ul className="sub-menu" style={{ opacity: blog ? 1 : 0 }}>
                      <li><Link href="blog">Blog</Link></li>
                      <li><Link href="blog-standard">Blog standard</Link></li>
                      <li><Link href="blog-details">Blog Details</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => setBlog((v) => !v)}>
                      <span className="fas fa-angle-down" />
                    </div>
                  </li>

                  <li style={{ marginTop: blog ? "0px" : "-134px", zIndex: 99999, transition: "0.3s linear" }}>
                    <Link href="contact">Contact</Link>
                  </li>
                </ul>
              </div>

              <div className="contact-info" style={{ backgroundColor: "white", zIndex: 99999 }}>
                <div className="icon-box"><span className="icon-right-arrow" /></div>
                <p>
                  <Link href="tel:+70264566579">Get a Free Quote: {QUOTE_NUMBER}</Link>
                </p>
              </div>
            </nav>
          </div>

          <div className={`${mobileMenu ? "menu-backdrop" : ""}`} onClick={mobileMenuClose} />
          {isOverlayActive && <div className="overlay" onClick={mobileMenuClose} />}
        </div>
      </div>

      {/* Styled-JSX: keeps diagonal ribbon purple & attached to navbar always */}
      <style jsx>{`
        /* Remove any previous yellow accents from the base theme by overriding */
        :global(.main-header-two__bottom) {
          background: #ffffff;
          border-top: none;
        }

        /* Container that holds the nav and CTA */
        .navbar-surface {
          position: relative;
          z-index: 0; /* let the ribbon sit behind */
          display: flex;
          align-items: stretch;
          gap: 12px;
          padding: 0; /* keep it snug; your template's spacing will still apply */
        }

        /* Always-visible diagonal ribbon, fitted to the navbar (not header) */
        .navbar-ribbon {
          position: absolute;
          inset: 0 0 0 0; /* cover the whole navbar row */
          z-index: -1;
          background: ${BRAND.purple};
          transform: skewX(-18deg);
          transform-origin: left center;
          /* Narrow the ribbon to sit under the links: */
          width: 68%;
          left: -4%;
          border-radius: 0 12px 12px 0;
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
        }

        /* Make sure the right side CTA remains readable on white */
        :global(.main-header-two__bottom-right) {
          display: flex;
          align-items: center;
        }

        /* CTA button (no yellow, uses purple emphasis) */
        .quote-btn {
          padding: 12px 18px;
          border-radius: 999px;
          background: linear-gradient(90deg, ${BRAND.purple} 0%, ${BRAND.green} 60%, ${BRAND.teal} 100%);
          color: #fff;
          font-weight: 700;
          white-space: nowrap;
        }

        /* Top-level nav links on the purple ribbon should be white for contrast */
        :global(.navbar-wrap .navigation > li > a) {
          color: #ffffff;
          font-weight: 600;
        }
        :global(.navbar-wrap .navigation > li:hover > a),
        :global(.navbar-wrap .navigation > li.active > a) {
          color: #ffffff;
          text-decoration: none;
        }

        /* Active underline/border in purple instead of yellow */
        :global(.navbar-wrap .navigation > li.active > a),
        :global(.navbar-wrap .navigation > li > a:focus) {
          position: relative;
        }
        :global(.navbar-wrap .navigation > li.active > a::after),
        :global(.navbar-wrap .navigation > li > a:focus::after) {
          content: "";
          position: absolute;
          left: 8px;
          right: 8px;
          bottom: -10px;
          height: 3px;
          background: #4B3DBB; /* purple underline */
          border-radius: 2px;
        }

        /* Dropdown menus: white panels with purple hover/active (no yellow) */
        :global(.sub-menu) {
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 10px 24px rgba(0,0,0,0.08);
        }
        :global(.sub-menu li a) {
          color: ${BRAND.dark};
          font-weight: 600;
        }
        :global(.sub-menu li a:hover),
        :global(.sub-menu li a.active) {
          color: ${BRAND.purple};
        }

        /* Sticky state should not change colors to yellow any more */
        :global(.sticky-menu .main-header-two__bottom),
        :global(.sticky-menu .navbar-surface),
        :global(.sticky-menu .navbar-ribbon) {
          /* Keep identical styling when sticky to avoid color/position jumps */
        }

        /* Mobile menu accents: purple instead of yellow */
        :global(.mobile-menu .menu-box .navigation > li > a:hover),
        :global(.mobile-menu .menu-box .navigation > li > a:focus),
        :global(.mobile-menu .menu-box .navigation > li.active > a) {
          color: ${BRAND.purple};
        }
        :global(.mobile-menu .dropdown-btn span) {
          color: ${BRAND.purple};
        }

        /* Safety: if templates add any leftover yellow borders, neutralize them */
        :global([style*="yellow"]), :global(.has-yellow), :global(.bg-yellow), :global(.border-yellow) {
          background: transparent !important;
          border-color: ${BRAND.purple} !important;
          color: ${BRAND.purple} !important;
        }

        /* Make sure the left area (links) is above the ribbon for interaction */
        :global(.main-header-two__bottom-left) {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </header>
  );
};

export default HeaderFour;
