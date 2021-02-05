import Venus from "../src/js/venus.js"

describe("Venus", () => {

  test("should corrently create a Venus object with two keys", () => {
    const userAge = new Venus(0,0);
    expect(userAge.age).toEqual(0);
    expect(userAge.expectancy).toEqual(0);
  })

  test("should correctly return a string that includes users age in solar years on Venus", () => {
    const userAge = new Venus(62,90);
    expect(userAge.venusAge()).toEqual("You look great for being 100 Venusian years old!"); 
  })

  test("should correctly return a string that includes users age in solar years on Venus with up to one decimal point", () => {
    const userAge = new Venus (30,86);
    expect(userAge.venusAge()).toEqual("You look great for being 48.4 Venusian years old!");
  })

  test("should determine how many solar years on Venus someone has left to live", () => {
    const userAge = new Venus(28,90);
    expect(userAge.venusExpect()).toEqual(100);
  })

  test("should determine how many solar years on Venus someone has left to live up to one decimal point", () => {
    const userAge = new Venus(30,86);
    expect(userAge.venusExpect()).toEqual(90.3);
  })

  test("should determine how many solar years on Venus someone has outlived their life expectancy", () => {
    const userAge = new Venus(101,70);
    expect(userAge.venusExpect()).toEqual(50);
  })

  test("should determine how many solar years on Venus someone has outlived their life expectancy up to one decimal point", () => {
    const userAge = new Venus(90,86);
    expect(userAge.venusExpect()).toEqual(6.5);
  })

  test("should return a string if the users life expectancy and age are euqal", () => {
    const userAge = new Venus(86,86)
    expect(userAge.venusExpect()).toEqual("Wow! You are right at your earthly life expectation threshold! Watch out for falling anvils!");
  })
})