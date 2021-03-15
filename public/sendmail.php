<?php

header("allow-control-access-origin: * ");

require '../vendor/autoload.php';

$mgun = include_once('../config.inc.php');
use Mailgun\Mailgun;

$type = trim($_POST['type']);

$name = trim($_POST['name']);
$email = trim($_POST['email']);
$phone = trim($_POST['phone']);
$company = trim($_POST['company']);
$message = trim($_POST['message']);

if ($type == 'mediaKit') {
    $subject = "Zahtjev za media kit";
} else {
    $subject = "A message from Flaster";
}

// Email address validation - works with php 5.2+
function is_email_valid($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

//Your credentials
$mg = Mailgun::create($mgun['mailgun_key'], $mgun['mailgun_api']);
$domain = $mgun['mailgun_domain'];

if( isset($email) && isset($message) && isset($subject) && is_email_valid($email)) {
    //Customise the email - self explanatory
    foreach($mgun['to_mail'] as $mail) {
        $mg->messages()->send($domain, [
            'from'=> $email,
            'to'=> $mail,
            'subject' => $subject,
            'text' => "\n Name: " . $name . "\nMessage: \n" . $message . "\n Phone: " . $phone . "\n Company: " . $company,
        ]);
    }

    return $email;
}

?>
