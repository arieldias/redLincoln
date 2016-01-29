<?php
include "../conf/topo_basic.php";
  if (isset($_POST['submit_login']) ) {
  	header('Content-Type: application/json');
  	$usr = new User();
  	// $usr -> logout();
  	echo json_encode( $usr -> login ($_POST['user'], $_POST['password']) );
    
  }
?>

