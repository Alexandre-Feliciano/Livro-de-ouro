<?php

 class DB{

   private $host;
   private $user;
   private $senha;
   private $bd;

   public $pdo;

   private static $instance = null;
   
   private function __construct(){
       
       // Falta colocar os dados do banco
       
      $this->host   = '';
      $this->user   = '';
      $this->senha  = '';
      $this->bd     = '';

      $this->pdo = new PDO("mysql:host=$this->host;dbname=$this->bd", $this->user, $this->senha, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES UTF8MB4"));

  }

  public static function getInstance(){
      if (self::$instance === null) {
          self::$instance = new self();
      }
      return self::$instance->pdo;
  }

 }

 ?>