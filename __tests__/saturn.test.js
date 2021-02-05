import Saturn from "../src/js/saturn.js"

describe("Saturn", () => {

  test("should corrently create a Saturn object with two keys", () => {
    const userAge = new Saturn(0,0);
    expect(userAge.age).toEqual(0);
    expect(userAge.expectancy).toEqual(0);
  })

  test("should correctly show users age in solar years on Saturn to the 2nd decimal point", () => {
    const userAge = new Saturn (30,86);
    expect(userAge.saturnAge()).toEqual(1.01);
  })
})
