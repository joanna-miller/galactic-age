import Jupiter from "../src/js/jupiter.js"

describe("Jupiter", () => {

  test("should correctly create a Jupiter object with two keys", () => {
    const userAge = new Jupiter(0,0);
    expect(userAge.age).toEqual(0);
    expect(userAge.expectancy).toEqual(0);
  })

})