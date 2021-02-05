export default class Age {
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
  }

  mercAge() {
    return parseFloat((this.age / .24).toFixed(1))
  }

  mercExpect() {
    if (this.age > this.expectancy) {
      return parseFloat(((this.age - this.expectancy) / .24).toFixed(1))
    } else {
      return parseFloat(((this.expectancy - this.age) / .24).toFixed(1));
    }
  }
}