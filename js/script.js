
    var cliente = document.getElementById('nome-cliente');
    var guincho = document.getElementById('guincho');
    var sac = document.getElementById('sac-novo');
    var contrato = document.getElementById('contrato');
    var sartori = document.getElementById('form-sartori');
    form.addEventListener('submit', function Pegar_Nome(e) {
        // alerta o valor do campo
        //alert(cliente.value);
        //alert(guincho.value);

        document.getElementById("label-nome").innerText = cliente.value;
        document.getElementById("label-guincho").innerText = guincho.value;
        document.getElementById("label-sac").innerText = sac.value;
        document.getElementById("label-contrato").innerText = contrato.value;
        document.getElementById("label-sartori").innerText = sartori.value;
        // impede o envio do form
        e.preventDefault();
    });


   
        document.getElementById("dl-button").onclick = function(){
            const screenshotTarget = document.getElementById('capture');

            html2canvas(screenshotTarget).then((canvas) => {
                const base64image = canvas.toDataURL("image/png");
                var anchor = document.createElement('a');

                anchor.setAttribute("href" , base64image);
                anchor.setAttribute("download","my-image.png")
                anchor.click();
                anchor.remove();
            });
        };
   
