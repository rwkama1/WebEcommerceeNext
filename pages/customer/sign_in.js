import React,{ Component } from "react";
import { HeadComponent } from "../../components/head";

export default class Sign_in extends Component
{

     render()
     {
       return(
    	<> 
       <HeadComponent>
         <this.sign_in></this.sign_in>
       </HeadComponent>
      
        </>  
       )
     }
    
     sign_in=()=>
     {
       return(
         <>
         
        
    <header>
    <div className="container text-center py-5">
          <h1 className="mb-0">Sign in</h1>
    </div>
    </header>
        
   
       
    
      <main>
        <div className="container">
          {/*Grid row*/}
          <div className="row d-flex justify-content-center">
            {/*Grid column*/}
            <div className="col-md-6">
              {/*Section: Content*/}
              <section className="mb-5">
                <form >
                  <div className="md-form md-outline">
                    <input type=""  className="form-control" />
                    <label data-error="wrong" data-success="right" htmlFor="defaultForm-email1">Your email</label>
                  </div>
                  <div className="md-form md-outline">
                    <input type="password" id="defaultForm-pass1" className="form-control" />
                    <label data-error="wrong" data-success="right" htmlFor="defaultForm-pass1">Your password</label>
                  </div>
                </form>
                
                <div className="text-center pb-2">
                  <button type="submit" className="btn btn-primary mb-4">Sign in</button>
                  {/* <p>Not a member? <a href>Register</a></p> */}
               
                </div>
              </section>
              {/*Section: Content*/}
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
        </div>
      </main>

         </>
       )
     }
 
}