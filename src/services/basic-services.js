export const getQuality = (score) => {
	let quality = "";
	let cssClass = "";

	switch (true) {
		case score >= 95:
			quality = "Legendary";
			cssClass = "legendary";
			break;
		case score <= 94 && score >= 85:
			quality = "Epic";
			cssClass = "epic";
			break;
		case score <= 84 && score >= 70:
			quality = "Rare";
			cssClass = "rare";
			break;
		case score <= 69 && score >= 55:
			quality = "Uncommon";
			cssClass = "uncommon";
			break;
		case score <= 54 && score >= 45:
			quality = "Common";
			cssClass = "common";
			break;
		case score <= 44 && score >= 30:
			quality = "Low Quality";
			cssClass = "low";
			break;
		case score <= 29 && score >= 0:
			quality = "Junk";
			cssClass = "junk";
			break;
	}

	return {
		quality,
		cssClass,
	};
};

export const createSlug = (text) => {
	let newStr = text.replaceAll(" ", "_");
	newStr = newStr.replaceAll("'", "");
	newStr = newStr.replaceAll('"', "");
	return newStr;
};

export const getPlatforms = (stock) => {
	let { pc, xbox, playstation, nSwitch } = stock;
	let newStrArray = [];

	if (pc > -1) {
		newStrArray.push("PC");
	}
	if (xbox > -1) {
		newStrArray.push("Xbox");
	}
	if (playstation > -1) {
		newStrArray.push("Playstation");
	}
	if (nSwitch > -1) {
		newStrArray.push("Nintendo Switch");
	}

	return newStrArray.join(", ");
};

export const formatStockList = (stock) => {
	const stockReadOut = {};
	const stockArr = Object.entries(stock);
	stockArr.forEach((platform) => {
		if (platform[1] < 0) {
			stockReadOut[platform[0]] = `Not available on this platform`;
		} else if (platform[1] === 0) {
			stockReadOut[platform[0]] = `Sold Out! (${platform[1]} remaining)`;
		} else if (platform[1] > 0 && platform[1] <= 5) {
			stockReadOut[platform[0]] = `Low Stock (${platform[1]} remaining)`;
		} else {
			stockReadOut[platform[0]] = `Good Stock (${platform[1]} remaining)`;
		}
	});

	return stockReadOut;
};

export const formatPrice = (price) => {
	let formattedPrice = price.toString();
	if (!price || !parseInt(formattedPrice)) {
		formattedPrice = "Free";
	} else if (formattedPrice.charAt(formattedPrice.length - 2) === ".") {
		formattedPrice = "$" + formattedPrice + "0";
	} else {
		formattedPrice = "$" + formattedPrice;
	}

	return formattedPrice;
};

export const getCartItemCount = (cart) => {
	return cart.reduce((total, cartItem) => {
		const itemCount = Object.values(cartItem.platform).reduce(
			(total, next) => total + next
		);
		return total + itemCount;
	}, 0);
};

export const consolidateCart = (cart) => {
	const cartList = [];
	cart.map((item) => {
		const { id, price, discountFactor } = item;
		const existingItemIndex = cartList.findIndex(
			(cartItem) => cartItem.id === id
		);
		if (existingItemIndex >= 0) {
			const item1 = cartList[existingItemIndex];
			const item2 = item;

			const combinedItem = {
				id,
				price,
				discountFactor,
				platform: {
					pc: item1.platform.pc + item2.platform.pc,
					playstation: item1.platform.playstation + item2.platform.playstation,
					xbox: item1.platform.xbox + item2.platform.xbox,
					nSwitch: item1.platform.nSwitch + item2.platform.nSwitch,
				},
			};
			cartList.splice(existingItemIndex, 1, combinedItem);
		} else {
			cartList.push(item);
		}
	});

	return cartList;
};

export const getAvailablePlatforms = (stock) => {
	const availablePlatforms = Object.entries(stock);
	console.log(availablePlatforms);
	const platformDisplayNames = ["PC", "Xbox", "Playstation", "Switch"];
	return availablePlatforms
		.map((platform, index) => {
			if (platform[1] > 0) {
				return [platform[0], platformDisplayNames[index]];
			} else {
				return [];
			}
		})
		.filter((item) => item.length);
};

export const getCartTotalPrice = (cart) => {
	return cart.reduce((total, next) => {
		const items = Object.values(next.platform).reduce(
			(totalItems, nextItems) => {
				return totalItems + nextItems;
			}
		);
		return (
			total + parseFloat((items * next.discountFactor * next.price).toFixed(2))
		);
	}, 0);
};
