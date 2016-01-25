<?php
class Base {
  private $className;
  private $tableName;
  private $fieldNames;

	public function __construct($className) {
    $this->className = $className;
    $this->tableName = "_".strtolower($className);
  }

  public function getFieldNames(){
    $sql  = "SHOW COLUMNS";
    global $db;
    $result = $db->query($sql);
    echo $sql;

    echo"<pre>";
    print_r($result);
    echo"</pre>";
  }


  public function query($column = "*", $refinement="") {
    $sql = "SELECT ". $column . " FROM " . $this->tableName." ".$refinement;
    global $db;
    $result = $db->query($sql);
    echo $sql;

        
    // while($obj = $result->fetch_object()){ 
      // $line [ $obj->id ]['fieldname1']  = $obj->id; 
      // $line [ $obj->id ] ['fieldName2'] = $obj->name;        
	  // }

    
    // print_r($line);
    

	  // return $line;
  }
}
?>
