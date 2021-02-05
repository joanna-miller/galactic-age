export default class Age {
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
  }

  mercAge() {
    return parseFloat((this.age / .24).toFixed(1))
  }

  mercExpect() {
    return (this.expectancy - this.age) / .24;
  }
}