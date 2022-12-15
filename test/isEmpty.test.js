import isEmpty from "../src/isEmpty.js";

import { expect } from "chai";

describe("isEmpty", () => {
  it("should return true when null value is given", () => {
    expect(isEmpty(null)).to.be.true;
  });

  it("should return true when a boolean value is given", () => {
    expect(isEmpty(false)).to.be.true;
  });

  it("should return true when a integer value is given", () => {
    expect(isEmpty(1)).to.be.true;
  });

  it("should return false when a string is given", () => {
    expect(isEmpty("test")).to.be.false;
  });

  it("should return false when an array is given", () => {
    expect(isEmpty([1, 2, 3])).to.be.false;
  });

  it("should return false when an object is given", () => {
    expect(isEmpty({ a: 1 })).to.be.false;
  });
});
