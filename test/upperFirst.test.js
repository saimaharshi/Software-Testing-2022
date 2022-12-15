import upperFirst from "../src/upperFirst.js";

import {expect} from "chai";

describe("upperFirst", () => {
    it("Should change uncapped string first letter to Upper case", () =>{
        expect(upperFirst("unit")).to.equal("Unit")
        expect(upperFirst("test")).to.equal("Test")
    });

    it("Should be ok with capped string first letter", () =>{
        expect(upperFirst("Software Testing")).to.equal("Software Testing")
        expect(upperFirst("VIRTUAL MACHINE")).to.equal("VIRTUAL MACHINE")
    });

})