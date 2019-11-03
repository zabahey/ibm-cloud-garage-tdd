const stack = (capacity = 10) => {
	if (isNaN(capacity) || capacity < 0) {
		throw new Error('Stack accept only a positive number')
	}

	const _items = []
	const _capacity = capacity
	return {
		size() {
			return _items.length
		},
		push(item) {
			if (this.size() === _capacity) {
				throw new Error('stack overflow')
			}

			_items.push(item)
		},
		isEmpty() {
			return _items.length === 0
		},
		pop() {
			if (this.isEmpty()) {
				throw new Error('stack underflow')
			}

			return _items.pop()
		}
	}
}

module.exports = { stack }
