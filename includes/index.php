<?php 
include ('functions.php');

//if were passing a user key in the $_GET superglobal, the go to get a user

if(isset($_GET["getUser"])) {
    $user = getUser($pdo);

    echo json_encode($user);
}