import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import { useForm, usePage } from '@inertiajs/react';
import React from 'react'

export default function Register() {
    const { data,errors, setData, post} = useForm({});
      function handleSubmit(e) {
        e.preventDefault();
    
        post(route("candidate_register"));
      };
    const backgroundStyle = { 
        backgroundImage: `url("images/hero/bg3.jpg")`,
         backgroundPosition: 'center', 
        backgroundSize: 'cover',  
        };
  return (
    <>
     <>
        <Header></Header>
        <section className="bg-home d-flex align-items-center" style={backgroundStyle}>
            <div className="bg-overlay bg-linear-gradient-2"></div>
            <div className="container">
                <div className="row"  style={{height: '80%'}}>
                    <div className="col-lg-4 col-md-5 col-12">
                        <div className="p-4 bg-white rounded shadow-md mx-auto w-100" style={{maxWidth: '400px'}}>
                            
                                <a href="index.html"><img src="images/logo-dark.png" className="mb-4 d-block mx-auto" alt=""/></a>
                                <h6 className="mb-3 text-uppercase fw-semibold">Register your account</h6>

                                <form onSubmit={handleSubmit}>
                                   
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Your Name</label>
                                    <input name="name" id="name" type="text" className="form-control" value={data.name} onChange={(e) => setData("name", e.target.value)} placeholder="Calvin Carlo"/><span className="text-red-600">{errors.name}</span>
                                   
                                </div>
        
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Your Email</label>
                                    <input name="email" id="email" type="email" className="form-control" value={data.email} onChange={(e) => setData("email", e.target.value)} placeholder="example@website.com"/>
                                   
                                </div>
        
                                <div className="mb-3">
                                    <label className="form-label fw-semibold" for="loginpass">Password</label>
                                    <input type="password" name="password" id="password" className="form-control" value={data.password} onChange={(e) => setData("password", e.target.value)}  placeholder="Password"/>
                                  
                                </div>
        
                                <div className="mb-3">
                                    <label className="form-label fw-semibold" for="loginpass">Confirm Password</label>
                                    <input type="password" name="password_confirmation" id="confirm_password" className="form-control" value={data.password_confirmation} onChange={(e) => setData("password_confirmation", e.target.value)} placeholder="Password"/>
                                   
                                </div>
                            
                                
                                <button className="btn btn-primary w-100" type="submit">Register</button>
                            </form>
                                <div className="col-12 text-center mt-3">
                                    <span><span className="text-muted small me-2">Already have an account ? </span> <a href={ route('candidate_login_form') } className="text-dark fw-semibold small">Sign in</a></span>
                                </div>{/*end col*/}
                            
                        </div>
                    </div>{/*end col*/}
                </div>{/*end row*/}
            </div>{/*end container*/}
        </section>
        <Footer></Footer>
        </>
    
    </>
  )
}
