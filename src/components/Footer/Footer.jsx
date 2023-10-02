import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='f'>
      <div className="f-head">
        <p className="f-title">
          <span style={{ fontSize: "57px", color: "#ff6e61ca", fontWeight: "600" }}>F</span>ootgen
        </p>
        <div className="f-socials">
          <ul className="social-list">

            <li>
              <a href="/#" className="social-link">
                <ion-icon name="logo-facebook" />
              </a>
            </li>

            <li>
              <a href="/#" className="social-link">
                <ion-icon name="logo-twitter" />
              </a>
            </li>

            <li>
              <a href="/#" className="social-link">
                <ion-icon name="logo-pinterest" />
              </a>
            </li>

            <li>
              <a href="/#" className="social-link">
                <ion-icon name="logo-linkedin" />
              </a>
            </li>

          </ul>

        </div>
      </div>

      <div className="line"></div>
      <div className="footer-list">
        <div className="footer-left">

          <ul className="f-list">

            <li>
              <p className="footer-list-title">Contact Us</p>
              <div className="f-line"></div>
            </li>

            <li>
              <address className="footer-link">
                <ion-icon name="location" />

                <span className="f-link-text">
                  2751 S Parker Rd, Aurora, CO 80014, United States
                </span>
              </address>
            </li>

            <li>
              <a href="tel:+557343673257" className="footer-link">
                <ion-icon name="call" />

                <span className="f-link-text">+557343673257</span>
              </a>
            </li>

            <li>
              <a href="mailto:footgen@help.com" className="footer-link">
                <ion-icon name="mail" />

                <span className="f-link-text">footgen@help.com</span>
              </a>
            </li>

          </ul>

        </div>
        <div className="footer-middle">
          <ul className="f-list">

            <li>
              <p className="footer-list-title">My Account</p>
              <div className="f-line"></div>
            </li>

            <li>
              <a href="/#" className="footer-link">
                <ion-icon name="chevron-forward-outline" />

                <span className="f-link-text">My Account</span>
              </a>
            </li>

            <li>
              <a href="/#" className="footer-link">
                <ion-icon name="chevron-forward-outline" />

                <span className="f-link-text">View Cart</span>
              </a>
            </li>

            <li>
              <a href="/#" className="footer-link">
                <ion-icon name="chevron-forward-outline" />

                <span className="f-link-text">Wishlist</span>
              </a>
            </li>

            <li>
              <a href="/#" className="footer-link">
                <ion-icon name="chevron-forward-outline" />

                <span className="f-link-text">Compare</span>
              </a>
            </li>

            <li>
              <a href="/#" className="footer-link">
                <ion-icon name="chevron-forward-outline" />

                <span className="f-link-text">New Products</span>
              </a>
            </li>

          </ul>

        </div>
        <div className="footer-right">

          <p className="footer-list-title">Newsletter</p>
          <div className="f-line"></div>

          <p className="newsletter-text">
            Authoritatively morph 24/7 potentialities with error-free partnerships.
          </p>

          <form action="" className="newsletter-form">
            <input autoComplete='off' type="email" name="email" required placeholder="Email Address" className="newsletter-input" />
            <button type="submit">Subscribe</button>
          </form>

        </div>
      </div>

      <div className="footer-bottom">
          <p className="copyright">
            &copy; 2023 <a href="/#" className="copyright-link">aryamansingh</a>. All Rights Reserved
          </p>
      </div>
    </div>

  )
}

export default Footer