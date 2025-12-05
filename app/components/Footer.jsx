import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="footer-content">
              <div className="footer-logo">
                <Image alt="" src="/logo.svg" width={600} height={600} />
              </div>
              <div className="footer-content-box">
                <div className="footer-contact-item">
                  <div className="icon-box">
                    <Image
                      alt=""
                      src="/icon-location.svg"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="footer-contact-content">
                    <p>تهران، خیابان شمرون، پلاک ۴۵۱۷</p>
                  </div>
                </div>

                <div className="footer-contact-item">
                  <div className="icon-box">
                    <Image
                      alt=""
                      src="/icon-phone.svg"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="footer-contact-content">
                    <p dir="ltr">
                      <a href="tel:+982112345678">+98 21 1234 5678</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="footer-social-icon">
                <ul>
                  <li>
                    <a href="#">
                      <FaTelegram />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/cafeshemroon">
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="footer-copyright-text">
                <p>کپی‌رایت © ۲۰۲۵ | تمامی حقوق محفوظ است.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
