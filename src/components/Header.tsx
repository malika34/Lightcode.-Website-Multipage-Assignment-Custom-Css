"use client";
import { useState, useEffect } from "react";
import style from "@/components/Header.module.css";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size to manage menu state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 950) {
        setIsMobile(true); // Enable mobile mode
      } else {
        setIsMobile(false); // Disable mobile mode
        setIsMenuOpen(false); // Reset menu to closed on larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility on mobile
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      {/* Main navigation bar */}
      <div className={style.mainNav}>
        <Link href={"/"} className={style.logo}>
          LightCode.
        </Link>
        <div className={style.menuContainer}>
          {/* Navigation links for small screens */}
          <ul
            className={`${style.navLinks} ${isMenuOpen ? style.showMenu : ""}`}
          >
            <li>
              <Link href={"/#hero"} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href={"/#services"} onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link href={"/#work"} onClick={closeMenu}>
                Work
              </Link>
            </li>
            <li>
              <Link href={"/contact"} onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
          {/* Hamburger menu icon (toggle between hamburger and close) */}
          <div className={style.menuIcon} onClick={toggleMenu}>
            {isMenuOpen ? "✖" : "☰"}
          </div>
        </div>
      </div>

      {/* Sub navigation (social links) */}
      <div className={style.subNav}>
        <ul>
          <li>
            <Link href={"/"}>
              <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link href={"/"}>
              <i className="fa-brands fa-youtube"></i>
            </Link>
            <Link href={"/"}>
              <i className="fa-brands fa-tiktok"></i>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
