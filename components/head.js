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
  <meta charset="utf-8"/>

<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
<meta name="description" content="NextJS e-commercee order article admin customer" />

<title>Website E-Commerce</title>

<link href="icon/commerceicon.ico" rel="shortcut icon" type="image/x-icon"/>

{/* <!-- jQuery --> */}
<script src="js/jquery-2.0.0.min.js" type="text/javascript"></script>
<script data-ad-client="ca-pub-7779192336608203" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
{/* <!-- Bootstrap4 files--> */}
<script src="js/bootstrap.bundle.min.js" type="text/javascript"></script>
<link href="css/bootstrap.css" rel="stylesheet" type="text/css"/>
<link rel="stylesheet" href="https://mdbootstrap.com/previews/ecommerce-demo/css/mdb-pro.min.css"/>
<link rel="stylesheet" href="https://mdbootstrap.com/previews/ecommerce-demo/css/mdb.ecommerce.min.css"/>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700&display=swap"/>
{/* <!-- Font awesome 5 --> */}

{/* <link href="//netdna.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.css" rel="stylesheet"/> */}

{/* <!-- plugin: fancybox  --> */}
<script src="plugins/fancybox/fancybox.min.js" type="text/javascript"></script>
<link href="plugins/fancybox/fancybox.min.css" type="text/css" rel="stylesheet"/>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"/>
{/* <!-- custom style --> */}
<link href="css/ui.css" rel="stylesheet" type="text/css"/>
<link href="css/responsive.css" rel="stylesheet" media="only screen and (max-width: 1200px)" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700&display=swap"/>
  
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"/>
  {/* <!-- Bootstrap core CSS --> */}


  {/* <!-- Material Design Bootstrap Ecommerce --> */}
  <link rel="stylesheet" href="https://mdbootstrap.com/previews/ecommerce-demo/css/mdb.ecommerce.min.css"/>
{/* <!-- custom javascript --> */}
<script src="js/script.js" type="text/javascript"></script>

<script type="text/javascript">


</script>
 </Head>
<Navbar filterarticles={this.props.filterarticles} />


{this.props.children}
</> 
    )
  }
  
}