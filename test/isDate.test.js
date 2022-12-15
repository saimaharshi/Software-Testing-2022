import isDate from "../src/isDate.js";

import {expect} from "chai";

describe('isDate', () => {

    it("Should return True for the date object", () => {
        expect(isDate(new Date)).to.true
    });
    
    it('Should return false for a boolean value', () => {
        expect(isDate(true)).to.false
    });

    it('Should return false for a incorrect format', () => {
        expect(isDate("MON 12 December 2022")).to.false
    });

    it('Should return false for a null or undefined', () => {
        expect(isDate(null)).to.false
        expect(isDate(undefined)).to.false
    });
})