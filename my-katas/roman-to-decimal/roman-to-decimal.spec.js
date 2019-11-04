const romanToDecimal = romanSymbol => {
	const romanToNumber = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000
	}
	return romanToNumber[romanSymbol]
}

describe.only('roman to decimal canary test spec', () => {
	it('shows the infrastructure works', () => {
		expect(true).toBe(true)
	})

	describe('roman to decimal should', () => {
		describe('input with one symbol', () => {
			it.each`
				romanSymbol | expected
				${'I'}      | ${1}
				${'V'}      | ${5}
				${'X'}      | ${10}
				${'L'}      | ${50}
				${'C'}      | ${100}
				${'D'}      | ${500}
				${'M'}      | ${1000}
			`('return $expected when input $romanSymbol', ({ romanSymbol, expected }) => {
				expect(romanToDecimal(romanSymbol)).toBe(expected)
			})
		})
	})
})
