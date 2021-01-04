<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:GET,POST");
header("Access-Control-Allow-Headers:*");
$request = file_get_contents("php://input");
$data = json_decode($request);
$companyname = $data->data_companyname;
$companylocation = $data->data_companylocation;
$email = $data->data_email;
$companyoccupation = $data->data_companyoccupation;
$conn = mysqli_connect('localhost','root','','react');
echo $sql = "update signup set companyname='$companyname',companylocation='$companylocation',
companyoccupation = '$companyoccupation' where email='$email'";
$q = mysqli_query($conn,$sql);
?>