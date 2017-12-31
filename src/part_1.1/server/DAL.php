<?php
  // THIS FILE WILL HOLD ALL THE LOGIC FOR DATA ABSTRACTION LAYOUR



  interface iDAL {

    public function __construct($args, $options = []);
    public function connect();
    public function disconnect();
    public function get($query);
    public function query($query, $select_query);
  }

  /**
   * DATABASE ABSTRACTION LAYER
   */
  class DAL implements iDAL {

    private $host;
    private $sql_user;
    private $sql_pass;
    private $db_name;
    private $options;
    private $connection;

    public function __construct($args, $options = []) {


      $this->host = $args['host'];
      $this->sql_user = $args['sql_user'];
      $this->sql_pass = $args['sql_pass'];
      $this->db_name = $args['db_name'];

      $defaults = [

        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
      ];

      $this->options = array_replace($defaults, $options = []);
    }

    public function connect() {
      $this->connection = mysqli_connect($this->host, $this->sql_user, $this->sql_pass, $this->db_name) or die("Connection FAILED");
      mysqli_select_db($this->connection, $this->db_name) or die ("Could not open database: ". $this->db_name);
    }

    public function disconnect() {
      # code...
      if(isset($this->connection)) {
        mysql_close($this->connection);
      } else {
        mysql_close();
      }
    }

    public function get($query) {
      $resource = mysqli_query($this->connection, $query);


      $arr = $this->build_arr($resource);


      return $arr;
    }

    public function query($query, $select_query) {

      mysqli_query($this->connection, $query);

      $arr = $this->get($select_query);


      return $arr;
    }

    private function build_arr($resource) {
      $results_arr = array();
      $i = 0;

      while ($row = mysqli_fetch_assoc($resource)) {
        # code...
        foreach ($row as $key => $value) {
          # code...
          $results_arr[$i][$key] = $value;
        }
        $i++;
      }
      return $results_arr;
    }



    public function db_name($db_name)
    {
      # code...
      $this->db_name = $db_name;
    }
  }
