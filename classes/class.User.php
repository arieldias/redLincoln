<?php
class User extends Base {
  private $id;
  private $name;
  private $email;

  public function __construct(){
	parent::__construct(get_class());
  }

  public function setBasicItems(){
  	$r = $this->query("*", "WHERE id = 1");

    while($obj = $r->fetch_object()){ 
      $this->id = $obj->id; 
      $this->name = $obj->name;        
      $this->email = $obj->email;
	}
  }
}
	
?>