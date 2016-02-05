<?php
class State extends Base {
  private $id;
  private $abb;
  private $name;
  

  public function __construct(){
	  parent::__construct(get_class());
  }

  public function getStateList() {
    $query = $this->query();  
    if (!$query) {
      $this->error("No state has been found");
    } else {
      foreach ($query as $idSearch => $array ){
        $arrayName[] =  $array ;
      } 
      return $arrayName;     
    }
  }




}
	
?>