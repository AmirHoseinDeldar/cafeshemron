"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import Counter from "./Counter";
import { FaPlus } from "react-icons/fa";

const OurIngredients = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const WOW = require("wowjs").WOW; // ← درست
      new WOW({ live: false }).init(); // ← فقط WOW، نه WOW.WOW
    }
  }, []);
  return (
    <div className="our-ingredients">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="our-ingredients-image">
              <div className="our-ingredients-img">
                <Image
                  alt=""
                  src="/our-ingredients-image.png"
                  layout="responsive"
                  width={500}
                  height={300}
                />
              </div>
              <div className="happy-customer-box">
                <div className="happy-customer-content">
                  <h3>
                    <span className="counter">620</span>+ مشتری ویژه
                  </h3>
                  <p>مشتری خوشحال</p>
                </div>
                <div className="happy-customer-">
                  <div className="customer-image">
                    <div className="image-anime">
                      <Image
                        alt=""
                        src="/happy-customer-img-1.jpg"
                        layout="responsive"
                        width={500}
                        height={300}
                      />
                    </div>
                  </div>
                  <div className="customer-image">
                    <div className="image-anime">
                      <Image
                        alt=""
                        src="/happy-customer-img-2.jpg"
                        layout="responsive"
                        width={500}
                        height={300}
                      />
                    </div>
                  </div>
                  <div className="customer-image">
                    <div className="image-anime">
                      <Image
                        alt=""
                        src="/happy-customer-img-3.jpg"
                        layout="responsive"
                        width={500}
                        height={300}
                      />
                    </div>
                  </div>
                  <div className="customer-image add-more">
                    <FaPlus />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 order-1">
            <div className="our-ingredients-content">
              <div className="section-title">
                <h3
                  className="wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  مواد اولیه ما
                </h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  بهترین طعم‌ها از <span>تازه‌ترین مواد طبیعی</span> می‌آیند
                </h2>
                <p
                  className="wow fadeInUp"
                  data-wow-delay="0.2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInUp",
                  }}
                >
                  ما به استفاده از تازه‌ترین مواد اولیه با دقت انتخاب‌شده افتخار
                  می‌کنیم؛ موادی که فاقد نگهدارنده و افزودنی‌های مصنوعی هستند.
                  با هر لقمه تفاوت را بچشید، زیرا غذاهای ما از بهترین‌های طبیعت
                  تهیه شده‌اند.
                </p>
              </div>
              <div
                className="our-ingredients-list wow fadeInUp"
                data-wow-delay="0.4s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="ingredients-list-item">
                  <div className="icon-box">
                    <Image
                      alt=""
                      src="/icon-ingredients-list-1.svg"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="ingredients-list-content">
                    <h3>بهترین ویژگی ها</h3>
                  </div>
                </div>
                <div className="ingredients-list-item">
                  <div className="icon-box">
                    <Image
                      alt=""
                      src="/icon-ingredients-list-2.svg"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="ingredients-list-content">
                    <h3>برنامه تخفیف‌ها</h3>
                  </div>
                </div>
                <div className="ingredients-list-item">
                  <div className="icon-box">
                    <Image
                      alt=""
                      src="/icon-ingredients-list-3.svg"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="ingredients-list-content">
                    <h3>اولین سفارش</h3>
                  </div>
                </div>
              </div>

              <div
                className="our-ingredients-btn wow fadeInUp"
                data-wow-delay="0.6s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.6s",
                  animationName: "fadeInUp",
                }}
              >
                <a href="/contact-us" className="btn-default">
                  رزرو میز
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-12 order-3">
            <div className="ingredient-counter-list">
              <div className="ingredient-counter-item">
                <div className="icon-box">
                  <Image
                    alt=""
                    src="/icon-ingredient-counter-1.svg"
                    width={600}
                    height={600}
                  />
                </div>
                <div className="ingredient-counter-content">
                  <h2>
                    <Counter target={309} />
                  </h2>
                  <p>سرآشپز حرفه‌ای</p>
                </div>
              </div>
              <div className="ingredient-counter-item">
                <div className="icon-box">
                  <Image
                    alt=""
                    src="/icon-ingredient-counter-2.svg"
                    width={600}
                    height={600}
                  />
                </div>
                <div className="ingredient-counter-content">
                  <h2>
                    <Counter target={453} />
                  </h2>
                  <p>مورد غذایی</p>
                </div>
              </div>
              <div className="ingredient-counter-item">
                <div className="icon-box">
                  <Image
                    alt=""
                    src="/icon-ingredient-counter-3.svg"
                    width={600}
                    height={600}
                  />
                </div>
                <div className="ingredient-counter-content">
                  <h2>
                    <Counter target={25} />
                  </h2>
                  <p>سال تجربه</p>
                </div>
              </div>
              <div className="ingredient-counter-item">
                <div className="icon-box">
                  <Image
                    alt=""
                    src="/icon-ingredient-counter-4.svg"
                    width={600}
                    height={600}
                  />
                </div>
                <div className="ingredient-counter-content">
                  <h2>
                    <Counter target={400} />
                    k+
                  </h2>
                  <p>مشتریان راضی</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurIngredients;
