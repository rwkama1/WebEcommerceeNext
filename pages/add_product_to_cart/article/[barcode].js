import React,{ Component } from "react";

import { withRouter } from "next/router";

import { HeadComponent } from "../../../components/head";
import APIProductCart from "../../../model/api/product_to_cart";


 class Product_Detail extends Component
{

  // constructor() {
  //   super();
  //   this.state = {
  //     listarticleorder:[]
  //   }
    
  //   }
    state = {
      listarticleorder:[]
    }
     render()
     {
       return(
    	<> 
       <HeadComponent >
         <this.productdetail></this.productdetail>
       </HeadComponent>
      
        </>  
       )
     }
     validationQuantity=(number)=>
     {
       
       if(!Number.isInteger(number))
       {
         
         throw new Error("Please enter a number");
        
       }
      if(number<=0)
       {
      
         throw new Error("The quantity must be greater than 0");
       
       }
     
       
     }
      static getInitialProps=async (ctx)=>{
         const getart=await  APIProductCart.getInstance().getArticle(ctx.query.barcode);
        
         return { article: getart }
      }
      startOrder=async()=>
      {
        
    
      var msj = confirm("The following action will delete the current order to create a new one. Do you want to start a new order?");
      if(msj===true)
      {
        const startorder=await APIProductCart.getInstance().startOrder();
        console.log(startorder)
        alert(startorder);
      }
      else
      {
        return;
      }
     
      }
     
      registerItemOnOrder=async()=>
      {
        try
        {
        let quantity=prompt("Enter the amount");
        if(quantity===null)
        {
          return;
        }
        let qtynumber=Number(quantity);
        this.validationQuantity(qtynumber);
        const registeritemorderr=await APIProductCart.getInstance().registeritemorder(this.props.article._barcode,qtynumber);
        console.log(registeritemorderr);
        alert(registeritemorderr);
        // let cartlist=[];
        // cartlist.push(registeritemorderr);
        // sessionStorage.setItem('cart',JSON.stringify(cartlist));
        // const articlescard= this.state.listarticleorder;
        // articlescard.push(registeritemorderr)
        // this.setState(
        //   {
        //     listarticleorder:articlescard
        //   }

        // )
        // console.log(this.state.listarticleorder)
         
         
        }
        catch(e)
        {
          alert(e.message)
        }
      
        
    
       
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
  
            <button type="button" onClick={this.startOrder} className="btn btn-light btn-md mr-1 mb-2">Start New Order</button>
            <button type="button"  onClick={this.registerItemOnOrder}  className="btn btn-primary btn-md mr-1 mb-2"><i className="fas fa-shopping-cart pr-2" />Add to cart</button>

           
          </div>
        </div>
       
         </>
       )
     }
    
}
export default withRouter(Product_Detail)