import {Link, usePage } from '@inertiajs/react'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import Search from '@/Components/Search'
import React from 'react'


export default function Job() {
    const{ jobs,locations,categories,jobtypes} = usePage().props

    const JobtypeName = (id) => {
        const jobtype = jobtypes.find(type => type.id === id);
        return jobtype ? jobtype.jobtype_name : 'Unknown Jobtype';
    };

    const CategoryName = (id) => {
        const category = categories.find(cat => cat.id === id);
        return category ? category.category_name : 'Unknown Category';
    };

    const LocationName = (id) => {
        const location = locations.find(loc => loc.id === id);
        return location ? location.location_name : 'Unknown Location';
    };
  return (
    <>
       <Header></Header>
       <section className="bg-half-170 d-table w-100" style={{ backgroundImage: `url("images/hero/bg.jpg")` }}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Job Vacancies</h5>
                        </div>
                    </div>{/*end col*/}
                </div>{/*end row*/}

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><a href="index.html">Jobnova</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Jobs</li>
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
        
            <div className="container mt-150">
                <div className="row g-4">
                    {jobs.map(({id,title,jobtype_id,category_id,location_id,salary}) => (
                    <div className="col-12">
                        <div className="job-post job-post-list rounded shadow p-4 d-md-flex align-items-center justify-content-between position-relative">
                            <div className="d-flex align-items-center w-310px">
                                <img src="images/company/circle-logo.png" className="avatar avatar-small rounded shadow p-3 bg-white" alt=""/>

                                <div className="ms-3">
                                    <a href="job-detail-one.html" className="h5 title text-dark">{ title }</a>
                                </div>
                            </div>

                            <div className="d-flex align-items-center justify-content-between d-md-block mt-3 mt-md-0 w-100px">
                                <span className="badge bg-soft-primary rounded-pill">{JobtypeName(jobtype_id)}</span>
                                <span className="text-muted d-flex align-items-center fw-medium mt-md-2">{CategoryName(category_id)}</span>
                            </div>

                            <div className="d-flex align-items-center justify-content-between d-md-block mt-2 mt-md-0 w-130px">
                                <span className="text-muted d-flex align-items-center"><i data-feather="map-pin" className="fea icon-sm me-1 align-middle"></i>{LocationName(location_id)}</span>
                                <span className="d-flex fw-medium mt-md-2">{salary} TK/ Month</span>
                            </div>

                            <div className="mt-3 mt-md-0">
                               
                                <Link href={ route('jobDetail',id) } className="btn btn-sm btn-primary w-full ms-md-1">Apply Now</Link>
                            </div>
                        </div>
                    </div>
                    ))}
                    
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

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center mb-4 pb-2">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h4 className="title mb-3">Here's why you'll love it Jobnova</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                        </div>
                    </div>{/*end col*/}
                </div>{/*end row*/}

                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 pt-2">
                        <div className="position-relative features text-center p-4 rounded shadow bg-white">
                            <div className="feature-icon bg-soft-primary rounded shadow mx-auto position-relative overflow-hidden d-flex justify-content-center align-items-center">
                                <i data-feather="phone" className="fea icon-ex-md"></i>
                            </div>
    
                            <div className="mt-4">
                                <a href="" className="title h5 text-dark">24/7 Support</a>
                                <p className="text-muted mt-3 mb-0">Many desktop publishing now use and a search for job.</p>
                                <div className="mt-3">
                                    <a href="" className="btn btn-link primary text-dark">Read More <i className="mdi mdi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>{/*end col*/}
                    
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 pt-2">
                        <div className="position-relative features text-center p-4 rounded shadow bg-white">
                            <div className="feature-icon bg-soft-primary rounded shadow mx-auto position-relative overflow-hidden d-flex justify-content-center align-items-center">
                                <i data-feather="cpu" className="fea icon-ex-md"></i>
                            </div>
    
                            <div className="mt-4">
                                <a href="" className="title h5 text-dark">Tech & Startup Jobs</a>
                                <p className="text-muted mt-3 mb-0">Many desktop publishing now use and a search for job.</p>
                                <div className="mt-3">
                                    <a href="" className="btn btn-link primary text-dark">Read More <i className="mdi mdi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>{/*end col*/}
                    
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 pt-2">
                        <div className="position-relative features text-center p-4 rounded shadow bg-white">
                            <div className="feature-icon bg-soft-primary rounded shadow mx-auto position-relative overflow-hidden d-flex justify-content-center align-items-center">
                                <i data-feather="activity" className="fea icon-ex-md"></i>
                            </div>
    
                            <div className="mt-4">
                                <a href="" className="title h5 text-dark">Quick & Easy</a>
                                <p className="text-muted mt-3 mb-0">Many desktop publishing now use and a search for job.</p>
                                <div className="mt-3">
                                    <a href="" className="btn btn-link primary text-dark">Read More <i className="mdi mdi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>{/*end col*/}
                    
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 pt-2">
                        <div className="position-relative features text-center p-4 rounded shadow bg-white">
                            <div className="feature-icon bg-soft-primary rounded shadow mx-auto position-relative overflow-hidden d-flex justify-content-center align-items-center">
                                <i data-feather="clock" className="fea icon-ex-md"></i>
                            </div>
    
                            <div className="mt-4">
                                <a href="" className="title h5 text-dark">Save Time</a>
                                <p className="text-muted mt-3 mb-0">Many desktop publishing now use and a search for job.</p>
                                <div className="mt-3">
                                    <a href="" className="btn btn-link primary text-dark">Read More <i className="mdi mdi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>{/*end col*/}
                </div>{/*end row*/}
            </div>{/*end container*/}
        </section>
        <Footer></Footer> 
    </>
  )
}
