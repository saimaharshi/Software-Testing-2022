import defaultTo from '../src/defaultTo.js';
import chai, { expect, assert } from 'chai';

describe('defaultTo', function(){
    it('Default to int int', function(){
        expect(defaultTo(11,1)).to.equal(11);
    });
    it('Default to NaN int', function(){
        expect(defaultTo(NaN,1)).to.equal(1);
    });
    it('Default to null int', function(){
        expect(defaultTo(null,1)).to.equal(1);
    });
    it('Default to undefined int', function(){
        expect(defaultTo(undefined,1)).to.equal(1);
    });
    it('Default to double int', function(){
        expect(defaultTo(11.2,1)).to.equal(11.2);
    });
    it('Default to double double', function(){
        expect(defaultTo(11.2,1.2)).to.equal(11.2);
    });
    it('Default to char char', function(){
        expect(defaultTo('c','d')).to.equal('c');
    });
    it('Default to NaN char', function(){
        expect(defaultTo(NaN,'d')).to.equal('d');
    });
    it('Default to null char', function(){
        expect(defaultTo(null,'d')).to.equal('d');
    });
    it('Default to undefined char', function(){
        expect(defaultTo(undefined,'d')).to.equal('d');
    });
    it('Default to string string', function(){
        expect(defaultTo("Hi","Hello")).to.equal("Hi");
    });
    it('Default to nan string', function(){
        expect(defaultTo(NaN,"Hello")).to.equal("Hello");
    });
    it('Default to null string', function(){
        expect(defaultTo(null,"Hello")).to.equal("Hello");
    });
    it('Default to undefined string', function(){
        expect(defaultTo(undefined,"Hello")).to.equal("Hello");
    });
    it('Default to boolean true false', function(){
        expect(defaultTo(true,false)).to.equal(true);
    });
    it('Default to boolean false true', function(){
        expect(defaultTo(false,true)).to.equal(false);
    });
    it('Default empty', function(){
        expect(defaultTo("","default")).to.equal("default");
    });
});