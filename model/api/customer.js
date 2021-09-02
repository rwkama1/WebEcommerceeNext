

export default class APICustomer
{
    static instancia;
     url ="https://api-next-ecommercee.vercel.app/api/";
    constructor() { }
    static getInstance() {
           if (!APICustomer.instancia) {
            APICustomer.instancia = new APICustomer();
           }
   
           return APICustomer.instancia;
       }
      
       addCustomer=async(idcard,name,username,password,address,creditcard)=>
       {
         try{
            let url2=this.url+"customer/customer"
            var myHeaders = new Headers();
             myHeaders.append("Content-Type", "application/json");
     
             var raw = JSON.stringify(
               {
             "idcard":idcard,
             "name":name,
             "username":username,
             "password":password,
             "address":address,
             "creditcard":creditcard
           }
           );
     
             var requestOptions = {
             method: 'POST',
             headers: myHeaders,
             body: raw,
             redirect: 'follow'
             };
     
         const response=await  fetch(url2, requestOptions)
           if(!response.ok)
           {
           const error=await response.text();
           return error;
           }
           return "Success";
         }
         catch(e)
         {
           console.log(e.message);
         }
          
        
       }  
        updateCustomer=async(idcard,name,username,password,address,creditcard)=>
        {
          try{
             let url2=this.url+"customer/customer"
             var myHeaders = new Headers();
              myHeaders.append("Content-Type", "application/json");
  
              var raw = JSON.stringify(
                {
              "idcard":idcard,
              "name":name,
              "username":username,
              "password":password,
              "address":address,
              "creditcard":creditcard
            }
            );
              var requestOptions = {
              method: 'PUT',
              headers: myHeaders,
              body: raw,
              redirect: 'follow'
              };
      
          const response=await  fetch(url2, requestOptions)
            if(!response.ok)
            {
            const error=await response.text();
            return error;
            }
            return "Success";
          }
          catch(e)
          {
            console.log(e.message);
          }
           
         
        } 
        login=async(username,password)=>
        {
          let bool=true;
          const url2=this.url+"user/user?pusername="+username+"&ppassword="+password;
          var requestOptions = {
            method: 'POST',
            redirect: 'follow'
          };
            const response =await fetch(url2,requestOptions);
            if(!response.ok)
            {
            bool=false;
            const error=await response.text();
            return {error,bool};
            }
            const result=await response.json();
            return {result,bool}; 
        }
        getUserLogin=async()=>
        {
          try
          {
          let url2=this.url+"user/getloginuser";
          var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          const response =await fetch(url2,requestOptions);
          if(response.ok)
          {
            const result=await response.json();
            return result;
          }
          
           
          }
          catch(e)
         {
           return e.message;
         }
        }
        getUser=async(idcard)=>
        {
          try
          {
          const url2=this.url+"user/user?pidcard="+idcard;
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
            return e.message;
          }
          
        }
   
}