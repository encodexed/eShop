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

export const consolidateCartItems = (cart) => {
	return cart.reduce((total, cartItem) => {
		const itemCount = Object.values(cartItem.platform).reduce(
			(total, next) => total + next
		);
		return total + itemCount;
	}, 0);
};
