let lista = [];
let numeroS = numero();
let tentativas = 1;

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.3});
}
function mensagemInicial(){
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 100');
}
mensagemInicial();

function verificarChute(){
    let chute =  document.querySelector('input').value;
    chute = parseInt(chute);
    if (chute == numeroS){
        exibirTexto('h1', 'Acertou!');
        let palavraT = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Incrível! Você descobriu o número secreto com ${tentativas} ${palavraT}.`;
        exibirTexto('p', mensagem); 
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroS){
            exibirTexto('p', 'O numero que voce escolheu é maior que o numero secreto');
        } else{
            exibirTexto('p', 'O numero que voce escolheu é menor que o numero secreto');
        }

        tentativas++
        limpar();
    }
}

function numero() {
    let praLista = parseInt(Math.random() * 100 + 1);
    let quantidade = lista.length;
    if (quantidade == 100){
        lista = [];
    }
    if (lista.includes(praLista)){
        return numero();
    } else {
        lista.push(praLista);
        console.log(lista)
        return praLista;
    }    
}


function limpar(){
    chute = document.querySelector('input');
    chute.value = ' ';
}

function reiniciarJogo(){
    mensagemInicial();
    numeroS = numero();
    limpar();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled',true);
}