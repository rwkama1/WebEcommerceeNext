import React,{ Component } from "react";



export class Navbar extends Component
{

     render()
     {
      
       return(
    	<> 
        <section className="header-main border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-2 col-4">
                <a className="brand-wrap">
                  <img className="logo" src="https://res.cloudinary.com/dk0nnbox0/image/upload/v1629011368/logo_cdpbqf.jpg" />
                </a> {/* brand-wrap.// */}
              </div>
              <div className="col-lg-6 col-sm-12">
               
                  <div className="input-group w-100">
                    <input type="text" 
                    className="form-control" 
                   
                    onKeyPress={this.props.setlistarticles} 
                    placeholder="Search Article by Name" />
                   
                  </div>
                
              </div> 
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="widgets-wrap float-md-right">
                  <div className="widget-header  mr-3">
                    <a href="#" className="icon icon-sm rounded-circle border"><i className="fa fa-shopping-cart"></i></a>
                    <span className="badge badge-pill badge-danger notify">0</span>
                  </div>
                  <div className="widget-header icontext">
                    <a href="#" className="icon icon-sm rounded-circle border"><i className="fa fa-user" /></a>
                    <div className="text">
                      <span className="text-muted">Welcome!</span>
                      <div> 
                        <a href="#">Sign in</a> |  
                        <a href="#"> Register</a>
                      </div>
                    </div>
                  </div>
                </div> {/* widgets-wrap.// */}
              </div> {/* col.// */}
            </div> {/* row.// */}
          </div> {/* container.// */}
        </section> {/* header-main .// */}
    
	 </>
       )
     }
}