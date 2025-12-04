"use client";
import Image from "next/image";
import React, { useState } from "react";

const OurMenu = () => {
  const [activeTab, setActiveTab] = useState("appetizers");

  const menuItems = {
    appetizers: [
      {
        title: "سالاد شمرون",
        price: "10.00T",
        image: "/55b92303-64e5-4c8c-8204-5838654e027e.webp",
        desc: "کاهو پیچ، بیبی اسفناج، سیب فصل، پیاز قرمز، نخود سوخاری، پنیر کبابی، مرغ، سس شمرون",
      },
      {
        title: "سالاد آنتراکت",
        price: "22.00T",
        image: "/153f580f-c749-4b11-9a43-4d6cb18d83f4.webp",
        desc: "کاهو پیچ، کاهو فرانسوی، استیک گوشت، تربچه، گوجه گیلاسی، گردو، درسینگ آنتراکت",
      },
      {
        title: "سالاد شمرون",
        price: "10.00T",
        image: "/55b92303-64e5-4c8c-8204-5838654e027e.webp",
        desc: "کاهو پیچ، بیبی اسفناج، سیب فصل، پیاز قرمز، نخود سوخاری، پنیر کبابی، مرغ، سس شمرون",
      },
      {
        title: "سالاد آنتراکت",
        price: "22.00T",
        image: "/153f580f-c749-4b11-9a43-4d6cb18d83f4.webp",
        desc: "کاهو پیچ، کاهو فرانسوی، استیک گوشت، تربچه، گوجه گیلاسی، گردو، درسینگ آنتراکت",
      },
      {
        title: "سالاد شمرون",
        price: "10.00T",
        image: "/55b92303-64e5-4c8c-8204-5838654e027e.webp",
        desc: "کاهو پیچ، بیبی اسفناج، سیب فصل، پیاز قرمز، نخود سوخاری، پنیر کبابی، مرغ، سس شمرون",
      },
      {
        title: "سالاد آنتراکت",
        price: "22.00T",
        image: "/153f580f-c749-4b11-9a43-4d6cb18d83f4.webp",
        desc: "کاهو پیچ، کاهو فرانسوی، استیک گوشت، تربچه، گوجه گیلاسی، گردو، درسینگ آنتراکت",
      },
    ],
    maincourses: [
      {
        title: "پیتزا مرغ و بیکن",
        price: "35.00T",
        image: "/64818377-c351-4918-8e20-d7f6b3c75908.webp",
        desc: "سس پومودورو، پنیر پیتزا، بیکن گوساله، مرغ، قارچ، زیتون.",
      },
      {
        title: "پیتزا مرغ و بیکن",
        price: "35.00T",
        image: "/64818377-c351-4918-8e20-d7f6b3c75908.webp",
        desc: "سس پومودورو، پنیر پیتزا، بیکن گوساله، مرغ، قارچ، زیتون.",
      },
      {
        title: "پیتزا مرغ و بیکن",
        price: "35.00T",
        image: "/64818377-c351-4918-8e20-d7f6b3c75908.webp",
        desc: "سس پومودورو، پنیر پیتزا، بیکن گوساله، مرغ، قارچ، زیتون.",
      },
      {
        title: "پیتزا مرغ و بیکن",
        price: "35.00T",
        image: "/64818377-c351-4918-8e20-d7f6b3c75908.webp",
        desc: "سس پومودورو، پنیر پیتزا، بیکن گوساله، مرغ، قارچ، زیتون.",
      },
      {
        title: "پیتزا مرغ و بیکن",
        price: "35.00T",
        image: "/64818377-c351-4918-8e20-d7f6b3c75908.webp",
        desc: "سس پومودورو، پنیر پیتزا، بیکن گوساله، مرغ، قارچ، زیتون.",
      },
      {
        title: "پیتزا مرغ و بیکن",
        price: "35.00T",
        image: "/64818377-c351-4918-8e20-d7f6b3c75908.webp",
        desc: "سس پومودورو، پنیر پیتزا، بیکن گوساله، مرغ، قارچ، زیتون.",
      },
    ],
    sides: [
      {
        title: "سیب‌زمینی سرخ‌کرده",
        price: "8.00T",
        image: "/our-menu-image-3.png",
        desc: "سیب‌زمینی‌های طلایی و ترد؛ انتخابی بی‌نقص در کنار هر غذا.",
      },
      {
        title: "سیب‌زمینی سرخ‌کرده",
        price: "8.00T",
        image: "/our-menu-image-3.png",
        desc: "سیب‌زمینی‌های طلایی و ترد؛ انتخابی بی‌نقص در کنار هر غذا.",
      },
      {
        title: "سیب‌زمینی سرخ‌کرده",
        price: "8.00T",
        image: "/our-menu-image-3.png",
        desc: "سیب‌زمینی‌های طلایی و ترد؛ انتخابی بی‌نقص در کنار هر غذا.",
      },
      {
        title: "سیب‌زمینی سرخ‌کرده",
        price: "8.00T",
        image: "/our-menu-image-3.png",
        desc: "سیب‌زمینی‌های طلایی و ترد؛ انتخابی بی‌نقص در کنار هر غذا.",
      },
      {
        title: "سیب‌زمینی سرخ‌کرده",
        price: "8.00T",
        image: "/our-menu-image-3.png",
        desc: "سیب‌زمینی‌های طلایی و ترد؛ انتخابی بی‌نقص در کنار هر غذا.",
      },
    ],
    desserts: [
      {
        title: "کیک شکلاتی",
        price: "12.00T",
        image: "/our-menu-image-1.png",
        desc: "کیک شکلاتی غنی و نرم با روکشی از گاناش خامه‌ای.",
      },
      {
        title: "کیک شکلاتی",
        price: "12.00T",
        image: "/our-menu-image-1.png",
        desc: "کیک شکلاتی غنی و نرم با روکشی از گاناش خامه‌ای.",
      },
      {
        title: "کیک شکلاتی",
        price: "12.00T",
        image: "/our-menu-image-1.png",
        desc: "کیک شکلاتی غنی و نرم با روکشی از گاناش خامه‌ای.",
      },
      {
        title: "کیک شکلاتی",
        price: "12.00T",
        image: "/our-menu-image-1.png",
        desc: "کیک شکلاتی غنی و نرم با روکشی از گاناش خامه‌ای.",
      },
      {
        title: "کیک شکلاتی",
        price: "12.00T",
        image: "/our-menu-image-1.png",
        desc: "کیک شکلاتی غنی و نرم با روکشی از گاناش خامه‌ای.",
      },
    ],
  };
  const tabs = Object.keys(menuItems);
  const tabLabels = {
    appetizers: "پیش‌غذا",
    maincourses: "غذاهای اصلی",
    sides: "کنارغذا",
    desserts: "دسرها",
  };
  return (
    <div className="our-menu">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title">
              <h3 className="fadeInUp">از منوی ما</h3>
              <h2 className="text-anime-style-2">
                منویی الهام‌گرفته که <span>ترکیبی از سنت</span> است
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="our-menu-tab">
              <div
                className="our-menu-tab-nav wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <ul className="nav nav-tabs">
                  {tabs.map((tab) => (
                    <li className="nav-item" key={tab}>
                      <button
                        className={`nav-link  cursor-pointer! ${
                          activeTab === tab ? "active" : ""
                        }`}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tabLabels[tab]}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tab-content">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="our-menu-list">
                      {menuItems[activeTab].length > 0 ? (
                        menuItems[activeTab].map((item, index) => (
                          <div className="our-menu-item">
                            <div className="our-menu-image">
                              <Image
                                src={item.image}
                                alt={item.title}
                                width={100}
                                height={100}
                              />
                            </div>
                            <div className="menu-item-body">
                              <div className="menu-item-title">
                                <h3>{item.title}</h3>
                                <hr />
                                <span>{item.price}</span>
                              </div>
                              <div className="menu-item-content">
                                <p>{item.desc}</p>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p>موردی برای نمایش وجود ندارد.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div
              className="section-footer-text wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <p>
                آماده‌اید بهترین طعم‌ها رو بچشید؟{" "}
                <a href="/menu">منو ما رو ببینید!</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
