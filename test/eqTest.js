import eq from '../src/eq.js';
import chai, { expect, assert } from 'chai';
const object = { 'a': 1 }
const other = { 'a': 1 }

describe('eq', function(){
    it('eq same object', function(){
        expect(eq(object, object)).to.be.true;
    });
    it('eq different objects', function(){
        expect(eq(object, other)).to.be.false;
    });
    it('eq same chars', function(){
        expect(eq('c','c')).to.be.true;
    });
    it('eq char and object char', function(){
        expect(eq('a',Object('a'))).to.be.false;
    });
    it('eq nans', function(){
        expect(eq(NaN,NaN)).to.be.true;
    });
    it('eq char and object.char', function(){
        expect(eq('a',object.a)).to.be.false;
    });
    it('eq object.char and object.char', function(){
        expect(eq(object.a,object.a)).to.be.true;
    });
    it('eq string string', function(){
        expect(eq("Hi","Hi")).to.be.true;
    });
    it('eq string char', function(){
        expect(eq("Hi",'c')).to.be.false;
    });
    it('eq null null', function(){
        expect(eq(null,null)).to.be.true;
    });
    it('eq undefined undefined', function(){
        expect(eq(undefined,undefined)).to.be.true;
    });
    it('eq true true', function(){
        expect(eq(true,true)).to.be.true;
    });
    it('eq true false', function(){
        expect(eq(true,false)).to.be.false;
    });
    it('eq false true', function(){
        expect(eq(false,true)).to.be.false;
    });
    it('eq false false', function(){
        expect(eq(false,false)).to.be.true;
    });
});