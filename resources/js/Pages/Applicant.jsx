import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
//import React from 'react';
import React, { useState } from 'react';
import { useForm, usePage } from '@inertiajs/react';

export default function Applicant() {
    const { job, candidate, application } = usePage().props;
    const { data, setData, post, errors } = useForm({
        name: '',
        email: '',
        contact: '',
        pdf: null,
        candidate_id: candidate ? candidate.id : '',
        job_id: job ? job.id : '',
        employeer_id: job ? job.employeer_id : ''
    });

    const [successMessage, setSuccessMessage] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', data);

        post(route('apply.job', job.id), {
            onSuccess: () => {
                console.log('Form submission successful');
                setSuccessMessage('Successfully Applied');
            },
            onError: (errors) => {
                console.error('Form submission failed', errors);
            }
        });
    };

    // const handleSubmit = (e) => {
    //      e.preventDefault();
    //       console.log('Form Data:', data);
    //        post(route('apply.job', job.id), {
    //          onSuccess: () => { setSuccessMessage('Successfully Applied'); 

    //          }
    //          }); 
    //         };

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log('Form Data:', data);
    //     post(route('apply.job', job.id));

        
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault(); 
    //     console.log('Form Data:', data);
    //      post(route('apply.job', job.id), { 
    //        onSuccess: () => { alert('Successfully Applied'); 

    //        } 
    //    }); 
    //    };

    

    return (
        <>
            <Header />

            <div className="position-relative">
                <div className="shape overflow-hidden text-white">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <section className="section bg-light">
            {successMessage && ( <div className="alert alert-success mt-3"> {successMessage} </div> )}
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-7">
                            <div className="card border-0">
                                <form className="rounded shadow p-4" onSubmit={handleSubmit} method="post" encType="multipart/form-data">
                                    {job && candidate && (
                                        <div>
                                            <input type="hidden" name="job_id" value={job.id} />
                                            <input type="hidden" name="employeer_id" value={job.employeer_id} />
                                            <input type="hidden" name="candidate_id" value={candidate.id} />
                                        </div>
                                    )}
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label fw-semibold">Your Name :<span className="text-danger">*</span></label>
                                                <input
                                                    name="name"
                                                    id="name2"
                                                    type="text"
                                                    className="form-control"
                                                    value={data.name}
                                                    onChange={(e) => setData("name", e.target.value)}
                                                    placeholder="Your Name :"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label fw-semibold">Your Email :<span className="text-danger">*</span></label>
                                                <input
                                                    name="email"
                                                    id="email2"
                                                    type="text"
                                                    className="form-control"
                                                    value={data.email}
                                                    onChange={(e) => setData("email", e.target.value)}
                                                     placeholder="Your Email :"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label fw-semibold">Your Phone no. :<span className="text-danger">*</span></label>
                                                <input
                                                    name="contact"
                                                    id="number2"
                                                    type="text"
                                                    className="form-control"
                                                    value={data.contact}
                                                    onChange={(e) => setData("contact", e.target.value)}
                                                    placeholder="Your phone no. :"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label htmlFor="formFile" className="form-label fw-semibold">Upload Your Cv / Resume :</label>
                                                <input
                                                    className="form-control"
                                                    name="pdf"
                                                    type="file"
                                                    id="formFile"
                                                    onChange={(e) => setData("pdf", e.target.files[0])}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">I Accept <a href="#" className="text-primary">Terms And Condition</a></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            {application ? (
                                                <button type="button" className="btn btn-danger mr-15">Already Applied</button>
                                            ) : (
                                                <input type="submit" id="submit2" name="send" className="submitBnt btn btn-primary" value="Apply Now" />
                                            )}
                                        </div>
                                       
                                    </div>
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
