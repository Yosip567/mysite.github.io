<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$option = $_POST['user_option'];


$excursion = $_POST['user_excursion'];
$time = $_POST['user_time'];
$option1 = $_POST['option1'];
$option2 = $_POST['option2'];
$option3 = $_POST['option3'];
$option4 = $_POST['option4'];
$option5 = $_POST['option5'];


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



if ($option1 == on){
	$option1 = "<br>Опция 1";
} if ($option2 == on){
	$option2 = "<br>Опция 2";
} if ($option3 == on){
	$option3 = "<br>Опция 3";
} if ($option4 == on){
	$option4 = "<br>Опция 4";
} if ($option5 == on){
	$option5 = "<br>Опция 5";
}






$mail->Subject = 'Заявка на екскурсию';
$mail->Body    = 
'Имя: ' .$name. 
'<br>Телефон: ' .$phone. 
'<br>Предпочительный вид свзязи: ' .$option. 
'<br>Екскурсия: ' .$excursion. 
'<br>Времья екскурсии: ' .$time. 

'<br><br><b>ДОПОЛНИТЕЛЬНЫЕ ОПЦИИ:</b>' 
.$option1. ' ' .$option2. ' ' .$option3. ' ' .$option4. ' ' .$option5;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: ../pages/thank-you.html');
}
?>