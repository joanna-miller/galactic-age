export default class Saturn {
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
  }

  saturnAge() {
    return parseFloat((this.age / 29.46).toFixed(2));
  }
}