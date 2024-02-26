import { expect, test } from 'bun:test'
import { sum } from './index'
test('[2, 2, 2] = 6', () => {
	expect(sum([2, 2, 2])).toBe(6)
})

test('[3, 3] = 6', () => {
	expect(sum([3, 3])).toBe(6)
})
