import Mars from "../src/js/mars.js"

describe("Mars", () => {

  test("should corrently create a Mars object with two keys", () => {
    const userAge = new Mars(0,0);
    expect(userAge.age).toEqual(0);
    expect(userAge.expectancy).toEqual(0);
  })
});