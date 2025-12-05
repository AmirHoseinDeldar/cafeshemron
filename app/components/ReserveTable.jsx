"use client";
import React, { useEffect } from "react";
const ReserveTable = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const WOW = require("wowjs").WOW; // ← درست
      new WOW({ live: false }).init(); // ← فقط WOW، نه WOW.WOW
    }
  }, []);
  return (
    <div className="reserve-table">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="reserve-table-content">
              <div className="section-title">
                <h3
                  className="wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  رزرو میز
                </h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  هم‌اکنون میز خود را رزرو کنید و{" "}
                  <span>از تجربه یک وعده غذایی لذت ببرید.</span>
                </h2>
              </div>

              <div
                className="reserve-table-body wow fadeInUp"
                data-wow-delay="0.2s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInUp",
                }}
              >
                <h3>ساعت کاری</h3>
                <ul>
                  <li>
                    دوشنبه تا پنجشنبه <span>۱۰:۰۰ صبح - ۰۹:۰۰ شب</span>
                  </li>
                  <li>
                    جمعه تا شنبه <span>۰۹:۰۰ صبح - ۱۰:۰۰ شب</span>
                  </li>
                  <li>
                    یکشنبه <span>تعطیل</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="reserve-table-form">
              <form
                id="appointmentForm"
                action="#"
                method="POST"
                data-toggle="validator"
                className="wow fadeInUp"
                noValidate
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="row">
                  <div className="form-group col-md-12 mb-4">
                    <label className="form-label">نام و نام خانوادگی </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="علی محمدی"
                      required
                    />
                    <div className="help-block with-errors"></div>
                  </div>

                  <div className="form-group col-md-6 mb-4">
                    <label className="form-label">ایمیل</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      placeholder="مثلاً: ali@example.com"
                      required
                    />
                    <div className="help-block with-errors"></div>
                  </div>

                  <div className="form-group col-md-6 mb-4">
                    <label className="form-label">شماره تماس</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      id="phone"
                      placeholder="+98 912 345 6789"
                      required
                      dir="ltr"
                    />
                    <div className="help-block with-errors"></div>
                  </div>

                  <div className="form-group col-md-4 mb-4">
                    <label className="form-label">تاریخ</label>
                    <input
                      type="date"
                      name="date"
                      className="form-control"
                      id="date"
                      required
                    />
                    <div className="help-block with-errors"></div>
                  </div>

                  <div className="form-group col-md-4 mb-4">
                    <label className="form-label">ساعت</label>
                    <select
                      name="time"
                      className="form-control form-select"
                      id="time"
                      required
                    >
                      <option value="" disabled>
                        انتخاب ساعت
                      </option>
                      <option value="6_30pm">۱۸:۳۰</option>
                      <option value="7_00pm">۱۹:۰۰</option>
                      <option value="7_30pm">۱۹:۳۰</option>
                      <option value="8_00pm">۲۰:۰۰</option>
                      <option value="8_30pm">۲۰:۳۰</option>
                      <option value="9_00pm">۲۱:۰۰</option>
                    </select>
                    <div className="help-block with-errors"></div>
                  </div>

                  <div className="form-group col-md-4 mb-4">
                    <label className="form-label">تعداد میز</label>
                    <select
                      name="person"
                      className="form-control form-select"
                      id="person"
                      required
                    >
                      <option value="" disabled>
                        تعداد نفرات
                      </option>
                      <option value="1_person">۱ نفره</option>
                      <option value="5_person">۵ نفره</option>
                      <option value="10_person">۱۰ نفره</option>
                      <option value="15_person">۱۵ نفره</option>
                      <option value="20_person">۲۰ نفره</option>
                    </select>
                    <div className="help-block with-errors"></div>
                  </div>

                  <div className="col-lg-12">
                    <div className="reserve-table-btn">
                      <button type="submit" className="btn-default disabled">
                        رزرو میز
                      </button>
                      <div id="msgSubmit" className="h3 hidden"></div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReserveTable;
