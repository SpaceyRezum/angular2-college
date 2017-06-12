<?php

$name=$_POST["fbRealname"];
$email=$_POST["fbEmail"];
$comments=$_POST["fbComments"];


$mailto = "info@cpgal.ca";

$subject = "feedback from " . $name;

$body = 'From : ' . $name . ' <' . $email . '> - voici son message: ' . $comments;

$headers  = 'Feedback from: ' . $name;
$headers .= ' by X-Mailer: PHP/' . phpversion();

$sent=mail($mailto,$subject,$body,$headers);

if(!$sent) {
	//If mail couldn't be sent output error. Check your PHP email configuration (if it ever happens)
	$output = json_encode(array('type'=>'error'));
	die($output);
} else {
	$output = json_encode(array('type'=>'success'));
	die($output);
}

?>