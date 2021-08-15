import React,{ Component } from "react";
import Head from "next/head";
import { Home } from "./home/home";

export  class HeadComponent extends Component
{
  render()
  {
    return(
      
  <Head>
  <meta charset="utf-8"/>

<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
<meta name="description" content="NextJS e-commercee order article admin customer" />

<title>Website E-Commerce</title>

<link href="icon/commerceicon.ico" rel="shortcut icon" type="image/x-icon"/>

{/* <!-- jQuery --> */}
<script src="js/jquery-2.0.0.min.js" type="text/javascript"></script>

{/* <!-- Bootstrap4 files--> */}
<script src="js/bootstrap.bundle.min.js" type="text/javascript"></script>
<link href="css/bootstrap.css" rel="stylesheet" type="text/css"/>

{/* <!-- Font awesome 5 --> */}

<link href="//netdna.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.css" rel="stylesheet"/>

{/* <!-- plugin: fancybox  --> */}
<script src="plugins/fancybox/fancybox.min.js" type="text/javascript"></script>
<link href="plugins/fancybox/fancybox.min.css" type="text/css" rel="stylesheet"/>

{/* <!-- custom style --> */}
<link href="css/ui.css" rel="stylesheet" type="text/css"/>
<link href="css/responsive.css" rel="stylesheet" media="only screen and (max-width: 1200px)" />

{/* <!-- custom javascript --> */}
<script src="js/script.js" type="text/javascript"></script>

<script type="text/javascript">


</script>
 </Head>

   
    )
  }
  
}
export default class Index extends Component
{
  render()
  {
    return(
      <> 
     <HeadComponent/>
     <Home/>
     </>
    )
  }
  
}
