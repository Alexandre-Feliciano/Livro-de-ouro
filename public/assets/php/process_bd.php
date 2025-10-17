<?php
$key = '$2a$10$Efg4UJVCcFdE/rNv4UHtxuJ.oqqkJvnNGveWSKd0rVaJBTldI87Sq';
$bin = '68f28a99ae596e708f194a4d';
$url = "https://api.jsonbin.io/v3/b/$bin";

$nome = $_POST['nome-recado'] ?? '';
$recado = strip_tags($_POST['recado'] ?? '');

$novo_dado = [
    'id' => uniqid(),
    'nome' => $nome,
    'recado' => $recado,
    'data' => date('Y-m-d H:i:s')
];

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url . "/latest");
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, [
    "X-Master-Key: $key",
    "Content-Type: application/json"
]);
$respostarec = curl_exec($curl);
curl_close($curl);

$dados = json_decode($respostarec, true);
if (!is_array($dados['record']['recados'])) {
    $dados['record']['recados'] = [];
}
$dados['record']['recados'][] = $novo_dado;

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, [
    "X-Master-Key: $key",
    "Content-Type: application/json"
]);

curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($dados['record'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
curl_exec($curl);
curl_close($curl);

header("Location: ../pages/sucess.html");
exit();
