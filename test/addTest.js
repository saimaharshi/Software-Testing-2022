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


    it('Add char to positive', function(){
        expect(function() { add(1,'c');})
        .to.throw(Error);
    });
    it('Add char to negative', function(){
        expect(function() { add(-1,'c');})
        .to.throw(Error);
    });
    it('Add positive to char', function(){
        expect(function() { add('c',1);})
        .to.throw(Error);
    });
    it('Add negative to char', function(){
        expect(function() { add('c',-1);})
        .to.throw(Error);
    });
    it('Add string to positive', function(){
        expect(function() { add(1,"string");})
        .to.throw(Error);
    });
    it('Add string to negative', function(){
        expect(function() { add(-1,"string");})
        .to.throw(Error);
    });
    it('Add positive to string', function(){
        expect(function() { add("string",1);})
        .to.throw(Error);
    });
    it('Add negative to string', function(){
        expect(function() { add("string",-1);})
        .to.throw(Error);
    });
    it('Add boolean to positive', function(){
        expect(function() { add(1,true);})
        .to.throw(Error);
    });
    it('Add boolean to negative', function(){
        expect(function() { add(-1,true);})
        .to.throw(Error);
    });
    it('Add positive to boolean', function(){
        expect(function() { add(false,1);})
        .to.throw(Error);
    });
    it('Add negative to boolean', function(){
        expect(function() { add(false,-1);})
        .to.throw(Error);
    });
    it('Add with no parameters', function(){
        let num = add();
        expect(num).to.equal(0);
    });
    it('One parameter', function(){
        expect(function() { add(1);})
        .to.throw(Error);
    });
    it('Three parameters', function(){
        expect(add(1,2,3)).to.equal(3);
    });
});