import React from 'react'

export default function Hero() {
  return (
    <>
    <section className="bg-half-260 d-table w-100" style={{ backgroundImage: `url("images/hero/bg.jpg")` }}>
        <div className="bg-overlay bg-primary-gradient-overlay"></div>
       <div className="container">
         <div className="row mt-5 justify-content-center">
          <div className="col-lg-10">
              <div className="title-heading text-center">
                  <h1 className="heading text-white fw-bold">Find & Hire Experts <br/> for any Job</h1>
                  <p className="para-desc text-white-50 mx-auto mb-0">Find Jobs, Employment & Career Opportunities. Some of the companies we've helped recruit excellent applicants over the years.</p>
              
                  <div className="d-md-flex justify-content-between align-items-center bg-white shadow rounded p-2 mt-4">
                      <form className="card-body text-start">
                          <div className="registration-form text-dark text-start">
                              <div className="row g-lg-0">
                                  <div className="col-lg-3 col-md-6 col-12">
                                      <div className="mb-3 mb-sm-0">
                                          <label className="form-label d-none fs-6">Search :</label>
                                          <div className="filter-search-form position-relative filter-border">
                                              <i data-feather="search" className="fea icon-20 icons"></i>
                                              <input name="name" type="text" id="job-keyword" className="form-control filter-input-box bg-light border-0" placeholder="Search your keaywords"/>
                                          </div>
                                      </div>
                                  </div>{/*-end col*/}
                                  
                                  <div className="col-lg-3 col-md-6 col-12">
                                      <div className="mb-3 mb-sm-0">
                                          <label className="form-label d-none fs-6">Location:</label>
                                          <div className="filter-search-form position-relative filter-border">
                                              <i data-feather="map-pin" className="fea icon-20 icons"></i>
                                              <input name="name" type="text" id="job-keyword" className="form-control filter-input-box bg-light border-0" placeholder="Select your location"/>
                                          </div>
                                      </div>
                                  </div>{/*-end col*/}

                                  <div className="col-lg-3 col-md-6 col-12">
                                      <div className="mb-3 mb-sm-0">
                                          <label className="form-label d-none fs-6">Type :</label>
                                          <div className="filter-search-form relative filter-border">
                                              <i data-feather="briefcase" className="fea icon-20 icons"></i>
                                              <input name="name" type="text" id="job-keyword" className="form-control filter-input-box bg-light border-0" placeholder="Select your type"/>
                                          </div>
                                      </div>
                                  </div>{/*-end col*/}

                                  <div className="col-lg-3 col-md-6 col-12">
                                      <input type="submit" id="search" name="search" style={{height: '60px'}} className="btn btn-primary searchbtn w-100" value="Search"/>
                                  </div>{/*-end col*/}
                              </div>{/*-end row*/}
                          </div>
                      </form>{/*-end form*/}
                  </div>

                  <div className="mt-2">
                      <span className="text-white-50"><span className="text-white">Popular Searches :</span> Designer, Developer, Web, IOS, PHP Senior Engineer</span>
                  </div>
              </div>
          </div>{/*-end col*/}
           </div>{/*-end row*/}
         </div>{/*-end container*/}
                    </section>{/*-end section*/}
            <div className="position-relative">
             <div className="shape overflow-hidden text-white">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
           </svg>
           </div>
              </div>
    
    </>
  )
}

