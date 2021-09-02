import React,{ Component } from "react";
import { HeadComponent } from "../../components/head";
import APICustomer from "../../model/api/customer";
import Router from "next/router";
export default class Detail_Customer extends Component
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
  componentDidMount()
 {

    var loginuser = sessionStorage.getItem('loginuser');
    if(!loginuser)
    {
      alert("Please log in to access this page");
      
      Router.push(
        {
          pathname:"/customer/sign_in"
      }
      )
      return;
     
    }
    else{
    APICustomer.getInstance().getUser(loginuser).then(getloginuser => {
   
  
      this.setState(
        {
         idcard:getloginuser._identitycard,
         // password:getloginuser._password,
         username:getloginuser._username,
         completename:getloginuser._completename,
         creditcard:getloginuser._creditcardnumber,
         address:getloginuser._shippingaddress
        }
      )
      }
    
   );
  }
   
 }
 updateCustomer=(event)=>
 {
   event.preventDefault();
    const {idcard,password,username,completename,address,creditcard}=this.state;
   APICustomer.getInstance().updateCustomer(idcard,completename,username,password,address,creditcard).then(update => {
           if(update==="Success")
           {
             alert("Successfully updated");

           }
           else
           {

              alert(update);

           }
       });



}

     render()
     {
       return(
    	<>
       <HeadComponent>
         <this.detail_customer></this.detail_customer>
       </HeadComponent>

        </>
       )
     }
     onChangeText=(name,event)=>
     {
       this.setState(
           {
            ...this.state,[name]:event.target.value
           }
       )
     }
     detail_customer=()=>
     {
       return(
         <>
     <header>
            <div className="container text-center py-5">
                <h1 className="mb-0">Customer</h1>
            </div>
    </header>
    <main>
    <div className="container">
          {/*Grid row*/}
    <div className="row d-flex justify-content-center">
            {/*Grid column*/}
    <div className="col-md-6">
              {/*Section: Content*/}
  <section className="mt-4 mb-5">
     <div className="col-md-12">

     <form role="form" onSubmit={this.updateCustomer}>
     <div className="col-md-14" >

     <div className="row">
       <div className="col">
         <label>
         Identity Card
         </label>
         <input type="number"
           onChange={(value)=>this.onChangeText('idcard',value)}
          value={this.state.idcard}
          disabled={true}
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
             disabled={true}
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
        <input type="submit" className="btn btn-primary mb-4" value="Update Data"/>

     </div>
   </form>
   </div>
          </section>

              {/*Section: Content*/}
            </div>

      <div className="col-md-6">
       <section>
      <table  className="table table-borderless" width="100%">
        <thead >
          <tr>
            <th className="th-sm"> <strong>Date</strong>
            </th>
            <th className="th-sm"> <strong>Quantity Articles</strong>
            </th>
            <th className="th-sm"> <strong>Total</strong>
            </th>
            <th className="th-sm"> <strong>State</strong>
            </th>
            <th className="th-sm">
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>Edinburgh</td>
            <td>

            <button type="button" className="btn btn-light btn-sm">Select</button>

            </td>
          </tr>

         </tbody>

    </table>

      </section>

            </div>


          </div>

        </div>

      </main>

         </>
       )
     }


}