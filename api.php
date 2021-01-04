<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:GET,POST");
header("Access-Control-Allow-Headers:*");
$request = file_get_contents("php://input");
if (!empty($request))
{
    $data = json_decode($request);
    $name = $data->name;
    $password = $data->password;
    $email = $data->email;
    $phone = $data->number;
    $conn = mysqli_connect('localhost','root','','react');
    $query = mysqli_query($conn,"select * from signup where email = '$email'");
    if(mysqli_num_rows($query)>0)
    {
        echo"email already exist";
    }
    else
    {
        $sql = "insert into signup(id,name,password,email,number)values('','$name','$password','$email','$phone')";
        $q = mysqli_query($conn,$sql);
        if($q)
        {
            echo "success";
        }
    }
}

?>