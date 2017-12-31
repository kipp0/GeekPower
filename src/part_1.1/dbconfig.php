<?php

$mysql_host = 'localhost';
$mysql_user = 'root';
$mysql_pass = 'root';
$mysql_port = '4001';


$db_name = 'GeekPower';
$tbl_name = 'users';


//
// CONNECT TO SERVER
$connection = mysqli_connect( $mysql_host, $mysql_user, $mysql_pass );

if(! $connection ) {
  die( "ERROR CONNECTION FAILED: <br>" . mysqli_connect_error() );
} else {
  // echo 'CONNECTED<br>';
}

// CREATE DB IF NOT EXISTS
$sql_create_db = "CREATE DATABASE IF NOT EXISTS $db_name";

if ( mysqli_query($connection, $sql_create_db) ) {
    // echo "DB CREATED<br>";
} else {
    echo "ERROR DB NOT CREATED OR ALREADY EXISTS: <br>" . mysqli_connect_error();
}


$sql_create_tbl = " CREATE TABLE IF NOT EXISTS $db_name.$tbl_name (
                    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                    firstname VARCHAR(30) NOT NULL,
                    lastname VARCHAR(30) NOT NULL,
                    reg_date TIMESTAMP
                    )";


if ( mysqli_query($connection, $sql_create_tbl) ) {
    // echo "TBL CREATED<br>";
} else {
    echo "TBL ALREADY EXISTS OR NOT CREATED: <br>" . mysqli_error($connection);
}
