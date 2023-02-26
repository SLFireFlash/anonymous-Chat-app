<?php

$serverName = "localhost";
$username = "root";
$db = "USE chatapp";

$conn = mysqli_connect($serverName,$username);

if(!$conn){
    die(mysqli_connect_error());
}
if($conn->query($db) != TRUE){
    echo $conn->error;
}
?>