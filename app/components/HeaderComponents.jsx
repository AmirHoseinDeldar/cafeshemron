import React from "react";

const HeaderComponents = ({ title }) => {
  return (
    <div
      className="page-header parallaxie"
      style={{
        backgroundImage: "url('/page-header-bg.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center 0px",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-header-box">
              <h1 className="text-anime-style-2">{title}</h1>
              <nav className="wow fadeInUp">
                <ol className="flex gap-3">
                  <li className="breadcrumb-item">{title}</li>
                  <li className="breadcrumb-item">/</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <a href="/"> صفحه اصلی</a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponents;
