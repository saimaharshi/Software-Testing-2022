import add from '../src/add.js';
import chai, { expect, assert } from 'chai';

describe('Add', function(){
    it('Simple positive add', function(){
        expect(add(1,1)).to.equal(2);
    });
    it('Simple positive and negative add', function(){
        expect(add(1,-1)).to.equal(0);
    });
    it('Simple negative and positive add', function(){
        expect(add(-1,1)).to.equal(0);
    });
    it('Simple negative add', function(){
        expect(add(-1,-1)).to.equal(-2);
    });
    it('add NaN', function(){
        expect(add(1,Number.NaN)).to.be.NaN;
    });
    it('add to NaN', function(){
        expect(add(Number.NaN,1)).to.be.NaN;
    });
    it('add functions', function(){
        expect(add(add(1,1),add(1,1))).to.equal(4);
    });
    it('add infinity', function(){
        expect(add(1,Infinity)).to.equal(Infinity);
    });
    it('add decimals', function(){
        expect(add(1.200,1.560)).to.equal(2.760);
    });
    it('add negative zero', function(){
        expect(add(-0,-0)).to.equal(0);
    });


    it('Positive to char', function(){
        expect(function() { add(1,'c');})
        .to.throw(Error);
    });
    it('expand previous (add creates string)', function(){
        expect(add(1,'c')).to.equal("1c");
    });
    it('Negative to char', function(){
        expect(function() { add(-1,'c');})
        .to.throw(Error);
    });
    it('Char to positive', function(){
        expect(function() { add('c',1);})
        .to.throw(Error);
    });
    it('Char to negative', function(){
        expect(function() { add('c',-1);})
        .to.throw(Error);
    });
    it('Positive to string', function(){
        expect(function() { add(1,"string");})
        .to.throw(Error);
    });
    it('Negative to string', function(){
        expect(function() { add(-1,"string");})
        .to.throw(Error);
    });
    it('String to positive', function(){
        expect(function() { add("string",1);})
        .to.throw(Error);
    });
    it('String to negative', function(){
        expect(function() { add("string",-1);})
        .to.throw(Error);
    });
    it('Positive to Boolean', function(){
        expect(function() { add(1,true);})
        .to.throw(Error);
    });
    it('Negative to Boolean', function(){
        expect(function() { add(-1,true);})
        .to.throw(Error);
    });
    it('Boolean to positive', function(){
        expect(function() { add(false,1);})
        .to.throw(Error);
    });
    it('Boolean to negative', function(){
        expect(function() { add(false,-1);})
        .to.throw(Error);
    });
    it('No arguments', function(){
        let num = add();
        expect(num).to.equal(0);
    });
    it('One argument', function(){
        expect(function() { add(1);})
        .to.throw(Error);
    });
    it('Three arguments', function(){
        expect(add(1,2,3)).to.equal(3);
    });
});