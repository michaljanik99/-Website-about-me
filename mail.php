<?php
if(isset($_POST['submit'])){
    
    $to = 'concat@michaljanik.epizy.com';
    $name =$_POST['name'];
    $email = $_POST['email'];
    $subject = 'Nowy mail od'.$name. 'z adresu ('.$email.')';
    $message = $_POST['message'];
    $headers = 'Nowy mail od'.$name. 'z adresu ('.$email.')';
    $headers = 'Content-type: text/html; charset=iso-8859-1';    
    
    
    mail($to, $subject, $message, $headers);
    header('Location:index.html');
    
};