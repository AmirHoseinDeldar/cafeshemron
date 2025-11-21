import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurDishes = () => {
  return (
    <div className="our-dishes">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title">
              <h3 className="wow fadeInUp">غذاهای اصلی ما</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                اشتهایتان را با
                <span>
                  غذاهای <br />
                  اصلی ویژه ما
                </span>
                برآورده کنید
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="our-dish-item wow fadeInUp">
              <div className="our-dish-img">
                <figure className="image-anime">
                  <Image
                    src="/our-dish-image-1.jpg"
                    alt="Dish 1"
                    width={300}
                    height={200}
                  />
                </figure>
              </div>
              <div className="our-dish-content">
                <h3>سوپ</h3>
                <p>
                  سوپ گرم ما، آرامش‌بخش و پر از طعم هستند؛ بهترین انتخاب برای
                  شروع یک تجربه دلنشین.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="our-dish-item wow fadeInUp">
              <div className="our-dish-img">
                <figure className="image-anime">
                  <Image
                    src="/our-dish-image-2.jpg"
                    alt="Dish 1"
                    width={300}
                    height={200}
                  />
                </figure>
              </div>
              <div className="our-dish-content">
                <h3>سالاد</h3>
                <p>
                  طراوت‌بخش، پرانرژی و سرشار از طعم‌های تازه؛ سالاد های ما حسی
                  متفاوت به شما می‌دهند.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="our-dish-item wow fadeInUp">
              <div className="our-dish-img">
                <figure className="image-anime">
                  <Image
                    src="/our-dish-image-3.jpg"
                    alt="Dish 1"
                    width={300}
                    height={200}
                  />
                </figure>
              </div>
              <div className="our-dish-content">
                <h3>غذای گرم</h3>
                <p>
                  با دستورهای ویژه و طعم‌های جسورانه،غذاهای ما سلیقه‌ی هر
                  ذائقه‌ای را راضی می‌کند.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="our-dish-item wow fadeInUp">
              <div className="our-dish-img">
                <figure className="image-anime">
                  <Image
                    src="/our-dish-image-4.jpg"
                    alt="Dish 1"
                    width={300}
                    height={200}
                  />
                </figure>
              </div>
              <div className="our-dish-content">
                <h3>سبزیجات</h3>
                <p>
                  سبزیجات ما آغازگر یک تجربه خوشمزه و لذت‌بخش‌اند؛ ترکیبی از
                  طعم‌های ناب برای هر سلیقه.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="section-footer-text wow fadeInUp">
              <p>
                هوس یه غذای خوشمزه کردی؟{" "}
                <Link href="/menu">مشاهده همه غذاها!</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDishes;
