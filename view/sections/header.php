<?php
  ob_start();
  session_start();
?>
<!DOCTYPE html>
<html>
  <head>
	<title> Nutrition Record </title>
	<script src="<?php echo ROOTURL?>assets/stylesheet/javascript/login.js" type="javascript"></script>
  </head>
  <body>
    <header>
      <a class="logo" href="<?php echo ROOTURL?>" > Nutrition Record </a>
      <?php 
        $user = new User();
        $user -> getMenu();
      ?>
    </header>



