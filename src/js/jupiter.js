export default class Jupiter {
  constructor(age,expectancy) {
    this.age = age;
    this.expectancy = expectancy;
  }

  jupiterAge() {
    let jupiterAge = parseFloat((this.age / 11.86).toFixed(1));
    return `WOW! You are a mere ${jupiterAge} years old on Jupiter!`
  }

  jupiterExpect() {
    if (this.age > this.expectancy) {
      return parseFloat(((this.age - this.expectancy) / 11.86).toFixed(1)); 
    } else {
    return parseFloat(((this.expectancy - this.age) / 11.86).toFixed(1));
    }
  }
}