function urnaEletronica(){
    // aqui vai todo o código do programa...
    console.log('Iniciando a votação');

    let totalVotosCandidato1 = 0,
        totalVotosCandidato2 = 0,
        totalVotosCandidato3 = 0,
        totalVotosBranco = 0,
        totalVotosNulo = 0;

        // // equivalente a:
        // let totalVotosCandidato1 = 0,
        // let totalVotosCandidato2 = 0,
        // let totalVotosCandidato3 = 0,
        // let totalVotosBranco = 0,
        // let totalVotosNulo = 0;

       // instruções repetidas no loop
       console.log('| 1 | Candidato 1');
       console.log('| 2 | Candidato 2');
       console.log('| 3 | Candidato 3');
       console.log('| 5 | Branco');
       console.log('| 8 | Nulo');
       console.log('| 0 | Encerrar a votação');

    voto = parseInt(prompt('| 1 | Candidato 1\n| 2 | Candidato 2\n| 3 | Cantdidato 3\n| 5 | Branco\n| 8 | Nulo\n\nDigite sua opção de voto:'));

    switch (voto) {
        case 1:
            totalVotosCandidato1++;
            console.log('O candidato 1 recebeu um voto');
            alert('Você votou no candidato 1.');
            break;
        case 2:
            totalVotosCandidato2++;
            console.log('O candidato 2 recebeu um voto');
            alert('Você votou no candidato 2.');
            break;
        case 3:
            totalVotosCandidato3++;
            console.log('O candidato 3 recebeu um voto');
            alert('Você votou no candidato 3.');
            break;
        case 5:
            totalVotosBranco++;
            console.log('Voto em Branco');
            alert('Você votou Branco.');
            break;
        case 8:
            totalVotosNulo++;
            console.log('O voto foi anulado');
            alert('Você votou Nulo.');
            break;
        default:
            return;
    }
}

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