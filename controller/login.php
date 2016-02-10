<?php
include "../conf/topo_basic.php";
  
  header('Content-Type: application/json');
  $login = new User();
  
  // Submit login
  if (isset($_POST['submit_login']) ) {
   	echo json_encode( $login -> login ($_POST['user'], $_POST['password']) );    
  }

  // Submit login
  if (isset($_POST['logout']) ) {
   	echo json_encode( $login -> logout() );	  	
  }

  // Submit login
  if (isset($_POST['getMenu']) ) {
    echo json_encode( $login -> getMenu() );         
  }


  // Get perfil
  if (isset($_POST['getPerfil']) ) {
    echo json_encode( $login -> getPerfil() );         
  }

  if (isset($_POST['updateUser']) ) {
    echo json_encode( $login -> updateUser($_POST) );         
  } 
  // else {
  //   echo json_encode("wwwwwww");
  // }
?>

