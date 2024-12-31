import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import { useForm, usePage } from '@inertiajs/react';
import axios from 'axios';
import React from 'react'

export default function Login() {
    const { data,setData, post, errors } = useForm();
  
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('authenticate'));
    };

//     const handleSubmit = (e) => {
//         e.preventDefault();

// try { 
// const response =  axios.post(route('authenticate'), { email, password });
//  if (response.data.success) { 
//  Inertia.visit('/profile'); 
// } else {
// setError('Either Email/Password is incorrect'); 
// }
// } catch (error) { 
// setError('An error occurred. Please try again.'); 
// }};

    const backgroundStyle = { 
        backgroundImage: `url("images/hero/bg3.jpg")`,
         backgroundPosition: 'center', 
        backgroundSize: 'cover',  
        };
  return (
    <>
      <Header></Header>
      <section className="bg-home d-flex align-items-center" style={backgroundStyle}>
            <div className="bg-overlay bg-linear-gradient-2"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-5 col-12">
                        <div className="p-4 bg-white rounded shadow-md mx-auto w-100" style={{maxWidth: '400px'}}>
                            <form onSubmit={handleSubmit} >
                              
                                <a href="index.html"><img src="images/logo-dark.png" className="mb-4 d-block mx-auto" alt=""/></a>
                                <h6 className="mb-3 text-uppercase fw-semibold">Please sign in</h6>
                            
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Your Email</label>
                                    <input name="email" id="email" type="email" className="form-control" value={data.email} onChange={(e) => setData('email', e.target.value)} placeholder="example@website.com"/><span className="text-red-600">{errors.email}</span>
                                  
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold" for="loginpass">Password</label>
                                    <input type="password" name="password" className="form-control" id="loginpass" value={data.password} onChange={(e) => setData('password', e.target.value)} placeholder="Password"/><span className="text-red-600">{errors.password}</span>
                                    
                                </div>
                            
                                <div className="d-flex justify-content-between">
                                    <div className="mb-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                            <label className="form-label form-check-label text-muted" for="flexCheckDefault">Remember me</label>
                                        </div>
                                    </div>
                                    
                                    <span className="forgot-pass text-muted small mb-0"><a href="reset-password.html" className="text-muted">Forgot password ?</a></span>
                                </div>
                
                                <button className="btn btn-primary w-100" type="submit">Sign in</button>

                                <div className="col-12 text-center mt-3">
                                    <span><span className="text-muted me-2 small">Don't have an account ?</span> <a href={ route('candidate_register') } className="text-dark fw-semibold small">Sign Up</a></span>
                                </div>{/*end col*/}
                            </form>
                        </div>
                    </div>{/*end col*/}
                </div>{/*end row*/}
            </div>{/*end container*/}
        </section>
            <Footer></Footer>

    </>
  )
}
