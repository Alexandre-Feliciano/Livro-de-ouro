fetch("/livro-de-ouro/public/assets/api/pix.php")
    .then(res => res.json())
    .then(data => {
        if (data.id) {
            document.getElementById("valor").textContent =
                `Valor: R$ ${data.transaction_amount} Reais #${data.external_reference}`;
            document.getElementById("qrcode").src =
                `data:image/png;base64, ${data.point_of_interaction.transaction_data.qr_code_base64}`;
            document.getElementById("cod_pix").textContent =
                data.point_of_interaction.transaction_data.qr_code;
            document.getElementById("link_pay").href =
                data.point_of_interaction.transaction_data.ticket_url;
        } else {
            document.body.innerHTML = "<p id='erro_pay'> Erro no pagamento, tente novamente. </p>";
        }
    })
    .catch(err => {
        document.body.innerHTML = "<p id='erro_conect'> Erro no conexão, tente novamente. </p>";
    });

    
