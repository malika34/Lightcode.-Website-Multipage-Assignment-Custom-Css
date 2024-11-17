import style from "@/components/Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      {/* Main navigation bar containing the logo and menu links */}
      <div className={style.mainNav}>
        <Link href={"/"} className={style.logo}>
          LightCode.
        </Link>
        <ul>
          <li>
            <Link href={"/#hero"}>Home</Link>
            <Link href={"/#services"}>Services</Link>
            <Link href={"/#work"}>Work</Link>
          </li>
          {/* Menu icon for mobile or responsive design */}
          <div className={style.menuIcon}>&#9776;</div>
        </ul>
      </div>

      {/* Sub navigation bar containing social media links */}
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
