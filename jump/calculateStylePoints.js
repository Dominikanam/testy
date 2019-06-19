module.exports = calculateStylePoints = (styleNotes) => {
	const max = Math.max(...styleNotes);
	const min = Math.min(...styleNotes);
	const sum = styleNotes.reduce((accumulator, currentValue) => accumulator + currentValue) - min - max;

	return sum;
};