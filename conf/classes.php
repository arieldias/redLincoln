<?php
function __autoload($class) {
	include PATHCLASSES.'class.'.$class.'.php';
}
?>