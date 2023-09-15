const greeting = (name: string) => {
    console.log(`Hello ${name}!`);
  };
  
  greeting('Frank');

const showAge = (age: number) => {
  console.log(age);
}

  interface Person {
    name: string;
    age?: number; // Optional property
  }
  
  const alice: Person = { name: "Alice" };
  const bob: Person = { name: "Bob", age: 25 };
  
  const persons: Person[] = [alice, bob];
  
  persons.forEach(person => {
    if(person.age) {
    showAge(person.age);
    }
  });