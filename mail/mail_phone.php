<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$phone = $_POST['user_phone'];


$mail->isSMTP();                                     
$mail->Host = 'smtp.mail.ru';  																							
$mail->SMTPAuth = true;
$mail->Username = 'jetcarsbcn@mail.ru';
$mail->Password = 'jet12345cars';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->setFrom('jetcarsbcn@mail.ru');
$mail->addAddress('jetcarsbcn@mail.ru');
$mail->isHTML(true);

$mail->Subject = 'Пользователь оставил свой телефон';

$mail->Body    = 
'<br>Телефон: ' .$phone;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: ../pages/thank-you.html');
}
?>