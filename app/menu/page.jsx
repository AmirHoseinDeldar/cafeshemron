import React from "react";
import HeaderComponents from "../components/HeaderComponents";
import ReserveTable from "../components/ReserveTable";
import Image from "next/image";

const Menu = () => {
  const beverages = [
    {
      id: 1,
      name: "لاسـی مانگو",
      price: "۴۵٬۰۰۰ تومان",
      description: "نوشیدنی خنک و ماستی با طعم انبه تازه.",
      image: "/beverages-img-1.png",
      delay: "0s",
    },
    {
      id: 2,
      name: "چای ماسالا",
      price: "۵۵٬۰۰۰ تومان",
      description: "چای هندی ادویه‌دار با عطر و طعمی تند و دلنشین.",
      image: "/beverages-img-2.png",
      delay: "0.2s",
    },
    {
      id: 3,
      name: "آیس‌کافی",
      price: "۷۹٬۰۰۰ تومان",
      description: "قهوه سرد با طعمی غنی و بافتی نرم و خنک.",
      image: "/beverages-img-3.png",
      delay: "0.4s",
    },
    {
      id: 4,
      name: "موهیتوی نعنا",
      price: "۴۹٬۰۰۰ تومان",
      description: "نوشیدنی خنک با ترکیب نعنا و طعم مرکبات.",
      image: "/beverages-img-4.png",
      delay: "0.6s",
    },
    {
      id: 5,
      name: "لیموناد",
      price: "۵۱٬۰۰۰ تومان",
      description: "لیموناد خانگی با طعمی ترش و شیرین و تازه.",
      image: "/beverages-img-5.png",
      delay: "0.8s",
    },
    {
      id: 6,
      name: "آب نارگیل",
      price: "۳۹٬۰۰۰ تومان",
      description: "آب نارگیل طبیعی، خنک و سرشار از انرژی.",
      image: "/beverages-img-6.png",
      delay: "1s",
    },
  ];
  const desserts = [
    {
      id: 1,
      name: "کیک شکلاتی لاوا",
      price: "۴۵٬۰۰۰ تومان",
      description: "کیک گرم و لطیف شکلاتی با مرکز روان و داغ.",
      image: "/desserts-img-1.png",
      delay: "0s",
    },
    {
      id: 2,
      name: "گلاب جامون",
      price: "۴۵٬۰۰۰ تومان",
      description: "گلوله‌های شیرینی هندی نرم، خیسانده در شربت شیرین.",
      image: "/desserts-img-2.png",
      delay: "0.2s",
    },
    {
      id: 3,
      name: "تیرامیسو",
      price: "۴۵٬۰۰۰ تومان",
      description: "دسر کلاسیک ایتالیایی با طعم خامه و قهوه.",
      image: "/desserts-img-3.png",
      delay: "0.4s",
    },
    {
      id: 4,
      name: "پانا کوتا وانیلی",
      price: "۴۵٬۰۰۰ تومان",
      description: "دسر خامه‌ای و لطیف با عطر وانیل طبیعی.",
      image: "/desserts-img-4.png",
      delay: "0.6s",
    },
    {
      id: 5,
      name: "چیزکیک بری",
      price: "۴۵٬۰۰۰ تومان",
      description: "چیزکیک نرم و خامه‌ای با تاپینگ میوه‌های تازه.",
      image: "/desserts-img-5.png",
      delay: "0.8s",
    },
    {
      id: 6,
      name: "پای سیب",
      price: "۴۵٬۰۰۰ تومان",
      description: "پر از سیب گرم و دارچینی در خمیر ترد و طلایی.",
      image: "/desserts-img-6.png",
      delay: "1s",
    },
  ];
  const starters = [
    {
      id: 1,
      name: "اسپرینگ رول",
      price: "۱۶ دلار",
      description: "رول‌های ترد پرشده با سبزیجات، سرو شده با سس مخصوص.",
      image: "/starters-img-1.png",
      delay: "0s",
    },
    {
      id: 2,
      name: "آلو تیکی",
      price: "۱۲ دلار",
      description: "کتلت سیب‌زمینی طلایی سرو شده با چتنی.",
      image: "/starters-img-2.png",
      delay: "0.2s",
    },
    {
      id: 3,
      name: "پنیـر تیکا",
      price: "۲۶ دلار",
      description: "پنیر گریل‌شده با ادویه‌های مخصوص.",
      image: "/starters-img-3.png",
      delay: "0.4s",
    },
    {
      id: 4,
      name: "کباب سبزیجات",
      price: "۲۰ دلار",
      description:
        "کباب سبزیجات و گیاهان معطر، گریل‌شده تا رسیدن به عطر و طعم ایده‌آل.",
      image: "/starters-img-4.png",
      delay: "0.6s",
    },
    {
      id: 5,
      name: "قارچ تند",
      price: "۱۰ دلار",
      description: "قارچ‌های ترد و تند با طعمی ترش و خوشایند.",
      image: "/starters-img-5.png",
      delay: "0.8s",
    },
    {
      id: 6,
      name: "پاکورای سبزیجات",
      price: "۲۲ دلار",
      description: "باجه‌های ترد سبزیجات سرو شده با سس مخصوص.",
      image: "/starters-img-6.png",
      delay: "1s",
    },
  ];
  return (
    <>
      <HeaderComponents title="منو" />

      <div className="page-menu">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3
                  className="wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  بهترین طعم‌هایی که شما را شگفت‌زده می‌کند
                </h3>

                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  منو ویژه ما
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
                  از غذاهای منحصربه‌فرد رستوران باسیلیکوی ما لذت ببرید، طعم‌هایی
                  که فقط در رستوران ما پیدا می‌شوند. طعم اصیل، کیفیت بالا و
                  تجربه‌ای فراموش‌نشدنی در هر لقمه.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="special-menu-list">
                <div className="special-menu-item wow fadeInUp">
                  <div className="special-menu-img">
                    <a href="#starters">
                      <figure className="image-anime">
                        <Image
                          alt=""
                          src="/special-menu-img-1.jpg"
                          width={1600}
                          height={1600}
                        />
                      </figure>
                    </a>
                  </div>

                  <div className="special-menu-item-content">
                    <h3>
                      <a href="#starters">پیش‌غذاها</a>
                    </h3>
                  </div>
                </div>
                <div
                  className="special-menu-item wow fadeInUp"
                  data-wow-delay="0.2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="special-menu-img">
                    <a href="#vegetables" data-cursor-text="مشاهده">
                      <figure className="image-anime">
                        <Image
                          width={1000}
                          height={1000}
                          src="/special-menu-img-2.jpg"
                          alt=""
                        />
                      </figure>
                    </a>
                  </div>
                  <div className="special-menu-item-content">
                    <h3>
                      <a href="#vegetables">سبزیجات</a>
                    </h3>
                  </div>
                </div>

                <div
                  className="special-menu-item wow fadeInUp"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="special-menu-img">
                    <a href="#seafood" data-cursor-text="مشاهده">
                      <figure className="image-anime">
                        <Image
                          width={1000}
                          height={1000}
                          src="/special-menu-img-3.jpg"
                          alt=""
                        />
                      </figure>
                    </a>
                  </div>
                  <div className="special-menu-item-content">
                    <h3>
                      <a href="#seafood">غذاهای دریایی</a>
                    </h3>
                  </div>
                </div>

                <div
                  className="special-menu-item wow fadeInUp"
                  data-wow-delay="0.6s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.6s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="special-menu-img">
                    <a href="#desserts" data-cursor-text="مشاهده">
                      <figure className="image-anime">
                        <Image
                          width={1000}
                          height={1000}
                          src="/special-menu-img-4.jpg"
                          alt=""
                        />
                      </figure>
                    </a>
                  </div>
                  <div className="special-menu-item-content">
                    <h3>
                      <a href="#desserts">دسرها</a>
                    </h3>
                  </div>
                </div>

                <div
                  className="special-menu-item wow fadeInUp"
                  data-wow-delay="0.8s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.8s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="special-menu-img">
                    <a href="#beverages" data-cursor-text="مشاهده">
                      <figure className="image-anime">
                        <Image
                          width={1000}
                          height={1000}
                          src="/special-menu-img-5.jpg"
                          alt=""
                        />
                      </figure>
                    </a>
                  </div>
                  <div className="special-menu-item-content">
                    <h3>
                      <a href="#beverages">نوشیدنی‌ها</a>
                    </h3>
                  </div>
                </div>

                <div
                  className="special-menu-item wow fadeInUp"
                  data-wow-delay="1s"
                  style={{
                    visibility: "visible",
                    animationDelay: "1s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="special-menu-img">
                    <a href="#salads_soups" data-cursor-text="مشاهده">
                      <figure className="image-anime">
                        <Image
                          width={1000}
                          height={1000}
                          src="/special-menu-img-6.jpg"
                          alt=""
                        />
                      </figure>
                    </a>
                  </div>
                  <div className="special-menu-item-content">
                    <h3>
                      <a href="#salads_soups">سالادها و سوپ‌ها</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our-food-menu">
        <div className="food-menu-item" id="starters">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="food-menu-slidebar">
                  <div className="section-title">
                    <h3 className="wow fadeInUp">منو و قیمت‌ها</h3>
                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                      پیش‌غذاها
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="our-menu-list">
                  {starters.map((item) => (
                    <div
                      key={item.id}
                      className="our-menu-item wow fadeInUp"
                      data-wow-delay={item.delay}
                    >
                      <div className="our-menu-image">
                        <figure>
                          <Image
                            width={1000}
                            height={1000}
                            src={item.image}
                            alt={item.name}
                          />
                        </figure>
                      </div>
                      <div className="menu-item-body">
                        <div className="menu-item-title">
                          <h3>{item.name}</h3>
                          <hr />
                          <span>{item.price}</span>
                        </div>
                        <div className="menu-item-content">
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="food-menu-item" id="desserts">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="food-menu-sidebar">
                  <div className="section-title">
                    <h3 className="wow fadeInUp">منو و قیمت‌ها</h3>
                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                      دسرها
                    </h2>
                  </div>
                </div>
              </div>

              <div className="col-lg-9">
                <div className="our-menu-list">
                  {desserts.map((item) => (
                    <div
                      key={item.id}
                      className="our-menu-item wow fadeInUp"
                      data-wow-delay={item.delay}
                    >
                      <div className="our-menu-image">
                        <figure>
                          <Image
                            width={1000}
                            height={1000}
                            src={item.image}
                            alt={item.name}
                          />
                        </figure>
                      </div>

                      <div className="menu-item-body">
                        <div className="menu-item-title">
                          <h3>{item.name}</h3>
                          <hr />
                          <span>{item.price}</span>
                        </div>
                        <div className="menu-item-content">
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="food-menu-item" id="beverages">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="food-menu-sidebar">
                  <div className="section-title">
                    <h3 className="wow fadeInUp">منو و قیمت‌ها</h3>
                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                      نوشیدنی‌ها
                    </h2>
                  </div>
                </div>
              </div>

              <div className="col-lg-9">
                <div className="our-menu-list">
                  {beverages.map((item) => (
                    <div
                      key={item.id}
                      className="our-menu-item wow fadeInUp"
                      data-wow-delay={item.delay}
                    >
                      <div className="our-menu-image">
                        <figure>
                          <Image
                            width={1000}
                            height={1000}
                            src={item.image}
                            alt={item.name}
                          />
                        </figure>
                      </div>

                      <div className="menu-item-body">
                        <div className="menu-item-title">
                          <h3>{item.name}</h3>
                          <hr />
                          <span>{item.price}</span>
                        </div>
                        <div className="menu-item-content">
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReserveTable />
    </>
  );
};

export default Menu;
