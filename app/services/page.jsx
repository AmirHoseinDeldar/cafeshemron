import React from "react";
import HeaderComponents from "../components/HeaderComponents";
import DailyOffer from "../components/DailyOffer";
import ReserveTable from "../components/ReserveTable";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <HeaderComponents title={"خدمات ما"} />
      <div className="page-services">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp">
                <div className="icon-box">
                  <Image
                    alt=""
                    src="/icon-service-1.svg"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="service-item-content">
                  <h3>تجربه صرف غذا در رستوران</h3>
                  <p>
                    از فضایی گرم و پرانرژی همراه با خدمات بی‌نقص و غذاهای
                    خوشمزه‌ای که با دقت تهیه شده‌اند لذت ببرید.
                  </p>
                </div>
                <div className="service-readmore-btn">
                  <a href="/service" className="readmore-btn">
                    ادامه مطلب
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="service-item wow fadeInUp"
                data-wow-delay="0.2s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="icon-box">
                  <img src="/icon-service-2.svg" alt="" />
                </div>
                <div className="service-item-content">
                  <h3>رزرو آنلاین میز</h3>
                  <p>
                    به‌سادگی از طریق سیستم رزرو آنلاین ما، میز خود را رزرو کنید
                    و از تجربه‌ای روان و راحت لذت ببرید.
                  </p>
                </div>
                <div className="service-readmore-btn">
                  <a href="/service" className="readmore-btn">
                    ادامه مطلب
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="service-item wow fadeInUp"
                data-wow-delay="0.4s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="icon-box">
                  <img src="/icon-service-3.svg" alt="" />
                </div>
                <div className="service-item-content">
                  <h3>سرویس ارسال به منزل</h3>
                  <p>
                    از غذاهای مورد علاقه‌تان در خانه لذت ببرید با خدمات ارسال
                    سریع و قابل اعتماد ما.
                  </p>
                </div>
                <div className="service-readmore-btn">
                  <a href="/service" className="readmore-btn">
                    ادامه مطلب
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="service-item wow fadeInUp"
                data-wow-delay="0.6s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.6s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="icon-box">
                  <img src="/icon-service-4.svg" alt="" />
                </div>
                <div className="service-item-content">
                  <h3>پذیرایی برای رویدادها</h3>
                  <p>
                    از مهمانی‌های کوچک تا جشن‌های بزرگ، ما طعم و کیفیت آشپزی خود
                    را به رویداد ویژه‌ی شما می‌آوریم.
                  </p>
                </div>
                <div className="service-readmore-btn">
                  <a href="/service" className="readmore-btn">
                    ادامه مطلب
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="service-item wow fadeInUp"
                data-wow-delay="0.8s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.8s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="icon-box">
                  <img src="/icon-service-5.svg" alt="" />
                </div>
                <div className="service-item-content">
                  <h3>سفارشات بیرون‌بر</h3>
                  <p>
                    گزینه‌های سریع و راحت بیرون‌بر برای زمانی که در مسیر هستید
                    اما هنوز هوس طعم‌های ما را دارید.
                  </p>
                </div>
                <div className="service-readmore-btn">
                  <a href="/service" className="readmore-btn">
                    ادامه مطلب
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="service-item wow fadeInUp"
                data-wow-delay="1s"
                style={{
                  visibility: "visible",
                  animationDelay: "1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="icon-box">
                  <img src="/icon-service-6.svg" alt="" />
                </div>
                <div className="service-item-content">
                  <h3>سالن خصوصی</h3>
                  <p>
                    میزبان دورهمی‌ها یا مراسم خصوصی خود در فضایی اختصاصی باشید
                    که متناسب با نیاز شما طراحی شده است.
                  </p>
                </div>
                <div className="service-readmore-btn">
                  <a href="/service" className="readmore-btn">
                    ادامه مطلب
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DailyOffer />
      <ReserveTable />
    </>
  );
};

export default Services;
