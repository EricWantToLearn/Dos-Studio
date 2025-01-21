<?php
// Database connection file (conn.php)

$host = 'localhost';
$db = 'dos'; // Update this with your database name
$user = 'root'; // Update this with your MySQL username
$pass = 'Jessa1218.'; // Update this with your MySQL password

// Create a connection
$conn = new mysqli($host, $user, $pass, $db);


// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>
