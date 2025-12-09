import React from "react";
import HeaderComponents from "../components/HeaderComponents";
import ReserveTable from "../components/ReserveTable";
import { FaDribbble, FaFacebook, FaInstagram } from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
      {" "}
      <HeaderComponents title="تماس با ما" />
      <div className="page-contact-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contact-us-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">تماس با ما</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    با ما <span>در ارتباط باشید</span>
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    سوالی دارید یا می‌خواهید بازخورد بدهید؟ از طریق فرم زیر با
                    ما تماس بگیرید، با ما تماس تلفنی داشته باشید یا به رستوران
                    ما سر بزنید. ما اینجا هستیم تا کمک کنیم و مشتاقانه منتظر
                    ارتباط با شما هستیم!
                  </p>
                </div>

                <div
                  className="contact-info-list wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <ul>
                    <li>خیابان دیویژن ۲۷، نیویورک، NY 10002، آمریکا</li>
                    <li>
                      <a href="tel:780859632">+01 780 859 632</a>
                    </li>
                    <li>
                      <a href="mailto:info@domainname.com">
                        info@domainname.com
                      </a>
                    </li>
                  </ul>
                </div>

                <div
                  className="contact-social-list wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <ul>
                    <li>
                      <a href="#">
                        <FaDribbble />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaFacebook />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="contact-form">
                <form
                  id="contactForm"
                  action="#"
                  method="POST"
                  data-toggle="validator"
                  className="wow fadeInUp"
                  noValidate
                >
                  <div className="row">
                    <div className="form-group col-md-12 mb-4">
                      <label className="form-label" htmlFor="Name">
                        نام شما
                      </label>
                      <input
                        type="text"
                        name="Name"
                        className="form-control"
                        id="Name"
                        placeholder="مثلاً: علی"
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group col-md-6 mb-4">
                      <label className="form-label" htmlFor="Email">
                        آدرس ایمیل
                      </label>
                      <input
                        type="email"
                        name="Email"
                        className="form-control"
                        id="Email"
                        placeholder="مثلاً: ali@example.com"
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group col-md-6 mb-4">
                      <label className="form-label" htmlFor="Phone">
                        شماره تماس
                      </label>
                      <input
                        type="text"
                        name="Phone"
                        className="form-control"
                        id="Phone"
                        placeholder="مثلاً: +98 912 345 6789"
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group col-md-12 mb-5">
                      <label className="form-label" htmlFor="Message">
                        پیام
                      </label>
                      <textarea
                        name="Message"
                        className="form-control"
                        id="Message"
                        rows="4"
                        placeholder="پیام خود را بنویسید..."
                      ></textarea>
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="col-md-12">
                      <button type="submit" className="btn-default disabled">
                        ارسال پیام
                      </button>
                      <div id="MsgSubmit" className="h3 hidden"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Maps /> */}
      <ReserveTable />
    </>
  );
};

export default ContactUs;
