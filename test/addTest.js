import add from '../src/add.js';
import chai, { expect, assert } from 'chai';

describe('Add', function(){
    it('Simple positive add', function(){
        expect(add(1+1)).to.equal(2);
    });
});