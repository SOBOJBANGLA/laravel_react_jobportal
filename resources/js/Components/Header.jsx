import React, { useEffect, useState } from 'react';
import { Link, usePage } from '@inertiajs/react'
import axios from 'axios'; 


export default function Header(props) {
    const { user } = usePage().props;

    const [candidateDetail, setCandidateDetail] = useState(null);

    useEffect(() => {
        // Fetch candidate details from your API
        const fetchCandidateDetail = async () => {
            try {
                const response = await axios.get('/api/user/candidate-detail');
                setCandidateDetail(response.data);
            } catch (error) {
                console.error('Error fetching candidate details:', error);
            }
        };

        fetchCandidateDetail();
    }, []);
    // console.log(user); 
    
  return (
    <>
     <header id="topnav" className="defaultscroll sticky">
            {user?

        <div className="container">
        <Link className="logo" href={route('home')}>
        <span className="logo-light-mode">
        <img src="images/logo-dark.png" className="l-dark" alt=""/>
        <img src="images/logo-light.png" className="l-light" alt=""/>
        </span>
        <img src="images/logo-light.png" className="logo-dark-mode" alt=""/>
        </Link>

        <div className="menu-extras">
        <div className="menu-item">
        <Link className="navbar-toggle" id="isToggle" onClick="toggleMenu()">
            <div className="lines">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </Link>
        </div>
        </div>

        <ul className="buy-button list-inline mb-0">
   
        <li className="list-inline-item ps-1 mb-0">
        <div className="dropdown dropdown-primary">
            <button type="button" className="dropdown-toggle btn btn-sm btn-icon btn-pills btn-primary" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              
               
                 {candidateDetail && candidateDetail.image ? (
                <img src={candidateDetail.image} className="img-fluid rounded-pill" alt="Candidate" />
            ) : (
                <img src="images/team/f2.jpg" className="img-fluid rounded-pill" alt=""/>
            )}
            </button>
            <div className="dropdown-menu dd-menu dropdown-menu-end bg-white rounded shadow border-0 mt-3">
                <a href={ route('user_profile') } className="dropdown-item fw-medium fs-6"><i data-feather="user" className="fea icon-sm me-2 align-middle"></i>Profile</a>
                <Link href="" className="dropdown-item fw-medium fs-6"><i data-feather="settings" className="fea icon-sm me-2 align-middle"></i>Settings</Link>
                <div className="dropdown-divider border-top"></div>
                <a href={ route('my_jobs') } className="dropdown-item fw-medium fs-6"><i data-feather="list" className="fea icon-sm me-2 align-middle"></i>My Jobs</a>
                <Link href={ route('user_logout') } className="dropdown-item fw-medium fs-6"><i data-feather="log-out" className="fea icon-sm me-2 align-middle"></i>Logout</Link>
            </div>
            </div>
        </li>
        </ul>

        <div id="navigation">
   
        <ul className="navigation-menu nav-right nav-light">
        <li className="has-submenu parent-menu-item">
            <Link href={route('home')}>Home</Link>
            
        </li>

        <li className="has-submenu parent-parent-menu-item">
          <Link href={route('jobs')}> Jobs </Link>
              
        </li>

        <li className="has-submenu parent-menu-item">
            <Link href={route('about')}>About</Link>
            
        </li>

        <li className="has-submenu parent-menu-item">
            <Link href={route('contact')}>Contact Us</Link>
            
        </li>

        <li className="has-submenu parent-parent-menu-item">
            <Link href={route('blog')}>Blogs</Link>
            
        </li>
       
         </ul>
        </div>
        </div>
   
        :

        <div className="container">
        <Link className="logo" href={route('home')}>
     <span className="logo-light-mode">
         <img src="images/logo-dark.png" className="l-dark" alt=""/>
         <img src="images/logo-light.png" className="l-light" alt=""/>
     </span>
     <img src="images/logo-light.png" className="logo-dark-mode" alt=""/>
        </Link>

        <div className="menu-extras">
     <div className="menu-item">
         <Link className="navbar-toggle" id="isToggle" onClick="toggleMenu()">
             <div className="lines">
                 <span></span>
                 <span></span>
                 <span></span>
             </div>
         </Link>
         </div>
        </div>



        <div id="navigation">
    
     <ul className="navigation-menu nav-right nav-light">
         <li className="has-submenu parent-menu-item">
         <Link href={route('home')}>Home</Link>
             
         </li>

         <li className="has-submenu parent-parent-menu-item">
           <Link href={route('jobs')}> Jobs </Link>
               
         </li>
 
         <li className="has-submenu parent-menu-item">
             <Link href={route('about')}>About</Link>
             
         </li>
 
         <li className="has-submenu parent-menu-item">
             <Link href={route('contact_create')}>Contact Us</Link>
             
         </li>
 
         <li className="has-submenu parent-parent-menu-item">
             <Link href={route('blog')}>Blogs</Link>
             
         </li>
         <li className="has-submenu parent-parent-menu-item">
             <Link href={ route('candidate_login_form') }>Login</Link>
             
         </li>

         <li className="has-submenu parent-parent-menu-item">
           <Link href={ route('candidate_register') }>Register</Link>
           
       </li>
        
 
         
        </ul>
        </div>
        </div>
   
        }
        </header>
    </>
  );
}

