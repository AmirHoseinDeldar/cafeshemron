"use client";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handelToggle = () => {
    setOpen(!open);
  };
  return (
    <header className="main-header">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a href="/" className="navbar-brand">
              <Image alt="" src="/logo.svg" width={70} height={70} />
            </a>
            <div className="navbar-collapse main-menu max-[992px]:hidden">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  <li className="nav-item ">
                    <a className="nav-link" href="/">
                      خانه
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about-us">
                      درباره ما
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/services">
                      خدمات
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/menu">
                      منو
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/gallery">
                      گالری
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contact-us">
                      تماس با ما
                    </a>
                  </li>
                </ul>
              </div>

              <div className="header-btn">
                <a href="/contact-us" className="btn-default">
                  رزرو میز
                </a>
              </div>
            </div>
            <div
              className="navbar-toggle cursor-pointer!"
              onClick={handelToggle}
            >
              <div
                className="slicknav_btn slicknav_collapsed"
                style={{ outline: "none" }}
              >
                <span className="slicknav_menutxt"></span>
                <span className="slicknav_icon slicknav_no-text">
                  <span className="slicknav_icon-bar"></span>
                  <span className="slicknav_icon-bar"></span>
                  <span className="slicknav_icon-bar"></span>
                </span>
              </div>
            </div>
          </div>
        </nav>
        {open && (
          <div className="responsive-menu">
            <div className="slicknav_menu  ">
              <ul
                className="slicknav_nav space-y-2!"
                aria-hidden="false"
                role="menu"
              >
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    خانه
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about-us">
                    درباره ما
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/services">
                    خدمات
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/menu">
                    منو
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/gallery">
                    گالری
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact-us">
                    تماس با ما
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
