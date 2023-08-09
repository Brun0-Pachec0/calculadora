// Variavel geral para valor de 'resultado'
let resultado = document.querySelector('#resultado')

// Função que vai adicionar um número na calculadora
function insert(n) {
    resultado.innerHTML += n
}

// Função de apagar tudo que foi digitado na calculadora
function apagar() {
    resultado.innerHTML = ''
}

// Função para apagar o último número digitado
function back() {
    let res = document.querySelector('#resultado').innerHTML;
    document.querySelector('#resultado').innerHTML = res.substring(0, res.length -1);
}

// Função disparada quando apertar no sinal de igual
function calcular() {
    let res = document.querySelector('#resultado').innerHTML
    if (res) {
        //variavel criada para poder formatar números decimais
        let resFormatado = eval(res)
        document.querySelector('#resultado').innerHTML = resFormatado.toFixed(2)
    } else {
        window.alert('Nenhum valor informado! Por favor verifique e tente novamente!!')
    }
}