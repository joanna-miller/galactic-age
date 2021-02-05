export default class Venus {
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
  }

  venusAge() {
    return parseFloat((this.age / .62).toFixed(1));
  }

 venusExpect() {
  return (this.expectancy - this.age) / .62;
 }
}
