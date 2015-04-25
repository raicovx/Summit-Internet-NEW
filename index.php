<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
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
        <div class="col s12 m8 l12 center" style="padding:0;">
            <?php include('content-slider.php'); ?>
        </div>
    
    </div>
    
    <?php 
    include('content-welcome-area.php');
    include('content-internet-section.php');
    include('content-hosting-section.php')?>
<script src="JS/materialize.min.js"></script>
    <script src="JS/main.js"></script>
</body>
</html>