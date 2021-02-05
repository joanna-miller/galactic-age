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
      return parseFloat(((this.age - this.expectancy) / 1.88).toFixed(1));
    } else if (this.age === this.expectancy) {
      return "You've reached your earthly life expectancy! Consider traveling to Mars to escape the rules of Earth.";
    } else {
    return parseFloat(((this.expectancy - this.age) / 1.88).toFixed(1));
    }
  }
}
