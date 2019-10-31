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

module.exports = { isPalindrome }
