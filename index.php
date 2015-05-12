<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, target-densitydpi=device-dpi">
    <?php include('headHTML.php'); ?>
    
</head>
<body class="grey lighten-2">
    <div class="navbar-fixed">
    <nav>
        <div class="nav-wrapper">
        <a href="#!" class="brand-logo"><img src="Images/logotransp.png"></a>
       
         
             <?php include('navigation-dropdown-internet.php');
            include('navigation-dropdown-hosting.php');
            include('navigation-dropdown-members.php'); 
            include('navigation-main.php'); 
            include('navigation-slideOutMenu.php');?>
             
            
     </div>
    </nav>
    </div>  
     
    <div class="row">
              <?php include('content-slider.php'); ?>   
    </div>
      <main>
               <div class="container"> 
    <?php 
    include('content-welcome-area.php');
    include('content-internet-section.php');
    include('content-hosting-section.php');
    include('content-webDesign-section.php');
    include('content-Support-section.php');
    include('content-contactUs-section.php');
    include('content-members-voipUsage.php');
    include('content-aboutUs-section.php');
    ?>
    </div>
        </main>
<script src="JS/materialize.min.js"></script>
    <script src="JS/main.js"></script>
</body>
</html>