import ceil from '../src/ceil.js';
import chai, { expect, assert } from 'chai';

describe('Ceil', function(){
    it('Return type', function(){
        expect(ceil(1.1)).to.be.a('number');
    });
    it('Simple one parameter rounding', function(){
        expect(ceil(1.1)).to.equal(2);
    });
    it('Simple two parameter rounding', function(){
        expect(ceil(1.123,2)).to.equal(1.13);
    });
    it('One parameter negative rounding', function(){
        expect(ceil(-9.345)).to.equal(-9);
    });
    it('Two parameter negative rounding with positive', function(){
        expect(ceil(-9.345,1)).to.equal(-9.3);
    });
    it('Two parameter negative rounding with negative', function(){
        expect(ceil(-100.345,-1)).to.equal(-100);
    });
    it('One parameter rounding int', function(){
        expect(ceil(1)).to.equal(1);
    });
    it('One parameter rounding infinity', function(){
        expect(ceil(Infinity)).to.equal(Infinity);
    });
    it('One parameter rounding NaN', function(){
        expect(ceil(Number.NaN)).to.be.NaN;
    });
    it('One parameter rounding char', function(){
        expect(ceil('c')).to.be.NaN;
    });
    it('One parameter rounding string', function(){
        expect(ceil("string")).to.be.NaN;
    });
    it('Two parameter rounding char', function(){
        expect(ceil('c',4)).to.be.NaN;
    });
    it('Two parameter rounding string', function(){
        expect(ceil("string",3)).to.be.NaN;
    });
    it('One parameter rounding large number', function(){
        expect(ceil(1234567890.1234567890)).to.equal(1234567891);
    });
    it('Two parameter rounding large number', function(){
        expect(ceil(1234567890.1234567890,2)).to.equal(1234567890.13);
    });
    it('One parameter rounding small number', function(){
        expect(ceil(0.0000000000000000000123)).to.equal(1);
    });
    it('Two parameter rounding small number', function(){
        expect(ceil(0.0000000000000000000123,2)).to.equal(0.01);
    });
    it('One parameter rounding empty', function(){
        expect(ceil()).to.be.NaN;
    });
    it('One parameter rounding NaN', function(){
        expect(ceil(Number.NaN)).to.be.NaN;
    });
});