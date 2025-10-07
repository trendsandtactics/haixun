"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BRAND = {
  teal: "#26B6E0",
  green: "#2DBB7A",
  purple: "#4B3DBB",
  dark: "#0E0F2C",
};

const activeNavStyle: React.CSSProperties = {
  color: BRAND.teal,
  fontWeight: 600,
  position: "relative",
};

const QUOTE_NUMBER = "+70 264 566 579";

const SERVICES = [
  { href: "/services", label: "All Services" },
  { href: "/lcl", label: "LCL (Less than Container Load)" },
  { href: "/fcl", label: "FCL (Full Container Load)" },
  { href: "/air-freight", label: "Air Freight" },
  { href: "/ocean-freight", label: "Ocean / Sea Freight" },
  { href: "/customs-clearance", label: "Customs Declaration & Inspection" },
  { href: "/warehousing", label: "Warehousing" },
  { href: "/project-logistics", label: "Project Logistics" },
  { href: "/oog-shipments", label: "OOG Shipments" },
  { href: "/lcl-consolidation", label: "LCL Consolidation" },
  { href: "/road-transport", label: "Road Transport" },
  { href: "/rail-transport", label: "Rail Transport" },
  { href: "/cargo-transport", label: "Cargo Transport" },
];

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

  // Remove the tagline everywhere if it still exists in any legacy markup
  useEffect(() => {
    if (typeof document === "undefined") return;
    const killPhrases = [
      "A venture of",
      "Global",
      "Enterprises, Singapore",
      "A venture of Global Enterprises, Singapore",
    ];
    const candidates = Array.from(document.querySelectorAll("header, .topbar, .logo-ribbon, .tagline, .header-note, .brand-note"));
    candidates.forEach((node) => {
      const txt = (node.textContent || "").replace(/\s+/g, " ").trim();
      if (killPhrases.some((p) => txt.includes(p))) {
        (node as HTMLElement).style.display = "none";
      }
    });
  }, []);

  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState("/");
  useEffect(() => {
    if (pathname) setCurrentPath(pathname);
  }, [pathname]);

  const [scrollClassName, setScrollClassName] = useState("");
  useEffect(() => {
    const handleScroll = () => setScrollClassName(window.scrollY > 100 ? "sticky-menu" : "");
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // helper to mark Services active when in any services route
  const isServicesPath = SERVICES.some((s) => s.href !== "/services" && currentPath.startsWith(s.href)) || currentPath === "/services";

  return (
    <header
      className="main-header main-header-two style4"
      style={{
        background: "#fff",
        position: "relative",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      }}
    >
      <div id="sticky-header" className={`menu-area ${scrollClassName}`} style={{ background: "#fff", minHeight: 70 }}>
        <div
          className="main-header-two__outer"
          style={{
            background: "#fff",
            paddingTop: 0,
            paddingBottom: 0,
            display: "flex",
            alignItems: "center",
            height: 70,
          }}
        >
          {/* Logo (no yellow behind) */}
          <div
            className="logo-box-two"
            style={{
              paddingRight: 16,
              paddingLeft: 16,
              display: "flex",
              alignItems: "center",
              background: "transparent",
              height: "70px",
              position: "relative",
              zIndex: 10,
            }}
          >
            <Link href="/" aria-label="Home" style={{ display: "flex", alignItems: "center", height: "100%" }}>
              <img src="/img/resource/logo-6.png" alt="Translo" style={{ height: 45, width: "auto", objectFit: "contain" }} />
            </Link>
          </div>

          <div className="menu-area__inner" style={{ flex: 1 }}>
            <div className="mobile-nav-toggler" onClick={mobileMenuOpen}>
              <i className="fas fa-bars" />
            </div>

            <div className="menu-wrap" style={{ width: "100%" }}>
              <nav className="menu-nav" style={{ width: "100%" }}>
                <div className="main-header-two__inner" style={{ width: "100%" }}>
                  {/* Clean white navbar */}
                  <div className="main-header-two__bottom" style={{ borderTop: "none", background: "#fff" }}>
                    <div className="main-header-two__bottom-left">
                      <div className="navbar-wrap main-menu">
                        <ul className="navigation">
                          <li className={currentPath === "/" ? "active" : ""}>
                            <Link href="/" style={currentPath === "/" ? activeNavStyle : {}}>Home</Link>
                          </li>

                          <li className={currentPath === "/about" ? "active" : ""}>
                            <Link href="/about" style={currentPath === "/about" ? activeNavStyle : {}}>About</Link>
                          </li>

                          {/* Services */}
                          <li className={isServicesPath ? "active menu-item-has-children" : "menu-item-has-children"}>
                            <Link href="#" style={isServicesPath ? activeNavStyle : {}}>Services</Link>
                            <ul className="sub-menu">
                              {SERVICES.map((s) => (
                                <li key={s.href}>
                                  <Link href={s.href} className={currentPath === s.href ? "active" : ""}>
                                    {s.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>

                          {/* Pages */}
                          <li
                            className={
                              currentPath &&
                              (currentPath.startsWith("/team") ||
                                currentPath.startsWith("/projects") ||
                                currentPath.startsWith("/project-details") ||
                                currentPath.startsWith("/error"))
                                ? "active menu-item-has-children"
                                : "menu-item-has-children"
                            }
                          >
                            <Link
                              href="#"
                              style={
                                currentPath &&
                                (currentPath.startsWith("/team") ||
                                  currentPath.startsWith("/projects") ||
                                  currentPath.startsWith("/project-details") ||
                                  currentPath.startsWith("/error"))
                                  ? activeNavStyle
                                  : {}
                              }
                            >
                              Pages
                            </Link>
                            <ul className="sub-menu">
                              <li><Link href="/team" className={currentPath === "/team" ? "active" : ""}>Team</Link></li>
                              <li><Link href="/team-details" className={currentPath === "/team-details" ? "active" : ""}>Team Details</Link></li>
                              <li><Link href="/projects" className={currentPath === "/projects" ? "active" : ""}>Projects</Link></li>
                              <li><Link href="/project-details" className={currentPath === "/project-details" ? "active" : ""}>Project Details</Link></li>
                              <li><Link href="/error" className={currentPath === "/error" ? "active" : ""}>404</Link></li>
                            </ul>
                          </li>

                          {/* Blog */}
                          <li className={currentPath && currentPath.startsWith("/blog") ? "active menu-item-has-children" : "menu-item-has-children"}>
                            <Link href="#" style={currentPath && currentPath.startsWith("/blog") ? activeNavStyle : {}}>
                              Blog
                            </Link>
                            <ul className="sub-menu">
                              <li><Link href="/blog" className={currentPath === "/blog" ? "active" : ""}>Blog</Link></li>
                              <li><Link href="/blog-standard" className={currentPath === "/blog-standard" ? "active" : ""}>Blog standard</Link></li>
                              <li><Link href="/blog-details" className={currentPath === "/blog-details" ? "active" : ""}>Blog Details</Link></li>
                            </ul>
                          </li>

                          <li className={currentPath === "/contact" ? "active" : ""}>
                            <Link href="/contact" style={currentPath === "/contact" ? activeNavStyle : {}}>Contact</Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* CTA Button */}
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
                  <img src="/img/resource/mobile-menu-logo3.png" alt="Translo Mobile" style={{ height: 54, width: "auto" }} />
                </Link>
              </div>

              <div className="menu-outer">
                <ul className="navigation">
                  <li className="menu-item-has-children">
                    <Link href="#">Home</Link>
                    <ul className={`sub-menu ${home ? "sub-menu-visible test" : "sub-menu-hidden"}`}>
                      <li style={{ borderTop: "1px solid #0000001a" }}><Link href="/">Home One</Link></li>
                      <li style={{ borderTop: "1px solid #0000001a" }}><Link href="/home-2">Home Two</Link></li>
                      <li style={{ borderTop: "1px solid #0000001a" }}><Link href="/home-3">Home Three</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => setHome((v) => !v)}><span className="fas fa-angle-down" /></div>
                  </li>

                  <li style={{ marginTop: home ? "0px" : "-134px", zIndex: home ? 999 : undefined, transition: "0.3s linear" }}>
                    <Link href="/about">About</Link>
                  </li>

                  <li className="menu-item-has-children">
                    <Link href="#">Services</Link>
                    <ul className="sub-menu">
                      {SERVICES.map((s) => (
                        <li key={s.href}><Link href={s.href}>{s.label}</Link></li>
                      ))}
                    </ul>
                    <div className="dropdown-btn" onClick={serviceHandler}><span className="fas fa-angle-down" /></div>
                  </li>

                  <li className="menu-item-has-children" style={{ marginTop: service ? "0px" : "-360px", zIndex: service ? 0 : 999, transition: "0.3s linear" }}>
                    <Link href="#">Pages</Link>
                    <ul className="sub-menu">
                      <li><Link href="/team">Team</Link></li>
                      <li><Link href="/team-details">Team Details</Link></li>
                      <li><Link href="/projects">Projects</Link></li>
                      <li><Link href="/project-details">Project Details</Link></li>
                      <li><Link href="/error">404</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={pageHandler}><span className="fas fa-angle-down" /></div>
                  </li>

                  <li className="menu-item-has-children" style={{ marginTop: page ? "0px" : "-224px", zIndex: page ? 0 : 99999, transition: "0.3s linear" }}>
                    <Link href="#">Blog</Link>
                    <ul className="sub-menu" style={{ opacity: blog ? 1 : 0 }}>
                      <li><Link href="/blog">Blog</Link></li>
                      <li><Link href="/blog-standard">Blog standard</Link></li>
                      <li><Link href="/blog-details">Blog Details</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => setBlog((v) => !v)}><span className="fas fa-angle-down" /></div>
                  </li>

                  <li style={{ marginTop: blog ? "0px" : "-134px", zIndex: 99999, transition: "0.3s linear" }}>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>

              <div className="contact-info" style={{ backgroundColor: "white", zIndex: 99999 }}>
                <div className="icon-box"><span className="icon-right-arrow" /></div>
                <p><Link href="tel:+70264566579">Get a Free Quote: {QUOTE_NUMBER}</Link></p>
              </div>
            </nav>
          </div>

          <div className={mobileMenu ? "menu-backdrop" : ""} onClick={mobileMenuClose} />
          {isOverlayActive && <div className="overlay" onClick={mobileMenuClose} />}
        </div>
      </div>
    </header>
  );
};

export default HeaderFour;
