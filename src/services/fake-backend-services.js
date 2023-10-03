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
	if (!response.ok) throw new Error(`Failed to find stock with id: ${id}`);
	const data = await response.json();
	return data;
};
