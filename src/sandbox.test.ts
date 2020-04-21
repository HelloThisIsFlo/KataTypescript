import { Calculator } from './sandbox';

describe('My great calculator', () => {
    it('returns sum of 2 numbers when adding 2 numbers', () => {
        const calculator = new Calculator()
        const result = calculator.add(5, 5)
        expect(result).toBe(5 + 5)
    })

    test('add 2 numbers => Returns sum',() =>{})
    it('does something else', () => {
        expect(1).toBe(1)
    })
})