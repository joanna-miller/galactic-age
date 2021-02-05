export default class Mars {
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
  }

  marsAge() {
    let marsAge = parseFloat((this.age / 1.88).toFixed(1));
    return `Mars time looks good on you! You are ${marsAge} Martian years old!`
  }

  marsExpect() {
    return (this.age - this.expectancy) / 1.88;
  }
}
