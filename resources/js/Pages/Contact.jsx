import Footer from '@/Components/Footer'
import Header from '@/Components/Header'

import React from 'react'

export default function Contact() {
  return (
    <>
    <Header></Header>
    <section className="bg-half-170 d-table w-100" style={{ backgroundImage: `url("images/hero/bg.jpg")` }}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <p className="text-white-50 para-desc mx-auto mb-0">Get in touch !</p>
                            <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Contact us</h5>
                        </div>
                    </div>{/*end col*/}
                </div>{/*end row*/}

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><a href="index.html">Jobnova</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Contact us</li>
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
        <section className="section pb-0">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img src="images/svg/contact.svg" className="img-fluid" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <div className="p-4 rounded shadow ms-lg-5">
                            <h4>Get in touch !</h4>
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
                </div>{/*end row*/}
            </div>{/*end container*/}

            <div className="container mt-100 mt-60">
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="position-relative features text-center mx-lg-4 px-md-1">
                            <div className="feature-icon bg-soft-primary rounded shadow mx-auto position-relative overflow-hidden d-flex justify-content-center align-items-center">
                                <i data-feather="phone" className="fea icon-ex-md"></i>
                            </div>
    
                            <div className="mt-4">
                                <h5 className="mb-3">Phone</h5>
                                <p className="text-muted">Start working with Jobnova that can provide everything</p>
                                <a href="tel:+152534-468-854" className="text-primary">+152 534-468-854</a>
                            </div>
                        </div>
                    </div>{/*end col*/}
                    
                    <div className="col-md-4">
                        <div className="position-relative features text-center mx-lg-4 px-md-1">
                            <div className="feature-icon bg-soft-primary rounded shadow mx-auto position-relative overflow-hidden d-flex justify-content-center align-items-center">
                                <i data-feather="mail" className="fea icon-ex-md"></i>
                            </div>
    
                            <div className="mt-4">
                                <h5 className="mb-3">Email</h5>
                                <p className="text-muted">Start working with Jobnova that can provide everything</p>
                                <a href="mailto:contact@example.com" className="text-primary">contact@example.com</a>
                            </div>
                        </div>
                    </div>{/*end col*/}
                    
                    <div className="col-md-4">
                        <div className="position-relative features text-center mx-lg-4 px-md-1">
                            <div className="feature-icon bg-soft-primary rounded shadow mx-auto position-relative overflow-hidden d-flex justify-content-center align-items-center">
                                <i data-feather="map-pin" className="fea icon-ex-md"></i>
                            </div>
    
                            <div className="mt-4">
                                <h5 className="mb-3">Location</h5>
                                <p className="text-muted">C/54 Northwest Freeway, Suite 558, <br/>Houston, USA 485</p>
                                <a href="" className="text-primary">View on Google map</a>
                            </div>
                        </div>
                    </div>{/*end col*/}
                </div>{/*end row*/}
            </div>{/*end container*/}

            <div className="container-fluid mt-100 mt-60">
                <div className="row">
                    <div className="col-12 p-0">
                        <div className="card map border-0">
                            <div className="card-body p-0">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{border:0}} allowfullscreen></iframe>
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
