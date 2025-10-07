"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BRAND = {
  teal: "#26B6E0",
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
    const handleScroll = () => setScrolled(window.scrollY > 80);
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

  return (
    <>
      <header
        style={{
          background: "#fff",
          borderBottom: "1px solid #e5e7eb",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.08)" : "none",
          transition: "box-shadow 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1240px",          // tighter container
            margin: "0 auto",
            padding: "0 16px",           // less side padding
            display: "flex",
            alignItems: "center",
            gap: 12,
            height: "72px",              // slightly shorter header
          }}
        >
          {/* LEFT: Logo + tagline (compact) */}
          <Link
            href="/"
            aria-label="Home"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
              minWidth: 0,
            }}
          >
            <img
              src="/img/resource/logo-6.png"
              alt="Moltech"
              style={{ height: 40, width: "auto" }}   // smaller logo
            />
            <span
              className="tagline"
              style={{
                fontSize: 10,
                color: "#6b7280",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 700,
                lineHeight: 1,
                marginTop: 2,
                whiteSpace: "nowrap",
              }}
            >
              driving sustainability
            </span>
          </Link>

          {/* MIDDLE: Nav (pull closer to logo) */}
          <nav
            className="desktop-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,                // tighter gap between items
              marginLeft: 12,         // small offset from logo
              flex: 1,                // takes available space so right btns hug right
              minWidth: 0,
            }}
          >
            <HeaderLink href="/" currentPath={currentPath}>Home</HeaderLink>
            <HeaderLink href="/about" currentPath={currentPath}>About Us</HeaderLink>
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
            <HeaderLink href="/contact" currentPath={currentPath}>Contact</HeaderLink>
          </nav>

          {/* RIGHT: Controls (compact + responsive) */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button
              className="btn-country"
              style={{
                background: BRAND.navy,
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "8px 12px",
                fontSize: 13,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 6,
                cursor: "pointer",
                lineHeight: 1,
              }}
            >
              🌐 Switch Country ▾
            </button>

            <Link
              href="/contact"
              className="btn-cta"
              style={{
                background: BRAND.gold,
                color: BRAND.dark,
                borderRadius: 8,
                padding: "9px 14px",
                fontSize: 13,
                fontWeight: 800,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                lineHeight: 1,
                boxShadow: "0 2px 8px rgba(253,185,19,0.28)",
              }}
            >
              Contact / Quote
            </Link>

            {/* Mobile toggler */}
            <div
              className="mobile-nav-toggler"
              onClick={mobileMenuOpen}
              style={{ display: "none", fontSize: 26, color: BRAND.dark, cursor: "pointer" }}
              aria-label="Open menu"
            >
              ☰
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className={`mobile-menu ${mobileMenu ? "mobile-menu-open" : ""}`}>
          <nav className="menu-box">
            <div className="close-btn" onClick={mobileMenuClose} aria-label="Close menu">×</div>

            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: 16 }}>
              <img src="/img/resource/logo-6.png" alt="Moltech" style={{ height: 36, width: "auto" }} />
              <span
                style={{
                  fontSize: 10,
                  color: "#6b7280",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                driving sustainability
              </span>
            </div>

            <ul className="navigation">
              <li><Link href="/" onClick={mobileMenuClose}>Home</Link></li>
              <li><Link href="/about" onClick={mobileMenuClose}>About Us</Link></li>

              <li>
                <button className="dropdown-row" onClick={() => setService(!service)}>
                  Services <span>▾</span>
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
                <button className="dropdown-row" onClick={() => setPage(!page)}>
                  Pages <span>▾</span>
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
                  Blog <span>▾</span>
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

            <div style={{ padding: 16 }}>
              <Link href="/contact" onClick={mobileMenuClose} className="btn-cta" style={{
                display: "block",
                textAlign: "center",
                background: BRAND.gold,
                color: BRAND.dark,
                borderRadius: 8,
                padding: "10px 14px",
                fontSize: 13,
                fontWeight: 800,
                textDecoration: "none",
              }}>
                Contact / Quote
              </Link>
            </div>
          </nav>
        </div>

        {isOverlayActive && <div className="overlay" onClick={mobileMenuClose} />}
      </header>

      <style jsx>{`
        /* Desktop hide / Mobile show */
        @media (max-width: 1024px) {
          .desktop-nav { gap: 14px !important; }
          .btn-country { display: none !important; } /* hide country button earlier */
          .btn-cta { padding: 8px 12px !important; font-size: 12px !important; }
        }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-toggler { display: block !important; }
        }
        @media (min-width: 901px) {
          .mobile-menu { display: none !important; }
        }

        /* Links */
        .nav-link {
          position: relative;
          text-decoration: none;
          color: ${BRAND.dark};
          font-weight: 500;
          font-size: 15px;
          transition: color 0.25s ease;
          white-space: nowrap;
        }
        .nav-link:hover { color: ${BRAND.teal}; }
        .nav-link.active { color: ${BRAND.teal}; font-weight: 600; }
        .nav-link.active::after {
          content: "";
          position: absolute;
          left: 0; right: 0; bottom: -8px;
          height: 2px; background: ${BRAND.teal}; border-radius: 2px;
        }

        /* Mobile menu shell */
        .mobile-menu {
          position: fixed;
          top: 0; right: -100%;
          height: 100vh; width: 86%; max-width: 360px;
          background: #fff;
          box-shadow: -8px 0 24px rgba(0,0,0,0.12);
          transition: right 0.28s ease;
          z-index: 1200;
          display: block;
        }
        .mobile-menu-open { right: 0; }
        .menu-box { display: flex; flex-direction: column; height: 100%; }
        .close-btn { font-size: 28px; line-height: 1; padding: 14px 16px; cursor: pointer; align-self: flex-end; }
        .navigation { list-style: none; padding: 0 16px 16px; margin: 0; }
        .navigation > li { border-bottom: 1px solid #f1f5f9; }
        .navigation a, .dropdown-row {
          display: flex; justify-content: space-between; align-items: center;
          width: 100%; padding: 12px 0; text-decoration: none;
          color: ${BRAND.dark}; background: transparent; border: none;
          font-size: 15px; font-weight: 500; cursor: pointer;
        }
        .sub-menu { list-style: none; padding: 0 0 10px 12px; margin: 0; background: #fafafa; }
        .sub-menu li a { padding: 10px 0; font-size: 14px; display: block; }

        .overlay { position: fixed; inset: 0; background: rgba(15,23,42,0.45); z-index: 1100; }
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
