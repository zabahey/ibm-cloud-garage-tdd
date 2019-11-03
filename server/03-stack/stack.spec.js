const { stack } = require('./stack')

describe('the stack canary spec', () => {
	it('shows the infrastructure works', () => {
		expect(true).toBe(true)
	})

	describe('a stack', () => {
		let _stack

		beforeEach(() => {
			_stack = stack()
		})

		it('starts empty', () => {
			expect(_stack.isEmpty()).toBe(true)
		})

		it('starts with stack size of 0', () => {
			expect(_stack.size()).toBe(0)
		})

		it('is not empty when pushed', () => {
			_stack.push('item')
			expect(_stack.isEmpty()).toBe(false)
		})

		it('stack size is 1 when pushed', () => {
			_stack.push('item')
			expect(_stack.size()).toBe(1)
		})

		it('stack is empty when pushed and popped', () => {
			_stack.push('item')
			_stack.pop()
			expect(_stack.isEmpty()).toBe(true)
		})

		it('stack size is 0 when pushed and popped', () => {
			_stack.push('item')
			_stack.pop()
			expect(_stack.size()).toBe(0)
		})

		it('throws overflow error when pushing to a stack at full capacity', () => {
			const capacity = 1
			_stack = stack(capacity)
			expect(() => {
				_stack.push('item1')
				_stack.push('item2')
			}).toThrowError('stack overflow')
		})

		it('throw underflow error when popping an empty stack', () => {
			expect(() => {
				_stack.pop()
			}).toThrowError('stack underflow')
		})

		it('pops the same one item when pushed', () => {
			const pushedItem = 'item1'
			_stack.push(pushedItem)
			const popedItem = _stack.pop()
			expect(popedItem).toEqual(pushedItem)
		})

		it('pops two items with the most recent first', () => {
			const item1 = 'item1'
			const item2 = 'item2'
			_stack.push(item1)
			_stack.push(item2)
			const popedItem2 = _stack.pop()
			const popedItem1 = _stack.pop()
			expect(popedItem2).toEqual(item2)
			expect(popedItem1).toEqual(item1)
		})

		it('accepts only a positive capacity', () => {
			expect(() => {
				_stack = stack('test')
			}).toThrowError('Stack accept only a positive number')
		})
	})
})
