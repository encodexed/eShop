export const getAllItems = async () => {
	const response = await fetch("http://localhost:3000/stock/");
	if (!response.ok) throw new Error("Failed to fetch store stock");
	const data = await response.json();
	return data;
};
