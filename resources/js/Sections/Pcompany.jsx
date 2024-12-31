import React from 'react'

export default function Pcompany() {
  return (
    <>
    <div className="container mt-100 mt-120">
          <div className="row g-4 align-items-center">
          <div className="col-lg-6 col-md-6 mb-5  order-md-2 order-1">
              <div className="about-right">
                  <div className="position-relative shadow rounded img-one">
                      <img src="images/about/ab03.jpg" className="img-fluid rounded" alt="work-image"/>
                  </div>

                  <div className="img-two shadow rounded p-2 bg-white">
                      <img src="images/about/ab04.jpg" className="img-fluid rounded" alt="work-image"/>

                      <div className="position-absolute top-0 start-50 translate-middle">
                          <a href="#!" data-type="youtube" data-id="yba7hPeTSjk" className="avatar avatar-md-md rounded-pill shadow card d-flex justify-content-center align-items-center lightbox">
                              <i className="mdi mdi-play mdi-24px text-primary"></i>
                          </a>
                      </div>
                  </div>
              </div>
            </div>{/*-end col*/}

          <div className="col-lg-6 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0 order-md-1 order-2">
              <div className="section-title mb-4 me-lg-5">
                  <h4 className="title mb-3">Find Best Companies.</h4>
                  <p className="text-muted para-desc mb-0">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
              </div>

              <div className="row g-4 mt-0">
               
                  <div className="col-md-6">
                      <div className="employer-card rounded shadow p-2 bg-light">
                          <div className="d-flex align-items-center">
                              <img src="images/company/google-logo.png" className="avatar avatar-md-sm rounded shadow p-2 bg-white" alt=""/>

                              <div className="content ms-3">
                                  <a href="employer-profile.html" className="h5 title text-dark"></a>
                                  <span className="text-muted d-flex align-items-center small mt-1"></span>
                              </div>
                          </div>
                      </div>
                  </div>

                
              </div>

              <div className="mt-4">
                  <a href="employers.html" className="btn btn-link primary text-muted">See More Companies <i className="mdi mdi-arrow-right align-middle"></i></a>
              </div>
          </div>{/*-end col*/}
         </div>{/*-end row*/}
        </div>
    
    </>
  )
}
