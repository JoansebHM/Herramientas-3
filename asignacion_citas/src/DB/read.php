<?php
require_once("ConexionDB.php"); 
$conexion = new ConexionDB();

$conn = $conexion->conectar();

$sql = "SELECT * FROM usuario";

$resultado = $conn->query($sql);

if ($resultado->num_rows > 0) {
    echo "<h2>Registros:</h2>";
    echo "<ul>";
    while ($fila = $resultado->fetch_assoc()) {
        echo "<li>" . $fila["Nombre"] . " - " . $fila["Celular"] . "</li>"; // Reemplaza "columna1" y "columna2" con los nombres de tus columnas
    }
    echo "</ul>";
} else {
    echo "No se encontraron registros.";
}

$conexion->cerrarConexion();
?>
