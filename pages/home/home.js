import React,{ Component } from "react";
import APIHome from "../../model/api/home/home";


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
      <this.Navbar/>
       </header>
       <header className="border-bottom mb-4 pb-3">
       <this.HeaderCardArticles/>
       </header>
       <this.CardArticles/>
    
      </>
    )
  }
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
  Navbar=()=>
  {
	return(
	<> 
  

        <section className="header-main border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-2 col-4">
                <a className="brand-wrap">
                  <img className="logo" src="images/logo.jpg" />
                </a> {/* brand-wrap.// */}
              </div>
              <div className="col-lg-6 col-sm-12">
                <form action="#" className="search">
                  <div className="input-group w-100">
                    <input type="text" className="form-control" placeholder="Search Article by Name" />
                   
                  </div>
                </form> {/* search-wrap .end// */}
              </div> {/* col.// */}
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="widgets-wrap float-md-right">
                  <div className="widget-header  mr-3">
                    <a href="#" className="icon icon-sm rounded-circle border"><i className="fa fa-shopping-cart"></i></a>
                    <span className="badge badge-pill badge-danger notify">0</span>
                  </div>
                  <div className="widget-header icontext">
                    <a href="#" className="icon icon-sm rounded-circle border"><i className="fa fa-user" /></a>
                    <div className="text">
                      <span className="text-muted">Welcome!</span>
                      <div> 
                        <a href="#">Sign in</a> |  
                        <a href="#"> Register</a>
                      </div>
                    </div>
                  </div>
                </div> {/* widgets-wrap.// */}
              </div> {/* col.// */}
            </div> {/* row.// */}
          </div> {/* container.// */}
        </section> {/* header-main .// */}
    
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
              <a href="#" className="btn btn-block btn-primary">See Article </a>	
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




