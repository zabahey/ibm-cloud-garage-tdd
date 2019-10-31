// eslint-disable-next-line no-unused-vars
const { fahrenheitToCelcius } = require('./fahrenheit-2-celcius')

describe('the fahrenheit-2-celcius canary spec', () => {
	it('shows the infrastructure works', () => {
		expect(true).toBe(true)
	})

	describe.only('a fahrenheitToCelcius function should', () => {
		it('fahrenheitToCelcius of 32 is 0', () => {
			expect(fahrenheitToCelcius(32)).toBe(0)
		})
		it.todo('return 10 for 50')
		it.todo('return 100 for 212')
		it.todo('return -40 for -40')
		it.todo('return -273.15 for -459.67')
	})
})
