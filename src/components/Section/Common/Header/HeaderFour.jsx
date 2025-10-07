"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BRAND = {
  teal: "#26B6E0",
  green: "#2DBB7A",
  purple: "#4B3DBB",
  dark: "#0E0F2C",
  navy: "#1a365d",
  gold: "#FDB913",
};

const HeaderFour = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [service, setService] = useState(false);
  const [page, setPage] = useState(false);
  const [blog, setBlog] = useState(false);
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(null);
  useEffect(() => setCurrentPath(pathname), [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <>
      {/* HEADER */}
      <header
        style={{
          background: "#fff",
          borderBottom: "1px solid #e5e7eb",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
          transition: "box-shadow 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "80px",
          }}
        >
          {/* LOGO + TAGLINE */}
          <Link
            href="/"
            aria-label="Home"
            style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img
                src="/img/resource/logo-6.png"
                alt="Translo"
                style={{ height: 52, width: "auto" }}
              />
              <span
                style={{
                  fontSize: 12,
                  color: "#6b7280",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  marginTop: 4,
                }}
              >
                driving sustainability
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav style={{ display: "flex", alignItems: "center", gap: 30 }} className="desktop-nav">
            <HeaderLink href="/" currentPath={currentPath}>
              Home
            </HeaderLink>

            <HeaderLink href="/about" currentPath={currentPath}>
              About Us
            </HeaderLink>

            <HeaderLink
              href="/services"
              currentPath={
                currentPath?.includes("/services") ||
                currentPath?.includes("-transport") ||
                currentPath?.includes("warehousing")
                  ? "/services"
                  : currentPath
              }
            >
              Services
            </HeaderLink>

            <HeaderLink
              href="/projects"
              currentPath={
                currentPath?.includes("/team") ||
                currentPath?.includes("/project") ||
                currentPath?.includes("/error")
                  ? "/projects"
                  : currentPath
              }
            >
              Pages
            </HeaderLink>

            <HeaderLink
              href="/blog"
              currentPath={currentPath?.includes("/blog") ? "/blog" : currentPath}
            >
              Blog
            </HeaderLink>

            <HeaderLink href="/contact" currentPath={currentPath}>
              Contact
            </HeaderLink>
          </nav>

          {/* RIGHT BUTTONS */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button
              style={{
                background: BRAND.navy,
                color: "#fff",
                border: "none",
                borderRadius: 6,
                padding: "10px 16px",
                fontSize: 14,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 6,
                cursor: "pointer",
              }}
            >
              🌐 Switch Country ▼
            </button>

            <Link
              href="/contact"
              style={{
                background: BRAND.gold,
                color: BRAND.dark,
                borderRadius: 6,
                padding: "10px 20px",
                fontSize: 14,
                fontWeight: 700,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                boxShadow: "0 2px 8px rgba(253,185,19,0.35)",
              }}
            >
              Contact / Quote
            </Link>

            {/* MOBILE MENU TOGGLER */}
            <div
              className="mobile-nav-toggler"
              onClick={mobileMenuOpen}
              style={{ display: "none", fontSize: 26, color: BRAND.dark, cursor: "pointer" }}
            >
              ☰
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className={`mobile-menu ${mobileMenu ? "mobile-menu-open" : ""}`}>
          <nav className="menu-box">
            <div className="close-btn" onClick={mobileMenuClose}>
              ×
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 20 }}>
              <img src="/img/resource/logo-6.png" alt="Logo" style={{ height: 48, width: "auto" }} />
              <span
                style={{
                  fontSize: 11,
                  color: "#6b7280",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  marginTop: 4,
                }}
              >
                driving sustainability
              </span>
            </div>

            <ul className="navigation" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li><Link href="/" onClick={mobileMenuClose}>Home</Link></li>
              <li><Link href="/about" onClick={mobileMenuClose}>About Us</Link></li>
              <li>
                <button className="dropdown-row" onClick={serviceHandler}>
                  Services <span>▼</span>
                </button>
                {service && (
                  <ul className="sub-menu">
                    <li><Link href="/services" onClick={mobileMenuClose}>Services</Link></li>
                    <li><Link href="/road-transport" onClick={mobileMenuClose}>Road Transport</Link></li>
                    <li><Link href="/air-transport" onClick={mobileMenuClose}>Air Transport</Link></li>
                    <li><Link href="/cargo-transport" onClick={mobileMenuClose}>Cargo Transport</Link></li>
                    <li><Link href="/ocean-freight" onClick={mobileMenuClose}>Ocean Freight</Link></li>
                    <li><Link href="/rail-transport" onClick={mobileMenuClose}>Rail Transport</Link></li>
                    <li><Link href="/warehousing" onClick={mobileMenuClose}>Warehousing</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <button className="dropdown-row" onClick={pageHandler}>
                  Pages <span>▼</span>
                </button>
                {page && (
                  <ul className="sub-menu">
                    <li><Link href="/team" onClick={mobileMenuClose}>Team</Link></li>
                    <li><Link href="/projects" onClick={mobileMenuClose}>Projects</Link></li>
                    <li><Link href="/project-details" onClick={mobileMenuClose}>Project Details</Link></li>
                    <li><Link href="/error" onClick={mobileMenuClose}>404</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <button className="dropdown-row" onClick={() => setBlog(!blog)}>
                  Blog <span>▼</span>
                </button>
                {blog && (
                  <ul className="sub-menu">
                    <li><Link href="/blog" onClick={mobileMenuClose}>Blog</Link></li>
                    <li><Link href="/blog-details" onClick={mobileMenuClose}>Blog Details</Link></li>
                  </ul>
                )}
              </li>
              <li><Link href="/contact" onClick={mobileMenuClose}>Contact</Link></li>
            </ul>
          </nav>
        </div>

        {isOverlayActive && <div className="overlay" onClick={mobileMenuClose}></div>}
      </header>

      {/* STYLES */}
      <style jsx>{`
        @media (max-width: 991px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav-toggler {
            display: block !important;
          }
        }
        @media (min-width: 992px) {
          .mobile-menu {
            display: none !important;
          }
        }
        .nav-link {
          text-decoration: none;
          color: ${BRAND.dark};
          font-weight: 500;
          font-size: 15px;
          transition: color 0.3s ease;
          position: relative;
        }
        .nav-link:hover {
          color: ${BRAND.teal};
        }
        .nav-link.active {
          color: ${BRAND.teal};
          font-weight: 600;
        }
        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          height: 100vh;
          width: 85%;
          max-width: 380px;
          background: #fff;
          transition: right 0.3s ease;
          z-index: 1200;
          overflow-y: auto;
          padding: 20px;
        }
        .mobile-menu-open {
          right: 0;
        }
        .close-btn {
          font-size: 28px;
          cursor: pointer;
          text-align: right;
          padding-right: 10px;
        }
        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          z-index: 1100;
        }
        .dropdown-row {
          background: none;
          border: none;
          padding: 12px 0;
          width: 100%;
          text-align: left;
          font-size: 15px;
          cursor: pointer;
          color: ${BRAND.dark};
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .sub-menu {
          padding-left: 15px;
          list-style: none;
          margin: 0;
        }
        .sub-menu li a {
          display: block;
          padding: 8px 0;
          text-decoration: none;
          color: ${BRAND.dark};
          font-size: 14px;
        }
      `}</style>
    </>
  );
};

const HeaderLink = ({ href, currentPath, children }) => {
  const active = currentPath === href;
  return (
    <Link
      href={href}
      className={`nav-link ${active ? "active" : ""}`}
      style={{ color: active ? BRAND.teal : BRAND.dark }}
    >
      {children}
    </Link>
  );
};

export default HeaderFour;
