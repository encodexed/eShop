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
