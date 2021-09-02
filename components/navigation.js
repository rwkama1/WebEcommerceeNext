import React,{ Component } from "react";

import Link from "next/link"


export class Navbar extends Component
{

     render()
     {
      
       return(
    
      <div className="skin-light">
      <header>
      <nav className="navbar navbar-expand-md navbar-light fixed-top">
     
        
        <Link href="/">
        <a className="navbar-brand">
          <img src="https://res.cloudinary.com/dk0nnbox0/image/upload/v1629011368/logo_cdpbqf.jpg"  alt="mdb logo" />
        </a>
        </Link>
       
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
       
    
        <div className="collapse navbar-collapse" id="basicExampleNav">
        
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            <Link href="/add_product_to_cart/cart">
              <a className="nav-link navbar-link-2 waves-effect">
              {/* <span className="badge red z-depth-1 mr-1"> {this.state.cartart} </span> */}
                <i className="fas fa-shopping-cart pl-0" />
              </a>
             </Link>
            </li>
            
             
           
           
            <li className="nav-item">
            <Link href="/customer/detail_customer">
              <a className="nav-link waves-effect">
              <i className="fas fa-user" />
              </a>
            </Link>
            </li>
           
            <li className="nav-item">
            <Link href="/customer/sign_in">
              <a className="nav-link waves-effect" >
                Sign in
              </a>
            </Link>
            </li>
            <li className="nav-item pl-2 mb-2 mb-md-0">
            <Link href="/customer/register">
              <a  type="button" className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light">Sign up</a>
             </Link>
            </li>
          </ul>
        </div>
  
      </nav>
    
      </header>
 
     <main className="mt-5 pt-5">
    <div className="container-fluid pt-1">
      {this.props.children}
    </div>
    </main>
    </div>
	 
       )
     }
}