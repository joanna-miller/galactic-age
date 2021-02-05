export default class Mars {
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
  }

  marsAge() {
    let marsAge = (this.age / 1.88);
    return `Mars time looks good on you! You are ${marsAge} Martian years old!`
  }
}
