<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

  include_once './server/DAL.php';

  $tbl_name = 'users';
  $id = $_POST['id'];
  $firstname = $_POST['firstname'];
  $lastname = $_POST['lastname'];

  $args = [ 'host' => 'localhost',
            'sql_user' => 'root',
            'sql_pass' => 'root',
            'db_name' => 'GeekPower'
          ];

  try {

    $dal = new DAL($args);
    $dal->connect();

    $sql = "UPDATE $tbl_name SET firstname='$firstname', lastname='$lastname' WHERE id=$id";
    $select_sql = "SELECT id, firstname, lastname FROM $tbl_name";

    $data = $dal->query($sql, $select_sql);

    echo json_encode($data);

  } catch(Exception $e) {
    echo new Exception("Error Processing Request" . $e, 1);

  }
