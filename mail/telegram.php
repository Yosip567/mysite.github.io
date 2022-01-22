<?php

/* https://api.telegram.org/bot5034558419:AAGMZ2pV6DJaBKFcgEFw15oy1WrJS3WvVE4/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

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

$token = "5034558419:AAGMZ2pV6DJaBKFcgEFw15oy1WrJS3WvVE4";
$chat_id = "-699459332";

$arr = array(
  'Заявка на аренду автомобиля:' => " ",
  'Имя: ' => $name,
  'Телефон: ' => $phone,
  'Предпочительный вид свзязи:' => $option,
  'Машина: ' => $car,
  'Количество дней аренды: ' => $days,
  '' => " ",
  'ДОПОЛНИТЕЛЬНЫЕ ОПЦИИ:' => " ",
  'Доставка в аэропорт: ' => $option1, 
  'Вернуть в аэропорту: ' => $option2, 
  'Доставка по городу: ' => $option3, 
  'Вернуть в городе: ' => $option4, 
  'Детское кресло: ' => $option5
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: ../pages/thank-you.html');
} else {
  echo "Error";
}
?>