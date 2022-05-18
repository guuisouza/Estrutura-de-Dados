// Normalmente, se usa inicial maiúscula para nomear classes
class FormaGeometrica {
    /* 
       Variáveis usadas dentro de uma classe são chamadas ATRIBUTOS.
       Existem dois tipos de atributos:
       1) Atributo PÚBLICO: pode ser acessado tanto de dentro quanto
          de fora da classe.
       2) Atributo PRIVADO: só pode ser acessado de dentro da classe.
          Em JavaScript, os nomes de atributos privados devem iniciar
          com uma #.
   */

   // Declaração de atributos PRIVADOS - note que NÃO usamos let, var ou const
   #base
   #altura
   #tipo

   /*
       Além variáveis (atributos), classes podem conter também funções,
       que são chamadas, nesse caso, de MÉTODO. Existe um método especial,
       chamado "constructor", que é invocado toda vez que se tenta criar
       um objeto a partir da classe.
   */
   constructor(base, altura, tipo) {
       // O construtor recebe dados externos: base, altura e tipo
       // e os armazena os atributos internos #base, #altura e #tipo.
       // Toda vez que nos referimos a um atributo ou método (que pertencem
       // à classe), precisamos prefixá-los com this + ponto.
   
   //Validações
   // if(typeof base !== 'number' || base <= 0) {
   //     throw new Error('ERRO: base precisa ser numérica e maior que zero');
   // }

   // if(typeof altura !== 'number' || altura <= 0) {
   //     throw new Error('ERRO: altura precisa ser numérica e maior que zero');
   // }

   // if(typeof tipo !== 'R' && tipo !== 'T' && tipo !== 'E') {
   //     throw new Error('ERRO: tipo precisa ser : R, T ou E');
   // }

   // this.#base = base;
   // this.#altura = altura;
   // this.#tipo = tipo;

   this.base = base;
   this.altura = altura;
   this.tipo = tipo;

   }

   // Funções getter: têm a finalidade de tornar visíveis ao mundo externo
   // informações armazenas em atributos privados de uma classe.
   get base() {
       return this.#base;
   }

   get altura() {
       return this.#altura;
   }

   get tipo() {
       return this.#tipo;
   }

   // Funções setter: permitem que o valor de atributos privados sejam alterados
   // do lado de fora da classe.
   //Validações
   set base(valor) {
       if(typeof valor !== 'number' || valor <= 0) {
           throw new Error('ERRO: base precisa ser numérica e maior que zero');
       }
       this.#base = valor;
   }

   set altura(valor) {
       if(typeof valor !== 'number' || valor <= 0) {
           throw new Error('ERRO: altura precisa ser numérica e maior que zero');
       }
       this.#altura = valor;
   }

   set tipo(valor) {
       if(valor !== 'R' && valor !== 'T' && valor !== 'E') {
           throw new Error('ERRO: tipo precisa ser : R, T ou E');
       }
       this.#tipo = valor;
   }

   /*
       PROPRIEDADES: são abstrações presentes em um classe que permitem ler e/ou
       alterar o valor de um atributo privado.
       Uma propriedade é formada, pelo menos, por uma função getter.
       Propriedades de leitura e escrita têm tanto um getter quanto um setter.
       O nome da propriedade é o nome das funções getter/setter correspondentes.
   */

   // Método público
   calculaArea() {
       switch(this.tipo){
           case 'R':
               return this.base * this.altura;
           case 'T':
               return (this.base * this.altura) / 2;
           case 'E':
               return (this.base / 2) * (this.altura / 2) * Math.PI;
       }
   }

   get area() {
       switch(this.tipo){
           case 'R':
               return this.base * this.altura;
           case 'T':
               return (this.base * this.altura) / 2;
           case 'E':
               return (this.base / 2) * (this.altura / 2) * Math.PI;
       }
   }

}

let forma1 = new FormaGeometrica(15, 16, 'E') // chamando o construtor

// console.log(forma1.base, forma1.altura, forma1.tipo);

forma1.base = 7         // Chama a função setter
forma1.altura = 22      // Chama a função setter
forma1.tipo = 'E'       // Chama a função setter

console.log(forma1.base, forma1.altura, forma1.tipo);

console.log('Área da forma1:', forma1.calculaArea());

console.log('Área da forma1 pelo get:', forma1.area);

let forma2 = new FormaGeometrica(20, 15, 'E') // chamando o construtor
let forma3 = new FormaGeometrica(30, 12, 'T') // chamando o construtor
let forma4 = new FormaGeometrica(14, 17, 'R') // chamando o construtor

console.log('Área da forma2:', forma2.calculaArea());
console.log('Área da forma3:', forma3.calculaArea());
console.log('Área da forma4:', forma4.calculaArea());