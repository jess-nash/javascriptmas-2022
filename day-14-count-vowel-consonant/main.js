function countVowelConsonant(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const numbersArray = str.split("").map(l => {return vowels.includes(l) ? 1 : 2 });
    return numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue);
}



/**
* Test Suite 
*/
describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'abcde';
        
        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});