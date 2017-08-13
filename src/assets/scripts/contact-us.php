<?php
 
   // Test fonction mail();
 
   // *** A configurer
 
   $to    = "bellet.alexis.fr@gmail.com";
 
   // adresse MAIL OVH liée à l’hébergement.
   $from  = "info@alexis-bellet.com";
 
   ini_set("SMTP", "smtp.alexis-bellet.com");   // Pour les hébergements mutualisés Windows de OVH
 	 ini_set('display_errors', 'On');
 	 error_reporting(E_ALL);

   // *** Laisser tel quel
 
   $JOUR  = date("Y-m-d");
   $HEURE = date("H:i");
 
   $Subject = "Test Mail - $JOUR $HEURE";
 
   $mail_Data = "";
   $mail_Data .= "<html> \n";
   $mail_Data .= "<head> \n";
   $mail_Data .= "<title> Subject </title> \n";
   $mail_Data .= "</head> \n";
   $mail_Data .= "<body> \n";
 
   $mail_Data .= "Mail HTML simple  : <b>$Subject </b> <br> \n";
   $mail_Data .= "<br> \n";
   $mail_Data .= "bla bla <font color=red> bla </font> bla <br> \n";
   $mail_Data .= "Etc.<br> \n";
   $mail_Data .= "</body> \n";
   $mail_Data .= "</HTML> \n";
 
   $headers  = "MIME-Version: 1.0 \n";
   $headers .= "Content-type: text/html; charset=iso-8859-1 \n";
   $headers .= "From: $from  \n";
   $headers .= "Disposition-Notification-To: $from  \n";
 
   // Message de Priorité haute
   // -------------------------
   $headers .= "X-Priority: 1  \n";
   $headers .= "X-MSMail-Priority: High \n";
 
   $CR_Mail = TRUE;
 
   $CR_Mail = @mail ($to, $Subject, $mail_Data, $headers);
 
   if ($CR_Mail === FALSE)
      {
      echo " ### CR_Mail=$CR_Mail - Erreur envoi mail <br> \n";
      }
   else
      {
      echo " *** CR_Mail=$CR_Mail - Mail envoyé<br> \n";
      }
?>


<!-- <?php

$interest=$_POST["interest"];
$firstName=$_POST["firstName"];
$lastName=$_POST["lastName"];
$email=$_POST["email"];
$message=$_POST["message"];


$mailto = "info@alexis-bellet.com";

$subject = $firstName . ' ' . $lastName . ' would like to know more about ' . $interest;

$body = 'First name : ' . $firstName . '\n' 
				. 'Last name: ' . $lastName . '\n'
				. 'Email: ' . $email . '\n'
				. 'Message: ' $message;

$sent=mail($mailto,$subject,$body);

$output = json_encode($body); 

if(!$sent) {
	//If mail couldn't be sent output error. Check your PHP email configuration (if it ever happens)
	$output = json_encode(array('type'=>'error'));
	die($output);
} else {
	$output = json_encode(array('type'=>'success'));
	die($output);
}

?> -->