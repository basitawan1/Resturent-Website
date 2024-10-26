import React from 'react';
import Img1 from '../assets/img/about-1.jpg';
import Img2 from '../assets/img/about-2.jpg';
import Img3 from '../assets/img/about-3.jpg';
import Img4 from '../assets/img/about-4.jpg';
import Img5 from '../assets/img/team-1.jpg';
import Img6 from '../assets/img/team-2.jpg';
import Img7 from '../assets/img/team-3.jpg';
import Img8 from '../assets/img/team-4.jpg';

function About() {
  return (
    <>
    
    <div>
  
  {/* About Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6">
          <div className="row g-3">
            <div className="col-6 text-start">
              <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src={Img1} />
            </div>
            <div className="col-6 text-start">
              <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src={Img2} style={{marginTop: '25%'}} />
            </div>
            <div className="col-6 text-end">
              <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src={Img3} />
            </div>
            <div className="col-6 text-end">
              <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src={Img4} />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <h5 className="section-title ff-secondary text-start text-primary fw-normal">About Us</h5>
          <h1 className="mb-4">Welcome to <i className="fa fa-utensils text-primary me-2" />Restoran</h1>
          <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
          <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
          <div className="row g-4 mb-4">
            <div className="col-sm-6">
              <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">15</h1>
                <div className="ps-4">
                  <p className="mb-0">Years of</p>
                  <h6 className="text-uppercase mb-0">Experience</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">50</h1>
                <div className="ps-4">
                  <p className="mb-0">Popular</p>
                  <h6 className="text-uppercase mb-0">Master Chefs</h6>
                </div>
              </div>
            </div>
          </div>
          <a className="btn btn-primary py-3 px-5 mt-2" href>Read More</a>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Team Start */}
  <div className="container-xxl pt-5 pb-3">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h5 className="section-title ff-secondary text-center text-primary fw-normal">Team Members</h5>
        <h1 className="mb-5">Our Master Chefs</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item text-center rounded overflow-hidden">
            <div className="rounded-circle overflow-hidden m-4">
              <img className="img-fluid" src={Img5} alt />
            </div>
            <h5 className="mb-0">Full Name</h5>
            <small>Designation</small>
            <div className="d-flex justify-content-center mt-3">
              <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
              <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item text-center rounded overflow-hidden">
            <div className="rounded-circle overflow-hidden m-4">
              <img className="img-fluid" src={Img6} alt />
            </div>
            <h5 className="mb-0">Full Name</h5>
            <small>Designation</small>
            <div className="d-flex justify-content-center mt-3">
              <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
              <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="team-item text-center rounded overflow-hidden">
            <div className="rounded-circle overflow-hidden m-4">
              <img className="img-fluid" src={Img7} alt />
            </div>
            <h5 className="mb-0">Full Name</h5>
            <small>Designation</small>
            <div className="d-flex justify-content-center mt-3">
              <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
              <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="team-item text-center rounded overflow-hidden">
            <div className="rounded-circle overflow-hidden m-4">
              <img className="img-fluid" src={Img8} alt />
            </div>
            <h5 className="mb-0">Full Name</h5>
            <small>Designation</small>
            <div className="d-flex justify-content-center mt-3">
              <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
              <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
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

export default About