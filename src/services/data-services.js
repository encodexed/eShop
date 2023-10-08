export const getItemById = (id, data) => {
	return data.find((item) => item.id === id);
};

export const getFeaturedItems = (data) => {
	return data.filter((item) => item.featured);
};

export const checkStockOfItem = (orderInfo, storeData) => {
	const { id } = orderInfo;
	const data = storeData.find((item) => item.id === id);
	console.log("found item: ", data);

	const orderPlatformEntries = Object.entries(orderInfo.platform);
	const orderedPlatformInfo = orderPlatformEntries.find(
		(platform) => platform[1] > 0
	);
	const [orderPlatform, orderQuantity] = orderedPlatformInfo;

	if (data.stock[orderPlatform] < 0) {
		return "Sorry, this game is unavailable on that platform";
	}

	if (data.stock[orderPlatform] === 0) {
		return "Sorry, this game is out of stock for that platform";
	}

	if (orderQuantity > data.stock[orderPlatform]) {
		return "Sorry, this game doesn't have that much stock available";
	}

	return "Added to Cart!";
};
