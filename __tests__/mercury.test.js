import Mercury from "../src/js/mercury.js"

describe("Mercury", () => {

  test("should corrently create a Mercury object with two keys", () => {
    const userAge = new Mercury(0,0);
    expect(userAge.age).toEqual(0);
    expect(userAge.expectancy).toEqual(0);
  })

  test("should correctly return users age in solar years on Mercury", () => {
    const userAge = new Mercury(30,90);
    expect(userAge.mercAge()).toEqual(125);
  })

  test("should correctly return users age of solar years on Mercury with up to one decimal point", () => {
    const userAge = new Mercury (32,90);
    expect(userAge.mercAge()).toEqual(133.3);
  })

  test("should return correct age on Mercury up to one decimal point in a string", () => {
    const userAge = new Mercury (30,86.);
    expect(userAge.mercAge()).toEqual("Wow! You are 125 Mercurian years old!");
  })


  test("should determine how many solar years on Mercury someone has left to live", () => {
    const userAge = new Mercury(30,90);
    expect(userAge.mercExpect()).toEqual(250);
  })

  test("should determine how many solar years on Mercury someone has left to live up to one decimal point", () => {
    const userAge = new Mercury(30,86);
    expect(userAge.mercExpect()).toEqual(233.3);
  })

  test("should determine how many solar years on Mercury someone has outlived their life expentancy", () => {
    const userAge = new Mercury(86,80);
    expect(userAge.mercExpect()).toEqual(25);
  })

  test("should determine how many solar years on Mercury someone has outlived their life expentancy up to one decimal point", () => {
    const userAge = new Mercury(82,80);
    expect(userAge.mercExpect()).toEqual(8.3);
  })

  test("should return a string if users life expentancy and age are equal", () => {
    const userAge = new Mercury(80,80);
    expect(userAge.mercExpect()).toEqual("You're on your way to outliving your life expectancy! Good job and be careful!");
  })

})