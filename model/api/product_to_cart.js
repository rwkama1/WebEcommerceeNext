
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
}  