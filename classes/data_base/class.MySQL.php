<?
class MySQL extends DataBase{


	function MySQL($user, $password, $server, $base, $port){
		if($port == ''){
			$port = 3307;
		}
		$this->user 		= $user;
		$this->password 		= $password;
		$this->server 	= $server;
		$this->base 		= $base;
		$this->port		= $port;
	}

	function connect(){
		if(!$this->conn = mysqli_connect(	$this->server , $this->user, $this->password	) ){
			$this->setError('Erro ao conectar no server mysql.<br />'.mysqli_error());
			return false;
		} elseif(!mysqli_select_db( $this->conn, $this->base  ) ){
			$this->setError('Erro ao conectar no server mysql.<br />'.mysqli_error());
			return false;
		}
		mysqli_query($this->conn , "SET NAMES 'utf8';" );
		return true;
	}

	function query(	$sql ){
		if(	!$rs = mysqli_query( $this->conn , $sql	) )
			$this->setError('Erro-> '.mysqli_error($this->conn));
		return $rs;
	}

	function fetchRow(&$rs){
		return mysqli_fetch_assoc(	$rs	);
	}

	function close(){
		mysqli_close(	$this->conn	);
	}

	function numRows(&$rs){
		return mysqli_num_rows(	$rs	);
	}
	
	function isError(){
		return $this->erro;
	}

	function ultimoId(){
		return mysqli_insert_id();
	}
}