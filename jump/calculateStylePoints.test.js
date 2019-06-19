const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
	describe('wszystkie noty sa takie same', () => {
		it('powinno dac sume 3 not', () => {
				const actual = calculateStylePoints([5, 5, 5, 5, 5]);

				const expected = 5 * 3;

				assert.equal(actual, expected);
		});
	});

	describe('kazda nota jest inna', () => {
		it('powinno odrzucac najwyzsza i najnizsza note', () => {
				const actual = calculateStylePoints([9, 5, 7, 20, 10]);

				const expected = 9 + 7 + 10;

				assert.equal(actual, expected);
		});
	});
	describe('jedna z liczb wynosi 0', () => {
		it('powinno odrzucac najwyzsza i najnizsza note', () => {
				const actual = calculateStylePoints([9, 5, 7, 0, 10]);

				const expected = 9 + 7 + 5;

				assert.equal(actual, expected);
		});
	});
});