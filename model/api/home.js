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
        const url2=this.url+"article/getarticlesbyname?pname="+lettername;
          var config = {
            method: 'get',
            url: url2,
            headers: { }
          };

          const response =await axios(config);
          const result=await response.data;
          return result;
        
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