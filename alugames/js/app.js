function alterarStatus(id) {
    let jogoClicado = document.getElementById(`game-${id}`);
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let botao = jogoClicado.querySelector('.dashboard__item__button');

    if (botao.classList.contains('dashboard__item__button--return')) {
       if (confirm ('Você tem certeza que deseja devolver o jogo?')) {

            imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';

       }
    
        
    } else {
        
    if (confirm ('Você tem certeza que deseja alugar o jogo?')) {

         imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';

        contarJogosAlugados ()
    }}}

function contarJogosAlugados() {
   
     let botoesAlugados = document.querySelectorAll('.dashboard__item__button--return');
    let totalAlugados = botoesAlugados.length;
    
    console.log(`Total de jogos alugados agora: ${totalAlugados}`);
}

