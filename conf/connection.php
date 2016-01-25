<?php
include PATHCLASSES.'data_base/class.DataBase.php';
$db = new DataBase(DB_SERVER, DB_USER, DB_PASSWORD, DB_BASE);
if(!$db->connect()){
	exit("ERRO<br />".$db->getMessage());
}
