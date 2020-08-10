<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$location = $_POST['user_location'];
$destination = $_POST['user_destination'];
$option = $_POST['user_option'];
$person = $_POST['user_person'];
$date = $_POST['user_date'];
$date2 = $_POST['user_date2'];


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

$mail->Subject = 'Заявка на трансфер';

$mail->Body    = 
'Имя: ' .$name. 
'<br>Телефон: ' .$phone. 
'<br>Место встречи: ' .$location. 
'<br>Место высадки: ' .$destination. 
'<br>Предпочительный вид свзязи: ' .$option. 
'<br>Количество пасажиров: ' .$person. 
'<br>Дата: ' .$date. ' - ' .$date2;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: ../pages/thank-you.html');
}
?>