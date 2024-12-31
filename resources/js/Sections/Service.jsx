import React from 'react'

export default function Service() {
  return (
    <>
    <div className="container">
                <div className="row justify-content-center mb-4 pb-2">
                 <div className="col-12">
                  <div className="section-title text-center">
                  <h4 className="title mb-3">Trending Services</h4>
                  <p className="text-muted para-desc mx-auto mb-0">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
               </div>
             </div>{/*-end col*/}
        </div>{/*-end row*/}
        <div className="row g-4 mt-0">
          <div className="col-lg-4 col-md-6">
              <div className="card blog blog-primary shadow rounded overflow-hidden border-0">
                  <div className="card-img blog-image position-relative overflow-hidden rounded-0">
                      <div className="position-relative overflow-hidden">
                          <img src="images/blog/01.jpg" className="img-fluid" alt=""/>
                          <div className="card-overlay"></div>
                      </div>
                  </div>

                  <div className="card-body blog-content position-relative p-0">
                      <div className="blog-tag px-4">
                          <a href="" className="badge bg-primary rounded-pill">Arts</a>
                      </div>
                      <div className="p-4">
                          <ul className="list-unstyled text-muted small mb-2">
                              <li className="d-inline-flex align-items-center me-2"><i data-feather="calendar" className="fea icon-ex-sm me-1 text-dark"></i>31st October 2023</li>
                              <li className="d-inline-flex align-items-center"><i data-feather="clock" className="fea icon-ex-sm me-1 text-dark"></i>5 min read</li>
                          </ul>

                          <a href="blog-detail.html" className="title fw-semibold fs-5 text-dark">11 Tips to Help You Get New Clients Through Cold Calling</a>
                          
                          <ul className="list-unstyled d-flex justify-content-between align-items-center text-muted mb-0 mt-3">
                              <li className="list-inline-item me-2"><a href="" className="btn btn-link primary text-dark">Read Now <i className="mdi mdi-arrow-right"></i></a></li>
                              <li className="list-inline-item"><span className="text-dark">By</span> <a href="" className="text-muted link-title">Google</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>{/*-end col*/}

          <div className="col-lg-4 col-md-6">
              <div className="card blog blog-primary shadow rounded overflow-hidden border-0">
                  <div className="card-img blog-image position-relative overflow-hidden rounded-0">
                      <div className="position-relative overflow-hidden">
                          <img src="images/blog/02.jpg" className="img-fluid" alt=""/>
                          <div className="card-overlay"></div>
                      </div>
                  </div>

                  <div className="card-body blog-content position-relative p-0">
                      <div className="blog-tag px-4">
                          <a href="" className="badge bg-primary rounded-pill">Illustration</a>
                      </div>
                      <div className="p-4">
                          <ul className="list-unstyled text-muted small mb-2">
                              <li className="d-inline-flex align-items-center me-2"><i data-feather="calendar" className="fea icon-ex-sm me-1 text-dark"></i>31st October 2023</li>
                              <li className="d-inline-flex align-items-center"><i data-feather="clock" className="fea icon-ex-sm me-1 text-dark"></i>5 min read</li>
                          </ul>

                          <a href="blog-detail.html" className="title fw-semibold fs-5 text-dark">DigitalOcean launches first Canadian data centre in Toronto</a>
                          
                          <ul className="list-unstyled d-flex justify-content-between align-items-center text-muted mb-0 mt-3">
                              <li className="list-inline-item me-2"><a href="" className="btn btn-link primary text-dark">Read Now <i className="mdi mdi-arrow-right"></i></a></li>
                              <li className="list-inline-item"><span className="text-dark">By</span> <a href="" className="text-muted link-title">Facebook</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>{/*-end col*/}
          
          <div className="col-lg-4 col-md-6">
              <div className="card blog blog-primary shadow rounded overflow-hidden border-0">
                  <div className="card-img blog-image position-relative overflow-hidden rounded-0">
                      <div className="position-relative overflow-hidden">
                          <img src="images/blog/03.jpg" className="img-fluid" alt=""/>
                          <div className="card-overlay"></div>
                      </div>
                  </div>

                  <div className="card-body blog-content position-relative p-0">
                      <div className="blog-tag px-4">
                          <a href="" className="badge bg-primary rounded-pill">Music</a>
                      </div>
                      <div className="p-4">
                          <ul className="list-unstyled text-muted small mb-2">
                              <li className="d-inline-flex align-items-center me-2"><i data-feather="calendar" className="fea icon-ex-sm me-1 text-dark"></i>31st October 2023</li>
                              <li className="d-inline-flex align-items-center"><i data-feather="clock" className="fea icon-ex-sm me-1 text-dark"></i>5 min read</li>
                          </ul>

                          <a href="blog-detail.html" className="title fw-semibold fs-5 text-dark">Using Banner Stands To Increase Trade Show Traffic</a>
                          
                          <ul className="list-unstyled d-flex justify-content-between align-items-center text-muted mb-0 mt-3">
                              <li className="list-inline-item me-2"><a href="" className="btn btn-link primary text-dark">Read Now <i className="mdi mdi-arrow-right"></i></a></li>
                              <li className="list-inline-item"><span className="text-dark">By</span> <a href="" className="text-muted link-title">Linkedin</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>{/*-end col*/}
            </div>
      
            </div>
    
    </>
  )
}
