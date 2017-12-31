<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

  include_once './server/DAL.php';

  $tbl_name = 'users';

  $args = ['host' => 'localhost',
            'sql_user' => 'root',
            'sql_pass' => 'root',
            'db_name' => 'GeekPower'
          ];

  try {

    $dal = new DAL($args);
    $dal->connect();

    $sql = "SELECT id, firstname, lastname FROM $tbl_name";

    $data = $dal->get($sql);

    echo json_encode($data);

  } catch(Exception $e) {
    echo new Exception("Error Processing Request" . $e, 1);

  }
