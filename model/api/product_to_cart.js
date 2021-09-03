
export default class APIProductCart
{
    static instancia;
     url ="https://api-next-ecommercee.vercel.app/api/";
    constructor() { }
    static getInstance() {
           if (!APIProductCart.instancia) {
            APIProductCart.instancia = new APIProductCart();
           }
   
           return APIProductCart.instancia;
       }
    
      getArticle=async(barcode)=>
      {
        try
        {
        const url2=this.url+"article/article?pbarcode="+barcode;
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
      startOrder=async()=>
      {
        const url2=this.url+"order/post/startorder";
        var requestOptions = {
          method: 'POST',
          redirect: 'follow'
        };
        const response=await fetch(url2, requestOptions)
        const result=await response.text();
         return result;
      }
      cancelOrder=async()=>
      {
        const url2=this.url+"order/post/cancelorder";
        var requestOptions = {
          method: 'POST',
          redirect: 'follow'
        };
        const response=await fetch(url2, requestOptions)
        const result=await response.text();
         return result;
      }
      registeritemorder=async(barcode,quantity)=>
      {
        try{
        const url2=this.url+"order/post/registeritemorder";
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({"barcode":barcode,"quantity":quantity});
 
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        const response=await fetch(url2, requestOptions)
        if(response.ok)
        {
        const result=await response.json();
        return "Product added to cart";
        }
        else{
          const error=await response.text();
          return error
        }
      }
      catch(e)
      {
        return e.message
      }
        
      }
      getorderinprogress=async()=>
      {
        try
        {
        const url2=this.url+"order/get/getorderinprogress"
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
      closeOrder=async()=>
      
      {
        const url2=this.url+"order/post/closeorder";
        var requestOptions = {
          method: 'POST',
          redirect: 'follow'
        };
        
        const response=await fetch(url2, requestOptions)
        if(response.ok)
        {
        const result=await response.json();
        return result;
        }
        else{
          const error=await response.text();
          return error
        }
        
      }
      removeitemonorder=async(barcode)=>
      {
        try{
        const url2=this.url+"order/post/removeitemonorder";
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({"barcode":barcode});
 
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        const response=await fetch(url2, requestOptions)
        if(response.ok)
        {
        const result=await response.text();
        return result;
        }
        else{
          const error=await response.text();
          return error
        }
      }
      catch(e)
      {
        return e.message
      }
        
      }
      saveorder=async(idcard)=>
      {
        const url2=this.url+"order/post/saveorder?pidcard="+idcard;
        var requestOptions = {
          method: 'POST',
          redirect: 'follow'
        };
        
        const response=await fetch(url2, requestOptions)
        const result=await response.text();
        return result;
      }
      personalorder=async(idorder)=>
      {
        const url2=this.url+"order/post/personalorder?pid="+idorder;
        var requestOptions = {
          method: 'POST',
          redirect: 'follow'
        };
        const response=await fetch(url2, requestOptions)
        if(response.ok)
        {
        const result=await response.text();
        return result;
        }
        else{
          const error=await response.text();
          return error
        }
      }
      
}  