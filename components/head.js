import React,{ Component } from "react";
import { Navbar } from "./navigation";
import Head from "next/head";

export  class HeadComponent extends Component
{
  
  render()
  {
    return(
     <> 
  <Head>


<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
<meta name="description" content="NextJS e-commercee order article admin customer" />

<title>Website E-Commerce</title>

<link href="icon/commerceicon.png" rel="shortcut icon" type="image/x-icon"/>

{/* <!-- jQuery --> */}
<script
  src="https://code.jquery.com/jquery-2.2.4.js"
  integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI="
  crossorigin="anonymous"></script>

{/* <!-- Bootstrap4 files--> */}
{/* <script src="js/bootstrap.bundle.min.js" type="text/javascript"></script> */}
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/>
<link rel="stylesheet" href="https://mdbootstrap.com/previews/ecommerce-demo/css/mdb-pro.min.css"/>
<link rel="stylesheet" href="https://mdbootstrap.com/previews/ecommerce-demo/css/mdb.ecommerce.min.css"/>

{/* <!-- Font awesome 5 --> */}

{/* <link href="//netdna.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.css" rel="stylesheet"/> */}

{/* <!-- plugin: fancybox  --> */}


{/* <!-- custom style --> */}
<link href="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/css/ui.css" rel="stylesheet" type="text/css"/>
<link href="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/css/responsive.css" rel="stylesheet" media="only screen and (max-width: 1200px)" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700&display=swap"/>
  
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"/>
  {/* <!-- Bootstrap core CSS --> */}


  {/* <!-- Material Design Bootstrap Ecommerce --> */}
 <link rel="stylesheet" href="https://mdbootstrap.com/previews/ecommerce-demo/css/mdb.ecommerce.min.css"/>
{/* <!-- custom javascript --> */}
<script src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/js/script.js" type="text/javascript"></script>

 </Head>
<Navbar />


{this.props.children}
</> 
    )
  }
  
}