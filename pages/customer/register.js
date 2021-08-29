import React,{ Component } from "react";
import { HeadComponent } from "../../components/head";
import APICustomer from "../../model/api/customer";

export default class Register extends Component
{ 

      constructor() {
        super();
        this.state = {
        idcard:"",
        password:"",
        username:"",
        completename:"",
        creditcard:"", 
        address:""
        
      }
    

    }
    onChangeText=(name,event)=>
    {
      this.setState(
          {
           ...this.state,[name]:event.target.value
          }
      )
    }
    clearForm=()=>
    {
      this.setState
                (
                {
                 
                  idcard:"",
                  password:"",
                  username:"",
                  completename:"",
                  creditcard:"", 
                  address:""
                
                 
                 }
          ) 
    }
    addnewcustomer=(event)=>
    {    
      event.preventDefault();   
     const {idcard,password,username,completename,address,creditcard}=this.state;
      APICustomer.getInstance().addCustomer(idcard,completename,username,password,address,creditcard).then(adding => {
              if(adding==="Success")
              {
                alert("Successfully registered");
                this.clearForm();
              }
              else
              {

                 alert(adding);

              }
          }); 

 

   } 

     render()
     {
       return(
    	<> 
       <HeadComponent>
         <this.register></this.register>
       </HeadComponent>
      
        </>  
       )
     }
    
     register=()=>
     {
       return(
         <>
         
        
    <header>
    <div className="container text-center py-5">
          <h1 className="mb-0">Register</h1>
    </div>
    </header>
    <main>
        <div className="container">
          {/*Grid row*/}
          <div className="row d-flex justify-content-center">
            {/*Grid column*/}
            <div className="col-md-8">
              {/*Section: Content*/}
              <div className="row">
    &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;
		<div className="col-md-12">
     
			<form role="form" onSubmit={this.addnewcustomer}>
      <div className="col-md-14" >
        
			<div className="row">
        <div className="col">
					<label>
					Identity Card
					</label>
					<input type="number"   
          onChange={(value)=>this.onChangeText('idcard',value)}
          value={this.state.idcard}
           className="form-control"  />
          </div>
          <div className="col">
					<label >
					Full Name
					</label>
					<input type="text" 
            onChange={(value)=>this.onChangeText('completename',value)}
            value={this.state.completename}
           className="form-control" />
          </div> 
				</div>
      </div>
      <br />
      <div className="row">
        <div className="col">
					<label>
					Username
					</label>
					<input type="text" 
           onChange={(value)=>this.onChangeText('username',value)}
           value={this.state.username}
            className="form-control"  />
          </div>
          <div className="col">
					<label >
						Password
					</label>
					<input type="password"  
            onChange={(value)=>this.onChangeText('password',value)}
              value={this.state.password}
          className="form-control" />
          </div> 
			</div>
      <br />
      <div className="row">
        <div className="col">
					<label>
          Shipping Address
					</label>
					<input type="text"  
            onChange={(value)=>this.onChangeText('address',value)}
            value={this.state.address}
           className="form-control"  />
          </div>
          <div className="col">
					<label >
						Credit Card
					</label>
					<input type="number"
            onChange={(value)=>this.onChangeText('creditcard',value)}
            value={this.state.creditcard}
             className="form-control" />
          </div> 

			</div>
      <br />
     
      <div className="text-center pb-2">
         <input type="submit" className="btn btn-primary mb-4" value="Register"/>
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