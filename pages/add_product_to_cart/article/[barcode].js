import React,{ Component } from "react";

import { withRouter } from "next/router";

import { HeadComponent } from "../../../components/head";
import APIProductCart from "../../../model/api/product_to_cart";


 class Product_Detail extends Component
{

     render()
     {
       return(
    	<> 
       <HeadComponent>
         <this.productdetail></this.productdetail>
       </HeadComponent>
      
        </>  
       )
     }
     static getInitialProps=async (ctx)=>{
         const getart=await  APIProductCart.getInstance().getArticle(ctx.query.barcode);
         return { article: getart }
       }
     productdetail=()=>
     {
       return(
         <>
         <br />
          {/*Section: Block Content*/}
      <section className="mb-5">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
          <img src={this.props.article._img}
          height="450" width="500" />
          
          </div>
          <div className="col-md-6">
            <h5>{this.props.article._name}</h5>
           
    
            <p><span className="mr-1"><strong>USD {this.props.article._price}</strong></span></p>
            <p className="pt-1">{this.props.article._description}</p>
            <div className="table-responsive">
              <table className="table table-sm table-borderless mb-0">
                <tbody>
                  <tr>
                    <th className="pl-0 w-25" scope="row"><strong>Stock</strong></th>
                    <td>{this.props.article._stock}</td>
                  </tr>
                  <tr>
                    <th className="pl-0 w-25" scope="row"><strong>Category</strong></th>
                    <td>{this.props.article._category._name}</td>
                  </tr>
                
                </tbody>
              </table>
            </div>
            <hr />
  
            <button type="button" className="btn btn-success btn-md mr-1 mb-2">Start Order</button>
            <button  href="#modal_quantity"  role="button"  data-toggle="modal"  className="btn btn-light btn-md mr-1 mb-2"><i className="fas fa-shopping-cart pr-2" />Add to cart</button>

            <div className="modal fade" id="modal_quantity" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="myModalLabel">
               Enter amount
              </h5> 
              <button type="button" className="close" data-dismiss="modal">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
            <div className="table-responsive mb-2">
              <table className="table table-sm table-borderless">
                <tbody>
                  <tr>
                    <td className="pl-0 pb-0 w-25">Quantity</td>
        
                  </tr>
                  <tr>
                    <td className="pl-0">
                      <div className="def-number-input number-input safari_only mb-0">
                      
                        <input className="form-control" min={1} max={this.props.article._stock} name="quantity" defaultValue={1} type="number" />
              
                      </div>
                    </td>
                   
                  </tr>
                </tbody>
              </table>
            </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Add to Cart
              </button> 
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
          </div>
        </div>
        </section>
         </>
       )
     }
    
}
export default withRouter(Product_Detail)