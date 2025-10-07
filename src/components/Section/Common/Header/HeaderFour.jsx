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

  const serviceHandler = () => setService(!service);
  const pageHandler = () => setPage(!page);

  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState<string | null>(null);
  useEffect(() => setCurrentPath(pathname), [pathname]);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Header */}
      <header
        style={{
          background: "#fff",
          borderBottom: "1px solid #e5e7eb",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.08)" : "none",
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
            gap: "16px",
          }}
        >
          {/* Left: Logo + Tagline */}
          <Link
            href="/"
            aria-label="Home"
            style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="/img/resource/logo-6.png"
                alt="Translo"
                style={{ height: 52, width: "auto" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: 1.1,
              }}
              className="tagline-wrap"
            >
              <span
                style={{
                  fontSize: 12,
                  color: "#6b7280",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  marginTop: 2,
                }}
                className="tagline"
              >
                driving sustainability
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav style={{ display: "flex", alignItems: "center", gap: 28 }} className="desktop-nav">
            <HeaderLink href="/" currentPath={currentPath}>
              Home
            </HeaderLink>

            <HeaderLink href="/about" currentPath={currentPath}>
              About Us
            </HeaderLink>

            <div style={{ position: "relative" }} className="dropdown-parent">
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
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                  Services <span style={{ fontSize: 10 }}>▼</span>
                </span>
              </HeaderLink>
            </div>

            <div style={{ position: "relative" }} className="dropdown-parent">
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
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                  Pages <span style={{ fontSize: 10 }}>▼</span>
                </span>
              </HeaderLink>
            </div>

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

          {/* Right Side Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button
              style={{
                background: BRAND.navy,
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "10px 16px",
                fontSize: 14,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 8,
                cursor: "pointer",
                transition: "transform 0.18s ease",
                outlineOffset: 2,
              }}
              className="btn-press"
            >
              <span style={{ fontSize: 18 }}>🌐</span>
              Switch Country <span style={{ fontSize: 10 }}>▼</span>
            </button>

            <Link
              href="/contact"
              style={{
                background: BRAND.gold,
                color: BRAND.dark,
                borderRadius: 8,
                padding: "10px 18px",
                fontSize: 14,
                fontWeight: 700,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                whiteSpace: "nowrap",
                boxShadow: "0 2px 8px rgba(253,185,19,0.35)",
                transition: "transform 0.18s ease",
              }}
              className="btn-press"
            >
              Contact / Quote
            </Link>

            {/* Mobile Menu Toggle */}
            <div
              className="mobile-nav-toggler"
              onClick={mobileMenuOpen}
              style={{ display: "none", cursor: "pointer", fontSize: 26, color: BRAND.dark }}
              aria-label="Open menu"
            >
              ☰
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenu ? "mobile-menu-open" : ""}`}>
          <nav className="menu-box">
            <div className={`close-btn ${mobileMenu ? "rotate" : ""}`} onClick={mobileMenuClose} aria-label="Close menu">
              ×
            </div>

            {/* Mobile Logo + Tagline */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: 20 }}>
              <Link href="/" aria-label="Home" onClick={mobileMenuClose} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
                <img src="/img/resource/logo-6.png" alt="Translo Mobile" style={{ height: 48, width: "auto" }} />
                <span
                  style={{
                    fontSize: 11,
                    color: "#6b7280",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  driving sustainability
                </span>
              </Link>
            </div>

            <div className="menu-outer">
              <ul className="navigation">
                <li><Link href="/" onClick={mobileMenuClose}>Home</Link></li>
                <li><Link href="/about" onClick={mobileMenuClose}>About Us</Link></li>

                <li className={`menu-item-has-children ${service ? "open" : ""}`}>
                  <button className="dropdown-row" onClick={serviceHandler}>
                    <span>Services</span><span className="chev">▼</span>
                  </button>
                  <ul className="sub-menu" style={{ display: service ? "block" : "none" }}>
                    <li><Link href="/services" onClick={mobileMenuClose}>Services</Link></li>
                    <li><Link href="/road-transport" onClick={mobileMenuClose}>Road Transport</Link></li>
                    <li><Link href="/air-transport" onClick={mobileMenuClose}>Air Transport</Link></li>
                    <li><Link href="/cargo-transport" onClick={mobileMenuClose}>Cargo Transport</Link></li>
                    <li><Link href="/ocean-freight" onClick={mobileMenuClose}>Ocean Freight</Link></li>
                    <li><Link href="/rail-transport" onClick={mobileMenuClose}>Rail Transport</Link></li>
                    <li><Link href="/warehousing" onClick={mobileMenuClose}>Warehousing</Link></li>
                  </ul>
                </li>

                <li className={`menu-item-has-children ${page ? "open" : ""}`}>
                  <button className="dropdown-row" onClick={pageHandler}>
                    <span>Pages</span><span className="chev">▼</span>
                  </button>
                  <ul className="sub-menu" style={{ display: page ? "block" : "none" }}>
                    <li><Link href="/team" onClick={mobileMenuClose}>Team</Link></li>
                    <li><Link href="/team-details" onClick={mobileMenuClose}>Team Details</Link></li>
                    <li><Link href="/projects" onClick={mobileMenuClose}>Projects</Link></li>
                    <li><Link href="/project-details" onClick={mobileMenuClose}>Project Details</Link></li>
                    <li><Link href="/error" onClick={mobileMenuClose}>404</Link></li>
                  </ul>
                </li>

                <li className={`menu-item-has-children ${blog ? "open" : ""}`}>
                  <button className="dropdown-row" onClick={() => setBlog(!blog)}>
                    <span>Blog</span><span className="chev">▼</span>
                  </button>
                  <ul className="sub-menu" style={{ display: blog ? "block" : "none" }}>
                    <li><Link href="/blog" onClick={mobileMenuClose}>Blog</Link></li>
                    <li><Link href="/blog-standard" onClick={mobileMenuClose}>Blog standard</Link></li>
                    <li><Link href="/blog-details" onClick={mobileMenuClose}>Blog Details</Link></li>
                  </ul>
                </li>

                <li><Link href="/contact" onClick={mobileMenuClose}>Contact</Link></li>
              </ul>
            </div>

            <div className="contact-info" style={{ backgroundColor: "white", padding: 20 }}>
              <Link
                href="/contact"
                onClick={mobileMenuClose}
                style={{
                  display: "block",
                  background: BRAND.gold,
                  color: BRAND.dark,
                  padding: "12px 20px",
                  borderRadius: 8,
                  textAlign: "center",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Contact / Quote
              </Link>
            </div>
          </nav>
        </div>

        <div className={`${mobileMenu ? "menu-backdrop" : ""}`} onClick={mobileMenuClose}></div>
        {isOverlayActive && <div className="overlay" onClick={mobileMenuClose}></div>}
      </header>

      <style jsx>{`
        /* Desktop hide / Mobile show */
        @media (max-width: 991px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav-toggler {
            display: block !important;
          }
          .tagline-wrap {
            display: none; /* hide tagline next to logo on narrow screens; shown in mobile menu header */
          }
        }
        @media (min-width: 992px) {
          .mobile-menu {
            display: none !important;
          }
        }

        /* Link styling */
        .nav-link {
          position: relative;
          text-decoration: none;
          color: ${BRAND.dark};
          font-weight: 500;
          font-size: 15px;
          transition: color 0.25s ease;
        }
        .nav-link:hover {
          color: ${BRAND.teal};
        }
        .nav-link.active {
          color: ${BRAND.teal};
          font-weight: 600;
        }
        .nav-link.active::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -8px;
          height: 2px;
          background: ${BRAND.teal};
          border-radius: 2px;
        }

        /* Buttons micro interaction */
        .btn-press:active {
          transform: translateY(1px) scale(0.99);
        }

        /* Mobile menu basics (assumes your base styles exist; these help if not) */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          height: 100vh;
          width: 86%;
          max-width: 380px;
          background: #ffffff;
          box-shadow: -8px 0 24px rgba(0,0,0,0.12);
          transition: right 0.28s ease;
          z-index: 1200;
        }
        .mobile-menu-open {
          right: 0;
        }
        .menu-box {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .close-btn {
          font-size: 28px;
          line-height: 1;
          padding: 16px 20px;
          cursor: pointer;
          align-self: flex-end;
        }
        .menu-outer {
          flex: 1;
          overflow: auto;
        }
        .navigation { list-style: none; padding: 8px 0 24px; margin: 0; }
        .navigation > li { border-bottom: 1px solid #f1f5f9; }
        .navigation a, .dropdown-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 14px 20px;
          text-decoration: none;
          color: ${BRAND.dark};
          background: transparent;
          border: none;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
        }
        .sub-menu { list-style: none; padding: 4px 0 12px; margin: 0; background: #fafafa; }
        .sub-menu li a { padding: 12px 24px; font-size: 14px; }
        .menu-backdrop, .overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.45);
          z-index: 1100;
        }
      `}</style>
    </>
  );
};

/* Small helper to keep link logic tidy */
const HeaderLink = ({
  href,
  currentPath,
  children,
}: {
  href: string;
  currentPath: string | null | undefined;
  children: React.ReactNode;
}) => {
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
