/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
   let countTriangles = 0;
	let len = preferences.length;
	for (let i = 0; i < len; i++) {
		let firstIndex = preferences[i] - 1;
		let secondIndex = preferences[firstIndex] - 1;
		let thirdIndex = preferences[secondIndex] - 1;
		if (thirdIndex === i && firstIndex !== secondIndex && firstIndex !== thirdIndex && secondIndex !== thirdIndex) {
			countTriangles++;
		}
	}
	return countTriangles / 3;
};
