import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import {Link, usePage } from '@inertiajs/react';

import React from 'react'


export default function JobDetails(props) {
  const{ job,locations,categories,jobtypes,companies} = usePage().props
 
     const JobtypeName = (id) => {
         const jobtype = jobtypes.find(type => type.id === id);
         return jobtype ? jobtype.jobtype_name : 'Unknown Jobtype';
     };
     const CompanyName = (id) => {
        const company = companies.find(com => com.id === id);
        return company ? company.name : 'Unknown Company';
    };
 
     const CategoryName = (id) => {
         const category = categories.find(cat => cat.id === id);
         return category ? category.category_name : 'Unknown Category';
     };
 
     const LocationName = (id) => {
         const location = locations.find(loc => loc.id === id);
         return location ? location.location_name : 'Unknown Location';
     };
   
    // console.log(application)
  return (
    <>
    <Header></Header>
    <section className="bg-half d-table w-100 bg-light">
            <div className="container">
            {job && (
                <div className="row g-4">
               
                    <div className="col-lg-8 col-md-6 col-12">

                        <div className="d-lg-flex align-items-center p-4 rounded shadow bg-white mb-4">
                        {/* <img src="images/company/facebook-logo.png" className="avatar avatar-small rounded shadow p-3 bg-white" alt=""/> */}

                            <div className="ms-lg-3 mt-3 mt-lg-0">
                                <h4>{job.title}</h4>

                                <ul className="list-unstyled mb-0">
                                    <li className="d-inline-flex align-items-center text-muted me-2"><i data-feather="layout" className="fea icon-sm text-primary me-1"></i> {}</li>
                                    <li className="d-inline-flex align-items-center text-muted"> {LocationName(job.location_id)}</li>
                                </ul>
                            </div>
                        </div>

                        <h5>Job Description: </h5>
                        <p className="text-muted">{job.description}</p>
                       
                        
                        <h5 className="mt-4">Responsibilities and Duties: </h5>
                        <p className="text-muted">{job.responsibility}</p>
                       

                        <h5 className="mt-4">Required Experience, Skills and Qualifications: </h5>
                        <p className="text-muted">{job.qualifications}</p>
                       

                        <div className="mt-4">
                            <Link href={route('applicant.create',job.id)} className="btn btn-outline-primary">Apply Now <i className="mdi mdi-send"></i></Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card bg-white rounded shadow sticky-bar">
                            <div className="p-4">
                                <h5 className="mb-0">Job Information</h5>
                            </div>

                            <div className="card-body p-4 border-top">
                                <div className="d-flex widget align-items-center">
                                    <i data-feather="layout" className="fea icon-ex-md me-3"></i>
                                    <div className="flex-1">
                                        <h6 className="widget-title mb-0">Company Name:</h6>
                                        <small className="text-primary mb-0">{CompanyName(job.company_id)}</small>
                                    </div>
                                </div>

                                <div className="d-flex widget align-items-center mt-3">
                                    <i data-feather="user-check" className="fea icon-ex-md me-3"></i>
                                    <div className="flex-1">
                                        <h6 className="widget-title mb-0">Job Type:</h6>
                                        <small className="text-primary mb-0">{JobtypeName(job.jobtype_id)}</small>
                                    </div>
                                </div>

                                <div className="d-flex widget align-items-center mt-3">
                                    <i data-feather="map-pin" className="fea icon-ex-md me-3"></i>
                                    <div className="flex-1">
                                        <h6 className="widget-title mb-0">Location:</h6>
                                        <small className="text-primary mb-0">{LocationName(job.location_id)}</small>
                                    </div>
                                </div>


                                <div className="d-flex widget align-items-center mt-3">
                                    <i data-feather="briefcase" className="fea icon-ex-md me-3"></i>
                                    <div className="flex-1">
                                        <h6 className="widget-title mb-0">Experience:</h6>
                                        <small className="text-primary mb-0">{job.experience}</small>
                                    </div>
                                </div>

                                <div className="d-flex widget align-items-center mt-3">
                                    <i data-feather="book" className="fea icon-ex-md me-3"></i>
                                    <div className="flex-1">
                                        <h6 className="widget-title mb-0">Qualifications:</h6>
                                        <small className="text-primary mb-0">{job.keywords}</small>
                                    </div>
                                </div>

                                <div className="d-flex widget align-items-center mt-3">
                                    <i data-feather="dollar-sign" className="fea icon-ex-md me-3"></i>
                                    <div className="flex-1">
                                        <h6 className="widget-title mb-0">Salary:</h6>
                                        <small className="text-primary mb-0">{job.salary}</small>
                                    </div>
                                </div>

                                <div className="d-flex widget align-items-center mt-3">
                                    <i data-feather="clock" className="fea icon-ex-md me-3"></i>
                                    <div className="flex-1">
                                        <h6 className="widget-title mb-0">Job End Date</h6>
                                        <small className="text-primary mb-0 mb-0">{job.job_end_date}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                 
                    </div>
                
                </div>
            )}        
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center mb-4 pb-2">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h4 className="title mb-3">Related Vacancies</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                        </div>
                    </div>{/*end col*/}
                </div>{/*end row*/}

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div className="job-post rounded shadow bg-white">
                            <div className="p-4">
                                <a href="job-detail-two.html" className="text-dark title h5">Web Designer / Developer</a>

                                <p className="text-muted d-flex align-items-center small mt-3"><i data-feather="clock" className="fea icon-sm text-primary me-1"></i>Posted 3 Days ago</p>

                                <ul className="list-unstyled d-flex justify-content-between align-items-center mb-0 mt-3">
                                    <li className="list-inline-item"><span className="badge bg-soft-primary">Full Time</span></li>
                                    <li className="list-inline-item"><span className="text-muted d-flex align-items-center small"><i data-feather="dollar-sign" className="fea icon-sm text-primary me-1"></i>$950 - $1100/mo</span></li>
                                </ul>
                            </div>
                            <div className="d-flex align-items-center p-4 border-top">
                                <img src="images/company/facebook-logo.png" className="avatar avatar-small rounded shadow p-3 bg-white" alt=""/>

                                <div className="ms-3">
                                    <a href="employer-profile.html" className="h5 company text-dark">Facebook</a>
                                    <span className="text-muted d-flex align-items-center mt-1"><i data-feather="map-pin" className="fea icon-sm me-1"></i>Australia</span>
                                </div>
                            </div>
                        </div>
                    </div>{/*end col*/}
                    
                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div className="job-post rounded shadow bg-white">
                            <div className="p-4">
                                <a href="job-detail-two.html" className="text-dark title h5">Marketing Director</a>

                                <p className="text-muted d-flex align-items-center small mt-3"><i data-feather="clock" className="fea icon-sm text-primary me-1"></i>Posted 3 Days ago</p>

                                <ul className="list-unstyled d-flex justify-content-between align-items-center mb-0 mt-3">
                                    <li className="list-inline-item"><span className="badge bg-soft-primary">Part Time</span></li>
                                    <li className="list-inline-item"><span className="text-muted d-flex align-items-center small"><i data-feather="dollar-sign" className="fea icon-sm text-primary me-1"></i>$950 - $1100/mo</span></li>
                                </ul>
                            </div>
                            <div className="d-flex align-items-center p-4 border-top">
                                <img src="images/company/google-logo.png" className="avatar avatar-small rounded shadow p-3 bg-white" alt=""/>

                                <div className="ms-3">
                                    <a href="employer-profile.html" className="h5 company text-dark">Google</a>
                                    <span className="text-muted d-flex align-items-center mt-1"><i data-feather="map-pin" className="fea icon-sm me-1"></i>Australia</span>
                                </div>
                            </div>
                        </div>
                    </div>{/*end col*/}
                    
                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div className="job-post rounded shadow bg-white">
                            <div className="p-4">
                                <a href="job-detail-two.html" className="text-dark title h5">Php Developer</a>

                                <p className="text-muted d-flex align-items-center small mt-3"><i data-feather="clock" className="fea icon-sm text-primary me-1"></i>Posted 3 Days ago</p>

                                <ul className="list-unstyled d-flex justify-content-between align-items-center mb-0 mt-3">
                                    <li className="list-inline-item"><span className="badge bg-soft-primary">Remote</span></li>
                                    <li className="list-inline-item"><span className="text-muted d-flex align-items-center small"><i data-feather="dollar-sign" className="fea icon-sm text-primary me-1"></i>$950 - $1100/mo</span></li>
                                </ul>
                            </div>
                            <div className="d-flex align-items-center p-4 border-top">
                                <img src="images/company/whatsapp.png" className="avatar avatar-small rounded shadow p-3 bg-white" alt=""/>

                                <div className="ms-3">
                                    <a href="employer-profile.html" className="h5 company text-dark">Whatsapp</a>
                                    <span className="text-muted d-flex align-items-center mt-1"><i data-feather="map-pin" className="fea icon-sm me-1"></i>Australia</span>
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
