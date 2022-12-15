import words from "../src/words.js";

import { expect } from "chai";

describe("words", () => {

    it("should return array of words from a sentence", () => {
        expect(words("software testing course")).to.deep.equal(["software","testing","course"])
    });

    it("should contain a word from the sentence after splitting", () => {
        expect(words("virtual machine")).to.contain('machine');
        expect(words("virtual machine")).to.contain('virtual')
    });

    it("should give zero as the length of the empty string", () => {
        expect(words("").length).to.be.equal(0)
        expect(words('').length).to.be.equal(0)
    });

    it("should detect the symbols from the sentence", () => {
        expect(words('fred, barney, & pebbles', /[^, ]+/g)).to.deep.equal(['fred', 'barney', '&', 'pebbles'])
    })
})