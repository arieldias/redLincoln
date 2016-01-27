<?php
class User extends Base {
  private $id;
  private $name;
  private $email;


  public function __construct(){
	  parent::__construct(get_class());
  }

  public function login($user, $password) {
    $query = $this->query("*", "WHERE email = '".$user . "'");
    
    foreach ($query as $idSearch => $array ){
      foreach($array as $field => $value) {
        if($field == 'password' and $value == md5($password)) {
          $user = array('id' => $array['id'], 'name' => $array['name']);
          $_SESSION['user'] = $user;            
        }
      }
    }

    if (!$query) {
      $this->error("The user doesn't exist");
    } else {
      if(!$_SESSION['user']) {
        $this->error("password is not valid");
      }
    }    
  }

  public function checkLogin(){
    if($_SESSION && $_SESSION['user'] ) {
      echo "estamos logados";
    }else{
      echo "não estamos logados";
    }
  }
  public function logout() {
    unset($_SESSION['user']);
  }


}
	
?>