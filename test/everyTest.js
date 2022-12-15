import every from '../src/every.js';
import chai, { expect, assert } from 'chai';


describe('every', function(){
    it('empty array', function(){
        expect(every([])).to.be.true;
    });
    it('Return value', function(){
        expect(every([])).to.be.a('boolean');
    });
    it('Array without predicate', function(){
        expect(function() { every([1]);})
        .to.throw(Error);
    });
    it('Number array', function(){
        expect(every([1,2,3,4],Number)).to.be.true;
    });
    it('char array', function(){
        expect(every(['a','b','c'],String)).to.be.true;
    });
    it('boolean array true', function(){
        expect(every([true,true],Boolean)).to.be.true;
    });
    it('boolean array false', function(){
        expect(every([false,false],Boolean)).to.be.true;
    });
    it('example array', function(){
        expect(every([true,1,null,'yes'], Boolean)).to.be.false;
    });
    it('Null array', function(){
        expect(every([null], value => value == null)).to.be.true;
    });
});