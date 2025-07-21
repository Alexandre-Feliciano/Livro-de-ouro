<?php

$access_token = "SEU_ACCESS_TOKEN";
$valor = floatval($_POST['valor'] ?? 0);

if ($valor < 1 || $valor > 9999) {
  http_response_code(400);
  echo json_encode(["erro" => "Valor inválido"]);
  exit;
}

$curl = curl_init();
curl_setopt_array($curl, [
  CURLOPT_URL => "https://api.mercadopago.com/v1/payments",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => json_encode([
    "transaction_amount" => $valor,
    "description" => "Pagamento via Pix",
    "payment_method_id" => "pix",
    "payer" => ["email" => "comprador@email.com"]
  ]),
  CURLOPT_HTTPHEADER => [
    "Authorization: Bearer $access_token",
    "Content-Type: application/json"
  ],
]);
$response = curl_exec($curl);
curl_close($curl);
header('Content-Type: application/json');
echo $response;


?>