import React from 'react'
import {Link, usePage } from '@inertiajs/react'

export default function Pjob() {
    const{ job,locations,categories,jobtypes} = usePage().props
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
    <div className="container mt-100 mt-150">
          <div className="row justify-content-center mb-4 pb-2">
          <div className="col-12">
              <div className="section-title text-center">
                  <h4 className="title mb-3">Popular Job Listing</h4>
                  <p className="text-muted para-desc mx-auto mb-0">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
              </div>
             </div>
          </div>

            <div className="row g-4 mt-0">
            {job.map(({id,title,jobtype_id,category_id,location_id,salary}) => (
          <div className="col-12">
              <div className="job-post job-post-list rounded shadow p-4 d-md-flex align-items-center justify-content-between position-relative">
                  <div className="d-flex align-items-center w-310px">
                      <img src="images/company/circle-logo.png" className="avatar avatar-small rounded shadow p-3 bg-white" alt=""/>

                      <div className="ms-3">
                          <a href="job-detail-one.html" className="h5 title text-dark">{title}</a>
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

          <div className="col-12">
              <div className="text-center">
                  <a href="job-list-one.html" className="btn btn-link primary text-muted">See More Jobs <i className="mdi mdi-arrow-right"></i></a>
              </div>
          </div>
           </div>
        </div>
    
    </>
  )
}
