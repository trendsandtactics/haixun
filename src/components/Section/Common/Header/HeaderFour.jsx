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
    document.body.classList.add("disable-scroll");
  };
  const mobileMenuClose = () => {
    setMobileMenu(false);
    setIsOverlayActive(false);
    document.body.classList.remove("disable-scroll");
  };
  const serviceHandler = () => setService(!service);
  const pageHandler = () => setPage(!page);

  const [currentPath, setCurrentPath] = useState(null);
  const pathname = usePathname();
  useEffect(() => setCurrentPath(pathname), [pathname]);

  const [scrollClassName, setScrollClassName] = useState("");
  useEffect(() => {
    const handleScroll = () => setScrollClassName(window.scrollY > 100 ? "sticky-menu" : "");
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const QUOTE_NUMBER = "+70 264 566 579";

  return (
    <header className="main-header main-header-two style4">
      <div id="sticky-header" className={`menu-area ${scrollClassName}`}>


          <div className="menu-area__inner">
            <div className="mobile-nav-toggler" onClick={mobileMenuOpen}>
              <i className="fas fa-bars"></i>
            </div>

            <div className="menu-wrap" style={{ width: "100%" }}>
              <nav className="menu-nav" style={{ width: "100%" }}>
                <div className="main-header-two__inner" style={{ width: "100%" }}>
                  {/* Clean bar (no yellow) */}
                  <div className="main-header-two__bottom" style={{ borderTop: "none", background: "#fff" }}>
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
                              <li><Link href="/services" className={currentPath === "/services" ? "active" : ""}>Services</Link></li>
                              <li><Link href="/road-transport" className={currentPath === "/road-transport" ? "active" : ""}>Road Transport</Link></li>
                              <li><Link href="/air-transport" className={currentPath === "/air-transport" ? "active" : ""}>Air Transport</Link></li>
                              <li><Link href="/cargo-transport" className={currentPath === "/cargo-transport" ? "active" : ""}>Cargo Transport</Link></li>
                              <li><Link href="/ocean-freight" className={currentPath === "/ocean-freight" ? "active" : ""}>Ocean Freight</Link></li>
                              <li><Link href="/rail-transport" className={currentPath === "/rail-transport" ? "active" : ""}>Rail Transport</Link></li>
                              <li><Link href="/warehousing" className={currentPath === "/warehousing" ? "active" : ""}>Warehousing</Link></li>
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
                              <li><Link href="/team" className={currentPath === "/team" ? "active" : ""}>Team</Link></li>
                              <li><Link href="/team-details" className={currentPath === "/team-details" ? "active" : ""}>Team Details</Link></li>
                              <li><Link href="/projects" className={currentPath === "/projects" ? "active" : ""}>Projects</Link></li>
                              <li><Link href="/project-details" className={currentPath === "/project-details" ? "active" : ""}>Project Details</Link></li>
                              <li><Link href="/error" className={currentPath === "/error" ? "active" : ""}>404</Link></li>
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
                              <li><Link href="/blog" className={currentPath === "/blog" ? "active" : ""}>Blog</Link></li>
                              <li><Link href="/blog-standard" className={currentPath === "/blog-standard" ? "active" : ""}>Blog standard</Link></li>
                              <li><Link href="/blog-details" className={currentPath === "/blog-details" ? "active" : ""}>Blog Details</Link></li>
                            </ul>
                          </li>

                          <Navlink activeClasses="active" text="Contact" href="/contact" />
                        </ul>
                      </div>
                    </div>

                    {/* CTA only */}
                    <div className="main-header-two__bottom-right" style={{ gap: 14 }}>
                      <Link
                        href="tel:+70264566579"
                        className="btn-box"
                        style={{
                          padding: "12px 18px",
                          borderRadius: 999,
                          background: `linear-gradient(90deg, ${BRAND.purple} 0%, ${BRAND.green} 60%, ${BRAND.teal} 100%)`,
                          color: "#fff",
                          fontWeight: 700,
                          whiteSpace: "nowrap",
                        }}
                      >
                        Get a Free Quote: {QUOTE_NUMBER}
                        <span className="icon-right-arrow" style={{ marginLeft: 8 }}></span>
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
                <i className="fas fa-times"></i>
              </div>
              <div className="nav-logo" style={{ display: "flex", alignItems: "center" }}>
                <Link href="/" aria-label="Home">
                  <img src="/img/resource/mobile-menu-logo3.png" alt="Translo Mobile" style={{ height: 54, width: "auto" }} />
                </Link>
              </div>
              <div className="menu-outer">
                <ul className="navigation">
                  <li className="active menu-item-has-children">
                    <Link href="#">Home</Link>
                    <ul className={`sub-menu ${home ? "sub-menu-visible test" : "sub-menu-hidden"}`}>
                      <li style={{ borderTop: "1px solid #0000001a" }}><Link href="/">Home One</Link></li>
                      <li style={{ borderTop: "1px solid #0000001a" }}><Link href="home-2">Home Two</Link></li>
                      <li style={{ borderTop: "1px solid #0000001a" }}><Link href="home-3">Home Three</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => setHome(!home)}><span className="fas fa-angle-down"></span></div>
                  </li>

                  <li style={{ marginTop: home ? "0px" : "-134px", zIndex: home ? "999" : "", transition: "0.3s linear" }}>
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
                    <div className="dropdown-btn" onClick={serviceHandler}><span className="fas fa-angle-down"></span></div>
                  </li>

                  <li className="menu-item-has-children" style={{ marginTop: service ? "0px" : "-314px", zIndex: service ? "0" : "999", transition: "0.3s linear" }}>
                    <Link href="#">Pages</Link>
                    <ul className="sub-menu">
                      <li><Link href="team">Team</Link></li>
                      <li><Link href="team-details">Team Details</Link></li>
                      <li><Link href="projects">Projects</Link></li>
                      <li><Link href="project-details">Project Details</Link></li>
                      <li><Link href="error">404</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={pageHandler}><span className="fas fa-angle-down"></span></div>
                  </li>

                  <li className="menu-item-has-children" style={{ marginTop: page ? "0px" : "-224px", zIndex: page ? "0" : "99999", transition: "0.3s linear" }}>
                    <Link href="#">Blog</Link>
                    <ul className="sub-menu" style={{ opacity: blog ? "1" : "0" }}>
                      <li><Link href="blog">Blog</Link></li>
                      <li><Link href="blog-standard">Blog standard</Link></li>
                      <li><Link href="blog-details">Blog Details</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => setBlog(!blog)}><span className="fas fa-angle-down"></span></div>
                  </li>

                  <li style={{ marginTop: blog ? "0px" : "-134px", zIndex: "99999", transition: "0.3s linear" }}>
                    <Link href="contact">Contact</Link>
                  </li>
                </ul>
              </div>

              <div className="contact-info" style={{ backgroundColor: "white", zIndex: 99999 }}>
                <div className="icon-box"><span className="icon-right-arrow"></span></div>
                <p><Link href="tel:+70264566579">Get a Free Quote: {QUOTE_NUMBER}</Link></p>
              </div>
            </nav>
          </div>

          <div className={`${mobileMenu ? "menu-backdrop" : ""}`} onClick={mobileMenuClose}></div>
          {isOverlayActive && <div className="overlay" onClick={mobileMenuClose}></div>}
        </div>
      </div>
    </header>
  );
};

export default HeaderFour;
