import { expect, test } from 'bun:test'
import { sum } from './index'
test('2 + 2', () => {
	expect(sum(2, 2)).toBe(4)
})

test('3 + 3', () => {
	expect(sum(3, 3)).toBe(6)
})
