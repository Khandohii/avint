<?php

$phone = '';
$name = '';

$service = '';
$service_name = '';

$tv = '';
$amount = '';
$whiteTable = '';
$pc = '';
$translation = '';
$size = '';

if (isset($_POST["phone"])) {

	$phone = $_POST['phone'];
	$name = $_POST['name'];

	$service = $_POST['service'];
	$service_name = $_POST['service_name'];

	$tv = $_POST['tv'];
	$amount = $_POST['amount'];
	$whiteTable = $_POST['whiteTable'];
	$pc = $_POST['pc'];
	$translation = $_POST['translation'];
	$size = $_POST['size'];


	$name = trim(urldecode(htmlspecialchars($name)));

	$service = trim(urldecode(htmlspecialchars($service)));
	$service_name = trim(urldecode(htmlspecialchars($service_name)));

	$tv = trim(urldecode(htmlspecialchars($tv)));
	$amount = trim(urldecode(htmlspecialchars($amount)));
	$whiteTable = trim(urldecode(htmlspecialchars($whiteTable)));
	$pc = trim(urldecode(htmlspecialchars($pc)));
	$translation = trim(urldecode(htmlspecialchars($translation)));
	$size = trim(urldecode(htmlspecialchars($size)));


	if (strlen($name)) {
		$name = "Имя: {$name}. ";
	}

	if (strlen($service)) {
		$service = "Сервис: {$service}. ";
	}

	if (strlen($service_name)) {
		$service_name = "Название сервиса: {$service_name}. ";
	}

	if (strlen($tv)) {
		$tv = "Телевизор или проектор?: {$tv}. ";
	}

	if (strlen($amount)) {
		$amount = "Количество человек в переговорной комнате: {$amount}. ";
	}

	if (strlen($whiteTable)) {
		$whiteTable = "Сервис 3: {$whiteTable}. ";
	}

	if (strlen($pc)) {
		$pc = "Используете ли Вы белую доску, флипчарт или интерактивный экран во время совещаний: {$pc}. ";
	}

	if (strlen($translation)) {
		$translation = "Трансляция: {$translation}. ";
	}

	if (strlen($size)) {
		$size = "Размер помещения: {$size}. ";
	}


	$adminEmail = 'test@test.com';
	$message = "{$name}Телефон: {$phone}. "
	. $service
	. $service_name
	. $amount
	. $tv
	. $pc
	. $whiteTable
	. $translation
	. $size;
	$subject = "Заявка с формы";

	mail($adminEmail, $subject, $message);
}

?>
