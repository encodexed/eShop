export const getItemById = (id, data) => {
	return data.find((item) => item.id === id);
};

export const getFeaturedItems = (data) => {
	return data.filter((item) => item.featured);
};

export const checkStockOfItem = (orderInfo, storeData) => {
	const { id } = orderInfo;
	const data = storeData.find((item) => item.id === id);

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

export const checkStockOfAllItems = (cart, storeData) => {
	cart.forEach((cartItem) => {
		const good = checkStockOfItem(cartItem, storeData);
		if (good === "Added to Cart!") {
			return;
		} else {
			throw new Error(good);
		}
	});
	return;
};

export const createUpdatedStoreDataObject = (cart, storeData) => {
	const firestoreUpdates = cart.map((cartItem) => {
		const { id } = cartItem;
		const storeItem = storeData.find((item) => item.id === id);

		storeItem.stock.playstation -= cartItem.platform.playstation;
		storeItem.stock.pc -= cartItem.platform.pc;
		storeItem.stock.xbox -= cartItem.platform.xbox;
		storeItem.stock.nSwitch -= cartItem.platform.nSwitch;

		return storeItem;
	});

	return {
		storeData,
		firestoreUpdates,
	};
};
