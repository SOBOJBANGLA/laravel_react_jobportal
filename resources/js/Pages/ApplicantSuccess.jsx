import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import React from 'react';

const ApplicantSuccess = ({ msg }) => {
    return (
        <>
        <Header />
        <section className="bg-half-170 d-table w-100" style={{ backgroundImage: `url("images/hero/bg.jpg")` }}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <p className="text-white-50 para-desc mx-auto mb-0">Get in touch !</p>
                            <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Application Success</h5>
                        </div>
                    </div>{/*end col*/}
                </div>{/*end row*/}

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><a href="index.html">Jobnova</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Success</li>
                        </ul>
                    </nav>
                </div>
            </div>{/*end container*/}
        </section>
        <div className="position-relative">
                <div className="shape overflow-hidden text-white">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <section className="section bg-light">
          
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-7">
                            <div className="card border-0">
                            <div className="alert alert-success mt-5" style={{ textAlign:'center' }}>
                                     {msg}
                             </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <Footer />
        </>
    );
};

export default ApplicantSuccess;
