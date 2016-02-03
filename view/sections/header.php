<!DOCTYPE html>
<html>
  <head>
	<title> Nutrition Record </title>
	<link link rel="stylesheet" type="text/css" href="<?php echo ROOTURL?>assets/stylesheet/main.css"/>
  <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script> !-->
  <script src="<?php echo ROOTURL?>assets/javascript/jquery-1.7.2.min.js"></script>
  <script src="<?php echo ROOTURL?>assets/javascript/require.js"></script>
	<script src="<?php echo ROOTURL?>assets/javascript/core.js"></script>
  <meta charset="utf-8"/>
  </head>
  <body>
    <header class='ar-flex'>
      
        <a class="logo ar-flex-item-1" href="<?php echo ROOTURL?>" > <img src="<?php echo IMGURL?>icon.png"/></a>
        <?php 
          $user = new User();
          $user -> greeting();
        ?>
        
        <div class="menu ar-flex-item-6 ar-flex">
          
        </div>
      
    </header>



