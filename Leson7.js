//1)
const user = {
    name: 'Bob',
    sayHi: function () {
        console.log(`Hi I am ${this.name}`)
    }
}
user.sayHi()
const greetingsFunc = user.sayHi;
greetingsFunc()
const user2 = {
    name: 'Jane',
    sayHi: greetingsFunc
};

user2.sayHi()
// Будет Undefined так как вызывается функция greetingsFunc у которой нет обьекта.


//2)
function Pet(name='Bob', kind='dog', color='white'){
    this.name = name;
    this.kind = kind;
    this.color =color;
}
const homePet = new Pet('Quick', 'chinchilla', 'black')
console.log(homePet)


//3)
function sumDigits(n) {
    n = String(n);
    if( n.length === 1 ) return +n; 
    return +n[0] + sumDigits( n.slice(1) );
  }
  
console.log( sumDigits(152092) )



