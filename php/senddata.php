<?php
include "dbconn.php";

$msgTxt = $_POST["msgText"];
$msgToken = $_POST["TextToken"];

$sql ="INSERT INTO messages(Token,text) VALUES ('$msgToken','$msgTxt')";

if($conn->query($sql) === TRUE){
    echo "data added";
}else{
    echo $conn->error;
}


?>