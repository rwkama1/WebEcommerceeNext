import axios from "axios";
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
   
}