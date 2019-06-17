const formatDate = (timeInSeconds = 0) => {
	var hour = Math.floor(timeInSeconds / 3600);
	var remaining = timeInSeconds % 3600;
	var min = Math.floor(remaining / 60);
	var sec = remaining % 60;

	let result = '';

	if (hour > 0) {
		result =  `${hour}h`;
	}

	if (min > 0) {
		result =  `${result} ${min}m`;
	}

	if (sec > 0) {
		result =  `${result} ${sec}s`;
	}

	return result.trim() || '0s';
}

module.exports = formatDate;