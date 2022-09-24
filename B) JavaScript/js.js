let vlar =[1, -1, 3]
vlar.forEach( numbers => {console.log(numbers)})


let vlar2 = vlar.concat([5, 4, 3, 2, 1])
console.log(vlar2);

const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
  }

object1.address = 'Helsinki'
console.log(object1);

function product(a, b) {
    return a * b
  }
  
  const result = product(2, 6)
  // result is now 12
  console.log(result);

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  // console.log(parts[0]);

  // const arto = {
  //   name: 'Arto Hellas',
  //   age: 35,
  //   education: 'PhD',
  //   greet: function() {
  //     console.log('hello, my name is ' + this.name)
  //   },
  //   sport: function(){
  //     console.log('My new sport is ' + this.name);
  //   }
  // }
  
  // arto.growOlder = function() {  
  //   this.age += 1
  // }
  
  // // console.log(arto.age)  // 35 is printed
  // arto.growOlder()
  // console.log(arto.age) 

  // arto.sport()

  // const arto = {
  //   name: 'Arto Hellas',
  //   greet: function() {
  //     console.log('hello, my name is ' + this.name)
  //   },
  // }
  
  // setTimeout(arto.greet.bind(arto), 1000)

// ----------------------------------------------------------------------------------

  class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
    }
    greet() {
      console.log('hello, my name is ' + this.name + ' & my age is ' + this.age )
    }
  }
  
  const adam = new Person('Adam Ondra', 35)
  adam.greet()
  
  const janja = new Person('Janja Garnbret', 22)
  janja.greet()

  