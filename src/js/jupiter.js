export default class Jupiter {
  constructor(age,expectancy) {
    this.age = age;
    this.expectancy = expectancy;
  }

  jupiterAge() {
    let jupiterAge = parseFloat((this.age / 11.86).toFixed());
    return `WOW! You are a mere ${jupiterAge} years old in Jupiter!`
  }
}