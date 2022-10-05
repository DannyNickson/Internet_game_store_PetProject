import React from "react";
import "../styles/pagesStyles/CatalogPageStyle.css";
import dotaLogo from "../img/doca2.png";
const CatalogPage = () => {
  return (
    <div className="catalog__page__main">
      <div className="block">
        <div className="banner__block">
          <div className="menu__block">
            <div className="menu">
              <div className="menu__submenu">
                <a href="/">Your Store</a>
                <div className="submenu">
                  <a href="/">Home</a>
                  <a href="/">Community Recommendations</a>
                  <a href="/">Recently Viewed</a>
                </div>
              </div>
              <div className="menu__submenu">
                <a href="/">New & Noteworthy</a>
                <div className="submenu">
                  <a href="/">Top Sellers</a>
                  <a href="/">Most Played</a>
                  <a href="/">Popular Ucomming</a>
                </div>
              </div>
              <div className="menu__submenu">
                <a href="/">Categories</a>
                {/* <div className="submenu">
                  <a href="/">Home</a>
                  <a href="/">Community Recommendations</a>
                  <a href="/">Recently Viewed</a>
                </div> */}
              </div>
              <div className="menu__submenu">
                <a href="/">Points Shop</a>
              </div>
              <div className="menu__submenu">
                <a href="/">News</a>
              </div>
              <div className="menu__submenu">
                <a href="/">Labs</a>
              </div>
              <div className="search">
                <input type="text" className="default" placeholder="search" />
                <a href="/">
                  <img src="" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="sliders__block">
          <div className="sliders__block__main">
            <div className="side__menu">
              <div className="gift__cards__img">
                <img src="" alt="gift__cards__img" />
              </div>
              <div className="gift__cards__text">GIFT CARDS</div>
              <div className="link__to__buy">
                <a href="/">Now Available on ASTRA</a>
              </div>
              <div className="navigation__blocks">
                <div className="nav__group">
                  <div className="group__title">Recomended</div>
                  <div className="links">
                    <a href="/">
                      <img src="" alt="" />
                      By Friends
                    </a>
                    <a href="/">
                      <img src="" alt="" />
                      By Curators
                    </a>
                    <a href="/">
                      <img src="" alt="" />
                      Tags
                    </a>
                  </div>
                </div>
                <div className="nav__group">
                  <div className="group__title">Discover Queues</div>
                  <div className="links">
                    <a href="/">
                      <img src="" alt="" />
                      Recomended
                    </a>
                    <a href="/">
                      <img src="" alt="" />
                      New Releases
                    </a>
                  </div>
                </div>
                <div className="nav__group">
                  <div className="group__title">Browse Categories</div>
                  <div className="links">
                    <a href="/">
                      <img src="" alt="" />
                      Top Sellers
                    </a>
                    <a href="/">
                      <img src="" alt="" />
                      New Releases
                    </a>
                    <a href="/">
                      <img src="" alt="" />
                      Upcoming
                    </a>
                    <a href="/">
                      <img src="" alt="" />
                      Specials
                    </a>
                    <a href="/">
                      <img src="" alt="" />
                      VR Titles
                    </a>
                    <a href="/">
                      <img src="" alt="" />
                      Controller-Frendly
                    </a>
                  </div>
                </div>
                <div className="nav__group">
                  <div className="group__title">Browse By Genre</div>
                  <div className="links">
                    <a href="/">Fre to Play</a>
                    <a href="/">Early Access</a>
                    <a href="/">Action</a>
                    <a href="/">Adventure</a>
                    <a href="/">Casual</a>
                    <a href="/">Indie</a>
                    <a href="/">Massively Multiplayer</a>
                    <a href="/">Racing</a>
                    <a href="/">RPG</a>
                    <a href="/">Simulation</a>
                    <a href="/">Sports</a>
                    <a href="/">Stratagy</a>
                  </div>
                </div>
                <div className="nav__group">
                  <div className="group__title">Recently Viewed</div>
                  <div className="links">
                    <a href="/">NBA 2K23</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="sliders">
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
              <div className="lower__slider">
                <div className="slider__title">Special Offers</div>
                <div className="browse__more__button">
                  <a href="/">Browse More</a>
                </div>
                <div className="slider__main__block">
                  <div className="slide">
                    <div className="bigger__block">
                      <div className="block__img">
                        <img src={dotaLogo} alt="screenshot" />
                      </div>
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
                <div className="slider__arrows"></div>
                <div className="slider__dots"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
