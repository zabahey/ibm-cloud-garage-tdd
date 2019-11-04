const getValueFrom = romanSymbol => {
	const romanToNumber = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000
	}

	return romanToNumber[romanSymbol] || 0
}

const romanToDecimal = romanSymbol => {
	let totalValue = 0

	let characterIndex = 0
	while (characterIndex < romanSymbol.length) {
		const currentRomanCharacter = romanSymbol[characterIndex]
		const nextCharacter =
			characterIndex + 1 < romanSymbol.length ? romanSymbol[characterIndex + 1] : ''
		let skip =
			!nextCharacter || getValueFrom(currentRomanCharacter) >= getValueFrom(nextCharacter) ? 1 : 2
		if (getValueFrom(currentRomanCharacter) < getValueFrom(nextCharacter)) {
			totalValue = totalValue + (getValueFrom(nextCharacter) - getValueFrom(currentRomanCharacter))
		} else {
			totalValue += getValueFrom(currentRomanCharacter)
		}

		characterIndex += skip
	}

	return totalValue
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

		describe('input with multiple symbol', () => {
			describe('order of value with the largest values to smaller', () => {
				it('return 2006 when input MMVI', () => {
					expect(romanToDecimal('MMVI')).toBe(2006)
				})

				it('return 2500 when input MMD', () => {
					expect(romanToDecimal('MMD')).toBe(2500)
				})
			})

			describe('order of value with smaller values precede larger values, the smaller should subtracted from the larger values', () => {
				it('return 900 when input CM', () => {
					expect(romanToDecimal('CM')).toBe(900)
				})

				it('return 40 when input XL', () => {
					expect(romanToDecimal('XL')).toBe(40)
				})

				it('return 940 when input CMXL', () => {
					expect(romanToDecimal('CMXL')).toBe(940)
				})

				it('return 4 when input IV', () => {
					expect(romanToDecimal('IV')).toBe(4)
				})
			})

			it('return 1944 when input MCMXLIV', () => {
				expect(romanToDecimal('MCMXLIV')).toBe(1944)
			})
		})
	})
})
