import React from 'react';
import dotaLogo from "../../img/doca2.png";
const RecomendedSlider = () => {
    return (
        <div className="top__slider">
                <div className="slider__title">Featured & Recommended</div>
                <div className="slider__main__block">
                  <div className="slide active">
                    <a href="/">
                      <div className="main__img">
                        <img src={dotaLogo} alt="mainslidephoto" />
                      </div>
                      <div className="secondary__block">
                        <div className="game__title">DOKA 2</div>
                        <div className="screenshots__group">
                          <img src={dotaLogo} alt="screenshot1" />
                          <img src={dotaLogo} alt="screenshot2" />
                          <img src={dotaLogo} alt="screenshot3" />
                          <img src={dotaLogo} alt="screenshot4" />
                        </div>
                        <div className="game__status">Now Available</div>
                        <div className="game__tag">Top Seller</div>
                        <div className="prive__platform__block">
                          <div className="price">Free to Play</div>
                          <div className="platforms">
                            <span className="windows_icon"></span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="slide">
                    <a href="/">
                      <div className="main__img">
                        <img src="" alt="" />
                      </div>
                      <div className="secondary__block">
                        <div className="game__title">CS:GO</div>
                        <div className="screenshots__group">
                          <img src="" alt="" />
                          <img src="" alt="" />
                          <img src="" alt="" />
                          <img src="" alt="" />
                        </div>
                        <div className="game__status">Now Available</div>
                        <div className="game__tag">Top Seller</div>
                        <div className="prive__platform__block">
                          <div className="price">Free to Play</div>
                          <div className="platforms"></div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="arrow__left">
                  <div></div>
                </div>
                <div className="arrow__right">
                  <div></div>
                </div>
                <div className="slider__dots">
                  <div className="active"></div>
                  <div></div>
                </div>
              </div>
    );
};

export default RecomendedSlider;