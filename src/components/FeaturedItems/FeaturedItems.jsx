import FeaturedItem from "../FeaturedItem/FeaturedItem";
import { useEffect, useState } from "react";
import { getFeaturedItems } from "../../services/fake-backend-services";

const FeaturedItems = () => {
	const [featuredItems, setFeaturedItems] = useState(null);
	const [currentFeaturedItem, setCurrentFeaturedItem] = useState(null);
	const [featuredItemIndex, setFeaturedItemIndex] = useState(null);

	// Get featured items on mount
	useEffect(() => {
		const images = [];
		const initialiseCarousel = async () => {
			try {
				const data = await getFeaturedItems();
				setFeaturedItems(data);
				setCurrentFeaturedItem(data[0]);
				setFeaturedItemIndex(0);
				data.forEach((item) => images.push(item.imageLinks[0]));
			} catch (e) {
				console.error(e.message);
			}
		};
		initialiseCarousel();

		// Preload images (remember to turn on the cache when using the dev tools of your browser)
		const preLoadImages = async (imgLinks) => {
			for (const image of imgLinks) {
				const imageElement = new Image();
				imageElement.src = image;
			}
		};
		preLoadImages(images);
	}, []);

	// Cycle through featured items automatically
	useEffect(() => {
		if (!featuredItems) {
			return;
		}

		setTimeout(() => {
			if (featuredItemIndex + 1 >= featuredItems.length) {
				setCurrentFeaturedItem(featuredItems[0]);
				setFeaturedItemIndex(0);
			} else {
				setCurrentFeaturedItem(featuredItems[featuredItemIndex + 1]);
				setFeaturedItemIndex(featuredItemIndex + 1);
			}
		}, 10000);

		return () => {
			clearTimeout();
		};
	}, [featuredItems, currentFeaturedItem, featuredItemIndex]);

	return <FeaturedItem data={currentFeaturedItem} />;
};

export default FeaturedItems;
