import React from "react";
import style from "@/components/Footer.module.css"; // Assuming you have a CSS file for styling

const Footer = () => {
  return (
    <footer>
      {/* This div contains the main content of the footer, styled with CSS */}
      <div className={style.footerContent}>
        {/* Displays copyright information */}
        <p>&copy; 2024 Malik Musadiq Ahmed. All rights reserved.</p>
        {/* Provides contact email information */}
        <p>Contact us: abc@xyzcompany.com</p>
        {/* Provides contact phone number */}
        <p>Phone: (123) 456-7890</p>
      </div>
    </footer>
  );
};

export default Footer;
