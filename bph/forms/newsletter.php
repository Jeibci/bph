<?php
$receiving_email_address = 'info@boarderlessprogramming.com';

// Check if email is set and not empty
if(empty($_POST['email'])) {
    die(json_encode(['status' => 'error', 'message' => 'Email is required']));
}

$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die(json_encode(['status' => 'error', 'message' => 'Invalid email format']));
}

// Email headers
$headers = 'From: ' . $email . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

// Email content
$subject = "New Newsletter Subscription";
$body = "New subscription request from: $email";

// Try to send email
if (mail($receiving_email_address, $subject, $body, $headers)) {
    echo json_encode(['status' => 'success', 'message' => 'Your subscription request has been sent. Thank you!']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Unable to send subscription request.']);
}
?>
