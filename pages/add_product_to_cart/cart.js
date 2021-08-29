import React,{ Component } from "react";
import { HeadComponent } from "../../components/head";

export default class Cart extends Component
{

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
              {/* /.Table head */}
              {/* Table body */}
              <tbody>
                {/* First row */}
                <tr>
                  <th scope="row">
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg" alt="" className="img-fluid z-depth-0" />
                  </th>
                  <td>
                    <h5 className="mt-3">
                      <strong>Monitor Led 19.5' Hd Kolke Entradas Hdmi Y Vga Loi</strong>
                    </h5>
                 
                  </td>
                  <td>White</td>
                  <td />
                  <td>$800</td>
                  <td>
                     2
                  </td>
                  <td >
                  <strong>$800</strong>  
                  </td>
                  <td>
                    <button type="button" className="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top" title="Remove item">X
                    </button>
                  </td>
                </tr>
               
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
              <button type="button" disabled={true} className="btn btn-light-blue">
                Send Order
              </button>
         
          </div>
        </div>
      </div>
     
         </>
       )
     }
  
 
}