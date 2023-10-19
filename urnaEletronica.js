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
        senhaMesario;

        // // equivalente a:
        // let totalVotosCandidato1 = 0,
        // let totalVotosCandidato2 = 0,
        // let totalVotosCandidato3 = 0,
        // let totalVotosBranco = 0,
        // let totalVotosNulo = 0;

    console.log('Iniciando o programa');

    console.log('** CONFIGURAÇÕES DA URNA **');

    senhaMesario = parseInt(prompt('Digite a senha do mesário:'));
    if (senhaMesario == '') {
        alert('Opção inválida!');
    }else {
        alert('Senha definida com sucesso!');
    }

    nomeCandidato1 = prompt ('Digite o nome do candidato 1:');
    alert('Você defininiu ' + nomeCandidato1 + ' como candidato 1');

    nomeCandidato2 = prompt ('Digite o nome do candidato 2:');
    alert('Você defininiu ' + nomeCandidato2 + ' como candidato 2');

    nomeCandidato3 = prompt ('Digite o nome do candidato 3:');
    alert('Você defininiu ' + nomeCandidato3 + ' como candidato 3');

    // instruções repetidas no loop
    do {
        console.clear();
        console.log('Iniciando a votação');
        console.log('| 1 | Candidato 1: ' + nomeCandidato1);
        console.log('| 2 | Candidato 2: ' + nomeCandidato2);
        console.log('| 3 | Candidato 3: ' + nomeCandidato3);
        console.log('| 5 | Branco');
        console.log('| 8 | Nulo');
    
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
        } else if (voto === 8) {      
        votosNulos++;
        }else if (voto === senhaMesario) {

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
    console.log('Total de votos do candidato 1: ' + votosCandidato1 + ' voto(s) (' + (votosCandidato1 / totalVotos * 100).toFixed(2) + '%)');
    console.log('Total de votos do candidato 2: ' + votosCandidato2 + ' voto(s) (' + (votosCandidato2 / totalVotos * 100).toFixed(2) + '%)');
    console.log('Total de votos do candidato 3: ' + votosCandidato3 + ' voto(s) (' + (votosCandidato3 / totalVotos * 100).toFixed(2) + '%)');
    console.log('Total de votos brancos: ' + votosBrancos+ ' voto(s) (' + (votosBrancos/ totalVotos * 100).toFixed(2) + '%)');
    console.log('Total de votos nulos: ' + votosNulos + ' voto(s) (' + (votosNulos / totalVotos * 100).toFixed(2) + '%)');

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
}

// do (voto !== 0) {

    // switch (voto) {
    //     case 1:
    //         totalVotosCandidato1++;
    //         console.log('O candidato 1 recebeu um voto');
    //         alert('Você votou no candidato 1.');
    //         break;
    //     case 2:
    //         totalVotosCandidato2++;
    //         console.log('O candidato 2 recebeu um voto');
    //         alert('Você votou no candidato 2.');
    //         break;
    //     case 3:
    //         totalVotosCandidato3++;
    //         console.log('O candidato 3 recebeu um voto');
    //         alert('Você votou no candidato 3.');
    //         break;
    //     case 5:
    //         totalVotosBranco++;
    //         console.log('Voto em Branco');
    //         alert('Você votou Branco.');
    //         break;
    //     case 8:
    //         totalVotosNulo++;
    //         console.log('O voto foi anulado');
    //         alert('Você votou Nulo.');
    //         break;
    //     case 0:
    //         console.log('Você encerrou a votação')
    //         alert('Você encerrou a votação');
    //     default:
    //         return;
    //     }
    // }while()

// // Estrutura de repetição: do-while (faça-enquanto)

// let contador = 0;

// do {
//     console.log ('Instrução com contador em' , contador);
//     contador += 1;
// } while (contador <= 10);

// // Estrutura de repetição while (enquanto)

// // const opcao = 0;

// // while (opcao !== 0){
// //     console.log ('Instrução 1')
// //     console.log ('Instrução 2')
// //     console.log ('Instrução 3')
// //     console.log ('Instrução 4')
// //     console.log ('Instrução 5')
// //     console.log ('Instrução 6')
// // }

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt
// https://www.devmedia.com.br/javascript-switch/39761
// https://cursos.alura.com.br/forum/topico-usando-o-prompt-121601
// https://www.javascriptprogressivo.net/2018/07/Como-Receber-Dados-Usuario-Metodo-prompt.html
// https://www.devmedia.com.br/alert-em-javascript/37208

// // Estrutura switch-case equivelente a:

// if (voto === 1) {
//     totalVotosCandidato1++;
//     console.log('O candidato 1 recebeu um voto')
// } else if (voto === 2) {
//     console.log('O candidato 2 recebeu um voto');
// } else {
//     return;
// } while (voto !== 0);

// }
// Estrutura switch-case
// const opcao =3;

// switch(opcao) {
//     case 1:
//         console.log('Opção é 1');
//         break;
//     case 2:
//         console.log('Opção é 2');
//         break;
//     default:
//         console.log('Nenhuma das opções');

//         //equivalente a estrutura switch-case
//         if (opcao === 1){
//             console.log ('Opção é 1');
//         }
// }