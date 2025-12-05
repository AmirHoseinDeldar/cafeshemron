import Image from "next/image";
import React from "react";

const OurBlog = () => {
  return (
    <div className="our-blog">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title">
              {" "}
              <h3 className="wow fadeInUp">آخرین مقالات ما</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                جدیدترین مطالب و نکات جذاب <br /> دنیای کافه و غذا
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="post-item wow fadeInUp">
              <div className="post-featured-image">
                <a href="/" data-cursor-text="مشاهده مقاله">
                  <figure className="image-anime">
                    <Image
                      src="/377807c2-3609-4a24-a2cb-0a55b9b04569.webp"
                      alt="Blog 1"
                      layout="responsive"
                      width={600}
                      height={400}
                    />
                  </figure>
                </a>
              </div>
              <div className="blog-item-body">
                <div className="post-item-content">
                  <h3>
                    <a href="/">۵ نکته برای بهبود تجربه صرف غذا در منزل</a>
                  </h3>
                </div>
                <div className="blog-item-btn">
                  <a
                    href="/
                  
                "
                    className="readmore-btn"
                  >
                    ادامه مطلب
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="col-lg-4 col-md-6">
            <div
              className="post-item wow fadeInUp"
              data-wow-delay="0.4s"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeInUp",
              }}
            >
              <div className="post-featured-image">
                <a href="/" data-cursor-text="مشاهده">
                  <figure className="image-anime">
                    <img
                      src="/edd9896e-2a4f-4664-a224-55563b90c00d.webp"
                      alt=""
                    />
                  </figure>
                </a>
              </div>
              <div className="blog-item-body">
                <div className="post-item-content">
                  <h3>
                    <a href="/">خلق لحظات فراموش‌نشدنی صرف غذا با دوستان</a>
                  </h3>
                </div>
                <div className="blog-item-btn">
                  <a href="/" className="readmore-btn">
                    ادامه مطلب
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="post-item wow fadeInUp"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeInUp",
              }}
            >
              <div className="post-featured-image">
                <a href="/" data-cursor-text="مشاهده">
                  <figure className="image-anime">
                    <img
                      src="/9fb90a79-3d2f-4ff0-af1a-ca5927672462.webp"
                      alt=""
                    />
                  </figure>
                </a>
              </div>
              <div className="blog-item-body">
                <div className="post-item-content">
                  <h3>
                    <a href="/">چرا مواد اولیه محلی تفاوت ایجاد می‌کنند</a>
                  </h3>
                </div>
                <div className="blog-item-btn">
                  <a href="/" className="readmore-btn">
                    ادامه مطلب
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
