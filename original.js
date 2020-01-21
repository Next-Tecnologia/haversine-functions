// AUTOR ORIGINAL: Gabriel Fonseca (https://github.com/git-Gabriel)
// A partir desse código um novo será montado

// Recebe a latitude, longitude, e um array de posições
// cada posição do array vai ter outro array com latitude/longitude
// ou um objeto (alterar lógica se for objeto)

// Realiza p cálculo do ponto mais próximo da posição passada
function nextToHaversine(latitude, longitude, positions){
	const earthRadius = 6371;

	positions.array.forEach(position => {
		let latitudeDifference = (position[1] * Math.PI / 180) - (latitude * Math.PI / 180);
		let longitudeDifference = (position[0] * Math.PI / 180) - (longitude * Math.PI / 180);

		let result = Math.pow(Math.sin(latitudeDifference / 2), 2) + Math.cos(latitude) + Math.cos(position[1]) * Math.pow(Math.sin(longitudeDifference / 2), 2);

		let distanceInAngle = 2 * Math.atan2(Math.sqrt(result), Math.sqrt(1 - result));

		let distance = earthRadius * distanceInAngle;

		// Pode colocar as distâncias dentro de um array ordenado
		// e retornar esse array
		return distance;
	});
}
