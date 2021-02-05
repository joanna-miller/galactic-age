import Venus from "../src/js/venus.js"

describe("Venus", () => {

  test("should corrently create a Venus object with two keys", () => {
    const userAge = new Venus(0,0);
    expect(userAge.age).toEqual(0);
    expect(userAge.expectancy).toEqual(0);
  })

  test("should correctly return users age in solar years on Venus", () => {
    const userAge = new Venus(62,90);
    expect(userAge.venusAge()).toEqual(100);
  })
})