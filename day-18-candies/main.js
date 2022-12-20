function candies(children, candy) {
    //  write code here.
    const remainder = candy % children;
    return candy - remainder;
}

console.log(`The total amount of candies that will be eaten is ${candies(4, 15)}.`);

/**
* Test Suite 
*/
describe('candies()', () => {
    it('returns ammount of total equal candy to be eaten', () => {
        // arrange
        const children = 3;
        const candy = 10;
        
        // act
        const result = candies(children, candy);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(9);
    });
});