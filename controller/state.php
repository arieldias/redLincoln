<?php
include "../conf/topo_basic.php";
  
  header('Content-Type: application/json');
  $state = new State();
  
  //getListState
  if ($_POST['getStateList']){
    echo json_encode( $state -> getStateList() );
  }
?>

