<?php
  function echoArray($array) {
    echo "<pre>";
    print_r($array);
    echo "</pre>";
  }

  function data2MysQL ($date) {
  	return implode("-",array_reverse(explode("/",$date)));
  }
?>