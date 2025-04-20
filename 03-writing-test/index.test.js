import {describe, test} from "node:test";
import assert from "node:assert";
import {sum} from "./index.js";

describe("calculator", () => {
  test("sum", () => {
    const a = 1;
    const b = 2;
  
    const actualResult = sum(a, b);
  
    const expectedResult = 3;
  
    assert.equal(actualResult, expectedResult);
  });
});
