"use client";
import React, { useState } from "react";

const OurTarget = () => {
  const [activeTab, setActiveTab] = useState("appetizers");

  const menuItems = {
    appetizers: [],
    maincourses: [],
    sides: [],
  };
  const tabLabels = {
    appetizers: "ماموریت",
    maincourses: "هدف",
    sides: "ارزش",
  };
  const tabs = Object.keys(menuItems);
  return (
    <div className="our-menu">
      <div className="container">
        {/* Section Title */}
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title">
              <h3 className="wow fadeInUp">اهداف ما</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                منویی الهام‌بخش که <br />
                <span>سنت و نوآوری را ترکیب می‌کند</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="our-menu-tab">
              {/* Tabs */}
              <div
                className="our-menu-tab-nav wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <ul className="nav nav-tabs" role="tablist">
                  {tabs.map((tab) => (
                    <li className="nav-item" role="presentation" key={tab}>
                      <button
                        className={`nav-link ${
                          activeTab === tab ? "active" : ""
                        }`}
                        type="button"
                        onClick={() => setActiveTab(tab)}
                      >
                        {tabLabels[tab]}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="approch-box tab-content" id="approchTabContent">
                {/* Approch Item Start */}
                <div
                  className="approch-item tab-pane fade show active"
                  id="mission"
                  role="tabpanel"
                  aria-labelledby="mission-tab"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      {/* Approch Tab Content Start */}
                      <div className="approch-tab-content">
                        {/* Section Title Start */}
                        <div className="section-title">
                          <h3
                            className="wow fadeInUp"
                            style={{
                              visibility: "visible",
                              animationName: "fadeInUp",
                            }}
                          >
                            ماموریت ما
                          </h3>
                          <h2
                            className="text-anime-style-2"
                            data-cursor="-opaque"
                          >
                            خلق لحظاتی با طعم بی‌نظیر
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
                            در کافه شمرون، هدف ما بازتعریف تجربه صرف غذا است؛
                            جایی که مردم را با وعده‌های غذایی اصیل و خوش‌طعم که
                            با عشق و هنر تهیه شده‌اند، کنار هم جمع می‌کنیم. ما
                            می‌خواهیم نقطه‌ای از برتری در آشپزی باشیم، جایی که
                            هر غذا داستانی از سنت، نوآوری و کیفیت بی‌کم‌و‌کاست
                            روایت می‌کند.
                          </p>
                        </div>
                        {/* Section Title End */}

                        {/* Approch Tab Content List Start */}
                        <div
                          className="approch-tab-content-list wow fadeInUp"
                          data-wow-delay="0.4s"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.4s",
                            animationName: "fadeInUp",
                          }}
                        >
                          <ul>
                            <li>
                              ارائه طعم‌های فراموش‌نشدنی در هر غذایی که سرو
                              می‌کنیم.
                            </li>
                            <li>
                              ایجاد فضایی دلنشین که غذا قلب‌ها را به هم متصل
                              می‌کند.
                            </li>
                            <li>تعهد به کیفیت، نوآوری و خدمات استثنایی.</li>
                          </ul>
                        </div>
                        {/* Approch Tab Content List End */}
                      </div>
                      {/* Approch Tab Content End */}
                    </div>
                    <div className="col-lg-6">
                      {/* Approch Tab Image Start */}
                      <div className="approch-tab-image">
                        <figure className="image-anime">
                          <img src="/our-mission-img.jpg" alt="ماموریت ما" />
                        </figure>
                      </div>
                      {/* Approch Tab Image End */}
                    </div>
                  </div>
                </div>
                {/* Approch Item End */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTarget;
