<?php

$interest=$_POST["interest"];
$firstName=$_POST["firstName"];
$lastName=$_POST["lastName"];
$country=$_POST["country"];
$phoneNumber=$_POST["phoneNumber"];
$email=$_POST["email"];
$message=$_POST["message"];

$mailto = "info@alexis-bellet.com";

$subject = $firstName . ' ' . $lastName . ' would like to know more about ' . $interest;

$body = 'First name : ' . $firstName . '\n' 
				. 'Last name: ' . $lastName . '\n'
				. 'Country: ' . $country . '\n'
				. 'Phone Number: ' . $phoneNumber . '\n'
				. 'Email: ' . $email . '\n'
				. 'Message: ' $message;

$sent = wp_mail($mailto,$subject,$body);

$output = json_encode($body);

if(!$sent) {
	//If mail couldn't be sent output error. Check your PHP email configuration (if it ever happens)
	$output = json_encode(array('type'=>'error'));
	die($output);
} else {
	$output = json_encode(array('type'=>'success'));
	die($output);
}

?>