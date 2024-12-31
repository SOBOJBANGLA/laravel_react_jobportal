import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-footer">
  <div className="container">
      <div className="row">
          <div className="col-12">
              <div className="py-5">
                  <div className="row align-items-center">
                      <div className="col-sm-3">
                          <div className="text-center text-sm-start">
                              <a href=""><img src="images/logo-light.png" alt=""/></a>
                          </div>
                      </div>

                      <div className="col-sm-9 mt-4 mt-sm-0">
                          <ul className="list-unstyled footer-list terms-service text-center text-sm-end mb-0">
                              <li className="list-inline-item my-2"><a href="index.html" className="text-foot fs-6 fw-medium me-2"><i className="mdi mdi-circle-small"></i> Home</a></li>
                              <li className="list-inline-item my-2"><a href="services.html" className="text-foot fs-6 fw-medium me-2"><i className="mdi mdi-circle-small"></i> How it works</a></li>
                              <li className="list-inline-item my-2"><a href="job-post.html" className="text-foot fs-6 fw-medium me-2"><i className="mdi mdi-circle-small"></i> Create a job</a></li>
                              <li className="list-inline-item my-2"><a href="aboutus.html" className="text-foot fs-6 fw-medium me-2"><i className="mdi mdi-circle-small"></i> About us</a></li>
                              <li className="list-inline-item my-2"><a href="pricing.html" className="text-foot fs-6 fw-medium"><i className="mdi mdi-circle-small"></i> Plans</a></li>
                          </ul>
                      </div>{/*end col*/}
                  </div>{/*end row*/}
              </div>
          </div>{/*end col*/}
      </div>{/*end row*/}
  </div>{/*end container*/}

  <div className="py-4 footer-bar">
      <div className="container text-center">
          <div className="row align-items-center">
              <div className="col-sm-6">
                  <div className="text-sm-start">
                      <p className="mb-0 fw-medium">© <script>document.write(new Date().getFullYear())</script> Jobnova. Design with <i className="mdi mdi-heart text-danger"></i> by <a href="https://shreethemes.in/" target="_blank" className="text-reset">A.S.M ABDULLAH</a>.</p>
                  </div>
              </div>

              <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <ul className="list-unstyled social-icon foot-social-icon text-sm-end mb-0">
                      <li className="list-inline-item"><a href="https://1.envato.market/jobnova" target="_blank" className="icon-socials icon-facebook"><i data-feather="shopping-cart" className="fea icon-sm align-middle" title="Buy Now"></i></a></li>
                      <li className="list-inline-item"><a href="https://dribbble.com/shreethemes" target="_blank" className="rounded"><i data-feather="dribbble" className="fea icon-sm align-middle" title="dribbble"></i></a></li>
                      <li className="list-inline-item"><a href="http://linkedin.com/company/shreethemes" target="_blank" className="rounded"><i data-feather="linkedin" className="fea icon-sm align-middle" title="Linkedin"></i></a></li>
                      <li className="list-inline-item"><a href="https://www.facebook.com/shreethemes" target="_blank" className="rounded"><i data-feather="facebook" className="fea icon-sm align-middle" title="facebook"></i></a></li>
                      <li className="list-inline-item"><a href="https://www.instagram.com/shreethemes/" target="_blank" className="rounded"><i data-feather="instagram" className="fea icon-sm align-middle" title="instagram"></i></a></li>
                      <li className="list-inline-item"><a href="https://twitter.com/shreethemes" target="_blank" className="rounded"><i data-feather="twitter" className="fea icon-sm align-middle" title="twitter"></i></a></li>
                  </ul>{/*end icon*/}
              </div>{/*end col*/}
          </div>{/*end row*/}
      </div>{/*end container*/}
  </div>
</footer>

  )
}
