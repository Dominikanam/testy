module.exports = calculateDistancePoints = (wielkosc, dlugosc, k) => {
	const bazowePunkty = wielkosc === 'mamucia' ? 120 : 60;
	let premia;
	switch (wielkosc) {
		case 'mamucia':
			premia = 1.2;
			break;
		case 'duza':
			premia = 1.8;
			break;
		case 'normalna':
			premia = 2;
			break;

		default:
			premia = 0;
			break;
	}

	return bazowePunkty + (dlugosc - k) * premia;
};
