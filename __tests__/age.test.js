import { TestScheduler } from "jest"
import Age from "./../src/js/age.js"

describe("Age", () => {

  test("should corrently create an Age object with two keys", () => {
    const userAge = new Age(0,0);
    expect(userAge.age).toEqual(0);
    expect(userAge.expectancy).toEqual(0);
  })

  test("should correctly return users age in solar years on Mercury", () => {
    const userAge = new Age(30,86);
    expect(userAge.mercAge()).toEqual(125);
  })

  test("should correctly return users age of solar years on Mercury with up to one decimal point", () => {
    const userAge = new Age (32,86);
    expect(userAge.mercAge()).toEqual(133.3);
  })
})