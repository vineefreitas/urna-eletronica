

// Estrutura switch-case
const opcao =3;

switch(opcao) {
    case 1:
        console.log('Opção é 1');
        break;
    case 2:
        console.log('Opção é 2');
        break;
    default:
        console.log('Nenhuma das opções');

        //equivalente a estrutura switch-case
        if (opcao === 1){
            console.log ('Opção é 1');
        }
}

// Estrutura de repetição: do-while (faça-enquanto)

let contador = 0;

do {
    console.log ('Instrução com contador em' , contador);
    contador += 1;
} while (contador <= 10);

// Estrutura de repetição while (enquanto)

// const opcao = 0;

// while (opcao !== 0){
//     console.log ('Instrução 1')
//     console.log ('Instrução 2')
//     console.log ('Instrução 3')
//     console.log ('Instrução 4')
//     console.log ('Instrução 5')
//     console.log ('Instrução 6')
// }