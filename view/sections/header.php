<?php
  ob_start();
  session_start();
?>
<!DOCTYPE html>
<html>
  <head>
	<title> Nutrition Record </title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
	<script src="<?php echo ROOTURL?>assets/javascript/login.js"></script>
  </head>
  <body>
    <header>
      <a class="logo" href="<?php echo ROOTURL?>" > Nutrition Record </a>
      <?php 
        $user = new User();
        $user -> getMenu();
      ?>
    </header>



