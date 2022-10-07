import React from 'react';
import dotaLogo from "../../img/doca2.png";
const SpecialOfferSlider = () => {
    return (
        <div className="lower__slider">
                <div className="slider__title">Special Offers</div>
                <div className="browse__more__button">
                  <a href="/">Browse More</a>
                </div>
                <div className="slider__main__block">
                  <div className="slide active">
                    <div className="slide__block">
                      <div className="bigger__block">
                        <div className="block__img">
                          <img src={dotaLogo} alt="screenshot" />
                        </div>
                        <div className="slide__text__block">
                          <div className="slider__game__title">DOKA 2</div>
                          <div className="special__offer">
                            Offer ends 10 Oct @ 8:00pm
                          </div>
                          <div className="slider__game__slider">
                            <div className="discount">-35%</div>
                            <div className="price__block">
                              <div className="old__price">22$</div>
                              <div className="new__price">15$</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="normal__slide__blocks">
                        <div className="normal__slide__block">
                          <img src={dotaLogo} alt="screenshot" />
                          <div className="special__offer">
                            Offer ends 10 Oct @ 8:00pm
                          </div>
                          <div className="slider__game__slider">
                            <div className="discount">-35%</div>
                            <div className="price__block">
                              <div className="old__price">22$</div>
                              <div className="new__price">15$</div>
                            </div>
                          </div>
                        </div>
                        <div className="normal__slide__block">
                          <img src="" alt="" />
                          <div className="special__offer">
                            Offer ends 10 Oct @ 8:00pm
                          </div>
                          <div className="slider__game__slider">
                            <div className="discount">-35%</div>
                            <div className="price__block">
                              <div className="old__price">22$</div>
                              <div className="new__price">15$</div>
                            </div>
                          </div>
                        </div>
                        <div className="normal__slide__block">
                          <img src="" alt="" />
                          <div className="special__offer">
                            Offer ends 10 Oct @ 8:00pm
                          </div>
                          <div className="slider__game__slider">
                            <div className="discount">-35%</div>
                            <div className="price__block">
                              <div className="old__price">22$</div>
                              <div className="new__price">15$</div>
                            </div>
                          </div>
                        </div>
                        <div className="normal__slide__block">
                          <img src="" alt="" />
                          <div className="special__offer">
                            Offer ends 10 Oct @ 8:00pm
                          </div>
                          <div className="slider__game__slider">
                            <div className="discount">-35%</div>
                            <div className="price__block">
                              <div className="old__price">22$</div>
                              <div className="new__price">15$</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider__arrows"></div>
                <div className="slider__dots"></div>
              </div>
    );
};

export default SpecialOfferSlider;