<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:GET,POST");
header("Access-Control-Allow-Headers:*");
$request = file_get_contents("php://input");
$data = json_decode($request);
$Productname = $data->foodmanufacturer->ProductName;
$ProductDescription=$data->foodmanufacturer->ProductDescription;
$VideoLink=$data->foodmanufacturer->VideoLink;
$VideoLinkDescription=$data->foodmanufacturer->VideoLinkDescription;
$ProductIngredients=$data->foodmanufacturer->ProductIngredients;
$NutritionalInfo=$data->foodmanufacturer->NutritionalInfo;
$email=$data->email;
$image = $data->image; 
$conn = mysqli_connect('localhost','root','','react');
$sql = "update signup set productname='$Productname',productdescription='$ProductDescription',
videolink='$VideoLink',videolinkdescription='$VideoLinkDescription',productimage ='$image',
productingredients='$ProductIngredients',nutritionalinfo = '$NutritionalInfo' where email='$email'";
$q = mysqli_query($conn,$sql);
?>