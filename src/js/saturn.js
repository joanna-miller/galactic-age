export default class Saturn {
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
  }

  saturnAge() {
    return parseFloat((this.age / 29.46).toFixed(2));
  }

  saturnExpect() {
    if (this.age > this.expectancy) {
      return parseFloat(((this.age - this.expectancy) / 29.46).toFixed(2));
    } else if (this.age === this.expectancy) {
      return "You're cutting it close on your life expenctancy - you might want to invest in a bubble suit."
    } else {
      return parseFloat(((this.expectancy - this.age) / 29.46).toFixed(2)); 
    }
  }

}
