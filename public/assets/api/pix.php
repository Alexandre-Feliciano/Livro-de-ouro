<?php
header("Content-Type: application/json");

session_start();

$config = require_once '../php/config.php';

require_once '../php/conexao_banco.php';

$idempotencyKey = uniqid();

$accesstoken = $config['accesstoken'];

$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => 'https://api.mercadopago.com/v1/payments',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'POST',
    CURLOPT_POSTFIELDS => '{
    "description": "Payment for product",
    "external_reference": "MP0001",
    "notification_url": "https://yourapp.com/notifications",
    "payer": {
        "email": "turmainfo1814@gmail.com",
        "identification": {
        "type": "CPF",
        "number": "95749019047"
        }
    },
    "payment_method_id": "pix",
    "transaction_amount": 0.01
    }',
    CURLOPT_HTTPHEADER => array(
        'Content-Type: application/json',
        'Authorization: Bearer ' . $accesstoken,
        'X-Idempotency-Key: ' . $idempotencyKey
    ),
));

$response = curl_exec($curl);

curl_close($curl);

echo $response;

?>