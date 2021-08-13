import axios from "axios";
export default class APIHome
{
    static instancia;
     url ="https://api-next-ecommercee.vercel.app/api/";
    constructor() { }
    static getInstance() {
           if (!APIHome.instancia) {
            APIHome.instancia = new APIHome();
           }
   
           return APIHome.instancia;
       }
      getArticles=async()=>
      {
        const url2=this.url+"article/getarticles";
          var config = {
            method: 'get',
            url: url2,
            headers: { }
          };

          const response =await axios(config);
          const result=await response.data;
          return result;
        
      } 
      getCategories=async()=>
      {
        const url2=this.url+"category/getcategories";
          var config = {
            method: 'get',
            url: url2,
            headers: { }
          };

          const response =await axios(config);
          const result=await response.data;
          return result;
        
      }  
      getArticlesExpression=async(lettername)=>
      {
        const url2=this.url+"getarticlesbyname?pname="+lettername;
          var config = {
            method: 'get',
            url: url2,
            headers: { }
          };

          const response =await axios(config);
          const result=await response.data;
          return result;
        
      }     
      getArticle=async(barcode)=>
      {
        try
        {
        const url2=this.url+"article?pbarcode="+barcode;
         var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
         const response =await fetch(url2, requestOptions);
         const result=await response.json();
         return result;
        }
         catch(e)
        {
          console.log(e.message);
        }
      }
      filterArticlebyCategory=async(name)=>
      {
       
        const url2=this.url+"article/filterarticlesbycategory?pname="+name;
        var config = {
          method: 'get',
          url: url2,
          headers: { }
        };
        const response =await axios(config);
        const result=await response.data;
        return result;
      }
      orderArticlebyPrice=async()=>
      {
        const url2=this.url+"article/orderarticlesbyprice";
          var config = {
            method: 'get',
            url: url2,
            headers: { }
          };

          const response =await axios(config);
          const result=await response.data;
          return result;
        
      } 
      orderArticlebyCategory=async()=>
      {
        const url2=this.url+"article/orderarticlesbycategory";
          var config = {
            method: 'get',
            url: url2,
            headers: { }
          };

          const response =await axios(config);
          const result=await response.data;
          return result;
        
      } 
     
}