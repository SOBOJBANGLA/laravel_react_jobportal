import Footer from '@/Components/Footer'
import Header from '@/Components/Header'

import React from 'react'

export default function Profile() {
 // const {candidate, canDetails,application,user,companies,comDetails,jobs,categories} = usePage().props;

  return (
    <>
<Header></Header>
<section className="section">
    <div className="container">
        <div className="row">
            
            <div className="col-12">
                <div className="position-relative">
                    <div className="candidate-cover">
                        <img src="images/hero/bg5.jpg" className="img-fluid rounded shadow" alt=""/>
                    </div>
                    <div className="candidate-profile d-flex align-items-end justify-content-between mx-2">
                        <div className="d-flex align-items-end">
                            
                            {/* <img src="images/nophoto.jpg" className="rounded-pill shadow border border-3 avatar avatar-medium" alt=""/> */}
                          
                            <img src="images/team/f2.jpg" className="rounded-pill shadow border border-3 avatar avatar-medium" alt=""/>
                            
                            <div className="ms-2">
                                <h5 className="mb-0"></h5>
                                <p className="text-muted mb-0">Web Designer</p>
                            </div>
                        </div>
                        
                        <a href="" className="btn btn-sm btn-icon btn-pills btn-soft-primary"> <i data-feather="settings" className="icons"></i> </a>
                       
                    </div>
                </div>
            </div>{/*end col*/}
           
        </div>{/*end row*/}
    </div>{/*end container*/}

    <div className="container mt-4">
        <div className="row g-4">
            
            <div className="col-lg-8 col-md-7 col-12">
                <h5 className="mb-4">Introduction:</h5>

                <p className="text-muted"></p>
               

                <h5 className="mt-4">Skills:</h5>

                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="progress-box mt-4">
                            <h6 className="font-weight-normal">HTML</h6>
                            <div className="progress">
                                <div className="progress-bar position-relative bg-primary" style={{width:'84%'}}>
                                    <div className="progress-value d-block text-dark h6">84%</div>
                                </div>
                            </div>
                        </div>{/*end process box*/}
                        <div className="progress-box mt-4">
                            <h6 className="font-weight-normal">CSS</h6>
                            <div className="progress">
                                <div className="progress-bar position-relative bg-primary" style={{width:'75%'}}>
                                    <div className="progress-value d-block text-dark h6">75%</div>
                                </div>
                            </div>
                        </div>{/*end process box*/}
                        <div className="progress-box mt-4">
                            <h6 className="font-weight-normal">JQuery</h6>
                            <div className="progress">
                                <div className="progress-bar position-relative bg-primary" style={{width:'79%'}}>
                                    <div className="progress-value d-block text-dark h6">79%</div>
                                </div>
                            </div>
                        </div>{/*end process box*/}
                    </div>{/*end col*/}

                    <div className="col-lg-6 col-12">
                        <div className="progress-box mt-4">
                            <h6 className="font-weight-normal">WordPress</h6>
                            <div className="progress">
                                <div className="progress-bar position-relative bg-primary" style={{width:'79%'}}>
                                    <div className="progress-value d-block text-dark h6">79%</div>
                                </div>
                            </div>
                        </div>{/*end process box*/}
                        <div className="progress-box mt-4">
                            <h6 className="font-weight-normal">Figma</h6>
                            <div className="progress">
                                <div className="progress-bar position-relative bg-primary" style={{width:'85%'}}>
                                    <div className="progress-value d-block text-dark h6">85%</div>
                                </div>
                            </div>
                        </div>{/*end process box*/}
                        <div className="progress-box mt-4">
                            <h6 className="font-weight-normal">Illustration</h6>
                            <div className="progress">
                                <div className="progress-bar position-relative bg-primary" style={{width:'65%'}}>
                                    <div className="progress-value d-block text-dark h6">65%</div>
                                </div>
                            </div>
                        </div>{/*end process box*/}
                
                 </div>
                {/*end col*/}
                </div>{/*end row*/}

                <h5 className="mt-4">Experience:</h5>

                <div className="row">
                    <div className="col-12 mt-4">
                        <div className="d-flex">
                            <div className="text-center">
                                <img src="images/company/linkedin.png" className="avatar avatar-small bg-white shadow p-2 rounded" alt=""/>
                                <h6 className="text-muted mt-2 mb-0">2019-22</h6>
                            </div>

                            <div className="ms-3">
                                <h6 className="mb-0">Full Stack Developer</h6>
                                <p className="text-muted">Linkedin - U.S.A.</p>
                                <p className="text-muted mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</p>
                            </div>
                        </div>
                    </div>{/*end col*/}
                    
                    <div className="col-12 mt-4">
                        <div className="d-flex">
                            <div className="text-center">
                                <img src="images/company/lenovo-logo.png" className="avatar avatar-small bg-white shadow p-2 rounded" alt=""/>
                                <h6 className="text-muted mt-2 mb-0">2017-19</h6>
                            </div>

                            <div className="ms-3">
                                <h6 className="mb-0">Back-end Developer</h6>
                                <p className="text-muted">Lenovo - China</p>
                                <p className="text-muted mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</p>
                            </div>
                        </div>
                    </div>{/*end col*/}
                </div>{/*end row*/}

                <div className="p-4 rounded shadow mt-4">
                    <h5>Get in touch !</h5>
                    <form className="mt-4" method="post" name="myForm" onsubmit="return validateForm()">
                        <p className="mb-0" id="error-msg"></p>
                        <div id="simple-msg"></div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Your Name <span className="text-danger">*</span></label>
                                    <input name="name" id="name" type="text" className="form-control" placeholder="Name :"/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Your Email <span className="text-danger">*</span></label>
                                    <input name="email" id="email" type="email" className="form-control" placeholder="Email :"/>
                                </div> 
                            </div>{/*end col*/}

                            <div className="col-12">
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Subject</label>
                                    <input name="subject" id="subject" className="form-control" placeholder="Subject :"/>
                                </div>
                            </div>{/*end col*/}

                            <div className="col-12">
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Comments <span className="text-danger">*</span></label>
                                    <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Message :"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="d-grid">
                                    <button type="submit" id="submit" name="send" className="btn btn-primary">Send Message</button>
                                </div>
                            </div>{/*end col*/}
                        </div>{/*end row*/}
                    </form>
                </div>
            </div>{/*end col*/}
            
            <div className="col-lg-4 col-md-5 col-12">
                <div className="card bg-light p-4 rounded shadow sticky-bar">
                    <h5 className="mb-0">Personal Detail:</h5>
                    <div className="mt-3">
                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <span className="d-inline-flex align-items-center text-muted fw-medium"><i data-feather="user" className="fea icon-sm me-2"></i> Name:</span>
                            <span className="fw-medium"></span>
                        </div>

                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <span className="d-inline-flex align-items-center text-muted fw-medium"><i data-feather="mail" className="fea icon-sm me-2"></i> Email:</span>
                            <span className="fw-medium"></span>
                        </div>

                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <span className="d-inline-flex align-items-center text-muted fw-medium"><i data-feather="gift" className="fea icon-sm me-2"></i> D.O.B.:</span>
                            <span className="fw-medium">31st Dec, 1996</span>
                        </div>

                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <span className="d-inline-flex align-items-center text-muted fw-medium"><i data-feather="home" className="fea icon-sm me-2"></i> Address:</span>
                            <span className="fw-medium"></span>
                        </div>

                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <span className="d-inline-flex align-items-center text-muted fw-medium"><i data-feather="phone" className="fea icon-sm me-2"></i> Mobile:</span>
                            <span className="fw-medium"></span>
                        </div>

                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <span className="text-muted fw-medium">Social:</span>
                            
                            <ul className="list-unstyled social-icon text-sm-end mb-0">
                                <li className="list-inline-item"><a href="https://dribbble.com/shreethemes" target="_blank" className="rounded"><i data-feather="dribbble" className="fea icon-sm align-middle" title="dribbble"></i></a></li>
                                <li className="list-inline-item"><a href="http://linkedin.com/company/shreethemes" target="_blank" className="rounded"><i data-feather="linkedin" className="fea icon-sm align-middle" title="Linkedin"></i></a></li>
                                <li className="list-inline-item"><a href="https://www.facebook.com/shreethemes" target="_blank" className="rounded"><i data-feather="facebook" className="fea icon-sm align-middle" title="facebook"></i></a></li>
                                <li className="list-inline-item"><a href="https://www.instagram.com/shreethemes/" target="_blank" className="rounded"><i data-feather="instagram" className="fea icon-sm align-middle" title="instagram"></i></a></li>
                                <li className="list-inline-item"><a href="https://twitter.com/shreethemes" target="_blank" className="rounded"><i data-feather="twitter" className="fea icon-sm align-middle" title="twitter"></i></a></li>
                            </ul>{/*end icon*/}
                        </div>

                        <div className="p-3 rounded shadow bg-white mt-2">
                            <div className="d-flex align-items-center mb-2">
                                <i data-feather="file-text" className="fea icon-md"></i>
                                <h6 className="mb-0 ms-2">my-resume.pdf</h6>
                            </div>

                            <a href="" className="btn btn-primary w-100" download><i data-feather="download" className="fea icon-sm me-1"></i> Download CV</a>
                        </div>
                    </div>
                </div>
            </div>{/*end col*/}
          
        </div>{/*end row*/}
    </div>{/*end container*/}

    <div className="container mt-100 mt-60">
        <div className="row justify-content-center mb-4 pb-2">
            <div className="col-12">
                <div className="section-title text-center">
                    <h4 className="title mb-3">Related Candidates</h4>
                    <p className="text-muted para-desc mx-auto mb-0">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                </div>
            </div>{/*end col*/}
        </div>{/*end row*/}

        <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 pt-2">
                <div className="candidate-card position-relative overflow-hidden text-center shadow rounded p-4">
                    <div className="content">
                        <img src="images/team/02.jpg" className="avatar avatar-md-md rounded-pill shadow-md" alt=""/>

                        <div className="mt-3">
                            <a href="candidate-profile.html" className="title h5 text-dark">Tiffany Betancourt</a>
                            <p className="text-muted mt-1">Application Developer</p>

                            <span className="badge bg-soft-primary rounded-pill">Design</span>
                            <span className="badge bg-soft-primary rounded-pill">UI</span>
                            <span className="badge bg-soft-primary rounded-pill">UX</span>
                            <span className="badge bg-soft-primary rounded-pill">Digital</span>
                        </div>

                        <div className="mt-2 d-flex align-items-center justify-content-between">
                            <div className="text-center">
                                <p className="text-muted fw-medium mb-0">Salary:</p>
                                <p className="mb-0 fw-medium">$5k - $6k</p>
                            </div>

                            <div className="text-center">
                                <p className="text-muted fw-medium mb-0">Experience:</p>
                                <p className="mb-0 fw-medium">2 Years</p>
                            </div>
                        </div>
                        
                        <div className="mt-3">
                            <a href="candidate-profile.html" className="btn btn-sm btn-primary me-1">View Profile</a>
                            <a href="contactus.html" className="btn btn-sm btn-icon btn-soft-primary"><i data-feather="message-circle" className="icons"></i></a>
                        </div>

                        <a href="javascript:void(0)" className="like"><i className="mdi mdi-heart align-middle fs-4"></i></a>
                    </div>
                </div>
            </div>{/*end col*/}

            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 pt-2">
                <div className="candidate-card position-relative overflow-hidden text-center shadow rounded p-4">
                    <div className="content">
                        <img src="images/team/03.jpg" className="avatar avatar-md-md rounded-pill shadow-md" alt=""/>

                        <div className="mt-3">
                            <a href="candidate-profile.html" className="title h5 text-dark">Jacqueline Burns</a>
                            <p className="text-muted mt-1">Senior Product Designer</p>

                            <span className="badge bg-soft-primary rounded-pill">Design</span>
                            <span className="badge bg-soft-primary rounded-pill">UI</span>
                            <span className="badge bg-soft-primary rounded-pill">UX</span>
                            <span className="badge bg-soft-primary rounded-pill">Digital</span>
                        </div>

                        <div className="mt-2 d-flex align-items-center justify-content-between">
                            <div className="text-center">
                                <p className="text-muted fw-medium mb-0">Salary:</p>
                                <p className="mb-0 fw-medium">$5k - $6k</p>
                            </div>

                            <div className="text-center">
                                <p className="text-muted fw-medium mb-0">Experience:</p>
                                <p className="mb-0 fw-medium">2 Years</p>
                            </div>
                        </div>
                        
                        <div className="mt-3">
                            <a href="candidate-profile.html" className="btn btn-sm btn-primary me-1">View Profile</a>
                            <a href="contactus.html" className="btn btn-sm btn-icon btn-soft-primary"><i data-feather="message-circle" className="icons"></i></a>
                        </div>

                        <a href="javascript:void(0)" className="like"><i className="mdi mdi-heart align-middle fs-4"></i></a>
                    </div>
                </div>
            </div>{/*end col*/}

            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 pt-2">
                <div className="candidate-card position-relative overflow-hidden text-center shadow rounded p-4">
                    <div className="ribbon ribbon-left overflow-hidden"><span className="text-center d-block bg-warning shadow small h6"><i className="mdi mdi-star"></i></span></div>
                    <div className="content">
                        <img src="images/team/04.jpg" className="avatar avatar-md-md rounded-pill shadow-md" alt=""/>

                        <div className="mt-3">
                            <a href="candidate-profile.html" className="title h5 text-dark">Mari Harrington</a>
                            <p className="text-muted mt-1">C++ Developer</p>

                            <span className="badge bg-soft-primary rounded-pill">Design</span>
                            <span className="badge bg-soft-primary rounded-pill">UI</span>
                            <span className="badge bg-soft-primary rounded-pill">UX</span>
                            <span className="badge bg-soft-primary rounded-pill">Digital</span>
                        </div>

                        <div className="mt-2 d-flex align-items-center justify-content-between">
                            <div className="text-center">
                                <p className="text-muted fw-medium mb-0">Salary:</p>
                                <p className="mb-0 fw-medium">$5k - $6k</p>
                            </div>

                            <div className="text-center">
                                <p className="text-muted fw-medium mb-0">Experience:</p>
                                <p className="mb-0 fw-medium">2 Years</p>
                            </div>
                        </div>
                        
                        <div className="mt-3">
                            <a href="candidate-profile.html" className="btn btn-sm btn-primary me-1">View Profile</a>
                            <a href="contactus.html" className="btn btn-sm btn-icon btn-soft-primary"><i data-feather="message-circle" className="icons"></i></a>
                        </div>

                        <a href="javascript:void(0)" className="like"><i className="mdi mdi-heart align-middle fs-4"></i></a>
                    </div>
                </div>
            </div>{/*end col*/}

            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 pt-2">
                <div className="candidate-card position-relative overflow-hidden text-center shadow rounded p-4">
                    <div className="content">
                        <img src="images/team/05.jpg" className="avatar avatar-md-md rounded-pill shadow-md" alt=""/>

                        <div className="mt-3">
                            <a href="candidate-profile.html" className="title h5 text-dark">Floyd Glasgow</a>
                            <p className="text-muted mt-1">Php Developer</p>

                            <span className="badge bg-soft-primary rounded-pill">Design</span>
                            <span className="badge bg-soft-primary rounded-pill">UI</span>
                            <span className="badge bg-soft-primary rounded-pill">UX</span>
                            <span className="badge bg-soft-primary rounded-pill">Digital</span>
                        </div>

                        <div className="mt-2 d-flex align-items-center justify-content-between">
                            <div className="text-center">
                                <p className="text-muted fw-medium mb-0">Salary:</p>
                                <p className="mb-0 fw-medium">$5k - $6k</p>
                            </div>

                            <div className="text-center">
                                <p className="text-muted fw-medium mb-0">Experience:</p>
                                <p className="mb-0 fw-medium">2 Years</p>
                            </div>
                        </div>
                        
                        <div className="mt-3">
                            <a href="candidate-profile.html" className="btn btn-sm btn-primary me-1">View Profile</a>
                            <a href="contactus.html" className="btn btn-sm btn-icon btn-soft-primary"><i data-feather="message-circle" className="icons"></i></a>
                        </div>

                        <a href="javascript:void(0)" className="like"><i className="mdi mdi-heart align-middle fs-4"></i></a>
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
