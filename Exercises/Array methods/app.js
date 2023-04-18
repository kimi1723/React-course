function transformToObjects(numberArray) {
	// Todo: Add your logic
	// should return an array of objects

	const arrayOfObjects = numberArray.map(num => {
		return {
			val: num,
		};
	});

	console.log(...arrayOfObjects);
}

transformToObjects([1, 2, 3]);
