<?php
include "../conf/topo_basic.php";
  
  header('Content-Type: application/json');
  $usr = new User();
  
  //getListState
  if ( isset($_POST['getDrList']) ) {
  	echo json_encode( $usr -> getDrList() );
  }


  if (isset($_POST['saveUser']) ) {
    echo json_encode( $usr -> addUser($_POST) );         
  } 

  if (isset($_POST['emailExists'])) {

  	echo json_encode($usr-> emailExists($_POST['emailExists']));
  }
  

  if (isset($_POST['listAll'])) {  	
  	echo json_encode( $usr-> listAllUsers() );
  }
?>

