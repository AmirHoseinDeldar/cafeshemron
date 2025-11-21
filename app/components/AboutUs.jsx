import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutCafe = () => {
  return (
    <div className="about-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="about-us-image">
              <div className="about-us-img">
                <figure className="image-anime">
                  <Image
                    width={1200}
                    height={1200}
                    src="/about-us-image.jpg"
                    alt="us"
                  />
                </figure>
              </div>
              <div className="company-experience">
                <div className="icon-box">
                  <Image
                    width={1200}
                    height={1200}
                    src="/icon-company-experience.svg"
                    alt="experience"
                  />
                </div>
                <div className="company-experience-content">
                  <h3>
                    <span>15</span>+ سال تجربه
                  </h3>
                </div>
              </div>
              <div className="about-author-img">
                <figure className="image-anime">
                  <Image
                    width={1200}
                    height={1200}
                    src="/about-us-img-2.jpg"
                    alt="team"
                  />
                </figure>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 order-1">
            <div className="about-us-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">درباره ما</h3>
                <h2 className="text-anime-style-2">
                  تعهد ما به اصالت <span>برتری</span>
                </h2>
                <p className="wow fadeInUp">
                  هر غذایی که ما تهیه می‌کنیم، جشنواره‌ای از ارتباط است که با
                  اشتیاق ساخته شده و از طعم‌های متنوع الهام گرفته است. به ما
                  بپیوندید در فضایی دلپذیر که هر لقمه شادی را به ارمغان می‌آورد
                  و هر لحظه تبدیل به یک یادگاری ارزشمند می‌شود.
                </p>
              </div>
              <div className="about-content-list wow fadeInUp">
                <ul>
                  <li>مواد اولیه فصلی و محلی</li>
                  <li>گزینه‌های گیاهی و مناسب برای رژیم‌های غذایی</li>
                  <li>ترکیب‌های بی‌نظیر و طعم‌های منحصر به فرد</li>
                </ul>
              </div>
              <div className="about-content-btn wow fadeInUp">
                <Link href="/contact-us" className="btn-default">
                  سفارش دهید
                </Link>{" "}
                <Link href="/about" className="btn-default btn-highlighted">
                  بیشتر بخوانید
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-12 order-3">
            <div className="about-detail-box">
              <div className="about-detail-item wow fadeInUp animated">
                <div className="icon-box">
                  <Image
                    width={1200}
                    height={1200}
                    src="/icon-about-detail-1.svg"
                    alt=""
                  />
                </div>
                <div className="about-detail-content">
                  <h3>غذای لوکس</h3>
                  <p>
                    این تجربه‌ای بسیار شخصی است و می‌تواند تنها یک تجربه مثبت
                    باشد.
                  </p>
                </div>
              </div>
              <div className="about-detail-item wow fadeInUp animated">
                <div className="icon-box">
                  <Image
                    width={1200}
                    height={1200}
                    src="/icon-about-detail-2.svg"
                    alt=""
                  />
                </div>
                <div className="about-detail-content">
                  <h3>طعم‌های فراوان</h3>
                  <p>
                    در دستور پخت مخفی، ما به شدت به هنر تهیه غذا افتخار می‌کنیم.
                  </p>
                </div>
              </div>
              <div className="about-detail-item wow fadeInUp animated">
                <div className="icon-box">
                  <Image
                    width={1200}
                    height={1200}
                    src="/icon-about-detail-3.svg"
                    alt=""
                  />
                </div>
                <div className="about-detail-content">
                  <h3>غذای بومی</h3>
                  <p>
                    با استفاده از مواد محلی، چرخش‌های منحصر به فرد بر روی
                    طعم‌های سنتی.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCafe;
