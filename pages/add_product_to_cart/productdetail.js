import React,{ Component } from "react";
import { HeadComponent } from "..";
import { Navbar } from "../header/Navbar";

export default class Product_Detail extends Component
{

     render()
     {
       return(
    	<> 
       <HeadComponent/>
       <Navbar/>
        </>  
       )
     }
}