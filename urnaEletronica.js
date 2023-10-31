function verificaUrnaAtual() {
    fetch('urnaEletronica.js')
    .then(response => response.text())
    .then(response => CryptoJS.SHA256(response).toString())
    .then(hashUrnaAtual => {
        fetch('hashValido')
        .then(response => response.text())
        .then(hashValido => {

            if (hashUrnaAtual === hashValido) {
                console.log('Urna verificada, código integro.')
            } else {
                console.log('URNA ADULTERADA! HASHES NÃO CONFEREM!');
                console.log(`HASH DA URNA: ${hashUrnaAtual}`);
                console.log(`HASH ESPERADO: ${hashValido}`);
            }
        });
    });
}

function dataHoraAtual() {
    const dataHora = new Date();
    // const dia = dataHora.getDate();
    // const mes = dataHora.getMonth() + 1;
    // const ano = dataHora.getFullYear();
    // const hora = dataHora.getHours();
    // const min = dataHora.getMinutes();
    // const seg = dataHora.getSeconds();
    // const ms = dataHora.getMilliseconds();

    // return `${dia}/${mes}/${ano} - ${hora}:${min}:${seg}:${ms})`;

    // equivalente a ↓
    return `${dataHora.getDate()}/${dataHora.getMonth() + 1}/${dataHora.getFullYear()} - ${dataHora.getHours()}:${dataHora.getMinutes()}:${dataHora.getSeconds()}:${dataHora.getMilliseconds()}`;
}

function urnaEletronica() {
// aqui vai todo o código do programa...
    let voto;
        votosCandidato1 = 0,
        votosCandidato2 = 0,
        votosCandidato3 = 0,
        votosBrancos = 0,
        votosNulos = 0,
        totalVotos = 0;

    let nomeGanhador,
        votosGanhador,
        ganhador = true;

    let nomeCandidato1,
        nomeCandidato2,
        nomeCandidato3;

    let encerrarVotacao = '',
        senhaMesario,
        dataHoraInicial,
        dataHoraFinal;

    do {
        console.log('Iniciando o programa');
        console.log('** CONFIGURAÇÕES DA URNA **');

        senhaMesario = parseInt(prompt('Defina a senha do mesário:'));

        if (isNaN(senhaMesario)) {
            alert('Opção inválida!')
        }else if (senhaMesario) {
            alert('Senha definida com sucesso!')
        }
    }while (isNaN(senhaMesario));

    verificaUrnaAtual();

// VERIFICAR ESTRUTURA DE REPETIÇÃO PARA FIXAR, POIS ESSA PARTE SERÁ APAGADA FUTURAMENTE
    do{
        nomeCandidato1 = parseInt(prompt ('Digite o nome do candidato 1:'));

        if (nomeCandidato1 !== '') {
            alert('Digite um nome válido!')
        }else if (nomeCandidato1) {
            alert('Você defininiu ' + nomeCandidato1 + ' como candidato 1')
        }
    }while(nomeCandidato1 !== '');

    nomeCandidato2 = prompt ('Digite o nome do candidato 2:');
    alert('Você defininiu ' + nomeCandidato2 + ' como candidato 2');

    nomeCandidato3 = prompt ('Digite o nome do candidato 3:');
    alert('Você defininiu ' + nomeCandidato3 + ' como candidato 3');

    
    dataHoraInicial = dataHoraAtual();

    // instruções repetidas no loop
    // laço de votação
    do {
        console.clear();
        console.log('Iniciando a votação');
        console.log(`| 1 | Candidato 1: ${nomeCandidato1}`);
        console.log(`| 2 | Candidato 2: ${nomeCandidato2}`);
        console.log(`| 3 | Candidato 3: ${nomeCandidato3}`);
        console.log('| 5 | Branco');
    
        voto = parseInt(prompt('Digite sua opção de voto:'));

        totalVotos++;

        if (voto === 1) {
        votosCandidato1++;
        alert('Você votou no ' + nomeCandidato1)
        } else if (voto === 2) {
        votosCandidato2++;
        alert('Você votou no ' + nomeCandidato2)
        } else if (voto === 3) {
        votosCandidato3++;
        alert('Você votou no ' + nomeCandidato3)
        } else if (voto === 5) {
        votosBrancos++;
        alert('Você votou Branco')
        } else if (voto != 1 && voto != 2 && voto != 3 && voto != 5 && voto != senhaMesario) {
        let confirmacao = confirm('Você irá anular o seu voto, deseja continuar?');
        if (confirmacao == true) {   
        votosNulos++;}
        } else if (voto === senhaMesario) {

            encerrarVotacao = prompt('Deseja REALMENTE encerrar a votação? \nDigite [S] para sim e [N] para não').charAt(0).toUpperCase();

            if (encerrarVotacao !== 'S' && encerrarVotacao !== 'N') {
            alert('Opção inválida!');
        }
        totalVotos--;
        }else {
        return; // botão de emergência
        }
    }while (encerrarVotacao !== 'S');

    // apresenta os resultados
    console.clear();
    console.log('** BOLETIM DE URNA - RESULTADOS **');
    console.log('Total de votos: ' + totalVotos);
    // equivalente ↓ : console.log('Total de votos do candidato 1: ' + votosCandidato1 + ' voto(s) (' + (votosCandidato1 / totalVotos * 100).toFixed(2) + '%)');
    console.log(`Total de votos do(a) candidato(a) $nomeCandidato1: ${votosCandidato1} voto(s) (${(votosCandidato1 / totalVotos * 100).toFixed(2)}%)`);
    console.log(`Total de votos do(a) candidato(a) $nomeCandidato2: ${votosCandidato2} voto(s) (${(votosCandidato2 / totalVotos * 100).toFixed(2)}%)`);
    console.log(`Total de votos do(a) candidato(a) ' + votosCandidato3 + ' voto(s) (' + (votosCandidato3 / totalVotos * 100).toFixed(2) + '%)`);
    console.log(`Total de votos brancos: ' + votosBrancos+ ' voto(s) (' + (votosBrancos/ totalVotos * 100).toFixed(2) + '%)`);
    console.log(`Total de votos nulos: ' + votosNulos + ' voto(s) (' + (votosNulos / totalVotos * 100).toFixed(2) + '%)`);

    // determina ganhador
    if (votosCandidato1 > votosCandidato2 && votosCandidato1 > votosCandidato3) {
        nomeGanhador = nomeCandidato1;
        votosGanhador = votosCandidato1 + votosBrancos;
    } else if (votosCandidato2 > votosCandidato1 && votosCandidato2 > votosCandidato3) {
        nomeGanhador = nomeCandidato2;
        votosGanhador = votosCandidato2 + votosBrancos;
    } else if (votosCandidato3 > votosCandidato1 && votosCandidato3 > votosCandidato2) {
        nomeGanhador = nomeCandidato3;
        votosGanhador = votosCandidato3 + votosBrancos;
    } else {
        ganhador = false;
    }
    // Apresenta o ganhador
    console.log('_____________________________________________________________________________');
    
    if (ganhador) {
        console.log('O ganhador nesta urna foi o candidato ' + nomeGanhador + ' com ' + votosGanhador + ' voto(s) absoluto(s) (' + (votosGanhador / totalVotos * 100).toFixed(2) + '%)');
    } else {
        console.log('Não houve ganhador nesta urna (empate entre dois ou mais candidatos).');
    }

    dataHoraFinal = dataHoraAtual();

    console.log(`Data/hora de ínicio da votação: ${dataHoraInicial}`);
    console.log(`Data/hora de término da votação: ${dataHoraFinal}`);
}