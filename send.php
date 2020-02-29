<?php
$fname = $_POST['fname'];
$email = $_POST['email'];
$tel = $_POST['tel'];

$fname = htmlspecialchars($fio);
$email = htmlspecialchars($email);

$fname = urldecode($fio);
$email = urldecode($email);

$fname = trim($fio);
$email = trim($email);

echo $fio;
echo "<br>";
echo $email;

mail("fainorthegreat3@gmail.com", "Заявка с сайта", "ФИО:".$fname.". E-mail: ".$email ,"From: send@a0391989.xsph.ru\r\n");

if (mail("example@mail.ru", "Заказ с сайта", "ФИО:".$fio.". E-mail: ".$email ,"From: example2@mail.ru \r\n"))
 {
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}

?>

