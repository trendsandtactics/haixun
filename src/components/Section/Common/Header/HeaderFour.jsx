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

const activeNavStyle = {
  color: BRAND.teal,
  fontWeight: 600,
  position: "relative",
};

const HeaderFour = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
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
    <>
      {/* Top Bar */}
      <div style={{ 
        background: "#fff", 
        borderBottom: "1px solid #e5e7eb",
        padding: "8px 0"
      }}>
        <div style={{ 
          maxWidth: "1400px", 
          margin: "0 auto", 
          padding: "0 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "13px",
          color: "#6b7280"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span>A venture of</span>
            <img src="/img/resource/logo-6.png" alt="Global" style={{ height: "20px" }} />
            <span>Enterprises, Singapore</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header style={{ 
        background: "#fff", 
        borderBottom: "1px solid #e5e7eb",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: scrollClassName ? "0 2px 10px rgba(0,0,0,0.08)" : "none",
        transition: "box-shadow 0.3s ease"
      }}>
        <div style={{ 
          maxWidth: "1400px", 
          margin: "0 auto", 
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "70px"
        }}>
          {/* Logo */}
          <Link href="/" aria-label="Home" style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/img/resource/logo-6.png"
              alt="Translo"
              style={{ height: "50px", width: "auto" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav style={{ display: "flex", alignItems: "center", gap: "32px" }} className="desktop-nav">
            <Link 
              href="/" 
              style={{ 
                textDecoration: "none", 
                color: currentPath === "/" ? BRAND.teal : BRAND.dark,
                fontWeight: currentPath === "/" ? 600 : 500,
                fontSize: "15px",
                transition: "color 0.3s ease"
              }}
            >
              Home
            </Link>

            <Link 
              href="/about" 
              style={{ 
                textDecoration: "none", 
                color: currentPath === "/about" ? BRAND.teal : BRAND.dark,
                fontWeight: currentPath === "/about" ? 600 : 500,
                fontSize: "15px",
                transition: "color 0.3s ease"
              }}
            >
              About Us
            </Link>

            <div style={{ position: "relative" }} className="dropdown-parent">
              <Link 
                href="/services" 
                style={{ 
                  textDecoration: "none", 
                  color: currentPath?.includes("/services") || currentPath?.includes("-transport") || currentPath?.includes("warehousing") ? BRAND.teal : BRAND.dark,
                  fontWeight: currentPath?.includes("/services") ? 600 : 500,
                  fontSize: "15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px"
                }}
              >
                Services
                <span style={{ fontSize: "10px" }}>▼</span>
              </Link>
            </div>

            <div style={{ position: "relative" }} className="dropdown-parent">
              <Link 
                href="/projects" 
                style={{ 
                  textDecoration: "none", 
                  color: currentPath?.includes("/team") || currentPath?.includes("/project") || currentPath?.includes("/error") ? BRAND.teal : BRAND.dark,
                  fontWeight: currentPath?.includes("/team") || currentPath?.includes("/project") ? 600 : 500,
                  fontSize: "15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px"
                }}
              >
                Pages
                <span style={{ fontSize: "10px" }}>▼</span>
              </Link>
            </div>

            <Link 
              href="/blog" 
              style={{ 
                textDecoration: "none", 
                color: currentPath?.includes("/blog") ? BRAND.teal : BRAND.dark,
                fontWeight: currentPath?.includes("/blog") ? 600 : 500,
                fontSize: "15px",
                transition: "color 0.3s ease"
              }}
            >
              Blog
            </Link>

            <Link 
              href="/contact" 
              style={{ 
                textDecoration: "none", 
                color: currentPath === "/contact" ? BRAND.teal : BRAND.dark,
                fontWeight: currentPath === "/contact" ? 600 : 500,
                fontSize: "15px",
                transition: "color 0.3s ease"
              }}
            >
              Contact
            </Link>
          </nav>

          {/* Right Side Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {/* Switch Country Button */}
            <button style={{
              background: BRAND.navy,
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              padding: "10px 20px",
              fontSize: "14px",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
              transition: "background 0.3s ease"
            }}>
              <span style={{ fontSize: "18px" }}>🌐</span>
              Switch Country
              <span style={{ fontSize: "10px" }}>▼</span>
            </button>

            {/* Contact/Quote Button */}
            <Link
              href="/contact"
              style={{
                background: BRAND.gold,
                color: BRAND.dark,
                border: "none",
                borderRadius: "6px",
                padding: "10px 24px",
                fontSize: "14px",
                fontWeight: 700,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                whiteSpace: "nowrap",
                transition: "transform 0.2s ease, box-shadow 0.3s ease",
                boxShadow: "0 2px 8px rgba(253, 185, 19, 0.3)"
              }}
            >
              Contact / Quote
            </Link>

            {/* Mobile Menu Toggle */}
            <div 
              className="mobile-nav-toggler" 
              onClick={mobileMenuOpen}
              style={{
                display: "none",
                cursor: "pointer",
                fontSize: "24px",
                color: BRAND.dark
              }}
            >
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenu ? "mobile-menu-open" : ""}`}>
          <nav className="menu-box">
            <div className={`close-btn ${mobileMenu ? "rotate" : ""}`} onClick={mobileMenuClose}>
              <i className="fas fa-times"></i>
            </div>
            <div className="nav-logo" style={{ display: "flex", alignItems: "center", padding: "20px" }}>
              <Link href="/" aria-label="Home">
                <img src="/img/resource/logo-6.png" alt="Translo Mobile" style={{ height: 50, width: "auto" }} />
              </Link>
            </div>
            <div className="menu-outer">
              <ul className="navigation">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li className="menu-item-has-children">
                  <Link href="#">Services</Link>
                  <ul className="sub-menu">
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/road-transport">Road Transport</Link></li>
                    <li><Link href="/air-transport">Air Transport</Link></li>
                    <li><Link href="/cargo-transport">Cargo Transport</Link></li>
                    <li><Link href="/ocean-freight">Ocean Freight</Link></li>
                    <li><Link href="/rail-transport">Rail Transport</Link></li>
                    <li><Link href="/warehousing">Warehousing</Link></li>
                  </ul>
                  <div className="dropdown-btn" onClick={serviceHandler}><span className="fas fa-angle-down"></span></div>
                </li>
                <li className="menu-item-has-children">
                  <Link href="#">Pages</Link>
                  <ul className="sub-menu">
                    <li><Link href="/team">Team</Link></li>
                    <li><Link href="/team-details">Team Details</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/project-details">Project Details</Link></li>
                    <li><Link href="/error">404</Link></li>
                  </ul>
                  <div className="dropdown-btn" onClick={pageHandler}><span className="fas fa-angle-down"></span></div>
                </li>
                <li className="menu-item-has-children">
                  <Link href="#">Blog</Link>
                  <ul className="sub-menu">
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/blog-standard">Blog standard</Link></li>
                    <li><Link href="/blog-details">Blog Details</Link></li>
                  </ul>
                  <div className="dropdown-btn" onClick={() => setBlog(!blog)}><span className="fas fa-angle-down"></span></div>
                </li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="contact-info" style={{ backgroundColor: "white", padding: "20px" }}>
              <Link href="/contact" style={{ 
                display: "block",
                background: BRAND.gold,
                color: BRAND.dark,
                padding: "12px 20px",
                borderRadius: "6px",
                textAlign: "center",
                fontWeight: 700,
                textDecoration: "none"
              }}>
                Contact / Quote
              </Link>
            </div>
          </nav>
        </div>

        <div className={`${mobileMenu ? "menu-backdrop" : ""}`} onClick={mobileMenuClose}></div>
        {isOverlayActive && <div className="overlay" onClick={mobileMenuClose}></div>}
      </header>

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
      `}</style>
    </>
  );
};

export default HeaderFour;
