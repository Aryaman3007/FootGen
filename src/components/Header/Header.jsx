import React, { useEffect, useState } from 'react';
import { Link, Events, scrollSpy, animateScroll as scroll } from 'react-scroll';
import "./header.css"
import Lo from "../../images/footgen-logo.png"

const Header = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    console.log('Searching for:', searchTerm);
  };

  useEffect(() => {

    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });

    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className='h' id="section-1">
      <div className="h-left">
        <img src={Lo} alt="" className="logo" />
      </div>
      <div className="h-middle">
        <ul className={isMobile ? "nav-links" : "navbar-list"}>

          <li className="navbar-item">
            <Link to="section-1" activeClass="active" onClick={scrollToTop} smooth={true} spy={true} duration={100} className="navbar-link">HOME</Link>
          </li>

          <li className="navbar-item">
            <Link to='section-2' activeClass="active" smooth={true} spy={true} offset={650} duration={100} className="navbar-link">PRODUCTS</Link>
          </li>

          <li className="navbar-item">
            <Link to='section-3' activeClass="active" smooth={true} spy={true} offset={-130} duration={100} className="navbar-link">SHOP</Link>
          </li>

          <li className="navbar-item">
            <Link to='section-4' activeClass="active" smooth={true} spy={true} offset={-200} duration={100} className="navbar-link">SALE</Link>
          </li>

          <li className="navbar-item">
            <Link to='section-5' activeClass="active" smooth={true} spy={true} offset={250} duration={100} className="navbar-link">CONTACT</Link>
          </li>

        </ul>

      </div>
      <div className="h-right">
        <ion-icon onClick={toggleSearch} name="search-outline" aria-hidden="true" />
        {isSearchOpen && (
          <div className="search-bar">
            <input type="text" placeholder="Search..." onChange={handleSearch} />
          </div>
        )}
        <ion-icon name="person-outline" aria-hidden="true" />
        <ion-icon name="heart-outline" aria-hidden="true" />
        <ion-icon name="bag-outline" aria-hidden="true" />
      </div>

      <button className="nav-open-btn"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ?
          (<ion-icon name="close" />) :
          (<ion-icon name="menu-outline" />)
        }
      </button>

    </div>
  )
}

export default Header