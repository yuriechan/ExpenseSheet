<?php

include_once 'dbh.inc.php';

$date = $_POST['date'];
$category = $_POST['category'];
$description = $_POST['description'];
$price = $_POST['price'];

$sql = "INSERT INTO expenses (date, category, description, price) VALUES ('$date', '$category', '$description', '$price');";

mysqli_query($conn, $sql);

header("Location: ../index.php?submit=success");




?>
