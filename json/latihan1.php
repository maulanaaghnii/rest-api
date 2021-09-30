<?php 

// $mahasiswa = [

//     [
//         "nama" => "TB. Maulana Aghni",
//         "nim" => "A11.2019.12028",
//         "email" => "maulanaaghni.contact@gmail.com"
//     ],
//     [
//         "nama" => "Gofar Abdul Hilman",
//         "nim" => "A11.2019.12028",
//         "email" => "Gofar.contact@gmail.com"
//     ]
// ];



$dbh = new PDO('mysql:host=localhost;dbname=ci4dbtest', 'root','');

$db = $dbh->prepare('SELECT * FROM airsoft_user');

$db->execute();
$user = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($user);
echo $data;


?>