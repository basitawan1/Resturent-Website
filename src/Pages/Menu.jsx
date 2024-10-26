import React from 'react';
import Img1 from '../assets/img/menu-1.jpg';
import Img2 from '../assets/img/menu-2.jpg';
import Img3 from '../assets/img/menu-3.jpg';
import Img4 from '../assets/img/menu-4.jpg';
import Img5 from '../assets/img/menu-5.jpg';
import Img6 from '../assets/img/menu-6.jpg';
import Img7 from '../assets/img/menu-7.jpg';
import Img8 from '../assets/img/menu-8.jpg';

function Menu() {
  return (
    <>
    
    <div>
  {/* Menu Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
        <h1 className="mb-5">Most Popular Items</h1>
      </div>
      <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
        <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
          <li className="nav-item">
            <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
              <i className="fa fa-coffee fa-2x text-primary" />
              <div className="ps-3">
                <small className="text-body">Popular</small>
                <h6 className="mt-n1 mb-0">Breakfast</h6>
              </div>
            </a>
          </li>
          <li className="nav-item">
            <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
              <i className="fa fa-hamburger fa-2x text-primary" />
              <div className="ps-3">
                <small className="text-body">Special</small>
                <h6 className="mt-n1 mb-0">Launch</h6>
              </div>
            </a>
          </li>
          <li className="nav-item">
            <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
              <i className="fa fa-utensils fa-2x text-primary" />
              <div className="ps-3">
                <small className="text-body">Lovely</small>
                <h6 className="mt-n1 mb-0">Dinner</h6>
              </div>
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div id="tab-1" className="tab-pane fade show p-0 active">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={Img1} alt style={{width: 80}} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">$115</span>
                    </h5>
                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={Img2} alt style={{width: 80}} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">$115</span>
                    </h5>
                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={Img3} alt style={{width: 80}} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">$115</span>
                    </h5>
                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={Img4} alt style={{width: 80}} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">$115</span>
                    </h5>
                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={Img5} alt style={{width: 80}} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">$115</span>
                    </h5>
                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={Img6} alt style={{width: 80}} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">$115</span>
                    </h5>
                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={Img7} alt style={{width: 80}} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">$115</span>
                    </h5>
                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={Img8} alt style={{width: 80}} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">$115</span>
                    </h5>
                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tab-2" className="tab-pane fade show p-0">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={Img1} alt style={{width: 80}} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">$115</span>
                    </h5>
                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={Img2} alt style={{width: 80}} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">$115</span>
                    </h5>
                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={Img3} alt style={{width: 80}} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">$115</span>
                    </h5>
                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={Img4} alt style={{width: 80}} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">$115</span>
                    </h5>
                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={Img5} alt style={{width: 80}} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">$115</span>
                    </h5>
                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={Img6} alt style={{width: 80}} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">$115</span>
                    </h5>
                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={Img7} alt style={{width: 80}} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">$115</span>
                    </h5>
                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={Img8} alt style={{width: 80}} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">$115</span>
                    </h5>
                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tab-3" className="tab-pane fade show p-0">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={Img1} alt style={{width: 80}} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">$115</span>
                    </h5>
                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={Img2} alt style={{width: 80}} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">$115</span>
                    </h5>
                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={Img3} alt style={{width: 80}} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">$115</span>
                    </h5>
                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={Img4} alt style={{width: 80}} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">$115</span>
                    </h5>
                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={Img5} alt style={{width: 80}} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">$115</span>
                    </h5>
                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={Img6} alt style={{width: 80}} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">$115</span>
                    </h5>
                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={Img7} alt style={{width: 80}} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">$115</span>
                    </h5>
                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={Img8} alt style={{width: 80}} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>Chicken Burger</span>
                      <span className="text-primary">$115</span>
                    </h5>
                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Menu End */}
  {/* Footer Start */}
  <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Company</h4>
          <a className="btn btn-link" href>About Us</a>
          <a className="btn btn-link" href>Contact Us</a>
          <a className="btn btn-link" href>Reservation</a>
          <a className="btn btn-link" href>Privacy Policy</a>
          <a className="btn btn-link" href>Terms &amp; Condition</a>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
          <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />123 Street, New York, USA</p>
          <p className="mb-2"><i className="fa fa-phone-alt me-3" />+012 345 67890</p>
          <p className="mb-2"><i className="fa fa-envelope me-3" />info@example.com</p>
          <div className="d-flex pt-2">
            <a className="btn btn-outline-light btn-social" href><i className="fab fa-twitter" /></a>
            <a className="btn btn-outline-light btn-social" href><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-outline-light btn-social" href><i className="fab fa-youtube" /></a>
            <a className="btn btn-outline-light btn-social" href><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Opening</h4>
          <h5 className="text-light fw-normal">Monday - Saturday</h5>
          <p>09AM - 09PM</p>
          <h5 className="text-light fw-normal">Sunday</h5>
          <p>10AM - 08PM</p>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Newsletter</h4>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div className="position-relative mx-auto" style={{maxWidth: 400}}>
            <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            © <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved. 
            {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
            Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="footer-menu">
              <a href>Home</a>
              <a href>Cookies</a>
              <a href>Help</a>
              <a href>FQAs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
</div>

</>
  )
}

export default Menu