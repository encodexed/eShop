export const getAllItems = async () => {
	const response = await fetch("http://localhost:3000/stock/");
	if (!response.ok) throw new Error("Failed to fetch store stock");
	const data = await response.json();
	return data;
};

export const getFeaturedItems = async () => {
	const allItems = await getAllItems();
	return allItems.filter((item) => item.featured);
};

export const getItemById = async (id) => {
	const response = await fetch(`http://localhost:3000/stock/${id}`);
	if (!response.ok) throw new Error(`Failed to find stock with that ID`);
	const data = await response.json();
	return data;
};

export const checkStock = async (orderInfo) => {
	const { id } = orderInfo;
	const data = await getItemById(id);
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

	return "Added to Cart";
};
