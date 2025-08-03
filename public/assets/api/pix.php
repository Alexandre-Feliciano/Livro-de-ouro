<?php

    $config = require_once '../../php/config.php';

    require_once 'assets/php/conexao.php';

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
    CURLOPT_POSTFIELDS =>'{
    "description": "Payment for product",
    "external_reference": "MP0001",
    "notification_url": "https://yourapp.com/notifications",
    "payer": {
        "email": "https://livro-de-ouro-1814.onrender.com/",
        "identification": {
        "type": "CPF",
        "number": "95749019047"
        }
    },
    "payment_method_id": "pix",
    "transaction_amount": 58
    }',
    CURLOPT_HTTPHEADER => array(
        'Content-Type: application/json',
        'Authorization: Bearer '. $accesstoken
    ),
    ));

    $response = curl_exec($curl);

    curl_close($curl);
    echo $response;


    $response = curl_exec($curl);
    curl_close($curl);

    $obj = json_decode($response);

    if (isset($obj->id)) {
        if ($obj->id != NULL) {

            $copia_cola = $obj->point_of_interaction->transaction_data->qr_code;
            $img_qrcode = $obj->point_of_interaction->transaction_data->qr_code_base64;
            $link_externo = $obj->point_of_interaction->transaction_data->ticket_url;
            $transaction_amount = $obj->transaction_amount;
            $external_reference = $obj->external_reference;

            echo "<h3>{$transaction_amount} #{$external_reference}</h3> <br />";

            // aqui você pode exibir o QR Code
            
            echo "<img src='data:image/png;base64, {$img_qrcode}' width='200' /> <br />";
            echo "<textarea>{$copia_cola}</textarea> <br />";
            echo "<a href='{$link_externo}' target='_blank' >Link externo</a>";

        }
    }


?>