"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

import { FaStar } from "react-icons/fa";

const DailyOffer = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const WOW = require("wowjs").WOW; // ← درست
      new WOW({ live: false }).init(); // ← فقط WOW، نه WOW.WOW
    }
  }, []);

  return (
    <div className="daily-offer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="daily-offer-image">
              {" "}
              <div className="daily-offer-img">
                <figure className="">
                  <Image
                    src="/daily-offer-image.png"
                    alt="Daily Offer"
                    width={1200}
                    height={1200}
                  />
                </figure>
              </div>
              <div className="delicious-burger-box">
                <div className="delicious-burger-title">
                  <h3>برگر خوشمزه</h3>
                </div>
                <div className="delicious-burger-rating flex gap-1 text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="delicious-burger-list">
                  <ul>
                    <li>سس گوجه‌فرنگی</li>
                    <li>سبزیجات</li>
                    <li>کاهو</li>
                    <li>برش پنیر</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="daily-offer-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">پیشنهاد های روز ما</h3>
                <h2 className="text-anime-style-2">
                  طعم صرفه‌جویی با <span>ویژه‌های روزانه</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  هر روز فرصتی تازه است تا غذاهای مورد علاقه‌تان را با تخفیف
                  ویژه امتحان کنید. پیشنهادهای متنوع روزانه ما را کشف کنید و با
                  هزینه کمتر از طعم‌های فوق‌العاده لذت ببرید.
                </p>
              </div>
              <div className="daily-offer-list wow fadeInUp">
                <ul>
                  <li>مواد اولیه تازه و محلی</li>
                  <li>گزینه‌های گیاهی و مناسب رژیم غذایی</li>
                  <li>طعم‌های منحصربه‌فرد و ترکیب‌های خاص</li>
                </ul>
              </div>
              <div className="daily-offer-btn wow fadeInUp">
                <Link href="/contact-us" className="btn-default">
                  رزرو میز
                </Link>
                <Link href="/menu" className="btn-default btn-highlighted">
                  مشاهده منو
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyOffer;
