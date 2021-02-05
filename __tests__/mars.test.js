import Mars from "../src/js/mars.js"

describe("Mars", () => {

  test("should corrently create a Mars object with two keys", () => {
    const userAge = new Mars(0,0);
    expect(userAge.age).toEqual(0);
    expect(userAge.expectancy).toEqual(0);
  })

  test("should correctly return a string that includes users age in solar years on Mars", () => {
    const userAge = new Mars(47,86);
    expect(userAge.marsAge()).toEqual("Mars time looks good on you! You are 25 Martian years old!"); 
  })

  test("should correctly return a string that includes users age in solar years on Mars with up to one decimal point", () => {
    const userAge = new Mars(31,86);
    expect(userAge.marsAge()).toEqual("Mars time looks good on you! You are 16.5 Martian years old!"); 
  })

  test("should determine how many solar years on Mars someone has left to live", () => { 
    const userAge = new Mars(33,80);
    expect(userAge.marsExpect()).toEqual(25);
  })

  test("should determine how many solar years on Mars someone has left to live up to one decimal point", () => { 
    const userAge = new Mars(56,80);
    expect(userAge.marsExpect()).toEqual(12.8);
  })

  test("should determine how many solar years on Mars someone has outlived their life expectancy", () => { 
    const userAge = new Mars(127,80);
    expect(userAge.marsExpect()).toEqual(25);
  })
  test("should determine how many solar years on Mars someone has outlived their life expectancy to one decimal point", () => { 
    const userAge = new Mars(86,80);
    expect(userAge.marsExpect()).toEqual(3.2);
  })
});