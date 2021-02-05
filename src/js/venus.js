export default class Venus {
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
  }

  venusAge() {
    return this.age / .62;
  }

}
