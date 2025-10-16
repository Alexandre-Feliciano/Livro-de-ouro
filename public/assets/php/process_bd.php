<?php

$arquivo = "../database/data.json";

$nome = $_POST['nome-recado'] ?? '';
$recado = strip_tags($_POST['recado'] ?? '');
$pagamento = $_POST['pagamento'] ?? '';

$novo_dado = [
    'id' => uniqid(),
    'nome' => $nome,
    'recado' => $recado,
    'data' => date('Y-m-d H:i:s')
];

if (file_exists($arquivo)) {

    $conteudo = file_get_contents($arquivo);
    $dados = json_decode($conteudo, true);
    if (!is_array($dados)) {
        $dados = [];
    }
} else {
    $dados = [];
}

$dados[] = $novo_dado;

file_put_contents($arquivo, json_encode($dados, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

header("Location: ../pages/sucess.html");
exit();

?>