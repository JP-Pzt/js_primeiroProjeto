let palavra;
let dataAtual = Date()
let horario = dataAtual[16]+dataAtual[17]

function setup() {
  
  createCanvas(400, 400);
  palavra = palavraAleatoria()
}

function palavraAleatoria(){
  
  let listaPalavras = [0,0,0]
  for (let contador in listaPalavras){
    listaPalavras[contador] = prompt("digite uma palavra:")
  }
  return random(listaPalavras)
  
}

function inicializaCores(){
  
  background(color(random(0,255), random(0,255), random(0,255)))
  fill(color(random(0,255), random(0,255), random(0,255)))
  textSize(random(30,70))
  textAlign(CENTER, CENTER)
  
}

function palavraParcial(minimo, maximo){
  
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length)
  let parcial = palavra.substring(0, quantidade)
  return parcial
  
}

function draw(){
  
  inicializaCores()
  
  texto = palavraParcial(0, width)
  text(texto, 200, 200)
  
}

function modoNoturno(horario){
  if ((horario > 18) && (horario <= 6)){
    console.log("Você precisa ligar o modo escuro");
  }else{
    console.log("O modo escuro não é necessário")
  }
}

modoNoturno()