export default class Mercury {
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
  }

  mercAge() {
    let mercuryAge = parseFloat((this.age / .24).toFixed(1));
    return `Wow! You are ${mercuryAge} Mercurian years old!`
  }

  mercExpect() {
    if (this.age > this.expectancy) {
      return parseFloat(((this.age - this.expectancy) / .24).toFixed(1))
    } else if (this.age === this.expectancy) {
      return "You're on your way to outliving your life expectancy! Good job and be careful!";
    } else {
      return parseFloat(((this.expectancy - this.age) / .24).toFixed(1));
    }
  }
}