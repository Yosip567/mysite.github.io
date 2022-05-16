<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$option = $_POST['user_option'];


$car = $_POST['user_car'];
$days = $_POST['user_days'];
$option1 = $_POST['option1'];
$option2 = $_POST['option2'];
$option3 = $_POST['option3'];
$option4 = $_POST['option4'];
$option5 = $_POST['option5'];


$mail->isSMTP();                                    
$mail->Host = 'smtp.mail.ru';  																							
$mail->SMTPAuth = true;
$mail->Username = 'jetcarsbcn@mail.ru';
$mail->Password = 'YuriyStopchytskyy';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->setFrom('jetcarsbcn@mail.ru');
$mail->addAddress('jetcarsbcn@mail.ru');
$mail->isHTML(true);                                



if ($option1 == on){
	$option1 = "<br>Доставка в аеропорт";
} if ($option2 == on){
	$option2 = "<br>Вернуть в аеропорту";
} if ($option3 == on){
	$option3 = "<br>Доставка по городу";
} if ($option4 == on){
	$option4 = "<br>Вернуть в городе";
} if ($option5 == on){
	$option5 = "<br>Детское кресло";
}






$mail->Subject = 'Заявка на аренду автомобиля';
$mail->Body    = 
'Имя: ' .$name. 
'<br>Телефон: ' .$phone. 
'<br>Предпочительный вид свзязи: ' .$option. 
'<br>Машина: ' .$car. 
'<br>Количество дней аренды: ' .$days. 

'<br><br><b>ДОПОЛНИТЕЛЬНЫЕ ОПЦИИ:</b>' 
.$option1. ' ' .$option2. ' ' .$option3. ' ' .$option4. ' ' .$option5;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: ../pages/thank-you.html');
}
?>