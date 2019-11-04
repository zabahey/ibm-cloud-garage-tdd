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
		it('Input symbol I should return 1', () => {
			expect(romanToDecimal('I')).toBe(1)
		})

		it('Input symbol V should return 5', () => {
			expect(romanToDecimal('V')).toBe(5)
		})

		it('Input symbol X should return 10', () => {
			expect(romanToDecimal('X')).toBe(10)
		})
	})
})
