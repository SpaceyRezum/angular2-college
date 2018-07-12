<?php

$interest=$_POST["interest"].trim();
$firstName=$_POST["firstName"].trim();
$lastName=$_POST["lastName"].trim();
$country=$_POST["country"].trim();
$phoneNumber=$_POST["phoneNumber"].trim();
$email=$_POST["email"].trim();
$message=$_POST["message"].trim();

$mailto = "info@nabcollege.ca";

$subject = $firstName . ' ' . $lastName . ' would like to know more about ' . $interest;

$body = "First name : " . $firstName . "\n" 
				. "Last name: " . $lastName . "\n"
				. "Country: " . $country . "\n"
				. "Phone Number: " . $phoneNumber . "\n"
				. "Email: " . $email . "\n"
				. "Interested in: " . $interest . "\n"
				. "Message: " . $message;

$output = json_encode($body);

$sent = mail($mailto, $subject, $body);

if(!$sent) {
	//If mail couldn't be sent output error. Check your PHP email configuration (if it ever happens)
	$output = json_encode(array('type'=>'error'));
	die($output);
} else {
	$output = json_encode(array('type'=>'success'));
	die($output);
}

?>