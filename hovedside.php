<?php

if (isset($_POST['submit'])) {

  $mailFrom = $_POST['epost'];

  $message = $_POST['melding'];

  $subject = "Booking";

  $mailTo = "snaustrinda-sjef@samfundet.no";

  $header = "From: ".$mailFrom."\r\n";
  $header.= "MIME-Version: 1.0\r\n";
  $header.= "Content-Type: text/html; charset=ISO-8859-1\r\n";
  $header.= "X-Priority: 1\r\n";
  $header.= "Reply-to: ".$mailFrom."\r\n";


  $txt = "Du har mottatt en mail fra ".$name."\n\nMelding: ".$message;


  mail($mailTo, $subject, $txt, $header);
  header("Location: hovedside.html?mailsend");
}

?>
