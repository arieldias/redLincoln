<?php
class User extends Base {
  private $id;
  private $name;
  private $email;
  private $birth;
  private $picture;
  private $userLevel;
  private $drId;


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
            //building the user object
            $this->id = $array['id'];
            $this->name = $array['name'];
            $this->email = $array['email'];
            $this->drId = $array['dr_id'];
            $this->userLevel = $array['_user_level_id'];
            $this->picture = $array['picture'];
            
            
            //building the user session
            $user = array(
              'id' => $array['id'], 
              'name' => $array['name']
            );

            
            $_SESSION['user'] = $user;            
             // return $this->id;
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

  public function greeting() {
      if( $this->checkLogin() ) {
      echo 
      "<div class='welcome'> Olá ".$_SESSION['user']['name']."! Seja bem vindo!</div>";   
    } else {
      echo  
      "<script> 
        onModuleLoad(function() {
          a$.modal.openModal('login', 'callLogin' );
       });        
      </script>";
    }
  }

  public function getMenu() {
    $query = $this->query("*", "WHERE id = '".$_SESSION['user']['id'] . "'");  
    if ($query) {
      foreach ($query as $idSearch => $array ){
        $usr_id = $array['_user_level_id'];
      }
    }

    switch ($usr_id) {
      case '1':
        $html = "view/pages/menu_admin.html";
        break;

      case '2':
        $html = "view/pages/menu_nutri.html";
        break;
      
      case '3':
        $html = "view/pages/menu_user.html";
        break;      

      default:
        $html = "view/pages/oooops.html";
        break;
    }

    return $html;
  }

  public function checkLogin(){
    return isset($_SESSION['user']) ? true : false;
       true;
  }

  public function logout() {
    unset($_SESSION['user']);
    return true;
  }


}
	
?>