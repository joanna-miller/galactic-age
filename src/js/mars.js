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
    if (this.age > this.expectancy) {
      return (this.age - this.expectancy) / 1.88;
    } else {
    return parseFloat(((this.expectancy - this.age) / 1.88).toFixed(1));
    }
  }
}
