import toNumber from "../src/toNumber.js";

import { expect } from "chai";

describe("toNumber", () => {
  it("should return the number when a number is given", () => {
    expect(toNumber(2022)).to.equal(2022);
    expect(toNumber(200)).to.equal(200);
  });

  it("should match the type as the number when number is given", () => {
    expect(toNumber(1)).to.be.a("number");
    expect(toNumber(200)).to.be.a("number");
  });

  it("should return a number when a string containing that number is given", () => {
    expect(toNumber("2022")).to.equal(2022);
    expect(toNumber("200")).to.equal(200);
  });

  it("should match the type as the number when a string containing a number is given", () => {
    expect(toNumber("1")).to.be.a("number");
    expect(toNumber("200")).to.be.a("number");
  });

  it("should return and match the type as number when float value is given as a number", () => {
    expect(toNumber(5.785)).to.equal(5.785);
    expect(toNumber(8.631)).to.be.a("number");
  });

  it("should return and match the type as number when float value is given as a string", () => {
    expect(toNumber("5.785")).to.equal(5.785);
    expect(toNumber("5.785")).to.be.a("number");
  });

  it("should return minimum value of number when Number.MIN_VALUE is given", () => {
    expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324);
  });

  it("should match the type as the number when Number.MIN_VALUE and Number.MAX_VALUE is given", () => {
    expect(toNumber(Number.MIN_VALUE)).to.be.a("number");
    expect(toNumber(Number.MAX_VALUE)).to.be.a("number");
  });

  it("should return  and match Infinity number when Infinity is given as a number", () => {
    expect(toNumber(Infinity)).to.equal(Infinity);
    expect(toNumber(Infinity)).to.be.a("number");
  });

  it("should return and match type as Infinity number when Infinity is given as a string", () => {
    expect(toNumber("Infinity")).to.equal(Infinity);
    expect(toNumber("Infinity")).to.be.a("number");
  });

  it("should return NaN when a string containing other characters is given", () => {
    expect(toNumber("2OOI")).to.equal(NaN);
  });
});
