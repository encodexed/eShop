import FeaturedItem from "../FeaturedItem/FeaturedItem";
import { useEffect, useState, useContext } from "react";
import { StoreDataContext } from "../contexts/StoreDataContextProvider/StoreDataContextProvider";
import { getFeaturedItems } from "../../services/data-services";

const FeaturedItems = () => {
	const [featuredItems, setFeaturedItems] = useState(null);
	const [currentFeaturedItem, setCurrentFeaturedItem] = useState(null);
	const [featuredItemIndex, setFeaturedItemIndex] = useState(null);
	const { storeData } = useContext(StoreDataContext);

	// Get featured items on mount
	useEffect(() => {
		if (!storeData) {
			return;
		}
		const images = [];
		const featuredItems = getFeaturedItems(storeData);
		setFeaturedItems(featuredItems);
		setCurrentFeaturedItem(featuredItems[0]);
		setFeaturedItemIndex(0);
		featuredItems.forEach((item) => images.push(item.imageLinks[0]));

		// Preload images (remember to turn on the cache when using the dev tools of your browser)
		const preLoadImages = async (imgLinks) => {
			for (const image of imgLinks) {
				const imageElement = new Image();
				imageElement.src = image;
			}
		};
		preLoadImages(images);
	}, [storeData]);

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
