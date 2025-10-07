"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navlink from "./Navlink";
import { usePathname } from "next/navigation";

// Brand colors from your logo
// ...imports stay the same

const BRAND = {
  teal: "#26B6E0",
  green: "#2DBB7A",
  purple: "#4B3DBB",
  dark: "#0E0F2C",
};

const HeaderFour = () => {
  // ...state/hooks stay the same

  return (
    <header className="main-header main-header-two style4">
      <div id="sticky-header" className={`menu-area ${scrollClassName}`}>
        <div className="main-header-two__outer">
          {/* Logo */}
          <div className="logo-box-two" style={{ paddingRight: 16, display: "flex", alignItems: "center" }}>
            <Link href="/" aria-label="Home">
              <img src="/img/resource/logo-6.png" alt="Logo"
                   style={{ height: 56, width: "auto", maxHeight: "8vh" }} />
            </Link>
          </div>

          <div className="menu-area__inner">
            <div className="mobile-nav-toggler" onClick={mobileMenuOpen}><i className="fas fa-bars"></i></div>

            <div className="menu-wrap" style={{ width: "100%" }}>
              <nav className="menu-nav" style={{ width: "100%" }}>
                <div className="main-header-two__inner" style={{ width: "100%" }}>
                  {/* NAV BAR (keep white; no yellow) */}
                  <div className="main-header-two__bottom" style={{ borderTop: "none", background: "#fff" }}>
                    <div className="main-header-two__bottom-left">
                      <div className="navbar-wrap main-menu">
                        <ul className="navigation">
                          {/* ✅ Give Home an active class when on "/" */}
                          <li className={currentPath === "/" ? "active" : ""}>
                            <Link href="/">Home</Link>
                          </li>

                          <Navlink className="" activeClasses="active" text="About" href="/about" liClassName="" />

                          <li className={
                              currentPath === "/services" ||
                              currentPath === "/road-transport" ||
                              currentPath === "/air-transport" ||
                              currentPath === "/cargo-transport" ||
                              currentPath === "/ocean-freight" ||
                              currentPath === "/rail-transport" ||
                              currentPath === "/warehousing"
                                ? "active menu-item-has-children"
                                : "menu-item-has-children"
                            }>
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

                          <li className={currentPath && (currentPath.startsWith("/team") || currentPath.startsWith("/projects") || currentPath.startsWith("/error"))
                                ? "active menu-item-has-children" : "menu-item-has-children"}>
                            <Link href="#">Pages</Link>
                            <ul className="sub-menu">
                              <li><Link href="/team" className={currentPath === "/team" ? "active" : ""}>Team</Link></li>
                              <li><Link href="/team-details" className={currentPath === "/team-details" ? "active" : ""}>Team Details</Link></li>
                              <li><Link href="/projects" className={currentPath === "/projects" ? "active" : ""}>Projects</Link></li>
                              <li><Link href="/project-details" className={currentPath === "/project-details" ? "active" : ""}>Project Details</Link></li>
                              <li><Link href="/error" className={currentPath === "/error" ? "active" : ""}>404</Link></li>
                            </ul>
                          </li>

                          <li className={currentPath && currentPath.startsWith("/blog") ? "active menu-item-has-children" : "menu-item-has-children"}>
                            <Link href="#">Blog</Link>
                            <ul className="sub-menu">
                              <li><Link href="/blog" className={currentPath === "/blog" ? "active" : ""}>Blog</Link></li>
                              <li><Link href="/blog-standard" className={currentPath === "/blog-standard" ? "active" : ""}>Blog standard</Link></li>
                              <li><Link href="/blog-details" className={currentPath === "/blog-details" ? "active" : ""}>Blog Details</Link></li>
                            </ul>
                          </li>

                          <Navlink className="" activeClasses="active" text="Contact" href="/contact" liClassName="" />
                        </ul>
                      </div>
                    </div>

                    {/* Right: CTA only */}
                    <div className="main-header-two__bottom-right" style={{ gap: 14 }}>
                      <Link
                        href={`tel:+70264566579`}
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
                        Get a Free Quote: +70 264 566 579
                        <span className="icon-right-arrow" style={{ marginLeft: 8 }}></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>

          {/* mobile menu unchanged */}
          {/* ... */}
        </div>
      </div>
    </header>
  );
};

export default HeaderFour;
