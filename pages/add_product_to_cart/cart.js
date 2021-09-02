import Router from "next/router";
import React,{ Component } from "react";
import { HeadComponent } from "../../components/head";
import APIProductCart from "../../model/api/product_to_cart";

export default class Cart extends Component
{
  constructor() {
    super();
    this.state = {
      ordercart:{},
      listdetailorder:[]
    }
    
    }
  
 async componentDidMount()
  {
  try{

  
    // var loginuser = sessionStorage.getItem('loginuser');
    // if(!loginuser)
    // {
    //   alert("Please log in to access this page");
      
    //   Router.push(
    //     {
    //     pathname:"/customer/sign_in"
    //   }
    //   )
    //   return;
     
    // }
    const orderdetail=await APIProductCart.getInstance().getorderinprogress();
   
    this.setState(
      {
        ordercart:orderdetail,
        listdetailorder:orderdetail._listOrderDetails
      }
    )
    console.log(this.state.ordercart)
  }
  catch(e)
  {
       Router.push(
        {
        pathname:"/"
      }
      )
    alert(e.message)
  }
  }
 removeitemonorder=async(barcode)=>
 {
  try
  {
 
  const removeitemonor=await APIProductCart.getInstance().removeitemonorder(barcode);
  const orderdetail=await APIProductCart.getInstance().getorderinprogress();
   
    this.setState(
      {
        ordercart:orderdetail,
        listdetailorder:orderdetail._listOrderDetails
      }
    )
  console.log(removeitemonor);
  alert(removeitemonor);
   }
   catch(e)
   {
     alert(e.message);
   }
 }
  render()
     {
       return(
    	<> 
       <HeadComponent>
         <this.cart></this.cart>
         
       </HeadComponent>
      
        </>  
       )
     }
    
  cart=()=>
     {
       return(
         <>
    
    <div className="container my-5 py-3 z-depth-1 rounded">
        {/*Section: Content*/}
        <section className="dark-grey-text">
          {/* Shopping Cart table */}
          <div className="table-responsive">
            <table className="table product-table mb-0">
              {/* Table head */}
              <thead className="mdb-color lighten-5">
                <tr>
                  <th />
                  <th className="font-weight-bold">
                    <strong>Product</strong>
                  </th>
                  <th className="font-weight-bold">
                    <strong>Category</strong>
                  </th>
                  <th />
                  <th className="font-weight-bold">
                    <strong>Price</strong>
                  </th>
                  <th className="font-weight-bold">
                    <strong>QTY</strong>
                  </th>
                  <th className="font-weight-bold">
                    <strong>Amount</strong>
                  </th>
                  <th />
                </tr>
              </thead>
           
              <tbody>
           {
              this.state.listdetailorder.map(
                (detailorder,i)=>
                {
                  return(
            
             
                <tr key={i}>
                  <th scope="row">
                    <img src={detailorder._article._img}  className="img-fluid z-depth-0" />
                  </th>
                  <td>
                    <h5 className="mt-3">
                      <strong>{detailorder._article._name}</strong>
                    </h5>
                 
                  </td>
                  <td>{detailorder._article._category._name}</td>
                  <td />
                  <td>${detailorder._article._price}</td>
                  <td>
                  {detailorder._quantity}
                  </td>
                  <td >
                  <strong>${detailorder._article._price * detailorder._quantity}</strong>  
                  </td>
                  <td>
                    <button type="button" onClick={() => this.removeitemonorder(detailorder._article._barcode)} className="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top" title="Remove item">X
                    </button>
                  </td>
                </tr>
             
                  )
                }
             )     
           }
                <tr>
                  <td colSpan={3} />
                  <td colSpan={3} />
                  <td>
                    <h4 className="mt-2">
                      <strong>Total</strong>
                    </h4>
                  </td>
                  <td className="text-right">
                    <h4 className="mt-2">
                      <strong>$2600</strong>
                    </h4>
                  </td>
                </tr>
              
          
                {/* Fourth row */}
              </tbody>
              {/* /.Table body */}
            </table>
          </div>
          
          {/* /.Shopping Cart table */}
        </section>
        {/*Section: Content*/}
      </div>
      
      <div className="row">
        <div className="col-md-8">
        </div>
        <div className="col-md-4">
          <div className="row">
           
          
            <button type="button" className="btn btn-light">
                Close Order
              </button>
              <button type="button" disabled={true} className="btn btn-primary">
                Send Order
              </button>
         
          </div>
        </div>
      </div>
     
         </>
       )
     }
  
 
}