<?php
if(isset($_POST['submit'])){
    
    // $to = 'concat@michaljanik.epizy.com';
    $name =$_POST['name'];
    $email = $_POST['email'];
    // $subject = 'Nowy mail od'.$name. 'z adresu ('.$email.')';
    $message = $_POST['message'];
    // $headers = 'Nowy mail od'.$name. 'z adresu ('.$email.')';
    // $headers = 'Content-type: text/html; charset=iso-8859-1';    
    
    
    // mail($to, $subject, $message, $headers);
    // header('Location:index.php');
    require 'PHPMailerAutoload.php';
    $mail = new PHPMailer;
    
    $mail->Host ='smtp.gmail.com';
    $mail->Port= '587';
    $mail->SMTPAuth=true;
    $mail->SMTPSecure='tls';
    $mail->Username='michaljanikwebdesign@gmail.com';
    $mail->Password='****';

    $mail->setFrom($email,$name);
    $mail->addAddress('mjanik45@gmail.com');
    $mail->addReplyTo($email,$name);
    $mail->isHTML(true);
    $mail->Subject="FF";
    $mail->Body = $message;

    if($mail->send()){
        header('Location:index.html');
    }
    
};
