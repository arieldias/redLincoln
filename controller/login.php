<?php
include "../conf/topo_basic.php";
  
  header('Content-Type: application/json');
  $usr = new User();
  
  // Submit login
  if (isset($_POST['submit_login']) ) {
   	echo json_encode( $usr -> login ($_POST['user'], $_POST['password']) );    
  }

  // Submit login
  if (isset($_POST['logout']) ) {
   	echo json_encode( $usr -> logout() );	  	
  }

  // Submit login
  if (isset($_POST['getMenu']) ) {
    echo json_encode( $usr -> getMenu() );         
  }
?>

