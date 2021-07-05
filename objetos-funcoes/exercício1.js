//Nesse exercício vamos simular um sistema de correção de provas e imprimir a quantidade de acertos com a nota do aluno.
//a)Declare uma função de nome corrigirProva que tenha apenas um parâmetro chamado prova.
//Implemente a função corrigirProva de modo que, ao receber um objeto como este como parâmetro, o resultado seja o seguinte:
//O aluno(a) João acertou 3 questões e obteve nota 6
const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "a",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
}

function corrigirProva(prova){
    let contador = 0;

    for(let item of prova.questoes){
        if(item.resposta === item.correta){
            contador++;
        }
    }
    let questao = prova.valor/prova.questoes.length;
    console.log(`O aluno(a) ${prova.aluno} acertou ${contador} ${contador === 1 ? "questão" : "questões"} e obteve nota ${questao*contador}`);
};

corrigirProva(prova);