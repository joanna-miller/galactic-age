export default class Venus {
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
  }

  venusAge() {
    let venusAge = parseFloat((this.age / .62).toFixed(1));
    return `You look great for being ${venusAge} Venusian years old!`
  }

  venusExpect() {
    if (this.age > this.expectancy) {
      return parseFloat(((this.age - this.expectancy) / .62).toFixed(1));
    } else if (this.age === this.expectancy) {
      return "Wow! You are right at your earthly life expectation threshold! Watch out for falling anvils!";
    } else {
      return parseFloat(((this.expectancy - this.age) / .62).toFixed(1));
    }
  }
}
