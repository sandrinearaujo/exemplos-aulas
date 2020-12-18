//exercicio

//1.Declare um variável de nome color.
// none color

 var color;
//2.Que tipo de dado é a variavel acima?

color = 1;
 console.log (typeof color);

/*
    3.Declare uma variável e atribua valores para cada um dados.
    > name: string 
    > age: number
    > isAdmin: boolean
    > start: number ( float)
 */
let name = " rick"
let age = "30"
let isAdmin = true;
let start = 2.5;
    
 /**
  * 4.A variável person é de que tipo de dados ?
  
*/

//const person = {}
/**
  * 5. Atribua á eles as nossas prioridade e valores da questão 3.
*/
const person = {
    name:"Sandrine",
    age:18,
    isAdmin:true,
    start:2.5,
}


/** 
  * 6. Mostre no console a seguinte mensagem:
*nome:<name> idade <age> qualificação: <start> administrado: <isAdmin>
*/
console.log(
    `nome: ${person.name} idade: ${person.age} start:${person.start} isAdmin:${person.isAdmin}`
)
/**
 * 7.Declare uma variável de tipo arrat,de nome students e atribua á ele nenhum valor, ou seja, somente o array vazio.
 */
var students = [];
console.log (typeof students);
/**
 * 8.reatribua valor para a variável acima, colocando dela o objetivo da questão 4.(não copiar e colar o objeto,mas usar o objeto criado e inserir).
 */ 
 var students=[
     person
 ]
console.log(students)

 /**
  * 9.coloque no console o valor da possição zero do array acima.
  */
 console.log(students[0]);
/**
 * 10. crie uma nova persona e coloque na possição 1 do array students.
 */
const morty ={
    nome:"sandrine",
    age: 18,
    start:15,
    isAdmin: false,
}
students = [
    person,
    morty
]
/**
 * função
 */
console.log("")
 var cor ="preta";
 function createphrases() {
    console.log("frase1")
    console.log("frase2")
    console.log("frase3")
    console.log(cor);
 }

createphrases()


