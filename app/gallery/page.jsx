import React from "react";
import HeaderComponents from "../components/HeaderComponents";
import Image from "next/image";
import ReserveTable from "../components/ReserveTable";

const Gallery = () => {
  return (
    <>
      <HeaderComponents title="آلبوم ما" />
      <div className="page-gallery">
        <div className="container">
          <div className="row gallery-items page-gallery-box">
            {[1, 4].map((num, index) => (
              <div className="col-lg-4 col-6" key={num}>
                <div
                  className="photo-gallery wow fadeInUp"
                  data-wow-delay={`${index * 0.2}s`}
                  style={{
                    visibility: "visible",
                    animationDelay: `${index * 0.2}s`,
                    animationName: "fadeInUp",
                  }}
                >
                  <figure className="image-anime">
                    <Image
                      width={1000}
                      height={1000}
                      src={`/gallery-${num}.jpg`}
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ReserveTable />
    </>
  );
};

export default Gallery;
