// VARIAVEIS

// let nome = "carla"
// let idade = 28
// let peso   = 120
// const altura = 1
// console.log(nome,idade,altura,peso)

// console.log("nome:", nome)

// console.log("peso",peso)

// console.log("altura",altura)
document.writeln("<br>");
let nome = "Júlio César dos Santos";
let idade = 30;
let peso = 85.5;
const altura = 1.79;

document.writeln("Nome é: " + nome + "<br>");
document.writeln("Idade é: " + idade + "<br>");
document.writeln("Peso é: " + peso + "<br>");
document.writeln("Altura é: " + altura + "<br><br>");

// Corrigindo aspas internas na tag <h3>
document.writeln('<h3 style="font-size: 30px; color: green;">Tipos de dados</h3>');

document.writeln("Tipo de nome: " + typeof nome + "<br>");
document.writeln("Tipo de idade: " + typeof idade + "<br>");
document.writeln("Tipo de peso: " + typeof peso + "<br>");
document.writeln("Tipo de altura: " + typeof altura + "<br>");


document.writeln('<h3 style="font-size: 30px;text-align:center; color: blue;">Concatenação</h3>');

let nome1 = "carlos"
let idade2 = 23


let mensagem = "olá, " + nome1 + ". você tem " + idade + " anos." + "<br>";

document.writeln(mensagem)

let nome2 = "Joana " ;
let cidade = "Pompéu" + "<br>";
let profissao = "Médica" ;

let novaMensagem = "Olá, me chamo " + nome2 + ", moro na cidade de " + cidade + " e minha profissão é: " + profissao + ".";
document.writeln(novaMensagem + "<br>");

var mae = "maria cristina"
var pai  = "antonio ferreira "
var irmao1 = "helington"
var irmao2 = "luciana"
var irmao3 = "marco"
var irmao4 = "edson"
var irmao5 = "julio"

let familia = "olá tudo bem  <br>  a todos  esses sao os meus pais e irmaos <br> e por ultimo sou eu  <br> julio o programador de web" + "<br>" + pai  + "<br>" + mae  + "<br>" + irmao1   + "<br>" + irmao2 + irmao3  + "<br>" + irmao4   + "<br>" + irmao5 + "<br>" ;

document.writeln(familia, + "<br>")


var job = "Advogada ";
 var nome3  = " Anne Caroline"

let apresentacao = "Olá Me chamo "  + nome3 + " e sou : " + job;
document.writeln(apresentacao + "<hr/>")


// function nova(ideia) {
//     return `olá sabe o que eu tive agora? . ideia, isso ai uma nova ideia`
// }
// document.writeln(nova)


var concatenar = "eu vou "
var completar = "completar essa frase"
var completo = concatenar +  " " + completar


document.writeln(completo + "<br>")
document.writeln("Usando concatenação")

document.writeln('<h3 style="font-size: 30px;text-align:center; color: blue;">if e eslse  <br> determina se uma condição e verdadeira ou falsa neste caso uma idade, se a pessoa e maior ou menor de 18 anos </h3>');


const  nome6 =  "Luana";

const idade6 = 17;

if (idade6 >= 18) {
    document.writeln(`${nome6}, infelizmente ou felizmente voce e menor de idade ainda.`);
}else {
    document.writeln(
`${nome6}. voce e menor de idade e isso e uma dadiva e chance de ainda vc melhorar como pessoa que pretende ser no futuro`)
}

const ano = 1988;
const anoAtual = 2025;

if (ano <= anoAtual) {
  document.writeln(`<p style="color: green;">O ano de ${ano} foi o ano do meu nascimento.<br>Já o ano de ${anoAtual} é o ano que as filhas da Anne vão nascer.</p>`);
} else {
  document.writeln(`<p style="color: red;">Este ano promete muitas coisas ainda, viu.</p>`);
}

// Mostrando os anos no final com template string
document.writeln(`<p>Valores: nascimento = ${ano}, atual = ${anoAtual}</p>`);
document.writeln(ano)


document.writeln("<hr/>")


var ela = "filha julia"
var pai  = "julio pai dela"
var conclusao = "perguntaram para a minha "+ ela + "quem era o pai dela. ela de pronto respondeu que o " + pai + " sou eu " ;

document.writeln(conclusao + "<hr/>")


const numero = 1000;
const outroNumero = 100;

function subtrai(num1, num2) {
  const resultado = num1 - num2;
  return `O valor da subtração entre ${num1} e ${num2} é igual a ${resultado}.  <hr/>`;
}

document.writeln(subtrai(numero, outroNumero ));


const estadoCivil = "solteiro"; // ou "casado"
const nome8 = "Júlio" ;


if (estadoCivil === "solteiro") {
  document.writeln(`<p style="color: green;">${nome8}, você ainda tem muita lenha pra queimar, meu querido!</p>`);
} else {
  document.writeln(`<p style="color: red;">${nome8}, você é casado agora. Tenha mais juízo ainda!</p>  `);
}

document.writeln( "<hr>")
const casadoSim = "casado" ;
const separado = "separado"
if(separado) {//isso indica que a pessoa nao esta separada pois a condição e diferente de casado sim
document.writeln("voce e casado com a minha irma")
}else{
    document.writeln( `voce nao esta mais ${casadoSim}, com a minha irma`)
}

