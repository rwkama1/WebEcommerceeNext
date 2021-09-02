import Router from "next/router";
import React,{ Component } from "react";
import { HeadComponent } from "../components/head";
import APIHome from "../model/api/home";

// import  Home  from "./home/home";


export default class Index extends Component
{
  constructor() {
    super();
    this.state = {
      listarticles:[],
      listcategories:[]
      };
     }  
  async componentDidMount()
    {
      await this.listArticles();
      await this.listCategories();
    }  
  render()
  {
    return(
      <>      
      <HeadComponent>
     
       <this.HeaderCardArticles/>
        <br></br>
        
       <this.CardArticles/>
     </HeadComponent>
      
      </>
    )
  }
  
   
  
  
  HeaderCardArticles=()=>
  {
    return(
      <> 
    

        <div className="form-inline">
        &nbsp; &nbsp;&nbsp; &nbsp;  &nbsp; &nbsp;&nbsp; &nbsp;  
        <select 
       onChange={this.FilterArticlesbyCategory}
        className="mr-2 form-control"
        >
          
          <option value="All">All Categories</option>
          {
            this.state.listcategories.map(
              c=>
              {
                return(
                  <option key={c._name} value={c._name}>{c._name}</option>
                )
               
              }
            )
         
          }
        </select>
        <br/>
        <button type="button" onClick={this.orderArticlebyPrice} className="btn btn-link">Sort items by price</button>
        <button type="button" onClick={this.orderArticlebyCategory} className="btn btn-link">Sort items by category</button>
      </div>
      </>
      )
  }
  CardArticles=()=>
  {
   
    return(
      <> 
      
        <div className="row">
       
        {           
         
      this.state.listarticles.map(
        art=>
        {
          return(
        <div className="col-md-4" key={art._barcode}>
          <figure className="card card-product-grid">
            <div className="img-wrap"> 
              <img src={art._img} />
      
            </div> {/* img-wrap.// */}
            <figcaption className="info-wrap">
              <div className="fix-height">
                <p className="title">{art._name}</p>
                <div className="price-wrap mt-2">
                  <span className="price">USD {art._price}</span>
                </div> {/* price-wrap.// */}
              </div>
              {/* <Link href="/add_product_to_cart/productdetail"> */}
              <button onClick={()=>this.clickseeproduct(art._barcode)} className="btn btn-light">See Article </button>	
              {/* </Link> */}
           
            </figcaption>
          </figure>
        </div> 
          )
         } 
      )
        }
      </div> 
     
      </>    	
    )
  }
  //********************************************************************* */
  clickseeproduct=(barcode)=>
  {
    Router.push("/add_product_to_cart/article/[barcode]","/add_product_to_cart/article/"+barcode)
      
  }
  FilterArticlesbyCategory=async(e)=>
  {
  const valueselect=String(e.target.value); 
    if(valueselect!="All")
    {
    APIHome.getInstance().filterArticlebyCategory(valueselect).then(getarticles =>
      { this.setState(
        {
         listarticles:getarticles,
         
        }
        );}
      ) 
    }
    else{
      await this.listArticles();
    }
  }
  getArticlesbyExpression=(e)=>
  {
  const value=e.target.value; 
  if(value!="")
  {
    APIHome.getInstance().getArticlesExpression(value).then(getarticles =>
      { this.setState(
        {
         listarticles:getarticles,
         
        }
        );}
      ) 
    }
    else{
      this.listArticles();
    }
   
  }
   listArticles=async()=>
  {
   const getarticles=await APIHome.getInstance().getArticles();
      this.setState(
       {
        listarticles:getarticles,
        
       }
      ) 
     
  }
  listCategories=async()=>
  {
   const getcategories=await APIHome.getInstance().getCategories();
      this.setState(
       {
        listcategories:getcategories,  
       }
      )
  }
  orderArticlebyPrice=()=>
  {
    APIHome.getInstance().orderArticlebyPrice().then(getarticles =>
     { this.setState(
       {
        listarticles:getarticles,  
       }
       );}
     ) 
  }
  orderArticlebyCategory=()=>
  {
    APIHome.getInstance().orderArticlebyCategory().then(getarticles =>
     { this.setState(
       {
        listarticles:getarticles,  
       }
       );}
     ) 
  }
  
}
