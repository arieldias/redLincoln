<?php
class Base {
  private $className;
  private $tableName;
  private $fieldNames;
  private $errors = array();

  

	public function __construct($className) {
    $this->className = $className;
    $this->tableName = "_".strtolower($className);    
  }



  public function query($column = "*", $refinement="") {

    $sql = "SELECT ". $column . " FROM " . $this->tableName." ".$refinement;

    global $db;

    $result = $db->query($sql);
    $arr = array();

    if($result){
      $aux = 0;      
      while($obj = $result->fetch_object()){ 
        foreach($obj as $t => $v) {
           $arr[$aux][$t] = $v;
        }
        $aux ++;
      }
    }
    
    if ($arr)
      return $arr;

    return false;
    
  }

  public function error($newError) {
    $this->errors[] = $newError;
  }

  public function clearError() {
    if($isThereErrors)
      unset($this->errors);
  }

  public function isThereErrors() {
    if ($this->errors[0])
      return true;

    return false;
  }

  public function returnErrors() {
    return $this->errors;
  }
}
?>
