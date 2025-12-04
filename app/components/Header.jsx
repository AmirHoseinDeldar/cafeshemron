"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const WOW = require("wowjs").WOW; // ← درست
      new WOW({ live: false }).init(); // ← فقط WOW، نه WOW.WOW
    }
  }, []);

  return (
    <div
      className="hero parallaxie"
      style={{
        backgroundImage: 'url("/hero-bg.jpg")',
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center 0px",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <div className="section-title">
                <h3
                  className="wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  خاطرات ما وابسته به احساسند
                </h3>
                <h1 className="text-anime-style-2">
                  شمرون در زبان فارسی به معنی <br />
                  (جای مرتفع و تفرجگاه)
                </h1>
                <p
                  className="wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  خود را در یک تجربه غذاخوری بی‌نظیر غرق کنید، جایی که هر غذا
                  شاهکاری از طعم و مزه است که با دقت و ظرافت تهیه شده است. از
                  تازه‌ترین مواد اولیه.
                </p>
              </div>
              <div className="hero-btn wow fadeInUp">
                <Link href="/contact-us" className="btn-default">
                  رزرو میز
                </Link>{" "}
                <Link href="#" className="download-app-btn">
                  دانلود اپلیکیشن
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-images">
              <div className="hero-image">
                <figure className="image-anime">
                  <Image
                    width={1200}
                    height={1200}
                    src="/hero-img.jpg"
                    alt="heroimg"
                  />
                </figure>
              </div>
              <div className="hero-circle-img-1">
                <figure className="image-anime">
                  <Image
                    width={1200}
                    height={1200}
                    src="/hero-circle-img-1.jpg"
                    alt="circle1"
                  />
                </figure>
              </div>{" "}
              <div className="hero-circle-img-2">
                <figure className="image-anime">
                  <Image
                    width={1200}
                    height={1200}
                    src="/hero-circle-img-2.jpg"
                    alt="circle2"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
