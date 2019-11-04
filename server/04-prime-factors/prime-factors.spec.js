const findPrimeFactors = number => {
	const primeFactors = []
	if (number === 1) return primeFactors

	if (number % 2 === 0) {
		primeFactors.push(2)
		number /= 2
	}
	if (number > 1) primeFactors.push(number)
	return primeFactors
}

describe.only('the prime factors canary spec', () => {
	it('shows the infrastructure works', () => {
		expect(true).toBe(true)
	})

	describe('a prime factors function should', () => {
		it('return none for 1', () => {
			expect(findPrimeFactors(1)).toEqual([])
		})

		it('return 2 for 2', () => {
			expect(findPrimeFactors(2)).toEqual([2])
		})

		it('return 3 for 3', () => {
			expect(findPrimeFactors(3)).toEqual([3])
		})

		it('return 2, 2 for 4', () => {
			expect(findPrimeFactors(4)).toEqual([2, 2])
		})

		it('return 5 for 5', () => {
			expect(findPrimeFactors(5)).toEqual([5])
		})

		it('return 2, 3 for 6', () => {
			expect(findPrimeFactors(6)).toEqual([2, 3])
		})
		it('return 7 for 7', () => {
			expect(findPrimeFactors(7)).toEqual([7])
		})

		it.todo('return 2, 2, 2 for 8')
		it.todo('return 3, 3 for 9')
	})
})
