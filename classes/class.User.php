<?php
class User extends Base {
  private $id;
  private $name;
  private $email;

  public function __construct(){
	  parent::__construct(get_class());
  }

  public function login($user, $password) {
    if ($user == 'arieldias' &&  $password=='rollTheBones') {
      $_SESSION['login'] = 'Ariel';
      echo "Logado com sucesso";
    }
    else {
      echo "Login Invalido";
    }
  }

  public function logout() {
    session_destroy();
  }


}
	
?>