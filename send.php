<?php
$fname = $_POST['fname'];
$email = $_POST['email'];
$tel = $_POST['tel'];

$fname = htmlspecialchars($fname);
$email = htmlspecialchars($email);

$fname = urldecode($fname);
$email = urldecode($email);

$fname = trim($fname);
$email = trim($email);

echo $fname;
echo "<br>";
echo $email;

mail("fainorthegreat3@gmail.com", "Заявка с сайта", "ФИО:".$fname.". E-mail: ".$email." Номер телефона : ".$tel ,"From: send@a0391989.xsph.ru\r\n");

if (mail("fainorthegreat3@gmail.com", "Заказ с сайта", "ФИО:".$fname.". E-mail: ".$email." Номер телефона : ".$tel , "From: example2@mail.ru \r\n"))
 {
    echo " сообщение успешно отправлено";
} else {
    echo " при отправке сообщения возникли ошибки";
}

?>

