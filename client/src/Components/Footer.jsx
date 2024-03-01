import React from 'react';

export default function Footer() {
  return (
    <div>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-5 pb-3"> 
            <div className="row">
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="cta-text">
                    <h4>Find us</h4>
                    <span>1010 Avenue, sw 54321, chandigarh</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-phone"></i>
                  <div className="cta-text">
                    <h4>Call us</h4>
                    <span>9876543210 0</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="far fa-envelope-open"></i>
                  <div className="cta-text">
                    <h4>Mail us</h4>
                    <span>mail@info.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-content pt-3 pb-3"> 
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-30 d-flex align-items-center"> 
                <div className="footer-widget">
                  <span className="brand-initial">E</span>ventSpot
                  <div className="footer-social-icon">
                    <span>Follow us</span>
                    <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                    <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                    <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left d-flex align-items-center">
                <div className="copyright-text">
                  <p>&copy; 2018, All Right Reserved </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
