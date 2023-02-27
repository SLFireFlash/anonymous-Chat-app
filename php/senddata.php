<?php
include "dbconn.php";

$msgTxt = $_POST["msgText"];
$msgToken = $_POST["TextToken"];

$sql ="INSERT INTO messages(Token,text) VALUES ('$msgToken','$msgTxt')";

if($conn->query($sql) === TRUE){
    echo "data added";
    echo "alert('message sent')";
}else{
    echo $conn->error;
}


?>