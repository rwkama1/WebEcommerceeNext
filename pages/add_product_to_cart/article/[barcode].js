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
    
        <div className="row">
          <div className="col-md-6">
          <img src={this.props.article._img}
          height="100%" width="90%" />
          
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
  
            <button type="button" className="btn btn-light-blue btn-md mr-1 mb-2">Start Order</button>
            <button     className="btn btn-light btn-md mr-1 mb-2"><i className="fas fa-shopping-cart pr-2" />Add to cart</button>

            <div className="modal fade" id="modal_quantity" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            </div>
          </div>
        </div>
       
         </>
       )
     }
    
}
export default withRouter(Product_Detail)