const isPalindrome = text => {
	validate(text)
	const emptyString = ''
	let reversedText = text
		.split(emptyString)
		.reverse()
		.join(emptyString)

	return reversedText === text
}

const validate = text => {
	const emptyString = ''
	if (text === emptyString) {
		throw new Error('empty strings are not palindromes')
	}

	if (!text || typeof text !== 'string') {
		throw new Error('input must be a string')
	}
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

		it.each([[undefined], [null], [123], [true], [{}], [Array(10).fill('aa')]])(
			'error for not a string %s',
			input => {
				expect(() => {
					isPalindrome(input)
				}).toThrowError('input must be a string')
			}
		)
	})
})
