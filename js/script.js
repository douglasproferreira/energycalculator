let total = 0
let quantidade
let potencia
let horas
let produto
let valor

let insert = document.getElementById("form")
insert.addEventListener("submit", function (event) {
  calcularConta()
  event.preventDefault()
}, false)

function capturarElemento(ref) {
  let elemento = document.querySelector(ref)
  return elemento
}

function calcularConta() {
  produto = capturarElemento('.aparelho')
  quantidade = capturarElemento('.qtdade')
  potencia = capturarElemento('.potencia')
  horas = capturarElemento('.horas')

  let energia = (30*(quantidade.value * (potencia.value * horas.value)))/1000
  console.log(energia)
  valor = energia * 0.17599
  montarConta()
}

function montarConta() {
  let div = document.createElement('div')
  div.className = "tableprice"
  let p = document.createElement('p')
  let conteudo = document.createTextNode(produto.value)
  p.appendChild(conteudo)
  div.appendChild(p)

  p = document.createElement('p')
  conteudo = document.createTextNode(quantidade.value)
  p.appendChild(conteudo)
  div.appendChild(p)

  p = document.createElement('p')
  conteudo = document.createTextNode(potencia.value + 'Kw')
  p.appendChild(conteudo)
  div.appendChild(p)

  p = document.createElement('p')
  conteudo = document.createTextNode(horas.value + "hs")
  p.appendChild(conteudo)
  div.appendChild(p)

  p = document.createElement('p')
  conteudo = document.createTextNode("R$" + Math.round(valor))
  p.appendChild(conteudo)
  div.appendChild(p)

  capturarElemento('.result').appendChild(div)
  calcularTotal()
}

function calcularTotal() {
  total = total + valor
  p = document.createElement('p')
  conteudo = document.createTextNode("Total da conta: R$" + Math.round(total))
  p.appendChild(conteudo)
  capturarElemento('.total p').remove()
  capturarElemento('.total').appendChild(p)
}