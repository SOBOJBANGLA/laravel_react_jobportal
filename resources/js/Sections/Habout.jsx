import React from 'react'

export default function Habout() {
  return (
    <>
    <div className="container mt-100 mt-150">
           <div className="row g-4 align-items-center">
          <div className="col-lg-6 col-md-6 mb-5">
              <div className="about-left">
                  <div className="position-relative shadow rounded img-one">
                      <img src="images/about/ab01.jpg" className="img-fluid rounded" alt="work-image"/>
                  </div>

                  <div className="img-two shadow rounded p-2 bg-white">
                      <img src="images/about/ab02.jpg" className="img-fluid rounded" alt="work-image"/>

                      <div className="position-absolute top-0 start-50 translate-middle">
                          <a href="#!" data-type="youtube" data-id="yba7hPeTSjk" className="avatar avatar-md-md rounded-pill shadow card d-flex justify-content-center align-items-center lightbox">
                              <i className="mdi mdi-play mdi-24px text-primary"></i>
                          </a>
                      </div>
                  </div>
              </div>
          </div>

          <div className="col-lg-6 col-md-6">
              <div className="section-title ms-lg-5">
                  <h4 className="title mb-3">Millions of jobs. <br/> Find the one that's right for you.</h4>
                  <p className="text-muted para-desc mb-0">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
              
                  <ul className="list-unstyled text-muted mb-0 mt-3">
                      <li className="mb-1"><span className="text-primary h5 me-2"><i className="mdi mdi-check-circle-outline align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                      <li className="mb-1"><span className="text-primary h5 me-2"><i className="mdi mdi-check-circle-outline align-middle"></i></span>Our Talented & Experienced Marketing Agency</li>
                      <li className="mb-1"><span className="text-primary h5 me-2"><i className="mdi mdi-check-circle-outline align-middle"></i></span>Create your own skin to match your brand</li>
                  </ul>

                  <div className="mt-4">
                      <a href="aboutus.html" className="btn btn-primary">About Us <i className="mdi mdi-arrow-right align-middle"></i></a>
                  </div>
              </div>
           </div>{/*-end col*/}
            </div>{/*-end row*/}
        </div>
    
    </>
  )
}
