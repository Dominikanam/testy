const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
	describe('duza skocznia', () => {
		describe('nieprzekroczono punktu k', () => {
			it('zabraklo 10m', () => {
				const actual = calculateDistancePoints('duza', 110, 120);

				const expected = 42;

				assert.equal(actual, expected);
			});
			it('zabraklo 1.5m', () => {
				const actual = calculateDistancePoints('duza', 118.5, 120);

				const expected = 57.3;

				assert.equal(actual, expected);
			});
		});

		describe('przekroczono punkt k', () => {
			it('punkt k przekroczony o 10m', () => {
				const actual = calculateDistancePoints('duza', 130, 120);

				const expected = 78;

				assert.equal(actual, expected);
			});
			it('punkt k przekroczony o 1.5m', () => {
				const actual = calculateDistancePoints('duza', 121.5, 120);

				const expected = 62.7;

				assert.equal(actual, expected);
			});
		});

		describe('skok dokladnie w punkt k', () => {
			it('brak dodatkowych punktow za odleglosc', () => {
				const actual = calculateDistancePoints('duza', 120, 120);

				const expected = 60;

				assert.equal(actual, expected);
			});
		});
	});

	describe('normalna skocznia', () => {
		describe('nieprzekroczono punktu k', () => {
			it('zabraklo 10m', () => {
				const actual = calculateDistancePoints('normalna', 80, 90);

				const expected = 40;

				assert.equal(actual, expected);
			});
			it('zabraklo 1.5m', () => {
				const actual = calculateDistancePoints('normalna', 88.5, 90);

				const expected = 57;

				assert.equal(actual, expected);
			});
		});

		describe('przekroczono punkt k', () => {
			it('punkt k przekroczony o 10m', () => {
				const actual = calculateDistancePoints('normalna', 100, 90);

				const expected = 80;

				assert.equal(actual, expected);
			});
			it('punkt k przekroczony o 1.5m', () => {
				const actual = calculateDistancePoints('normalna', 91.5, 90);

				const expected = 63;

				assert.equal(actual, expected);
			});
		});

		describe('skok dokladnie w punkt k', () => {
			it('brak dodatkowych punktow za odleglosc', () => {
				const actual = calculateDistancePoints('normalna', 90, 90);

				const expected = 60;

				assert.equal(actual, expected);
			});
		});
	});

	describe('mamucia skocznia', () => {
		describe('nieprzekroczono punktu k', () => {
			it('zabraklo 10m', () => {
				const actual = calculateDistancePoints('mamucia', 170, 180);

				const expected = 108;

				assert.equal(actual, expected);
			});
			it('zabraklo 1.5m', () => {
				const actual = calculateDistancePoints('mamucia', 178.5, 180);

				const expected = 118.2;

				assert.equal(actual, expected);
			});
		});

		describe('przekroczono punkt k', () => {
			it('punkt k przekroczony o 10m', () => {
				const actual = calculateDistancePoints('mamucia', 190, 180);

				const expected = 132;

				assert.equal(actual, expected);
			});
			it('punkt k przekroczony o 1.5m', () => {
				const actual = calculateDistancePoints('mamucia', 181.5, 180);

				const expected = 121.8;

				assert.equal(actual, expected);
			});
		});

		describe('skok dokladnie w punkt k', () => {
			it('brak dodatkowych punktow za odleglosc', () => {
				const actual = calculateDistancePoints('mamucia', 180, 180);

				const expected = 120;

				assert.equal(actual, expected);
			});
		});
	});
});