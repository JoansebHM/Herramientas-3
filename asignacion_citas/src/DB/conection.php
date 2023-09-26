<?php
class ConexionDB {
    private $servername = "127.0.0.1";
    private $username = "localhost";
    private $password = "";
    private $dbname = "asignacion_citas";
    private $conn;

    public function conectar() {
        $this->conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);

        if ($this->conn->connect_error) {
            die("La conexión a la base de datos falló: " . $this->conn->connect_error);
        }
        return $this->conn;
    }

    public function cerrarConexion() {
        $this->conn->close();
    }
}
?>
