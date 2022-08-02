// Follow along with the examples here
let namesArr = ["Liz","Guadalupa", "Samip"];
function sayHello(names) {
    for (let i = 0; i< names.length; i++) {
        const element = names[i];
        console.log(`Hello! ${element}`);
    }
    
  }
  sayHello(namesArr);
  function add(x, y) {
    return x + y;
  }

  console.log(add(10 , 7))

  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
  }

  console.log(say("Hello", "Liz")); 