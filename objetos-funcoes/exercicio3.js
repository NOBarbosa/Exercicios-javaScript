//Nessa sequência de exercícios vamos simular a parte da lógica de um processo simples de checkout num e-commerce.
//a) Declare uma função de nome imprimirResumoDoCarrinho que tenha apenas um parâmetro chamado carrinho.
//b) Sabendo que o parâmetro carrinho será sempre um objeto com o seguinte formato:
const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimeResumo: function(){
        let totalItens = 0;
        let totalPagar = 0;
        for(let item of this.produtos){
             totalItens += item.qtd;
             totalPagar += item.qtd * item.precoUnit;
        }
        console.log(` Cliente: ${this.nomeDoCliente}\n Total de itens: ${totalItens} itens\n Total a pagar: R$ ${(totalPagar/100).toFixed(2)}`);
    },
   
}
function addProdutoAoCarrinho(carrinho, produto){
    let indiceExistente = -1;
    for(let i = 0; i < carrinho.produtos.length; i++){
        if(carrinho.produtos[i].id === produto.id){
            indiceExistente = i;
            break;
        }
    }
    if(indiceExistente === -1){
        carrinho.produtos.push(produto);
    }else{
        carrinho.produtos[indiceExistente].qtd += produto.qtd;

    }
}
const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}
addProdutoAoCarrinho(carrinho, novaBermuda);
carrinho.imprimeResumo();
const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}
addProdutoAoCarrinho(carrinho, novoTenis);
carrinho.imprimeResumo();
//Implemente a função imprimirResumoDoCarrinho de modo que, ao receber um objeto como este como parâmetro, o resultado seja o seguinte.
// Cliente: Guido Bernal
// Total de itens: 5 itens
// Total a pagar: R$ 190,00
// function imprimirResumoDoCarrinho(carrinho){
//     let totalItens = 0;
//     let totalPagar = 0;
//     for(let item of carrinho.produtos){
//          totalItens += item.qtd;
//          totalPagar += item.qtd * item.precoUnit;
//     }
//     console.log(` Cliente: ${carrinho.nomeDoCliente}\n Total de itens: ${totalItens} itens\n Total a pagar: R$ ${(totalPagar/100).toFixed(2)}`);
// };
// imprimirResumoDoCarrinho(carrinho);
