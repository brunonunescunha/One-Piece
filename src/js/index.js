const botoesAtivo = document.querySelectorAll(".botao")
const imagem = document.querySelectorAll(".personagem")

botoesAtivo.forEach((botao, indece) => {
botao.addEventListener('click', () => {

    const botaoSelecionado = document.querySelector('.ativo')
    botaoSelecionado.classList.remove('ativo')

    botao.classList.add('ativo')

    const imagemAtiva = document.querySelector(".selecionado")
    imagemAtiva.classList.remove("selecionado")

    imagem[indece].classList.add("selecionado")
})
})