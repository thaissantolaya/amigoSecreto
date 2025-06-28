let listaNomes = [];

function adicionar(){
    listaNomes.push(document.getElementById('nome-amigo').value);
    document.getElementById('lista-amigos').innerHTML = listaNomes;
    document.getElementById('nome-amigo').value = null
    
};

function sortear(){
   let quantidadeGente = (listaNomes.length) ;
   
   let numerosSorteados = [];
   let variavel = '';
   let i = 0;
   while (i<quantidadeGente){
    let posicaoArray = Math.floor((Math.random() * quantidadeGente))
    if(posicaoArray != i && !numerosSorteados.includes(posicaoArray)){
        variavel = variavel + listaNomes[i] + '-->' + listaNomes[posicaoArray] + '<br>';
        numerosSorteados.push(posicaoArray);
        i++;

    }
    
   }
document.getElementById('lista-sorteio').innerHTML = variavel


};

function reiniciar(){
listaNomes = [];
numerosSorteados = [];
document.getElementById('lista-amigos').innerHTML = null;
document.getElementById('lista-sorteio').innerHTML = null;

};
