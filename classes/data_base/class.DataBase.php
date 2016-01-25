<?php
require_once('class.MySQL.php');


class DataBase{
  var $error;
  var $msg;
  var $type;
  var $port;      
  var $conn;
  var $DBGS;

	
	function seterror($msg){
		$this->error = true;
		$this->msg  = $msg;
	}

	function getMensagem(){
		return $this->msg;
	}

	
	function getMessage(){
		return $this->DBGS->getMensagem();
	}

	
	function DataBase($server='', $user='', $password='', $base='', $type='mysql', $port=''){
		$this->user 	= $user;
		$this->password = $password;
		$this->type		= $type;
		$this->server   = $server;
		$this->base		= $base;
		$this->port	    = $port;
		$this->error 	= false;

		$this->DBGS = new MySQL($this->user, $this->password, $this->server, $this->base, $this->port); 
	}

	
	function connect(){
		return $this->DBGS->connect();
	}

	
	function query($sql){
		return $this->DBGS->query($sql);
	}

	
	function close(){
		$this->DBGS->close();
	}

}