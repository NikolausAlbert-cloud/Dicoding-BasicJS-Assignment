import {test, describe} from "node:test";
import assert from "node:assert";
import sum from "./index.js";

describe("calculator", () => {
  test("sum", () => {
    const a = 1;
    const b = 2;
  
    const actualResult = sum(a, b);
  
    const expectedResult = 3;
  
    assert.equal(actualResult, expectedResult);
  });

  test("Throw error if 'a' is not a number", () => {
    const a = "1";
    const b = 2;

    const actualResult = sum(a, b);

    const expectedResult = 0;

    assert.equal(actualResult, expectedResult);
  })

  test("Throw error if 'b' is not a number", () => {
    const a = 1;
    const b = "2";

    const actualResult = sum(a, b);

    const expectedResult = 0;

    assert.equal(actualResult, expectedResult);
  })

  test("Throw error if 'a' is negative", () => {
    const a = -1;
    const b = 2;

    const actualResult = sum(a, b);

    const expectedResult = 0;

    assert.equal(actualResult, expectedResult);
  })

  test("Throw error if 'b' is negative", () => {
    const a = 1;
    const b = -2;

    const actualResult = sum(a, b);

    const expectedResult = 0;

    assert.equal(actualResult, expectedResult);
  })
});