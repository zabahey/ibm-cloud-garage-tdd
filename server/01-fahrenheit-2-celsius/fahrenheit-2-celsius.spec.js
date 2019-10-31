// eslint-disable-next-line no-unused-vars
const { fahrenheitToCelcius } = require('./fahrenheit-2-celcius')

describe('the fahrenheit-2-celcius canary spec', () => {
	it('shows the infrastructure works', () => {
		expect(true).toBe(true)
	})

	describe('a fahrenheitToCelcius function should', () => {
		it.each([[32, 0], [212, 100], [50, 10], [-40, -40], [-459.67, -273.15]])(
			'fahrenheitToCelcius of %d is %d',
			(fahrenheit, celcius) => {
				expect(fahrenheitToCelcius(fahrenheit)).toBe(celcius)
			}
		)
	})
})
