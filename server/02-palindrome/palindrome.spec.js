const isPalindrome = text => {
	let reversedText = ''
	for (let index = text.length - 1; index >= 0; index--) {
		reversedText += text[index]
	}

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

		it.todo('true for whitespace')
		it.todo('error for empty string')
		it.todo('error for not a string')
	})
})
