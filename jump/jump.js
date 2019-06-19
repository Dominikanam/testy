const calculateDistancePoints = require("./calculateDistancePoints");
const calculateStylePoints = require("./calculateStylePoints");
const precise = require('./decimalHelper');


module.exports = calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
	const distancePoints = calculateDistancePoints(hillSize, distance, kPoint);
	const stylePoints = calculateStylePoints(styleNotes);

  return precise(distancePoints + stylePoints + windFactor + gateFactor);
}
