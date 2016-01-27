<h1> Site de teste </h1>

<?php
  include ROOTURL."conf/classes.php";
  include ROOTURL."conf/define.php";
  include ROOTURL."conf/connection.php";
  echo "<pre>";
  print_r($_POST);
  echo "</pre>";

  $va = new User();
  $va->login("arieldias@gmail.com","teste");
  $va->checkLogin();
?>