import React from 'react';

const SideMenu = () => {
    return (
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
    );
};

export default SideMenu;