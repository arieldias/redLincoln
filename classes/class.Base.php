<?php
class Base {
  private $className;
  private $tableName;
  private $fieldNames;

  

	public function __construct($className) {
    $this->className = $className;
    $this->tableName = "_".strtolower($className);    
  }



  public function query($column = "*", $refinement="") {
    $sql = "SELECT ". $column . " FROM " . $this->tableName." ".$refinement;
    echo $sql;
    global $db;

    $result = $db->query($sql);
    $arr = array();

    while($obj = $result->fetch_object()){ 
      foreach($obj as $t => $v) {
         $arr[$obj->id][$t] = $v;
      }
	  }

    if ($arr)
      return $arr;
  }

  function error($newError) {
    if (!$isThereErrors) {
      $errors = array();
    }
    $errors[] = $newError;
  }

  function clearError() {
    if($isThereErrors)
      unset($errors);
  }

  function isThereErrors() {
    if ($errors)
      return true;

    return false;
  }
}
?>
