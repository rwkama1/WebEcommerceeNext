import React,{ Component } from "react";
import APIHome from "../../model/api/home";
import { Navbar } from "../header/Navbar";
import Link from 'next/link'
export class Home extends Component
{
  constructor() {
    super();
    this.state = {
      listarticles:[],
      listcategories:[]
      };
     }  
   componentDidMount()
    {
     this.listArticles();
     this.listCategories();
    }  
  render()
  {
    return(
      <>      
      <header className="section-header">
      <Navbar setlistarticles={this.getArticlesbyExpression}/>
       </header>
       <header className="border-bottom mb-4 pb-3">
       <this.HeaderCardArticles/>
       </header>
       <this.CardArticles/>
    
      </>
    )
  }
  
   
  
  
  HeaderCardArticles=()=>
  {
    return(
      <> 
       <br/>
        <div className="form-inline">
    
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
        <button type="button" onClick={this.orderArticlebyPrice} className="btn btn-light">Sort items by price</button>
        <button type="button" onClick={this.orderArticlebyCategory} className="btn btn-light">Sort items by category</button>
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
              <Link href="/add_product_to_cart/productdetail">
              <a className="btn btn-block btn-primary">See Article </a>	
              </Link>
           
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
  //********************************************** */
  FilterArticlesbyCategory=(e)=>
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
      this.listArticles();
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
  listArticles=()=>
  {
   APIHome.getInstance().getArticles().then(getarticles =>
     { this.setState(
       {
        listarticles:getarticles,
        
       }
       );}
     ) 
  }
  listCategories=()=>
  {
    APIHome.getInstance().getCategories().then(getcategories =>
     { this.setState(
       {
        listcategories:getcategories,  
       }
       );}
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




