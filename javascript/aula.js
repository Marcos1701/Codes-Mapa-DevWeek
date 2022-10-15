/*
obj: ao se clicar em alguma das abas, o conteúdo da aba é 
exibido e o da selecionada anteriormente é ocultado

1° identificas as abas

2° dar um jeito de identificar qual a aba que foi clicada

3° marcar a aba clicada como selecionada

4° identificar qual o conteúdo da aba que foi clicada


5° ocultar o conteúdo da aba que estava selecionada anteriormente

6° mostrar o conteúdo da aba selecionada
*/

//1° identificas as abas
const abas = document.querySelectorAll(".aba")

// 2° dar um jeito de identificar qual a aba que foi clicada

abas.forEach(aba => { // para cada aba
    aba.addEventListener("click", function () {

        if (aba.classList.contains("selecionado")) {
            return
        }

        selecionarAba(aba)
        selecionarInfo(aba)
    })
})

function selecionarAba(aba) {

    // remover o selecionado da aba selecionada anteriormente
    const aba_selecionada = document.querySelector(".aba.selecionado")
    aba_selecionada.classList.remove("selecionado")
    // 3° marcar a aba clicada como selecionada
    aba.classList.add("selecionado")
}

function selecionarInfo(aba) {

    //4° identificar qual o conteúdo da aba que foi clicada
    const informacao_selecionada = document.querySelector(".informacao.selecionado")
    //5° ocultar o conteúdo da aba que estava selecionada anteriormente
    informacao_selecionada.classList.remove("selecionado")
    //6° mostrar o conteúdo da aba selecionada
    const idElementoDeInformacoesDaAba = `informacao-${aba.id}`
    const informacaoASerMostrada = document.getElementById(idElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
}