export const getAllProjects = async () => {
	const response = await fetch("https://localhost:3000/stock");
	if (!response.ok) throw new Error("Failed to fetch store stock");
	const data = await response.json();
	return data;
};

export const getProjectById = async (id) => {
	const response = await fetch(`http://localhost:3000/stock/${id}`);
	if (!response.ok) throw new Error(`Failed to find stock with id: ${id}`);
	const data = await response.json();
	return data;
};
