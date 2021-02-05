import Jupiter from "../src/js/jupiter.js"

describe("Jupiter", () => {

  test("should correctly create a Jupiter object with two keys", () => {
    const userAge = new Jupiter(0,0);
    expect(userAge.age).toEqual(0);
    expect(userAge.expectancy).toEqual(0);
  })

  test("should correctly return a string that includes users age in solar years on Jupiter to the first decimal point", () => {
    const userAge = new Jupiter (50,86);
    expect(userAge.jupiterAge()).toEqual("WOW! You are a mere 4.2 years old in Jupiter!")
  })

})