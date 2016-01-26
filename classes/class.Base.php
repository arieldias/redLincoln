<?php
class Base {
  private $className;
  private $tableName;
  private $fieldNames;

  global $db;

	public function __construct($className) {
    $this->className = $className;
    $this->tableName = "_".strtolower($className);
    
    //iniciar busca das dos campos dessa tabela
  }



  public function query($column = "*", $refinement="") {
    $sql = "SELECT ". $column . " FROM " . $this->tableName." ".$refinement;
  
    $result = $db->query($sql);
    echo $sql;

        
    while($obj = $result->fetch_object()){ 
      $line [ $obj->id ] [$result->fetch_object()]  = $obj->id; 
      $line [ $obj->id ] ['fieldName2'] = $obj->name;        
	  }

    
    print_r($line);
    

	  // return $line;
  }
}
?>
