import Footer from '@/Components/Footer'
import Header from '@/Components/Header'

import React from 'react'

export default function Blog() {
  return (
    <>
        <Header></Header>
        <section className="bg-half-170 d-table w-100" style={{ backgroundImage: `url("images/hero/bg.jpg")` }}>
    <div className="bg-overlay bg-gradient-overlay"></div>
    <div className="container">
        <div className="row mt-5 justify-content-center">
            <div className="col-12">
                <div className="title-heading text-center">
                    <p className="text-white-50 para-desc mx-auto mb-0">Latest News</p>
                    <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Blogs & News</h5>
                </div>
            </div>{/*end col*/}
        </div>{/*end row*/}

        <div className="position-middle-bottom">
            <nav aria-label="breadcrumb" className="d-block">
                <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                    <li className="breadcrumb-item"><a href="index.html">Jobnova</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Blogs</li>
                </ul>
            </nav>
        </div>
    </div>{/*end container*/}
</section>{/*end section*/}
<div className="position-relative">
    <div className="shape overflow-hidden text-white">
        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
        </svg>
    </div>
</div>
{/* Hero End */}

{/* Start */}
<section className="section">
    <div className="container">
        <div className="row g-4">
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
            </div>{/*end col*/}

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
            </div>{/*end col*/}
            
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
            </div>{/*end col*/}

            <div className="col-lg-4 col-md-6">
                <div className="card blog blog-primary shadow rounded overflow-hidden border-0">
                    <div className="card-img blog-image position-relative overflow-hidden rounded-0">
                        <div className="position-relative overflow-hidden">
                            <img src="images/blog/04.jpg" className="img-fluid" alt=""/>
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
            </div>{/*end col*/}

            <div className="col-lg-4 col-md-6">
                <div className="card blog blog-primary shadow rounded overflow-hidden border-0">
                    <div className="card-img blog-image position-relative overflow-hidden rounded-0">
                        <div className="position-relative overflow-hidden">
                            <img src="images/blog/05.jpg" className="img-fluid" alt=""/>
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
            </div>{/*end col*/}
            
            <div className="col-lg-4 col-md-6">
                <div className="card blog blog-primary shadow rounded overflow-hidden border-0">
                    <div className="card-img blog-image position-relative overflow-hidden rounded-0">
                        <div className="position-relative overflow-hidden">
                            <img src="images/blog/06.jpg" className="img-fluid" alt=""/>
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
            </div>{/*end col*/}

            <div className="col-lg-4 col-md-6">
                <div className="card blog blog-primary shadow rounded overflow-hidden border-0">
                    <div className="card-img blog-image position-relative overflow-hidden rounded-0">
                        <div className="position-relative overflow-hidden">
                            <img src="images/blog/07.jpg" className="img-fluid" alt=""/>
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
            </div>{/*end col*/}

            <div className="col-lg-4 col-md-6">
                <div className="card blog blog-primary shadow rounded overflow-hidden border-0">
                    <div className="card-img blog-image position-relative overflow-hidden rounded-0">
                        <div className="position-relative overflow-hidden">
                            <img src="images/blog/08.jpg" className="img-fluid" alt=""/>
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
            </div>{/*end col*/}
            
            <div className="col-lg-4 col-md-6">
                <div className="card blog blog-primary shadow rounded overflow-hidden border-0">
                    <div className="card-img blog-image position-relative overflow-hidden rounded-0">
                        <div className="position-relative overflow-hidden">
                            <img src="images/blog/09.jpg" className="img-fluid" alt=""/>
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
            </div>{/*end col*/}
        </div>{/*end row*/}

        <div className="row">
            <div className="col-12 mt-4 pt-2">
                <ul className="pagination justify-content-center mb-0">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true"><i className="mdi mdi-chevron-left fs-6"></i></span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item active"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true"><i className="mdi mdi-chevron-right fs-6"></i></span>
                        </a>
                    </li>
                </ul>
            </div>{/*end col*/}
        </div>{/*end row*/}
    </div>{/*end container*/}
</section>
        <Footer></Footer>
        </>
  )
}

