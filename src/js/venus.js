export default class Venus {
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
  }

  venusAge() {
    return parseFloat((this.age / .62).toFixed(1));
  }

  venusExpect() {
    if (this.age > this.expectancy) {
      return ((this.age - this.expectancy) / .62);
    } else {
      return parseFloat(((this.expectancy - this.age) / .62).toFixed(1));
    }
  }
}
