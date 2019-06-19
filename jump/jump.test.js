const assert = require('assert');
const calculateTotalPoints = require('./jump');

describe('calculateTotalPoints', () => {
	describe('duza skocznia', () => {
		it('kamil stoch', () => {
			const actual = calculateTotalPoints(134, 'duza', 120, [19.0, 20.0, 19.5, 19.0, 18.5], 0, -5.4);

			const expected = 137.3;

			assert.equal(actual, expected);
		});

		it('maciej kot', () => {
			const actual = calculateTotalPoints(121.0, 'duza', 120, [17.5, 17.5, 17.5, 17.5, 17.5], 0, -8.6);

			const expected = 105.7;

			assert.equal(actual, expected);
		});

		it('andreas kofler', () => {
			const actual = calculateTotalPoints(107.5, 'duza', 120, [15.0, 16.5, 16.0, 16.0, 16.5], 0, -4.3);

			const expected = 81.7;

			assert.equal(actual, expected);
		});
	});

	describe('normalna skocznia', () => {
		it('stefan hula', () => {
			const actual = calculateTotalPoints(111, 'normalna', 98, [19.0, 19.5, 19, 19, 19], 3.2, -14.4);

			const expected = 131.8;

			assert.equal(actual, expected);
		});

		it('davide bresadola', () => {
			const actual = calculateTotalPoints(95, 'normalna', 98, [17, 17, 17.5, 17.5, 17.5], 0, -14);

			const expected = 92;

			assert.equal(actual, expected);
		});

		it('antti aalto', () => {
			const actual = calculateTotalPoints(80, 'normalna', 98, [15.0, 15.5, 16.0, 15.5, 16], 0, -10.2);

			const expected = 60.8;

			assert.equal(actual, expected);
		});
	});

	describe('mamucia skocznia', () => {
		it('severin freund', () => {
			const actual = calculateTotalPoints(227.5, 'mamucia', 200, [18.0, 18.5, 17.5, 18.5, 18.5], 8.7, -8.4);

			const expected = 208.3;

			assert.equal(actual, expected);
		});

		it('anze semenic', () => {
			const actual = calculateTotalPoints(206, 'mamucia', 200, [15.0, 16.5, 15.5, 15.5, 16], 0, -2.7);
			const expected = 171.5;

			assert.equal(actual, expected);
		});

		it('denis kornilov', () => {
			const actual = calculateTotalPoints(170, 'mamucia', 200, [16.0, 15.5, 14.5, 16, 16], 0, -4.6);
			const expected = 126.9;

			assert.equal(actual, expected);
		});
	});
});