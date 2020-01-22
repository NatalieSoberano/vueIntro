<?php 
    require('connect.php');

    function getUser($conn) {
        $getData = 'SELECT * FROM user';
        $runQuery = $conn->query($getData);

        $result = array();

        while($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            //push each row of data into our array to make it easy to iterate over
            $result[] = $row;
        }

        //returning data
        return $result;
    }

?> 
