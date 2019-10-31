const { isPalindrome } = require('./palindrome')

describe('the palindrome canary spec', () => {
	it('shows the infrastructure works', () => {
		expect(true).toBe(true)
	})

	describe('a palindrome function', () => {
		describe('input with valid text should return', () => {
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
		})

		describe('input with invalid text should return', () => {
			it('return error message "empty strings are not palindromes" for empty string', () => {
				expect(() => {
					isPalindrome('')
				}).toThrowError('empty strings are not palindromes')
			})

			it.each([[undefined], [null], [123], [true], [Number.NaN], [{}], [Array(10).fill('aa')]])(
				'error for not a string %s',
				input => {
					expect(() => {
						isPalindrome(input)
					}).toThrowError('input must be a string')
				}
			)
		})
	})
})
