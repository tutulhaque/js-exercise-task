class Person {
  constructor(name, tel, city) {
    (this.name = name), (this.tel = tel), (this.city = city);
  }
}
const addPerson = new Person("John", "123123", "New York");
const addPerson1 = new Person("Not John", "321321", "Old York");
console.log(addPerson, addPerson1);
