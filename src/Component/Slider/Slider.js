import React, { useEffect } from "react";
import { BodyContainer } from "./Slider.style";
import { Swiper, SwiperSlide } from "swiper/react";
export const Slider = () => {
  console.log("fksjlk");
  //   if (window.innerWidth < 1200) {
  //     new Swiper(".swiper-container", {
  //       direction: "horizontal",
  //       slidesPerView: 1,
  //       nextButton: ".swiper-button-next",
  //       prevButton: ".swiper-button-prev",
  //       paginationClickable: !0,
  //       spaceBetween: 0,
  //       autoplay: 2500,
  //       loop: !0,
  //     });
  //   } else {
  //     new Swiper(".swiper-container", {
  //       direction: "horizontal",
  //       slidesPerView: 1,
  //       parallax: !0,
  //       nextButton: ".swiper-button-next",
  //       prevButton: ".swiper-button-prev",
  //       paginationClickable: !0,
  //       spaceBetween: 0,
  //       speed: 1500,
  //       parallax: !0,
  //       autoplay: 2500,
  //       loop: !0,
  //     });
  //   }
  useEffect(() => {
    window.slide();
  }, []);

  return (
    <BodyContainer>
      <section className="section__slider">
        <div className="container__center">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="swiper-slide__block">
                  <div
                    className="swiper-slide__block__img"
                    data-swiper-parallax-y="70%"
                  >
                    <a target="_blank" href="#">
                      <img
                        src="https://images.unsplash.com/photo-1456518563096-0ff5ee08204e?auto=format&amp;fit=crop&amp;w=1351&amp;q=60&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="swiper-slide__block__text">
                    <h2 data-swiper-parallax-x="-60%" className="main__title">
                      Slider
                      <br />
                      One
                      <span>.</span>
                    </h2>
                    <h3
                      data-swiper-parallax-x="-50%"
                      className="main__subtitle"
                    >
                      Tagline
                      <span> • 2017</span>
                    </h3>
                    <p data-swiper-parallax-x="-40%" className="paragraphe">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text.
                    </p>
                    <a
                      data-swiper-parallax-x="-30%"
                      className="link"
                      target="_blank"
                      href="#"
                    >
                      Discover
                    </a>
                    <span data-swiper-parallax-y="60%" className="number">
                      1
                    </span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="swiper-slide__block">
                  <div
                    className="swiper-slide__block__img"
                    data-swiper-parallax-y="70%"
                  >
                    <a target="_blank" href="#">
                      <img
                        src="https://images.unsplash.com/photo-1510709657750-f5a80fc8da9c?auto=format&amp;fit=crop&amp;w=1950&amp;q=60&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="swiper-slide__block__text">
                    <h2 data-swiper-parallax-x="-60%" className="main__title">
                      Slider
                      <br />
                      Two
                      <span>.</span>
                    </h2>
                    <h3
                      data-swiper-parallax-x="-50%"
                      className="main__subtitle"
                    >
                      Tagline
                      <span>• 2017</span>
                    </h3>
                    <p data-swiper-parallax-x="-40%" className="paragraphe">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text.
                    </p>
                    <a
                      data-swiper-parallax-x="-30%"
                      style={{ zIndex: "5" }}
                      className="link"
                      target="_blank"
                      href="#"
                    >
                      Discover
                    </a>
                    <span data-swiper-parallax-y="60%" className="number">
                      2
                    </span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="swiper-slide__block">
                  <div
                    className="swiper-slide__block__img"
                    data-swiper-parallax-y="70%"
                  >
                    <a target="_blank" href="#">
                      <img
                        src="https://images.unsplash.com/photo-1505567745926-ba89000d255a?auto=format&amp;fit=crop&amp;w=1951&amp;q=60&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="swiper-slide__block__text">
                    <h2 data-swiper-parallax-x="-60%" className="main__title">
                      Slider
                      <br />
                      Three
                      <span>.</span>
                    </h2>
                    <h3
                      data-swiper-parallax-x="-50%"
                      className="main__subtitle"
                    >
                      Tagline
                      <span>• 2017</span>
                    </h3>
                    <p data-swiper-parallax-x="-40%" className="paragraphe">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text.
                    </p>
                    <a
                      data-swiper-parallax-x="-30%"
                      className="link"
                      target="_blank"
                      href="#"
                    >
                      Discover
                    </a>
                    <span data-swiper-parallax-y="60%" className="number">
                      3
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-button-next">
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </div>
            <div className="swiper-button-prev">
              <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </section>
    </BodyContainer>
  );
};
