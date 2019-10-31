const isPalindrome = text => {
	const emptyString = ''
	if (text === emptyString) {
		throw new Error('empty strings are not palindromes')
	}
	let reversedText = text
		.split(emptyString)
		.reverse()
		.join(emptyString)

	return reversedText === text
}
describe('the palindrome canary spec', () => {
	it('shows the infrastructure works', () => {
		expect(true).toBe(true)
	})

	describe.only('a palindrome function should', () => {
		it('true for mom', () => {
			expect(isPalindrome('mom')).toBe(true)
		})

		it('false for dude', () => {
			expect(isPalindrome('dude')).toBe(false)
		})

		it('true for mom mom', () => {
			expect(isPalindrome('mom mom')).toBe(true)
		})

		it('false for dad mom', () => {
			expect(isPalindrome('dad mom')).toBe(false)
		})

		it('true for whitespace', () => {
			expect(isPalindrome('    ')).toBe(true)
		})
		it('return error message "empty strings are not palindromes" for empty string', () => {
			expect(() => {
				isPalindrome('')
			}).toThrowError('empty strings are not palindromes')
		})

		it.todo('error for not a string')
	})
})
