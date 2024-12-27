import {add} from './scripts.js';


describe('Test suit: Add function', () => {
    it('should add positive numbers', ( ) => {
        expect(add(4, 4)).toEqual(8);
    });

    it('should add negative numbers', () => {
        expect(add(-3, -4)).toEqual(-7);
    });

    it('should add positive and negaite numbers', () => {
        expect(add(-3, 2)).toEqual(-1);
    });

    it('should add zero', () => {
        expect(add(0, 0)).toEqual(0);
    });
})
