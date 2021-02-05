import Jupiter from "../src/js/jupiter.js"

describe("Jupiter", () => {

  test("should correctly create a Jupiter object with two keys", () => {
    const userAge = new Jupiter(0,0);
    expect(userAge.age).toEqual(0);
    expect(userAge.expectancy).toEqual(0);
  })

  test("should correctly return a string that includes users age in solar years on Jupiter to the first decimal point", () => {
    const userAge = new Jupiter (50,86);
    expect(userAge.jupiterAge()).toEqual("WOW! You are a mere 4.2 years old on Jupiter!")
  })

  test("should determine how many solar years on Jupiter someone has left to live to the first decimal point", () => {
    const userAge = new Jupiter(30,86);
    expect(userAge.jupiterExpect()).toEqual(4.7);
  })

  test("should determine how many solar years on Jupiter someone has outlived their life expectancy to one decimal point", () => { 
    const userAge = new Jupiter(95,86);
    expect(userAge.jupiterExpect()).toEqual(.8);
  })

  test("should return a string if the users life expenctancy and age are equal", () => { 
    const userAge = new Jupiter(86,86);
    expect(userAge.jupiterExpect()).toEqual("Wow buddy are you feeling okay?");
  })
})