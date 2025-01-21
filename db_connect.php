<?php
// db_connect.php
$servername = "localhost"; 
$username = "root"; 
$password = "root"; 
$dbname = "site"; 

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // Définir le mode d'erreur PDO sur exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connexion réussie"; 
} catch(PDOException $e) {
    echo "Échec de la connexion: " . $e->getMessage();
}
?>