
    var body = document.body
    var vs = document.getElementById('vs')
    var nao = document.getElementById('meuBotao')
    var sim = document.getElementById('enviarEmail')
    var erro = document.getElementById('erro')
    var msg = document.getElementById('msg')
    var larguraTela = document.documentElement.clientWidth;
        var alturaTela = document.documentElement.clientHeight;
    var erroParagrafo = document.getElementById('erroP')

    var nome_dela = localStorage.getItem("nome_del");

    console.log(nome_dela)
     entrou(); 

    document.getElementById('enviarEmail').addEventListener('click', function() {

            sim_msg = 'Alegre-se, festeje esse momento único em sua vida! Deus é fiel! "Aquilo que parecia impossível, aquilo que parecia não ter saída..."'

            resposta('Sim',sim_msg, 0, '')

            //Removendo mensagem de erro
            erro.classList.remove('erro')
            erro.classList.add('escondido')

            //removendo pergunta e botões
            sim.classList.add('escondido')
            nao.classList.add('escondido')
            msg.classList.add('escondido')

            //mudando backgroun-image
        if (larguraTela > alturaTela) {
            body.style.backgroundImage = "url('sim-desk.jpg')"
            body.style.backgroundSize = 'auto'
            body.style.backgroundColor = 'black'
        } else {
            body.style.backgroundImage = "url(sim.jpg)"
            body.style.backgroundAttachment = 'fixed'
        }

            //colocando botao no lugar
            nao.style.top = '27%'
            nao.style.left ='60%'

            //mostrando versiculo
            vs.classList.add('versiculo')
            vs.classList.remove('escondido')
    });

    contNao = 0;

    document.getElementById('meuBotao').addEventListener('click', function() {
    var botao = document.getElementById('meuBotao');

    contNao++
    console.log(contNao)

    // Defina a nova posição do botão
    var novaPosicaoTop = Math.random() * (window.innerHeight - botao.offsetHeight);
    var novaPosicaoLeft = Math.random() * (window.innerWidth - botao.offsetWidth);

    // Aplique a nova posição ao estilo do botão
    botao.style.top = novaPosicaoTop + 'px';
    botao.style.left = novaPosicaoLeft + 'px';

    //decidindo mensagem
    if(contNao >= 1 && contNao < 10){
        mensagem = "Opção errada!<br>Tente novamente!rsrs"
        erroParagrafo.innerHTML = mensagem
        resposta('Nao', mensagem,contNao, 'Forças Gerreiro!');
    }
    
    /*else if (contNao == 2) {
        mensagem = "Não tô brincando<br>É serio!"
        erroParagrafo.innerHTML = mensagem
    }else if(contNao == 3){
        mensagem = "Vai perder esta oportunidade?😄🌷"
        erroParagrafo.innerHTML = mensagem
    }else if(contNao == 4){
        mensagem = "Se não arriscar o outro botão <br> nunca saberá o q tem na outra página 👀"
        erroParagrafo.innerHTML = mensagem
        resposta('Nao', mensagem,contNao,'Forças Gerreiro!!');
    }else if(contNao == 5){
        mensagem = "😮"
        erroParagrafo.innerHTML = mensagem
    }else if(contNao == 6){
        mensagem = "😢 "
        erroParagrafo.innerHTML = mensagem
    }else if (contNao == 7) {
        mensagem = "😞"
        erroParagrafo.innerHTML = mensagem
        resposta('Nao', mensagem,contNao, 'Triste, mas tudo bem!');
    }*/else if(contNao == 10) {
        resposta('Nao', contNao+'vezes',contNao,'');
    }else if(contNao == 20) {
        resposta('Nao', contNao+'vezes',contNao,'');
    }

    //mostrando pergunta e botões
    sim.classList.remove('escondido')
    nao.classList.remove('escondido')
    msg.classList.remove('escondido')

    //Mostrando mensagem de erro
    erro.classList.add('erro')
    erro.classList.remove('escondido')

    //tirando versiculo
    vs.classList.add('escondido')
    vs.classList.remove('versiculo')

});



function entrou(){
    // Configuração e envio do EmailJS
    var data = {
            service_id: 'service_ebjqeg7',
            template_id: 'template_467etfg',
            user_id: 'eOql_VTCF7ynnDE2K',
            template_params: {
                'username': 'Emanoel',
                'name_dela': nome_dela
                }
            };
            
            $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
                type: 'POST',
                data: JSON.stringify(data),
                contentType: 'application/json'
            }).done(function() {
                console.log("Entrou no site!");
            }).fail(function(error) {
                alert('Oops... ' + JSON.stringify(error));
            });

    /*------------------------------------------*/
}

function resposta(res, msg, n_msg,comp) {
        // Configuração do EmailJS
        if(res == 'Nao')
            msg = 'mensagem de numero '+n_msg +':' + msg 

        var data = {
        service_id: 'service_ebjqeg7',
        template_id: 'template_d7dqs3u',
        user_id: 'eOql_VTCF7ynnDE2K',
        template_params: {
            'username': 'Emanoel',
            'name_dela': nome_dela,
            'resposta': res,
            'message': msg,
            'complemento': comp
        }
    };
    
    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function() {
        if(res == 'Sim')
            alert('Boa escolha!😊❤️ Te amo, '+ nome_dela+ '!❤️');
        else
            console.log("Resposta: não")
    }).fail(function(error) {
        console.log('Oops... ' + JSON.stringify(error));
    });

}
