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
    if (!$query) {
      $this->error("The user doesn't exist");
    } else {
      foreach ($query as $idSearch => $array ){
        foreach($array as $field => $value) {
          if($field == 'password' and $value == md5($password)) {
            
            $user = array(
              'id' => $array['id'], 
              'name' => $array['name']
            );

            $_SESSION['user'] = $user;            
            return true;
          }
        }
      }
      if (!isset($_SESSION['user'])) {
        $this->error("password is not valid");  
      }
    }
    

   

    if ( $this-> isThereErrors() )  {
      return $this->returnErrors();
    }
  }

  public function getMenu() {
    if( $this->checkLogin() ) {
      
      echo 
      "<ul class='main_menu'>
        <li> <a href=''>Minhas refeições</a></li>
        <li> <a href=''>Meus relatórios</a></li>
        <li> <a href=''>Usuário</a></li>      
      </ul>";
    } else {
      echo  
      "<script> 
        onModuleLoad(function() {
          window.modules.modal.openModal('login', 'callLogin' );
       });        
      </script>";
    }
  }

  public function checkLogin(){
    return isset($_SESSION['user']) ? true : false;
       true;
  }

  public function logout() {
    unset($_SESSION['user']);
  }


}
	
?>