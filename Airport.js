class Airport {
	constructor(name) {
		this.name = name
		this.planes = []
	}

	addPlane(plane) {
		//use an array method
		this.planes.push(plane)
	}
}

module.exports = Airport