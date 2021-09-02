import Link from "next/link";
import Router from "next/router";
import React,{ Component } from "react";
import { HeadComponent } from "../../components/head";
import APICustomer from "../../model/api/customer";

export default class Sign_in extends Component
{

      constructor() {
        super();
        this.state = {
        password:"",
        username:"",  
           }
        }
        componentDidMount()
        {}
      onChangeText=(name,event)=>
      {
        this.setState(
            {
            ...this.state,[name]:event.target.value
            }
        )
      }
      login=(event)=>
      {    
        event.preventDefault();    
       const {username,password}=this.state;
        APICustomer.getInstance().login(username,password).then(login => {
                if(login.bool===true)
                {
                  sessionStorage.setItem('loginuser',login.result._identitycard);
                  Router.push(
                    {
                    pathname:"/customer/detail_customer"
                  }
                    );
                }
                if(login.bool===false)
                {
                   alert(login.error);
                }
           }); 
     }  
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
      <div className="col-md-4">
              {/*Section: Content*/}
              <div className="row">
    &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;
		<div className="col-md-10">
     
			<form role="form" onSubmit={this.login}>
      <div className="col-md-16" >
        
			<div className="row">
          <label>
				User Name
					</label>
					<input type="text"  
           onChange={(value)=>this.onChangeText('username',value)}
           value={this.state.username}
          className="form-control"  />
       </div>
     
     <br></br>
      <div className="row">
          <label>
			Password
					</label>
					<input type="password"
           onChange={(value)=>this.onChangeText('password',value)}
           value={this.state.password}
           className="form-control"  />
          </div>
      </div>
     
  <br />
      <div className="text-center pb-2">
             <input type="submit" className="btn btn-primary mb-4" value="Login"/>
                 <br />
                  Not a member? &nbsp; &nbsp;   
                   <Link href="/customer/register">
                        <a>Register</a>
                  </Link>
               
         </div>
         </form>
		</div>
		
	</div>
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