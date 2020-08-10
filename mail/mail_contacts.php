<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$message = $_POST['user_message'];
$option = $_POST['user_option'];


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

$mail->Subject = 'Пользователь оставил заявку';

$mail->Body    = 
'Имя: ' .$name. 
'<br>Телефон: ' .$phone. 
'<br>Сообщение: ' .$message. 
'<br>Предпочительный вид свзязи: ' .$option;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: ../pages/thank-you.html');
}
?>